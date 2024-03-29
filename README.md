![logo](doc/logo.png)

___

- [Quickstart](#quickstart)
- [specification](doc/specification.md)
- [features](#features)
- [architecture](#architecture)
- [who is using saint-build](#who-is-using-saint-build)

# Rationale:

Monitor jenkins events in async, functional, pragmatic way.
Sait-build send new events **only** when useful, with a smart cache mechanism.
The events handler sent notifications to medium of choices.
On a short-term the roadmap contains notifications, but other types of action can be implemented.

# Quickstart:

0) Edit the main configuration: [saintb-config.edn.example](saintb-config.edn.example)

See [specification](doc/specification.md) for more details.

1) Startup the daemon:

`java -jar saint-build-VERSION-standalone.jar`

* The configuration file should be on the same dir PWD as the daemon;
  the ENV variable `CONFIG_FILE_PATH` setup  config file from other locations.

# Features:

-  Monitor the build status of a given list of jobs, and send them via a medium or multiples of choice
-  Configure daemon (timeout)

# Architecture:

saint-build is composable and driven by the API.edn file.
It uses atoms for storing the states, and it build a cache for don't sending same event, but it trigger only new events when needed.
It is composable by design.

# Who is using saint-build

We are using saint-build at [SUSE](https://github.com/SUSE) 

# Constraints

- The project doesn't aim to support the full jenkins api.

- For moment all jobs events will sent to only 1 channel (rocketchat api). You will need to create 2 or more daemons with diff configuration pro team. ( this is also more isolated)

___
Copyright © 2019 Dario Maiocchi
