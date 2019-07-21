(ns saint-build.notifications
  (:require [saint-build.config :as config]
            [missile.channels :as rocket-chan]
            [missile.chat :as rocket-chat]
            [clojure.tools.logging :as log]
            [missile.config :as rocket-conf]))


(defn set-rocketchat []
  "setup rocketchat client from config.edn file" 
  (let [rocketchat-conf (get-in (config/get-config) [:notifications :rocketchat])]
    (when rocketchat-conf
       (log/info "setting up rocketchat notifications")
       (rocket-conf/set-config-from-input rocketchat-conf)
   )))


(defn init-medium []
"this function is called by main, we setup communications channels by configuration"  (set-rocketchat))

(defn send-rocketchat-msg [ch-name data rocketchat-conf]
   (log/info "sending notifications via rocketchat")
    (try 
       (rocket-chat/sendMessage (rocket-chan/get-channel-id ch-name) 
                                (str (:msg-prefix rocketchat-conf ) data) )
     (catch java.net.MalformedURLException ex (log/error (str "could not send data to rocketchat channel. Probably the configuration of the rocketchatserver is wrong: " (.getMessage ex))))))

 ;; todo: this can be abstracted more later, with a multimethod
(defn send-chat-msg [data]
  (let [rocketchat-conf (get-in (config/get-config) [:notifications :rocketchat])]
    (when rocketchat-conf 
        (doseq [ch-name (:channel-names rocketchat-conf)]
          (future (send-rocketchat-msg ch-name data rocketchat-conf))))))
 
  
