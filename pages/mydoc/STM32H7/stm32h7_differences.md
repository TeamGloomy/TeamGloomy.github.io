---
title: STM32H7 Firmware Restrictions
tags: []
keywords: 
last_updated: 30/01/2024
summary: "Restrictions in the STM32H7 firmware compared to RepRapFirmware available on Duet3D hardware"
sidebar: mydoc_sidebar
permalink: stm32h7_differences.html
folder: mydoc
comments: false
toc: false
---

## Differences to [Duet3D's RepRapFirmware](https://github.com/Duet3D/RepRapFirmware)

* Configuration:
  * See [Driver Timings](driver_timings.html) for information about setting the correct timings.
  * See [Custom Commands and Gcode](custom.html) for information about additional gcode and unsupported gcode.  
* To support the number of different boards, a /sys/board.txt config file is required. More information can be found [here](board_txt_stm32.html).  
* Only supports an IP address for the board up to 192.168.1.56 in access point mode.
* The MCU temperature reading cannot be adjusted see [here](https://discord.com/channels/711873626080804914/746105511421804644/922959711752581140)
