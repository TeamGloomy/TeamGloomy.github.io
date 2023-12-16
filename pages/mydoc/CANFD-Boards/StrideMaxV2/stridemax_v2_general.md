---
title: StrideMax V2 General Information
tags: []
keywords: 
last_updated: 16/12/2023
summary: "General information regarding the StrideMax V2 Toolboard"
sidebar: mydoc_sidebar
permalink: stridemax_v2_general.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

This page covers any general information for the StrideMax V2.  
It is currently available through [AliExpress]().  
This toolboard is only supported from firmware version 3.5 beta RC2 and above.  
The StrideMax V2 is compatible with both Duet 3 boards and STM32H723, STM32H743 and STM32F4 boards with spican modules running 3.5 beta 4 and above.  

### Hardware Overview

<div class="datatable-begin"></div>

| :------------- |:-------------|
| Processor | Raspberry Pi RP2040 |
| Processor Features | Dual ARM Cortex-M0+ @ 133MHz, 264kB on-chip SRAM |
| Networking/Comms | CAN-FD, CAN (for klipper), USB Serial Port |
| On-board stepper driver | 2 x [TMC-5160](https://www.analog.com/en/products/tmc5160.html) |
| Stepper driver features| Up to 6.6A peak current, microstep interpolation from any setting to x256, stall detection, stealthChop2 |
| Thermistor/PT1000 inputs | 3 x input, optimised for 100k thermistors, 2 x onboard NTC3950 |
| Medium current outputs | 2 x 4-pin fan outputs, voltage selectable between 12V and 5V. 1A max per output |
| Inputs/Outputs | 2 x on-board I/O connectors for endstop, switches, filament monitor, Z probe. |
| Neopixel Header | 1 x neopixel header for controlling RGB and RGBW neopixels |
| Power monitoring | VIN voltage reporting |

<div class="datatable-end"></div>

### Fan Voltage

The fan voltage can be set using jumpers to either 5v or 12v.  

{% include image.html file="fly_rrf_36_fan_voltage.png" alt="Fly-RRF-36 Fan Voltage Jumpers" caption="Fly-RRF-36 Fan Voltage Jumpers" %}  

### CAN Termination

If using a single toolboard, make sure the CAN jumper is installed, as indicated on the pinout.  
If using multiple toolboards, only the last toolboard should have a CAN jumper installed.

### Initial Firmware Installation

The board that you will receive doesn't have any firmware installed so when plugged into a computer, the board will show as an rpi drive.  
{% include important.html content="StrideMax V2 is only supported from release 3.5.0-RC2." %}
Download the file called `Duet3Firmware_stridemax.uf2` from [here](https://github.com/gloomyandy/RepRapFirmware/releases).  
To install the firmware, drag and drop the .uf2 file onto the rpi drive. Once uploaded, remove the toolboard from the computer.  
Follow the [CAN Connection instructions](stridemax_v2_can_connection.html) to continue.  

### Updating the Toolboard Firmware

Using DWC, upload the latest firmware file to the system tab. Once uploaded, send `M997 B124` and it will update (This assumes your board is the default CAN address 124, change the address in the command if necessary). The updating time (around a minute or two) is longer on RP2040 based boards so be patient.  
