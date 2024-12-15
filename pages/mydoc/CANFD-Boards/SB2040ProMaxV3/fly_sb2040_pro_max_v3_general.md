---
title: Fly-SB2040 Pro Max V3 General Information
tags: []
keywords: 
last_updated: 15/04/2024
summary: "General information regarding the Fly-SB2040 Pro Max V3 Toolboard"
sidebar: mydoc_sidebar
permalink: fly_sb2040_pro_max_v3_general.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

This page covers any general information for the Fly-SB2040 Pro Max V3 toolboard.  
It is currently available through [AliExpress](https://s.click.aliexpress.com/e/_DDaPNzR).  
This toolboard is only supported from firmware version 3.5.0-RC4 and above.  
The Fly-SB2040 Pro Max V3 is the second RP2040 based toolboard compatible with both Duet 3 boards and STM32H723, STM32H743 and STM32F4 boards with spican modules.  

There are 6 versions of the Fly-SB2040-v3. Only the Max and Pro Max support RRF.  

{% include image.html file="fly_sb2040_v3_versions.png" alt="Fly-SB2040 V3 Versions" caption="Fly-SB2040 V3 Versions" %}

### Fly-SB2040 Pro Max V3 Hardware Overview

<div class="datatable-begin"></div>

| :------------- |:-------------|
| Processor | Raspberry Pi RP2040 |
| Processor Features | Dual ARM Cortex-M0+ @ 133MHz, 264kB on-chip SRAM |
| Networking/Comms | CAN-FD, USB Serial Port |
| On-board stepper driver | 1 x [TMC-2240](https://www.analog.com/en/products/tmc2240.html) |
| Stepper driver features| Up to 1.6A peak current, microstep interpolation from any setting to x256, stall detection, stealthChop2 |
| High current outputs | 1 x 10A, VIN voltage only |
| Thermistor inputs | 1 x input, optimised for 100k thermistors and PT1000, 1 x onboard NTC3950 on the scanning probe PCB |
| PT100/PT1000 | Onboard with support for 2-wire, 3-wire and 4-wire PT100/PT1000 temperature sensors |
| Medium current outputs | 1 x 2-pin fan outputs, 2 x 3-pin fan outputs, voltage selectable between VIN and 5V. 1A max per output |
| Inputs/Outputs | 3 x on-board I/O connectors for endstop, switches, filament monitor. |
| Scanning Probe | LDC1612 with scanning probe support |
| Accelerometer | Integrated LIS2DW accelerometer |

<div class="datatable-end"></div>

### Fan Voltage

The fan voltage can be set using jumpers and/or switches to either 5v and Vin.  

### io2.in Diode

If using io2.in with a simple switch, turn switch 2 to ON (up) on the 8 DIP switches. Make sure switch 2 is OFF (down) if using any electronic probes such as an inductive or optical sensor.  

### CAN Termination

If using a single toolboard, make sure switch 1 on the 8 DIP switches is ON (up), as indicated on the pinout.  
If using multiple toolboards, only the last toolboard should have CAN termination enabled.

### PT1000 Support

The hotend temperature sensor input support PT1000. When using one, make sure the PT1000 jumper is installed. Make sure it is removed when using a standard thermistor.  

Also make sure you define the resistor value as R1000 in your M308 command.

You can also use the MAX31865 to connect a PT1000.  

### Initial Firmware Installation

The board that you will receive does come with firmware installed. It is suggested that you reflash the latest firmware anyway as the board you receive may have an older version of the firmware installed.  
{% include important.html content="The Fly-SB2040 Pro Max V3 is only supported from release 3.5.0-RC4." %}
Download the file called `Duet3Firmware_SB2040PROMAX3.uf2` from [here]({{site.latestStableFirmware}}/expansion).  
To install the firmware, whilst holding the reset button, plug the Fly-SB2040 Pro Max V3 into your PC and drag and drop the .uf2 file onto the rpi drive that appears.
Follow the [CAN Connection instructions](fly_sb2040_pro_max_v3_can_connection.html) to continue.  

### Updating the Toolboard Firmware from 3.5.0-RC4 Onwards

Using DWC, upload the latest firmware file to the system tab. Once uploaded, send `M997 B124` and it will update (This assumes your board is the default CAN address 124, change the address in the command if necessary). The updating time (around a minute or two) is longer on RP2040 based toolboards so be patient.  
