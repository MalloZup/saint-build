(ns saint-build.core
  (:require [saint-build.config :as config]
            [clj-http.client :as client]
            [clojure.tools.logging :as log]
            [cheshire.core :refer :all]))


(def jenkins-url (get-in config/get-config [:config :jenkins-url]))
(def jobs (get-in config/get-config [:jobs :list]))

(defn get-api [endpoint]
  (let [jenkins-user (get-in config/get-config [:config :username])
        jenkins-pwd (get-in config/get-config [:config :password])]
  (parse-string (:body ( client/get endpoint {:basic-auth [jenkins-user jenkins-pwd]}))true)))

(defn get-job-info [job-name]
  "perform a http request, and return a map with significant data fro the build"
  (let [job-endpoint (str jenkins-url "/" "job/" job-name "/api/json" )
        data (get-api job-endpoint)]
    (log/info (str "executing http request for URL: " job-endpoint))
     (assoc {} :lastCompletedBuild (:lastCompletedBuild data)
               :healtReport     (:description (first (:healthReport data))
               :lastFailedBuild (:url (:lastFailedBuild data)) 
               :lastStableBuild (:url (:lastStableBuild data))
               ;; TODO checki if matrix
               ;; if it is a matrix, it has activeConfigurations ( we are interested also to this)
               ))))


(defn new-job-completed? []
  (println "not yet"))

;; TODO: check if build has finished. For that check the lastCompletedBuild parameter
;; if this change we can retrive other data. 


;; send msg with missile
(defn send-msg-to-rocketchat [job-data]
  (println job-data))


(defn -main []
  (doseq [job jobs]
    ;; check if data has changed  wiht lastCompletedBuild
    ;; todo save in atom the current-job, pro job check if it has change, if yes send mesg
    (when new-job-completed?
     
    (let [job-info  (get-job-info job)]
      
      (send-msg-to-rocketchat job-info))))
  
  (println "sleeping 5 min")
  )
