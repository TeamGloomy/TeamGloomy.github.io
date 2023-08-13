---
title: Fly-OpenPNP General Information
tags: []
keywords: 
last_updated: 13/06/2023
summary: "General information regarding the Fly-OpenPNP Toolboard"
sidebar: mydoc_sidebar
permalink: fly_openpnp_general.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

This page covers any general information for the Fly-OpenPNP toolboard.  
It is currently available through [AliExpress]().  
This toolboard is supported from firmware version 3.4.5.  
The Fly-OpenPNP Toolboard is an STM32H723 based toolboard compatible with both Duet 3 boards and STM32H723, STM32H743 and STM32F4 boards with spican modules and is aimed for use by pick and place machines running [OpenPNP](https://openpnp.org/).  

### Hardware Overview

<div class="datatable-begin"></div>

| :------------- |:-------------|
| Processor | STM32H723VIT6 |
| Processor Features | 550 MHz, 1MB Flash |
| Networking/Comms | CAN-FD, USB Serial Port |
| On-board stepper driver | 3 x [TMC-2209](https://www.trinamic.com/products/integrated-circuits/details/tmc2209-la/) |
| Stepper driver features| Up to 1.6A peak current, microstep interpolation from any setting to x256, stall detection, stealthChop2 |
| High current outputs | None |
| Thermistor/PT1000 inputs | 1 x onboard NTC3950 |
| Medium current outputs | 4 x 2-pin fan outputs, voltage selectable between VIN, 12V and 5V. 1A max per output |
| Inputs/Outputs | 3 x on-board I/O connectors for endstop, switches, filament monitor with selectable 5V and 12V output. 1 x RGB output |
| Accelerometer | Integrated LIS3DH accelerometer |
| Power monitoring | VIN voltage reporting |

<div class="datatable-end"></div>

### Fan Mosfets

The Fly-OpenPNP has a unique feature in that the fan mosfets are replaceable.
Each mosfet (VS3622e) controls two of the fan outputs.
The orientation that the fan mostfet is plugged into the board doesn't matter.

### Fan Voltage

The fan voltage can be set using jumpers to either 5v, 12v and Vin.  
See the pinout for the correct position.  

### CAN Termination

If using a single toolboard, make sure the CAN jumper is installed, as indicated on the pinout.  
If using multiple toolboards, only the last toolboard should have a CAN jumper installed.  

### Initial Firmware Installation

The board that you will receive doesn't have any firmware installed so when plugged into a computer, the board will show as an unidentified device.
Follow the [CAN Connection instructions](fly_openpnp_can_connection.html) to continue.  
