---
title: Supported Boards and Drivers
tags: []
keywords: 
last_updated: 04/03/2022
summary: "Details the boards and drivers currently supported by this software"
sidebar: mydoc_sidebar
permalink: supported_boards.html
folder: mydoc
comments: false
toc: false
---

## LPC Boards with native support
There are a number of boards which have configurations pre-configured. They are

* Azsmz Mini
* Azteeg X5 Mini v1.1
* Azteeg X5 Mini v2
* Azteeg X5 Mini v3
* fly-CDY
* MKS Sbase v1.3
* MKS SGen L v1.0
* MKS SGen L v2.0
* ReArm
* SKR v1.1
* SKR v1.3
* SKR v1.4 (both the standard and turbo versions)
* SKR E3 Turbo
* Smoothieboard

If your board is not on the list, use the generic profile and the pin number for each input/output in the config.g file and get in touch and we can add native support.

## STM32 Boards with native support
There are a number of boards which have configurations pre-configured. They are

* Fly-407ZG
* Fly-CDYv2
* Fly-CDYv3
* Fly-E3
* Fly-E3-Pro
* Fly-E3-Pro-V2 **Support for this board has been removed due to the issues described [here](/fly_e3_prov2_general.html)**
* Fly-Gemini-V1
* Fly-Gemini-V1.1
* Fly-Super8-V1
* Fly-Super8-V1.1
* Fysetc Spider 407 Version
* SKR v2
* SKR-RRF-E3 + Expansion Board
* SKR Pro v1.1
* SKR Pro v1.2
* BTT GTR v1.0 + M5 Expansion Board
* BTT Octopus v1.1 F429 Version
* BTT Octopus Pro v1.0 F429 Version

## Supported Drivers

### Standalone mode

All drivers are supported in standalone mode.  
This includes drivers such as TMC2130.
Standalone means that the current must be set using the potentiometer and the microsteps must be set using jumpers on the board.

### UART Drivers

The following drivers support firmware setting of microsteps and motor current.  
- TMC2208
- TMC2209 - This includes full sensorless homing and stall detection support
- TMC2225
- TMC2226 - This includes full sensorless homing and stall detection support
- Boards with built in drivers, such as MKS Sbase v1.3 and the original smoothieboard.

### SPI Drivers

From 3.3 Beta 1_3, the following SPI drivers are supported on STM32 only (except the Fly-407ZG)
- TMC5160