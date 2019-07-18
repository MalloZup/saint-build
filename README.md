# saint-build

# Status:
0.0.1 Project under development.

The first API will be to monitor a list of jobs and their build status, and handle the new buildstatus event in different ways with handlers.

#Rationale:

Saint-build aims to event-driven for Jenkins API.

Given an event which will occur to your jenkins server/jobs, saint-build will provide some handlers to react to this event.

Providing a small, minimal api to interface to this events
Usage

    set up the saint-build.edn.example with your jenkins credentials.

Retrieve important infos about Jenkins Jobs and define a minimal API.


#Constraints

The project doesn't aim to support the full jenkins api.
License

Copyright © 2019 Dario Maiocchi
