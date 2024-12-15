---
title: PITB V2.0 General Information
tags: []
keywords: 
last_updated: 15/12/2024
summary: "General information regarding the PITB V2.0 Toolboard"
sidebar: mydoc_sidebar
permalink: pitb_v2_general.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

This page covers any general information for the PITB V2.0.  
It is currently available through [AliExpress](https://s.click.aliexpress.com/e/_oD2q00j).  
This toolboard is only supported from firmware version 3.5.1 and above.  
The PITB V2.0 is compatible with all Duet 3 boards and STM32H723, STM32H743 and STM32F4 boards with spican modules running 3.5.1 and above.  

### Hardware Overview

<div class="datatable-begin"></div>

| :------------- |:-------------|
| Processor | Raspberry Pi RP2040 |
| Processor Features | Dual ARM Cortex-M0+ @ 133MHz, 264kB on-chip SRAM |
| Networking/Comms | CAN-FD, CAN (for klipper), USB Serial Port |
| On-board stepper driver | 2 x [TMC-5160](https://www.analog.com/en/products/tmc5160.html) |
| Stepper driver features| Up to 6.6A peak current, microstep interpolation from any setting to x256, stall detection, stealthChop2 |
| Thermistor/PT1000 inputs | 3 x input, optimised for 100k thermistors |
| Medium current outputs | 2 x 2-pin fan outputs, voltage selectable between 24V and 5V. 1A max per output |
| Inputs/Outputs | 2 x on-board I/O connectors for endstop, switches, filament monitor, Z probe. |
| Neopixel Header | 1 x neopixel header for controlling RGB and RGBW neopixels |
| Power monitoring | VIN voltage reporting |

<div class="datatable-end"></div>

### Fan Voltage

The fan voltage can be set using jumpers to either 5v or 24v. See the [Fan instructions](pitb_v2_fans.html) for more information.

### CAN Termination

The CAN termination can't be removed from the PITB V2.0.

### Initial Firmware Installation

The board that you will receive doesn't have any firmware installed so when plugged into a computer, the board will show as an rpi drive.  
{% include important.html content="PITB V2.0 is only supported from release 3.5.1." %}
Download the file called `Duet3Firmware_PITBV2_0.uf2` from [here]({{site.latestStableFirmware}}/expansion).  
To install the firmware, whilst holding the BOOTSEL button, plug the StrideMax Dual V2.0 into your PC and drag and drop the .uf2 file onto the rpi drive that appears. Once uploaded, remove the toolboard from the computer.  
Follow the [CAN Connection instructions](pitb_v2_can_connection.html) to continue.  

### Updating the Toolboard Firmware

Using DWC, upload the latest firmware file to the system tab. Once uploaded, send `M997 B124` and it will update (This assumes your board is the default CAN address 124, change the address in the command if necessary). The updating time (around a minute or two) is longer on RP2040 based boards so be patient.  
