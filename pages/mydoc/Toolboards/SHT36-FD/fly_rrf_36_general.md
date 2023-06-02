---
title: Fly-RRF-36 General Information
tags: []
keywords: 
last_updated: 02/06/2023
summary: "General information regarding the Fly-RRF-36 Toolboard"
sidebar: mydoc_sidebar
permalink: fly_rrf_36_general.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

This page covers any general information for the Fly-RRF-36 toolboard.  
It is currently available through [AliExpress]().  
This toolboard is only supported from firmware version 3.5 beta 4 and above.  
The Fly-RRF-36 is the first RP2040 based toolboard compatible with both Duet 3 boards and STM32H723, STM32H743 and STM32F4 boards with spican modules.  

### Hardware Overview

<div class="datatable-begin"></div>

| :------------- |:-------------|
| Processor | Raspberry Pi RP2040 |
| Processor Features | Dual ARM Cortex-M0+ @ 133MHz, 264kB on-chip SRAM |
| Networking/Comms | CAN-FD, USB Serial Port |
| On-board stepper driver | 1 x [TMC-2209](https://www.trinamic.com/products/integrated-circuits/details/tmc2209-la/) |
| Stepper driver features| Up to 1.6A peak current, microstep interpolation from any setting to x256, stall detection, stealthChop2 |
| High current outputs | 1 x 10A, VIN voltage only |
| Thermistor/PT1000 inputs | 1 x input, optimised for 100k thermistors and PT1000 sensors, 1 x onboard NTC3950 |
| PT100 | Can be purchased with a PT100 onboard with support for 2-wire, 3-wire and 4-wire PT100 temperature sensors |
| Medium current outputs | 2 x 2-pin fan outputs, voltage selectable between VIN, 12V and 5V. 1A max per output |
| Inputs/Outputs | 3 x on-board I/O connectors for endstop, switches, filament monitor, Z probe. 1 x servo output. |
| Accelerometer | Integrated LIS3DH accelerometer |
| Power monitoring | VIN voltage reporting |

<div class="datatable-end"></div>

### Fan Mosfets

The Fly-RRF-36 has a unique feature in that the fan mosfet is replaceable.
Each mosfet (VS3622e) controls two of the fan outputs.
The orientation that the fan mostfet is plugged into the board doesn't matter.

{% include image.html file="fly_rrf_36_fan_mosfet.png" alt="Fly-RRF-36 Fan Mosfet" caption="Fly-RRF-36 Fan Mosfet" %}

### Fan Voltage

The fan voltage can be set using jumpers to either 5v, 12v and Vin.  
See the pinout for the correct position.  

### io1.in Diode

If using io1.in with 3.3v (i.e. just a simple endstop), installed a jumper on the diode BP indicated on the pinout, otherwise don't install one.  

### CAN Termination

If using a single toolboard, make sure the CAN jumper is installed, as indicated on the pinout.  
If using multiple toolboards, only the last toolboard should have a CAN jumper installed.  

### Initial Firmware Installation

The board that you will receive doesn't have any firmware installed so when plugged into a computer, the board will show as an rpi drive. To install the firmware, drag and drop the .uf2 file onto the rpi drive. Once uploaded, remove the toolboard from the computer.  
Follow the [CAN Connection instructions](fly_rrf_36_can_connection.html) to continue.  