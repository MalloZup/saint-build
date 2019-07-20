(defproject saint-build "0.1.0"
  :description "saint-build monitor you jenkins with async and elegance"
  :url "https://github.com/MalloZup/saint-build"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [clj-http "3.10.0"]
                 [org.clojure/tools.logging "0.4.1"]
                 [cheshire "5.8.1"]
                 [missile "0.1.1"]]
  :repl-options {:init-ns saint-build.core})
