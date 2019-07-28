(ns saint-build.http
  (:require [saint-build.config :as config]
            [clojure.tools.logging :as log]
            [aleph.http :as ahttp]
            [manifold.deferred :as d]
            [manifold.stream :as s]
            [cheshire.core :refer :all]))


(defn handler [req]
  {:status 200
   :headers {"content-type" "text/plain"}
   :body "hello!"})

(def non-websocket-request
  {:status 400
   :headers {"content-type" "application/text"}
   :body "Expected a websocket request."})

(defn start-server []
(ahttp/start-server handler {:port 9230}))



(defn echo-handler
  "async"
  [req]
  (-> (ahttp/websocket-connection req)
    (d/chain
      (fn [socket]
        (s/connect socket socket)))
    (d/catch
      (fn [_]
        non-websocket-request))))
