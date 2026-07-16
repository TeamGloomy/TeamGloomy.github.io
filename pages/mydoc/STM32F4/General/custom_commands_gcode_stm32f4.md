---
title: Custom Commands and G-Code
tags: []
keywords: 
last_updated: 28/06/2023
summary: "Custom Commands and G-Code that have been added to this port"
permalink: custom_commands_gcode_stm32f4.html
folder: mydoc
comments: false
toc: false
---

There have been some additions made to [standard gcodes](https://docs.duet3d.com/en/User_manual/Reference/Gcodes) available.

## Additional GCodes

- M122 P200 - This gives an output of pin assignments for the configured board
- M308 - "thermocouple-max6675" has been added as an additional sensor type. This is only applicable to this LPC/STM32 port.
- M569.9 - For setting the sense resistor and maximum current of a driver not using the standard 0.075 Ohm for TMC5160s or 0.11 Ohm for TMC2209s. This is applicable to the STM32 port only.  s

## Additional Meta Information

Version 3.01 and upwards of RRF includes support for conditional gcode. It does this through [meta commands](https://docs.duet3d.com/en/User_manual/Reference/Gcode_meta_commands) and querying data stored in the [object model Stable](https://github.com/Duet3D/RepRapFirmware/wiki/Object-Model-Documentation#overview) or [Object Model Unstable](https://github.com/Duet3D/RepRapFirmware/wiki/Object-Model-Documentation-Beta-&-RC).
