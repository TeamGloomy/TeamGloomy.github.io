---
title: Connecting a Fly-CDYv2 via Wifi
tags: []
keywords: 
last_updated: 22/04/2021
summary: "Connecting a Fly-CDYv2 via Wifi"
sidebar: mydoc_sidebar
permalink: fly_cdyv2_connected_wifi.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The Fly-CDYv2 is an STM32F407ZGT6 based board.  
This board is very unique in that it has been created as a reprapfirmware board first and foremost.  
That means than unlike other boards, an ESP8266 has been provided on board, no adapter required.  

## Flashing the board firmware

Choose the correct corresponding firmware (firmware-stm43f4-esp8266wifi.bin) from [here](https://github.com/gloomyandy/RepRapFirmware/releases). Remember to rename it to firmware.bin. Put it in the root of a FAT32 formatted SD card.   

## WiFi firmware preparation
Choose the correct corresponding firmware (DuetWiFiServer-stm32f4.bin) from [here](https://github.com/gloomyandy/DuetWiFiSocketServer/releases). Remember to rename it to DuetWiFiServer.bin. Put it in the sys folder on the SD card.  

### Prepare the SD Card

Follow the instructions on [Getting Started with RRF3](getting_started.html)

### Board.txt file

You will also need a board.txt file in the sys folder. Below are the contents that should be used.

```
//Config for fly-CDY
board = fly_cdyv2
//wifi pins
8266wifi.espDataReadyPin = E.10;
8266wifi.TfrReadyPin = E.12;
8266wifi.espResetPin = E.11;
8266wifi.serialRxTxPins = { D.9, D.8 } 
heat.tempSensePins = { B.1 , A.3 , C.4 , D.14}
```

### Smart Drivers

If using TMC5160 or TMC22XX drivers (where 22XX is either the TMC2208, TMC2209, TMC2225 or TMC2226), the following line must also be added to the board.txt file
```
stepper.numSmartDrivers = X
```
Where X is the number of drivers fitted in total.

#### TMC22XX UART Drivers

The drivers must be continuous and start at unit 0 (unless TMC5160 are also used, which case they must be installed after them). So, for the SKR board, if you have say 3 TMC2208s and 1 other driver, the 2208s must be in slots 0, 1, 2 and the remainiong driver in slot 3 or 4. You can use RRF to assign any of those slots to an axis/extruder. 

#### TMC5160 SPI Drivers

TMC5160 drivers are supported from 3.3 beta 1 onwards.
If using TMC5160 drivers, the following lines must also be added to the board.txt file.  
```
stepper.num5160Drivers = X
stepper.spiChannel = 2
```
Where X is the number of 5160 drivers fitted. The drivers must be continuous and start at unit 0. So, if you have say 3 TMC5160s and 1 TMC22XX and 1 other driver, the 5160s must be in slots 0, 1, and 2, the TMC22XX in slot 3 and the remainiong driver in 4. You can use RRF to assign any of those slots to an axis/extruder.  


#### Sensorless Homing

**Supported by only the TMC2209, TMC2226 and TMC5160**
If using sensorless homing/stall detection with TMC2209 or TMC2226 the following line must be added to the board.txt file. It is not needed with TMC5160.
```
stepper.TmcDiagPins = {C.7,C.6,D.11,D.10,B.10,B.11}
```
Please only include the diag pin numbers where you intend to use sensorless homing on that axis.  
For example, if you only intend to use sensorless homing/stall detection on driver 0 and driver 1, only include C.7 and C.6 in your board.txt file.  
The driver diag pins correspond to the following endstops.  

<div class="datatable-begin"></div>

|Driver|Endstop|
| :------------- |:-------------|
|X|X-Min|
|Y|X-Max|
|Z|Y-Min|
|E0|Y-Max|
|E1|Z-Min|
|E2|Z-Max|

<div class="datatable-end"></div>

For more information about setting up sensorless homing, please read [this](sensorless.html).  

#### Driver Diag Pin

The driver diag pin is used for sensorless homing and stall detection.  
The Fly-CDYv2 **does not** have a way of disabling the diag pin as it is designed to be used with [Fly-2209 drivers ](https://www.aliexpress.com/item/1005001877899893.html) which have a switch on the underside of them for disabling the diag pin.  
If you plan on using endstops rather than sensorless homing and do not have the Fly-2209 drivers, you need to bend or remove the diag pin.  

### Board.txt Location

Place the *board.txt* file in a directory called "sys" on the SD card and install the SD card in the Fly-CDYv2.   

### Config.g adjustments

The fly-CDYv2 board is delivered without any firmware on the wifi chip so as part of that process we need to set it up.  
Open the config.g file that has been placed in the sys folder of the SD card and comment out any M552 commands that are there using ; e.g. ;M552 S1.  

### Final Setup

Once connected, power up the board using 12-24v and connect to the USB port on the board. Using a program such as putty. Follow the instructions [here](putty.html) to set it up for RRF. Then type in the following  

```
M997 S1
```
Wait for the uploading of the wifi firmware to finish. Then send the following
```
M552 S-1
M552 S0
M587 S"your SSID" P"your password"
M552 S1
```

{% include warning.html content="**DO NOT USE PRONTERFACE** it will convert all text to upper case. If you really must, please do the following. <br/>  If you wanted to use “PassWord”, you would write P”P’a’s’sW’o’r’d” with the ‘ indicating the following letter should be lower case. Explanation [here](https://duet3d.dozuki.com/Wiki/Gcode#Section_M587_Add_WiFi_host_network_to_remembered_list_or_list_remembered_networks)." %}

The blue light on the wifi chip shoould then flash blue and will go solid when a connection has been established. The ip address will be shown on the serial connection. It is also possible to type just M552 to get the current ip address reported back.

The final thing to do is add the line “M552 S1” to your config file. This can be done through the web interface. This just ensures that the wifi connection is started at start up. There is no need to add the M587 command as this is written permanently to the flash of the ESP chip.