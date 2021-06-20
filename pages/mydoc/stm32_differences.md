---
title: STM32 Firmware Restrictions
tags: []
keywords: 
last_updated: 20/06/2021
summary: "Restrictions in the STM32 firmware compared to RepRapFirmware available on Duet3D hardware"
sidebar: mydoc_sidebar
permalink: stm32_differences.html
folder: mydoc
comments: false
toc: false
---

## Differences to [Duet3D's RepRapFirmware](https://github.com/Duet3D/RepRapFirmware)

* No support for 12864 Displays. **Support has been added as part of release 3.2_4.**  
* Configuration:
  * See [Driver Timings](driver_timings.html) for information about setting the correct timings.
  * See [Custom Commands and Gcode](custom.html) for information about additional gcode and unsupported gcode. 
* To support the number of different boards, a /sys/board.txt config file is required. More information can be found [here](board_txt.html).
* M150 does not support X0 or X1. If being used with neopixels, X2 should be used.  
* Only supports an IP address for the board up to 192.168.1.56 in access point mode