(ns saint-build.core
  (:require [saint-build.config :as config]
            [clj-http.client :as client]
            [clojure.tools.logging :as log]
            [saint-build.notifications :as notifications]
            [cheshire.core :refer :all]))


(def jenkins-url (get-in (config/get-config) [:config :jenkins-url]))
(def jobs (get-in (config/get-config) [:jobs :list]))

(defn get-api [endpoint]
  (let [jenkins-user (get-in (config/get-config) [:config :username])
        jenkins-pwd (get-in (config/get-config) [:config :password])]
  (parse-string (:body ( client/get endpoint {:basic-auth [jenkins-user jenkins-pwd]}))true)))

(defn get-job-info [job-name]
  "perform a http request, and return a map with all json data fro the build"
  (let [job-endpoint (str jenkins-url "/" "job/" job-name "/api/json" )]
        (log/info (str "executing http request for URL: " job-endpoint))
        (try 
            (get-api job-endpoint)
            (catch Exception ex  (log/error (str "http caught exception during jenkins job http request: " (.getMessage ex)  " jenkins-job-endpoint: "job-endpoint )) 
                                {:error true} ))))

(defn filter-build-infos [data]  
  (if (:error data) (log/error "data was corrupted skipping")
  ;; if data ok select it
  (assoc {} :lastCompletedBuild (:url (:lastCompletedBuild data))
       :healtReport     (:description (first (:healthReport data)))
       :lastFailedBuild (:url (:lastFailedBuild data)) 
       :lastStableBuild (:url (:lastStableBuild data)))))

;; this atom will conserve if there is a new build, for each job
(def build-cache (atom {}))

(defn new-job-completed? [data]
  "data is a single job data"
  ;; check if latest completed build for the single job is already in cache
  (if (contains? @build-cache (:url (:lastCompletedBuild data)) )
    (log/info (str "lastCompleted build already present, skipping" (:url (:lastCompetedBuild data))))

    ;; if not in cache,store it in build-cache and return true for triggering notifications
    ;; use url as uid, {:uid :buildnumber} 
    ((swap! build-cache merge { (:url (:lastCompletedBuild data)) (:number (:lastCompletedBuild data))})  
     (log/debug @build-cache) 
      true)))


(defn send-msg-to-chat-medium [job-data]
"read-configuration for select the notification chat medium rocketchat/slack etc, etc.
 send data to the dispatched medium"  
  (notifications/init-medium)
  (notifications/send-chat-msg job-data))


(defn build-status-notification [job-name]
  "given a full url, retrieve json data, and filter it with interesting data for humans, send this data via chat-medium"
  ;; do pipeline only when a new build is there
  (when (new-job-completed? (get-job-info job-name))   
    (-> (get-job-info job-name)
        (filter-build-infos) 
        (send-msg-to-chat-medium))))
  

(defn -main []
"main function is a daemon which from config file will execute async API action, dispatching notifications"
  (let [buildstatus-enabled? (get-in (config/get-config) [:jobs :actions :buildstatus])
        DEFAULT_TIMEOUT_SLEEP 5
        sleep-timeout (or (get-in (config/get-config) [:daemon-config :sleep-timeout]) DEFAULT_TIMEOUT_SLEEP)]
    (while true
      (log/info (str "checking for new events ..."))
      (doseq [job jobs]
      ;; exec this only when  :actions :jobs { :actions {:buildstatus true
        (when buildstatus-enabled? 
             (log/info "buildstatus API action enabled, executing buildstatus async")
            ;; deref here only fre debug modus
            (deref (future (build-status-notification job)))))

    ;; do daemon things
  (log/info (str "sleeping for " sleep-timeout " minutes"))
  (Thread/sleep (* sleep-timeout 60 1000)))))
