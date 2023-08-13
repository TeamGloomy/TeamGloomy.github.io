---
title: STM32F4 Firmware Restrictions
tags: []
keywords: 
last_updated: 18/05/2022
summary: "Restrictions in the STM32F4 firmware compared to RepRapFirmware available on Duet3D hardware"
sidebar: mydoc_sidebar
permalink: stm32_differences.html
folder: mydoc
comments: false
toc: false
---

## Differences to [Duet3D's RepRapFirmware](https://github.com/Duet3D/RepRapFirmware)

* Configuration:
  * See [Driver Timings](driver_timings.html) for information about setting the correct timings.
  * See [Custom Commands and Gcode](custom_commands_gcode.html) for information about additional gcode and unsupported gcode.  
* To support the number of different boards, a /sys/board.txt config file is required. More information can be found [here](board_txt.html).
* M150 does not support X0 or X1. If being used with neopixels, X2 should be used. **This restriction has been lifted from 3.4.1-RC1**  
* Only supports an IP address for the board up to 192.168.1.56 in access point mode.
* Only two Z probe's are supported. **This restriction has been lifted from 3.4.1-RC1**
* The MCU temperature reading cannot be adjusted see [here](https://discord.com/channels/711873626080804914/746105511421804644/922959711752581140)
