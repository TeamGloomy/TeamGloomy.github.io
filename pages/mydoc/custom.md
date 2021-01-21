---
title: Custom Commands and G-Code
tags: []
keywords: 
last_updated: 15/01/2021
summary: "Custom Commands and G-Code"
sidebar: mydoc_sidebar
permalink: custom.html
folder: mydoc
comments: false
toc: false
---

There has been some additions made to [standard gcodes](https://duet3d.dozuki.com/Wiki/Gcode) available.

## Additional GCodes
M122 P200 - This gives an output of pin assignments for the configured board

## Unsupported GCodes

M350 - For many of the drivers used on the supported board, the microstepping is controlled by hardware (e.g. by installing certain jumpers). The only boards that currently support this are the SKR v1.3, SKR v1.4, SKR E3 Turbo, SKR GTR, SKR Pro, fly-CDY and MKS SGen L v1 and v2 fitted with TMC22XX, with the drivers being controlled by UART.

M915 - Stall detection is now supported on the SKR v1.3, SKR v1.4, SKR E3 Turbo, SKR GTR, SKR Pro, fly-CDY and MKS SGen L v1 and v2 when using TMC2209 drivers

## Additional Meta Information
Version 3.01 and upwards of RRF includes support for conditional gcode. It does this through [meta commands](https://duet3d.dozuki.com/Wiki/GCode_Meta_Commands) and querying data stored in the [object model](https://duet3d.dozuki.com/Wiki/Object_Model_of_RepRapFirmware).