
(ns ^:figwheel-hooks myapp.core
  (:require [reagent.core :as r]))

(defn lister [items]
  [:ul
   (for [item items]
     ^{:key item} [:li "Item " item])])

(defn lister-user []
  [:div
  [:span {:style {:color "blue" :font-size "50px"}} 
         "Welcome to saint-build"]

   ;; manage state via websocket
   [lister (range 5)]])

(defn ^:after-load reload []
  (r/render [lister-user]
            (.getElementById js/document "app")))


(defn init! []
  (reload))


(init!)
