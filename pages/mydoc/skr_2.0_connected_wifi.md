---
title: Connecting an SKR v2.0 via Wifi
tags: []
keywords: 
last_updated: 22/04/2021
summary: "Connecting an SKR v2.0 via Wifi"
sidebar: mydoc_sidebar
permalink: skr_2.0_connected_wifi.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The SKR v2.0 is an STM32F407VGT6 based board.

## Flashing the board firmware

Choose the correct corresponding firmware (firmware-stm43f4-esp8266wifi.bin) from [here](https://github.com/gloomyandy/RepRapFirmware/releases). Remember to rename it to firmware.bin. Put it in the root of a FAT32 formatted SD card.   

## WiFi firmware preparation
Choose the correct corresponding firmware (DuetWiFiServer-stm32f4.bin) from [here](https://github.com/gloomyandy/DuetWiFiSocketServer/releases). Remember to rename it to DuetWiFiServer.bin. Put it in the sys folder on the SD card.  

{% include important.html content="From 3.3, the DuetWiFiServer.bin file needs to be placed in a folder called firmware. This folder should be placed in the root of the SD card."%}  


## Wifi

You will need a BTT produced wifi module.  

### Prepare the SD Card

Follow the instructions on [Getting Started with RRF3](getting_started.html)

### Board.txt file

You will also need a board.txt file in the sys folder. Below are the contents that should be used. 

```
//Config for BIQU SKR v1.4
board = biquskr_2.0
//wifi pins
8266wifi.espDataReadyPin = PB.10;
8266wifi.TfrReadyPin = PB.11;
8266wifi.espResetPin = PE.14;
//ESP RX/TX Settings
8266wifi.serialRxTxPins = { PD.9, PD.8 } ;
serial.aux.rxTxPins = { PA.10, PA.9 };
heat.tempSensePins = { PD.7, PB.3, PB.4 }
```

#### Smart Drivers

If using TMC22XX drivers (thats either the TMC2208, TMC2209, TMC2225 or TMC2226), the following line must also be added to the board.txt file
```
stepper.numSmartDrivers = X
```
Where X is the number of drivers fitted. The drivers must be continuous and start at unit 0. So, for the SKR board, if you have say 3 TMC2208s and 1 other driver, the 2208s must be in slots 0, 1, 2 and the remainiong driver in slot 3 or 4. You can use RRF to assign any of those slots to an axis/extruder.  

#### Sensorless Homing

If using sensorless homing/stall detection (supported by only the TMC2209 or TMC2226), the following line must be added to the board.txt file.
```
stepper.TmcDiagPins = {1.29, 1.28, 1.27, 1.26, 1.25}
```
Please only include the diag pin numbers where you intend to use sensorless homing on that axis. For example, if you only intend to use sensorless homing/stall detection on driver 0 and driver 1, only include 1.29 and 1.28 in your board.txt file.  
For more information about setting up sensorless homing, please read [this](sensorless.html).  

#### Driver Diag Pin

The driver diag pin is used for sensorless homing and stall detection.  
The SKR v1.4 **does not** have a way of disabling the diag pin.
If you plan on using endstops rather than sensorless homing, you need to bend or remove the diag pin.  

### Board.txt Location

Place the *board.txt* file in a directory called "sys" on the SD card and install the SD card in the SKR v1.4.   

### Final Setup

Once connected, power up the board using 12-24v and connect to the USB port on the board. Using a program such as putty. Follow the instructions [here](putty.html) to set it up for RRF. Then type in the following  

```
M552 S0
M587 S"your SSID" P"your password"
M552 S1
```

{% include warning.html content="**DO NOT USE PRONTERFACE** it will convert all text to upper case. If you really must, please do the following. <br/>  If you wanted to use “PassWord”, you would write P”P’a’s’sW’o’r’d” with the ‘ indicating the following letter should be lower case. Explanation [here](https://duet3d.dozuki.com/Wiki/Gcode#Section_M587_Add_WiFi_host_network_to_remembered_list_or_list_remembered_networks)." %}

{% include important.html content="Both the SSID and Password used to connect to your WiFi are case sensitive."%}

The blue light on the wifi chip shoould then flash blue and will go solid when a connection has been established. The ip address will be shown on the serial connection. It is also possible to type just M552 to get the current ip address reported back.

The final thing to do is add the line “M552 S1” to your config file. This can be done through the web interface. This just ensures that the wifi connection is started at start up. There is no need to add the M587 command as this is written permanently to the flash of the ESP chip.