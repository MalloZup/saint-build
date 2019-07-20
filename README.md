![logo](doc/logo.png)

___

# Quickstart:

0) setup config

setup a config like the example;

[saintb-config.edn.example](saintb-config.edn.example)

Insert the Jenkins credential and the Jobs name you want to monitor in Jenkins

Select also the medium of your choice to send the notification. You can also use a custom Prefix message


# Features:

-  Monitor the build status of a given list of jobs, and send them via a medium of choice (rocketchat, etc)


# Rationale:

Saint-build aims to event-driven for Jenkins API.

Given an event which will occur to your jenkins server/jobs, saint-build will provide some handlers to react to this event.

Providing a small, minimal api to interface to this events
Usage

    set up the saint-build.edn.example with your jenkins credentials.

Retrieve important infos about Jenkins Jobs and define a minimal API.


# Constraints

The project doesn't aim to support the full jenkins api.



Copyright © 2019 Dario Maiocchi
