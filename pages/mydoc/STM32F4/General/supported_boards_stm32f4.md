---
title: Supported Boards and Drivers
tags: []
keywords: 
last_updated: 11/06/2025
summary: "Details the boards and drivers currently supported by this software"
permalink: supported_boards_stm32f4.html
folder: mydoc
comments: false
toc: false
---

## STM32F4 Boards with native support

There are a number of boards which have pre-configured board.txt settings. They are:

* Fly-407ZG
* Fly-C8
* Fly-CDYv2
* Fly-CDYv3
* Fly-E3
* Fly-E3-v2
* Fly-E3-Pro
* Fly-E3-Pro-V2 **Support for this board has been removed due to the issues described [here](/fly_e3_prov2_general.html)**
* Fly-E3-Pro-v3
* Fly-Gemini-V1
* Fly-Gemini-V1.1
* Fly-Gemini-V2.0
* Fly-Gemini-V3.0
* Fly-Super8-V1
* Fly-Super8-V1.1
* Fly-Super8-V1.2
* Fly-Super8-V1.3
* Fysetc Spider 407 Version
* Fysetc Spider King F407
* SKR v2
* SKR-RRF-E3 + Expansion Board
* SKR Pro v1.1
* SKR Pro v1.2
* BTT GTR v1.0 + M5 Expansion Board
* BTT Octopus v1.1 F429 Version
* BTT Octopus Pro v1.0 F429 Version
* BTT Octopus X7

## CAN-FD Expansion Boards

There is now a growing list of CAN-FD expansion boards that are compatible with all Duet 3, STM32F4 (using an SPI2CAN module) and STM32H7 based boards. They are:

* Fly-RRF36
* Fly-SB2040 Max V3
* Fly-SB2040 Pro Max V3
* Fly-SHT36v3 Max V3
* Fysetc StrideMax Dual V2.0
* Fysetc PITB V2.0

## Consumer Printers

There are printers that can be purchased with the STM32 port of RRF installed. They are:

* Formbot Troodon V2

## Supported Drivers

### Standalone mode

All drivers are supported in standalone mode.  
This includes drivers such as TMC2130.
Standalone means that the current must be set using the potentiometer and the microsteps must be set using jumpers on the board.

### UART Drivers

The following drivers support firmware setting of microsteps and motor current.  

* TMC2208
* TMC2209 - This includes full sensorless homing and stall detection support
* TMC2225
* TMC2226 - This includes full sensorless homing and stall detection support
* Boards with built in drivers, such as MKS Sbase v1.3 and the original smoothieboard.

### SPI Drivers

The following SPI drivers are supported on all STM32 boards except the Fly-407ZG:

* TMC2240 - Support is included from 3.5RC1
* TMC5160 - This includes full sensorless homing and stall detection support
