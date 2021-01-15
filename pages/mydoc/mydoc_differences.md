---
title: Differents to Duet3D's Version
tags: []
keywords: 
last_updated: 15/01/2021
summary: "Differences to RepRapFirmware available on Duet3D hardware"
sidebar: mydoc_sidebar
permalink: mydoc_differences.html
folder: mydoc
comments: false
toc: false
---

# Differences to [Duet3D's RepRapFirmware](https://github.com/Duet3D/RepRapFirmware) - Applicable to the LPC Build only

The CPUs targeted in this port only have 64K RAM which is less than those that run dc42s RepRapFirmware. Further, there is also some differences between the CPUs, and the following outlines the main differences in this port:  
* A maximum of 4 files can be open at a time.
* Reduced write buffers for SDCard to save memory.
* External interrupts (i.e., fan rpm etc) are limited to 3.
* Reduced number of networking buffers and reduced MTU to save memory.
* Only 2 HTTP Sockets and Responders. Only 1 HTTP session at a time.
* Disabled Ftp and Telnet interfaces
* Configuration:
  * See [Driver Timings](https://github.com/gloomyandy/RepRapFirmware/wiki/driver-timings) for information about setting the correct timings.
  * See [Custom Commands and Gcode](https://github.com/gloomyandy/RepRapFirmware/wiki/Custom-Commands-and-GCode) for information about additional gcode and unsupported gcode.  
  * Auto-calibration restrictions to save memory:
    * Maximum number of probe points of 121; and
    * Delta maximum calibration points of 16
  * To support the number of different boards, a /sys/board.txt config file. More information can be found here.