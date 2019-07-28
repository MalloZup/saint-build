(defproject saint-build "0.1.2"
  :description "saint-build monitor you jenkins with async and elegance"
  :url "https://github.com/MalloZup/saint-build"
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [clj-http "3.10.0"]
                 [org.clojure/tools.logging "0.4.1"]
                 [aleph "0.4.6"]
                 [manifold "0.1.8"]
                 [cheshire "5.8.1"]
                 [missile "0.1.1"]]
  :main saint-build.core
  :repl-options {:init-ns saint-build.core})
