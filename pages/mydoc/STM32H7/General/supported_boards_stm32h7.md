---
title: Supported Boards and Drivers
tags: []
keywords: 
last_updated: 11/06/2025
summary: "Details the boards and drivers currently supported by this software"
permalink: supported_boards.html
folder: mydoc
comments: false
toc: false
---

## STM32H7 Boards with native support

There are a number of boards which have pre-configured board.txt settings. They are:

* AFC-Lite V1.0
* Fly-E3-Ultra H723
* Fly-C5 H723 (Only with RRF 3.7)
* Fly-C8-Pro H723 (Only with RRF 3.7)
* Fly-MMU V1.0 H723
* Fly-ProX10 H723
* Fly-Super5Pro H723
* Fly-Super8Pro H743
* Fly-Super8Pro H723
* Fysetc Spider King H723
* LDO Leviathan v1.3
* SKR3 H723
* SKR3 H743
* SKR3 EZ H723
* SKR3 EZ H743
* BTT Kraken H723
* BTT Scylla v1.0 H723

## CAN-FD Expansion Boards

There is now a growing list of CAN-FD expansion boards that are compatible with all Duet 3 and STM32H7 based boards. They are:

* Fly-RRF36
* Fly-SB2040 Max V3
* Fly-SB2040 Pro Max V3
* Fly-SHT36v3 Max V3
* Fysetc StrideMax Dual V2.0
* Fysetc PITB V2.0
* Byte and Mettle Ultralight N17

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

The following SPI drivers are supported:

* TMC2240 - Support is included from 3.5RC1
* TMC5160 - This includes full sensorless homing and stall detection support
