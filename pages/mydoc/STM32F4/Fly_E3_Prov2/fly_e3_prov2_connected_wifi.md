---
title: Connecting a Fly-E3-Pro-v2 via WiFi
tags: []
keywords: 
last_updated: 19/01/2022
summary: "How to connect a Fly-E3-Pro-v2 via WiFi"
sidebar: mydoc_sidebar
permalink: fly_e3_prov2_connected_wifi.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The Fly-E3-Pro-v2 is an STM32F407ZGT6 based board with onboard drivers.  
This board is unique in that it has been created as a reprapfirmware board first and foremost.  
That means than unlike other boards, an ESP32 has been provided on board, no adapter required.  

## Flashing the board firmware

Choose the correct corresponding firmware (firmware-stm32f4-wifi-XXX.bin) from [here](https://github.com/gloomyandy/RepRapFirmware/releases). Remember to rename it to firmware.bin. Put it in the root of a FAT32 formatted SD card. The board is supported from 3.3b1_5 onwards.    

## WiFi firmware preparation
Choose the correct corresponding firmware (DuetWiFiServer-esp32-stm32f4.bin) from [here](https://github.com/gloomyandy/DuetWiFiSocketServer/releases). Remember to rename it to DuetWiFiServer.bin. Put it in a folder called firmware in the SD card.  

### Prepare the SD Card

Follow the instructions on [Getting Started with RRF3](getting_started.html)

### Board.txt file

You will also need a board.txt file in the sys folder. Below are the contents that should be used.

```
//Config for Fly-E3-Pro-v2
board = fly_e3_prov2
//WiFi pins
8266wifi.espDataReadyPin = E.13;
8266wifi.TfrReadyPin = E.14;
8266wifi.espResetPin = E.15;
8266wifi.serialRxTxPins = { D.9, D.8 } ;
heat.tempSensePins = { A.3 , A.4, A.1 }
stepper.numSmartDrivers = 5
```

#### Sensorless Homing

If using sensorless homing/stall detection, the following line must be added to the board.txt file.
```
stepper.TmcDiagPins = { A.2, B.10, C.4, D.0, D.1 }
```
Please only include the diag pin numbers where you intend to use sensorless homing on that axis. For example, if you only intend to use sensorless homing/stall detection on driver 0 and driver 1, only include A.2 and B.10 in your board.txt file.  
Also, the diag pin jumpers need to be installed for each driver that you intend to use sensorless homing with.
For more information about setting up sensorless homing, please read [this](sensorless.html).  

### Board.txt Location

Place the *board.txt* file in a directory called "sys" on the SD card and install the SD card in the Fly-E3-Pro-v2.   

### Config.g adjustments

The Fly-E3-Pro-v2 board is delivered without any firmware on the WiFi chip so as part of that process we need to set it up.  
Open the config.g file that has been placed in the sys folder of the SD card and comment out any M552 commands that are there using ; e.g. ;M552 S1.  

### Final Setup

Once connected, power up the board using 12-24v and connect to the USB port on the board. Using a program such as putty. Follow the instructions [here](putty.html) to set it up for RRF. Then type in the following  

```
M997 S1
```
Wait for the uploading of the WiFi firmware to finish. Then send the following
```
M552 S0
M587 S"your SSID" P"your password"
M552 S1
```

{% include warning.html content="**DO NOT USE PRONTERFACE** it will convert all text to upper case. If you really must, please do the following. <br/>  If you wanted to use “PassWord”, you would write P”P’a’s’sW’o’r’d” with the ‘ indicating the following letter should be lower case. Explanation [here](https://docs.duet3d.com/en/User_manual/Reference/Gcodes#m587-add-wifi-host-network-to-remembered-list-or-list-remembered-networks)." %}

{% include important.html content="Both the SSID and Password used to connect to your WiFi are case sensitive."%}

The blue light on the WiFi chip shoould then flash blue and will go solid when a connection has been established. The ip address will be shown on the serial connection. It is also possible to type just M552 to get the current ip address reported back.

The final thing to do is add the line “M552 S1” to your config file. This can be done through the web interface. This just ensures that the WiFi connection is started at start up. There is no need to add the M587 command as this is written permanently to the flash of the ESP32 chip.  

### Once up and running

You will need to PID tune your tools and your bed. Please be aware that bed tuning may take up to an hour and tool tuning normally takes around 15 minutes. If it takes longer, that is also fine as up to 30 cycles may be ran.  

To tune the bed, run the following command, changing the temperature (the S value) if a different tuning temperature is required.  
```
M303 H0 S60
```  

To tune each tool, run the following command, changing the temperature (the S value) if a different tuning temperature is required. This proceedure will activate the part cooling fans during the final phase of the tuning process so their effect is taken into account. If your printer has more than one tool, make sure each one of them is tuned.  
```
M303 T0 S220
```

Once the tuning is complete, either copy the M307 command into the heater definitions or send M500, ensuring you have M501 at the end of your config.g.  
If the tuning fails at the end, carry on saving the values as in most cases the outputted values still work correctly.  
If the values still result in a heater fault, please refer to [this](https://docs.duet3d.com/en/User_manual/Connecting_hardware/Heaters_tuning#setting-the-model-parameters-manually) wiki page for information about how to adjust the values manually.  