---
title: Custom Commands and G-Code
tags: []
keywords: 
last_updated: 25/01/2021
summary: "Custom Commands and G-Code"
sidebar: mydoc_sidebar
permalink: custom.html
folder: mydoc
comments: false
toc: false
---

There has been some additions made to [standard gcodes](https://duet3d.dozuki.com/Wiki/Gcode) available.

## Additional GCodes
- M122 P200 - This gives an output of pin assignments for the configured board
- M150 - X2 has been added for the Neopixels. It should be used instead of X1. It is only applicable to this LPC/STM32.
- M308 - "thermocouple-max6675" has been added as an additional sensor type. This is only applicable to this LPC/STM32 port.

## Unsupported GCodes

M350 - For many of the drivers used on the supported board, the microstepping is controlled by hardware (e.g. by installing certain jumpers). The only boards that currently support this are the SKR v1.3, SKR v1.4, SKR E3 Turbo, SKR GTR, SKR Pro, fly-CDY and MKS SGen L v1 and v2 fitted with TMC22XX, with the drivers being controlled by UART.

M915 - Stall detection is now supported on the SKR v1.3, SKR v1.4, SKR E3 Turbo, SKR GTR, SKR Pro, fly-CDY and MKS SGen L v1 and v2 when using TMC2209 drivers

thermocouple-max6675 has been added as a thermistor input type for M308. e.g. 
```M308 S0 P"C7" Y"thermocouple-max6675"```

## Additional Meta Information
Version 3.01 and upwards of RRF includes support for conditional gcode. It does this through [meta commands](https://duet3d.dozuki.com/Wiki/GCode_Meta_Commands) and querying data stored in the [object model](https://duet3d.dozuki.com/Wiki/Object_Model_of_RepRapFirmware).