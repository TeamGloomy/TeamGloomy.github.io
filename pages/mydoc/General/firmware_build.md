---
title: Firmware Building Instructions
tags: []
keywords: 
last_updated: 06/01/2025
summary: "Instructions to build your own version of the firmware"
sidebar: mydoc_sidebar
permalink: firmware_build.html
folder: mydoc
comments: false
toc: false
---

This page covers how to compile the firmware. These instructions are based on the new 3.2 unified firmware.

## Preparation of software

1. Download and install [VSCode](https://code.visualstudio.com/).  
2. Open VSCode and open the extension tab (this can be done by using the shortcut Ctrl+Shift+X) and search for windows-arm-none-eabi. Install the version by metalcode-eu. Close VSCode  
3. Download and install [git](https://git-scm.com/downloads).  
4. Then download and install [make](https://www.msys2.org/). Once installed you will need to add the location of the bin folder that is installed in to your windows path environment setting (typically found in `C:\msys64\usr\bin\make.exe`). Make sure you add them to the system variables and not the user varaibles. While there also add the location of mkdir.exe, which will have been installed with git. It can be found in the usr/bin folder where git is installed.  
5. Download and install the GNU Arm Embedded Toolchain. You can see which version of the Toolchain to use [here](https://github.com/Duet3D/RepRapFirmware/wiki/Building-RepRapFirmware#instructions-for-building-under-windows). Tick the box at the end to install it to your PATH.  
6. Open VSCode
7. On the top bar, click on Terminal and then New Terminal
8. Click on the icon shown below and then on Select Default Profile
{% include image.html file="vscode_terminal_1.png" alt="VSCode Default Terminal 1" caption="VSCode Default Terminal 1" %}
9. Click on Git Bash as default.
{% include image.html file="vscode_terminal_2.png" alt="VSCode Default Terminal 2" caption="VSCode Default Terminal 2" %}

## Preparation of firmware code - RRF3.2

Download the following github repositories. The preferred method for doing so is by using a git client (terminal or GUI). This allows for changes made to be tracked. My client of choice (jay_s_uk) is [gitkracken](https://www.gitkraken.com/).  

- [RRFBuild](https://github.com/gloomyandy/RRFBuild) - The main project for building
- [RepRapFirmware](https://github.com/gloomyandy/RepRapFirmware/tree/v3.02-dev-unified) - the main RRF source code  
- [RRFLibraries](https://github.com/gloomyandy/RRFLibraries/tree/v3.02-dev-unified) - Support libraries for RRF  
- [CoreLPC](https://github.com/gloomyandy/CoreLPC/tree/v3.02-dev-unified) - MCU specific support for LPC builds  
- [CoreSTM32F4](https://github.com/gloomyandy/CoreSTM32F4) - MCU specific support for STM32F4 builds  
- [FreeRTOS](https://github.com/gloomyandy/FreeRTOS) - RTOS support package  
- [DuetWifiSocketServer](https://github.com/gloomyandy/DuetWiFiSocketServer) - WiFi interface  

Clone all of the repositories into the RRFBuild folder.  
The resulting structure should look like this.  
![image](https://i.ibb.co/94bTCMd/build-structure.png)

## Preparation of firmware code - RRF3.3

Download the following github repositories. The preferred method for doing so is by using a git client (terminal or GUI). This allows for changes made to be tracked. My client of choice (jay_s_uk) is [gitkracken](https://www.gitkraken.com/).  

- [RRFBuild](https://github.com/gloomyandy/RRFBuild/tree/v3.3-dev) - The main project for building
- [RepRapFirmware](https://github.com/gloomyandy/RepRapFirmware/tree/v3.3-dev) - the main RRF source code  
- [RRFLibraries](https://github.com/gloomyandy/RRFLibraries/tree/v3.3-dev) - Support libraries for RRF  
- [CoreN2G](https://github.com/gloomyandy/CoreN2G/tree/v3.3-dev) - MCU specific support for LPC/STM32F4 builds  
- [FreeRTOS](https://github.com/gloomyandy/FreeRTOS/tree/v3.3-dev) - RTOS support package  
- [DuetWifiSocketServer](https://github.com/gloomyandy/DuetWiFiSocketServer) - WiFi interface  

Clone all of the repositories into the RRFBuild folder.  
The resulting structure should look like this.  
![image](https://i.ibb.co/94bTCMd/build-structure.png)

## Preparation of firmware code - RRF3.4

Download the following github repositories. The preferred method for doing so is by using a git client (terminal or GUI). This allows for changes made to be tracked. My client of choice (jay_s_uk) is [gitkracken](https://www.gitkraken.com/).  

- [RRFBuild](https://github.com/gloomyandy/RRFBuild/tree/v3.4-dev) - The main project for building
- [RepRapFirmware](https://github.com/gloomyandy/RepRapFirmware/tree/v3.4-dev) - the main RRF source code  
- [RRFLibraries](https://github.com/gloomyandy/RRFLibraries/tree/v3.4-dev) - Support libraries for RRF  
- [CoreN2G](https://github.com/gloomyandy/CoreN2G/tree/v3.4-dev) - MCU specific support for LPC/STM32F4 builds  
- [CANlib](https://github.com/gloomyandy/CANlib/tree/v3.4-dev)
- [FreeRTOS](https://github.com/gloomyandy/FreeRTOS/tree/v3.4-dev) - RTOS support package  
- [DuetWifiSocketServer](https://github.com/gloomyandy/DuetWiFiSocketServer) - WiFi interface  

Clone all of the repositories into the RRFBuild folder.  
The resulting structure should look like this.  
![image](https://i.ibb.co/94bTCMd/build-structure.png)

## Preparation of firmware code - RRF3.5

Download the following github repositories. The preferred method for doing so is by using a git client (terminal or GUI). This allows for changes made to be tracked. My client of choice (jay_s_uk) is [gitkracken](https://www.gitkraken.com/).  

- [RRFBuild](https://github.com/gloomyandy/RRFBuild/tree/v3.5-dev) - The main project for building
- [RepRapFirmware](https://github.com/gloomyandy/RepRapFirmware/tree/v3.5-dev) - the main RRF source code  
- [RRFLibraries](https://github.com/gloomyandy/RRFLibraries/tree/v3.5-dev) - Support libraries for RRF  
- [CoreN2G](https://github.com/gloomyandy/CoreN2G/tree/v3.5-dev) - MCU specific support for STM32 builds  
- [Duet3Expansion](https://github.com/gloomyandy/Duet3Expansion/tree/v3.5-dev) - expansion board source code
- [CANlib](https://github.com/gloomyandy/CANlib/tree/v3.5-dev) - CAN support library
- [FreeRTOS](https://github.com/gloomyandy/FreeRTOS/tree/v3.5-dev) - RTOS support package  
- [WiFiSocketServerRTOS](https://github.com/gloomyandy/WiFiSocketServerRTOS/tree/ethernet) - WiFi interface  
- [IAP](https://github.com/gloomyandy/IAP/tree/v3.5-dev) - IAP for SBC flashing

Clone all of the repositories into the RRFBuild folder.  

## Preparation of firmware code - RRF3.6

Download the following github repositories. The preferred method for doing so is by using a git client (terminal or GUI). This allows for changes made to be tracked. My client of choice (jay_s_uk) is [gitkracken](https://www.gitkraken.com/).  

- [RRFBuild](https://github.com/gloomyandy/RRFBuild/tree/v3.6-dev) - The main project for building
- [RepRapFirmware](https://github.com/gloomyandy/RepRapFirmware/tree/v3.6-dev) - the main RRF source code  
- [RRFLibraries](https://github.com/gloomyandy/RRFLibraries/tree/v3.5-dev) - Support libraries for RRF  
- [CoreN2G](https://github.com/gloomyandy/CoreN2G/tree/v3.6-dev) - MCU specific support for STM32 builds  
- [Duet3Expansion](https://github.com/gloomyandy/Duet3Expansion/tree/v3.6-dev) - expansion board source code
- [CANlib](https://github.com/gloomyandy/CANlib/tree/v3.6-dev) - CAN support library
- [FreeRTOS](https://github.com/gloomyandy/FreeRTOS/tree/v3.5-dev) - RTOS support package  
- [WiFiSocketServerRTOS](https://github.com/gloomyandy/WiFiSocketServerRTOS/tree/ethernet) - WiFi interface  
- [IAP](https://github.com/gloomyandy/IAP/tree/v3.6-dev) - IAP for SBC flashing

Clone all of the repositories into the RRFBuild folder.  

## Building the firmware

Open VSCode.  
Go file -> open folder and browse to the RRFBuild folder.  
Once opened, the firmware can be built using terminal -> run build task and picking the type of build you want to make.

NOTE: From 3.5.0-rc.4 onwards we create an individual .bin file for each board. Only a small subset of boards are listed in the build task menu, if you require a build for a board that is not listed you may need to add a new build task. See: [build task configuration](https://github.com/gloomyandy/RRFBuild/blob/v3.5-dev/.vscode/tasks.json)
