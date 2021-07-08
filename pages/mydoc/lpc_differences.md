---
title: LPC Firmware Restrictions
tags: []
keywords: 
last_updated: 08/07/2021
summary: "Restrictions in the LPC firmware compared to RepRapFirmware available on Duet3D hardware"
sidebar: mydoc_sidebar
permalink: lpc_differences.html
folder: mydoc
comments: false
toc: false
---

## Differences to [Duet3D's RepRapFirmware](https://github.com/Duet3D/RepRapFirmware)

The CPUs targeted in this port only have 64K RAM which is less than those that run dc42s RepRapFirmware. Further, there is also some differences between the CPUs, and the following outlines the main differences in this port:  
* A maximum of 4 files can be open at a time. This has been increased to 6 in 3.2_4.
* The maximum gcode line length is 100 characters. This has been increased to 256 in 3.2_4
* Reduced write buffers for SDCard to save memory.
* External interrupts (i.e., fan rpm etc) are limited to 3.
* Reduced number of networking buffers and reduced MTU to save memory.
* Only 2 HTTP Sockets and Responders. Only 1 HTTP session at a time.
* Disabled Ftp and Telnet interfaces
* No support for 12864 Displays
* Configuration:
  * See [Driver Timings](driver_timings.html) for information about setting the correct timings.
  * See [Custom Commands and Gcode](custom.html) for information about additional gcode and unsupported gcode.  
* Auto-calibration restrictions to save memory:
  * Maximum number of probe points of 121; and
  * Delta maximum calibration points of 16
* To support the number of different boards, a /sys/board.txt config file is required. More information can be found [here](board_txt.html).
* M150 does not support X0 or X1. If being used with neopixels, X2 should be used. 
* There is no support for "mcu-temp" as a sensor type in M308 as the LPC1768/69 MCU does not have a built in temperature sensor.
* TMC5160 drivers will not get supported on LPC based boards
* Only supports an IP address for the board up to 192.168.1.56 in access point mode.
* Only one Z probe is supported.