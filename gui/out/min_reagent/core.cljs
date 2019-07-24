(ns saint-build.core)

(ns min-reagent.core
  (:require
    [reagent.core :as r]))

(defn my-app []
  [:div
    [:h1 "Welcome to saint-build"]
    [:p "Event notifications for jenkins"]])

(r/render
  [my-app]
(js/document.getElementById "appdiv"))
