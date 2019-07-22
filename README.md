![logo](doc/logo.png)

___

- [Quickstart](#quickstart)
- [specification](#specification)
- [features](#features)
- [architecture](#architecture)

# Rationale:

Monitor jenkins events in async, functional, pragmatic way.
By design, saint-build send new events **only** when needed, comparing them with old events stored in cache. 
The cache is builded with lightweight in memory clojure atoms.
The events handler sent notifications to medium of choices.
On a short-term the roadmap contains notifications, but other types of action can be implemented.

# Quickstart:

0) Edit the main configuration: 

[saintb-config.edn.example](saintb-config.edn.example)

The config example is well documented with all the informations.
For more details look at specifications, below.


1) Startup the daemon:

The configuration file should be on the same dir PWD as the daemon;

alternatively, you can set up the ENV variable `CONFIG_FILE_PATH` for config file in other locations.

Start with

`java -jar saint-build-VERSION-standalone.jar`

___
# specification:

Below some minimal description of `saintb-config.edn` file

1) Add the Jenkins credentials

```
;; JENKINS configuration
{
  :config {
   :username "my-jenkins-user" 
   :password "my-jenkins-pwd"
   :jenkins-url "https://my-jenkins-server.com/"
 }
```
___

2)  Select the jobs you want to monitor/perform actions:

Add your jobs in the `list` parameter

```
  :jobs {
     :list ["magic-job1", "my-good-job2"]
     :actions {
                 :buildstatus true
              }
    }
```

* actions:

Currently we support only `buildstatus` set to true

`buildstatus` true, will select for each job in the list the latestBuild failed, latest build OK, and other usefull informations;

It returns a map like this

```
{:lastCompletedBuild "https://jenkins.com/job/my-job-magic/175/", :healthReport "Build stability: All recent builds failed.", :lastFailedBuild "https://ci.jenkins.com/job/my-job-magic/175/", :lastStableBuild "https://ci.jenkins.com/job/my-job-magic/152/"}
```

This map/data will then sent via notificationschannel
___
3) Notifications medium

If you add multiples medium in the notifications, the data will sent too all this channels.

We support currently only rocketchat, but other medium can be added easy.

```
 :notifications {
   ;; ** SUPPORTED **
   ;; one can specify a list of mediums where the same message will send
   ;; configuration for rocketchat
   :rocketchat {
                  :username "myuser"
                  :server-url "https://my-rocketchat-server.com"
                  :token "my-magic-token"
                  ;; it must be a public channel. A list of public rocketchat channels
                  :channel-names ["clojure"]
                  ;; this is a message prefix before the data, customize it as you wish
                  :msg-prefix ":doge: :doge: :doge:" ;; some emoticons
               }

   ;; **  NOT SUPPORTED, yet **
   ;;
   ;; some possible candidates..
   ;; :slack {:configuration  bla bla}
   ;; :mail {:configuration}
  }

```


#### Optional specifications:

You can modify the daemon configuration.

Currenltly you can increase the timeout for sleeping of daemon. In this way , the daemon doesn't consume API calls for X minutes 

```
;; daemon config
daemon-config {
      :sleep-timeout 30 ;; minutes
      ;; customize polling timeout in minutes. the daemon will look for new events on server, sleeping 5 min by default.
      ;; if you add more minutes, normally is when you want to save RATE-LIMITING. Having 30  or 60 minutes should be considered if you WEB you consume as high rate-limiting
      ;; polling some webservice has some constraints with rate-limiting (depending on resources).
}
```

# Features:

-  Monitor the build status of a given list of jobs, and send them via a medium or multiples of choice
-  Configure daemon (timeout)

# Architecture:

saint-build is composable and driven by the API.edn file.
It uses atoms for storing the states, and it build a cache for don't sending same event, but it trigger only new events when needed.
It is composable by design.

# Constraints

- The project doesn't aim to support the full jenkins api.

- For moment all jobs events will sent to only 1 channel (rocketchat api). You will need to create 2 or more daemons with diff configuration pro team. ( this is also more isolated)

___
Copyright © 2019 Dario Maiocchi
