---
title: Connecting a Fly-CDY via Wifi
tags: []
keywords: 
last_updated: 20/01/2021
summary: "Connecting a Fly-CDY via Wifi"
sidebar: mydoc_sidebar
permalink: mydoc_fly_cdy_connected_wifi.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The Fly-CDY is an LPC1769 based board.  
This board is very unique in that it has been created as a reprapfirmware board first and foremost.  
That means than unlike other LPC based board, an ESP8266 has been provided on board, no adapter required.  

## Board Preparation

Certain jumpers are required to be fitted to the board before the onboard wifi module can be used.  
Make sure your jumper arrangement matches the following image.  
{% include image.html file="fly_cdy_jumpers.png" alt="Fly-CDY Jumpers" caption="Fly-CDY WiFi Jumpers" %}

## Flashing the board firmware

Choose the correct corresponding firmware (firmware-lpc-esp8266wifi.bin) from [here](https://github.com/gloomyandy/RepRapFirmware/releases). Remember to rename it to firmware.bin. Put it in the root of a FAT32 formatted SD card.   

## WiFi firmware preparation
Choose the correct corresponding firmware (DuetWiFiServer-lpc.bin) from [here](https://github.com/gloomyandy/DuetWiFiSocketServer/releases). Remember to rename it to DuetWiFiServer.bin. Put it in the sys folder on the SD card.  

### Prepare the SD Card

Follow the instructions on [Getting Started with RRF3](https://github.com/gloomyandy/RepRapFirmware/wiki/Getting-Started---RRF3)

### Board.txt file

You will also need a board.txt file in the sys folder. Below are the contents that should be used.

```
//Config for fly-CDY
lpc.board = fly_cdy
//wifi pins
8266wifi.espDataReadyPin = 0.28;
8266wifi.lpcTfrReadyPin = 2.7;
8266wifi.espResetPin = 2.6;
8266wifi.serialRxTxPins = { 0.1, 0.0 } ;
```

If using TMC22XX drivers (thats either the TMC2208, TMC2209, TMC2225 or TMC2226), the following line must also be added to the board.txt file
```
stepper.numSmartDrivers = X
```
Where X is the number of drivers fitted. The drivers must be continuous and start at unit 0. So, for the SKR board, if you have say 3 TMC2208s and 1 other driver, the 2208s must be in slots 0, 1, 2 and the remainiong driver in slot 3 or 4. You can use RRF to assign any of those slots to an axis/extruder.   

If using sensorless homing/stall detection (supported by only the TMC2209 or TMC2226), the following line must be added to the board.txt file.
```
stepper.TmcDiagPins = {1.29, 1.28, 1.27, 1.25, 1.22, 1.19}
```
Please only include the diag pin numbers where you intend to use sensorless homing on that axis. For example, if you only intend to use sensorless homing/stall detection on driver 0 and driver 1, only include 1.29 and 1.28 in your board.txt file.

### Config.g adjustments

The fly-CDY board is delivered without any firmware on the wifi chip so as part of that process we need to set it up.  
Open the config.g file that has been placed in the sys folder of the SD card and comment out any M552 commands that are there using ; e.g. ;M552 S1.  

### Final Setup

Once connected, power up the board using 12-24v and connect to the USB port on the board. Using a program such as [termite](https://www.compuphase.com/software_termite.htm), connect to the board. Then type in the following

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