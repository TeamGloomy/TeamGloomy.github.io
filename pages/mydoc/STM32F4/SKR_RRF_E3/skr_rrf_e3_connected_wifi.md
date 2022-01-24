---
title: Connecting a SKR-RRF-E3 via Wifi
tags: []
keywords: 
last_updated: 19/01/2022
summary: "Connecting a SKR-RRF-E3 via Wifi"
sidebar: mydoc_sidebar
permalink: skr_rrf_e3_connected_wifi.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The SKR-RRF-E3 is an STM32F407VGT6 based board.  
It is officially supported by TeamGloomy from release 3.3b1_5.  

## Flashing the board firmware

Choose the correct corresponding firmware (firmware-stm32f4-wifi-XXX.bin) from [here](https://github.com/gloomyandy/RepRapFirmware/releases). Remember to rename it to firmware.bin. Put it in the root of a FAT32 formatted SD card.   

## WiFi firmware preparation
Choose the correct corresponding firmware (DuetWiFiServer-esp8266-stm32f4.bin) from [here](https://github.com/gloomyandy/DuetWiFiSocketServer/releases). Remember to rename it to DuetWiFiServer.bin. Put it in a folder called firmware in the SD card.  

### Prepare the SD Card

Follow the instructions on [Getting Started with RRF3](getting_started.html)

### Board.txt file

You will also need a board.txt file in the sys folder. Below are the contents that should be used.

```
//Config for SKR-RRF-E3
board = biquskr_rrf_e3_1.1
//WiFi pins
8266wifi.espDataReadyPin = A.6
8266wifi.TfrReadyPin = A.7
8266wifi.espResetPin = A.4
8266wifi.serialRxTxPins = { D.9, D.8 } 
serial.aux.rxTxPins = { A.10, A.9 }
heat.tempSensePins = { A.0, A.1, A.2, A.3 }
```

#### Sensorless Homing

If using sensorless homing/stall detection, the following line must be added to the board.txt file.
```
stepper.TmcDiagPins = { C.0, C.1, C.2, C.3, B.11, B.10 }
```
Please only include the diag pin numbers where you intend to use sensorless homing on that axis. For example, if you only intend to use sensorless homing/stall detection on driver 0 and driver 1, only include C.0 and C.1 in your board.txt file.  
Also, the diag pin jumpers need to be installed for each driver that you intend to use sensorless homing with.
For more information about setting up sensorless homing, please read [this](sensorless.html).  

### Board.txt Location

Place the *board.txt* file in a directory called "sys" on the SD card and install the SD card in the Fly-E3.   

### Config.g adjustments

The SKR-RRF-E3 board that you will receive does have firmware installed but its from a BTT build of RRF and not officially supported by TeamGloomy. Please install one of our build.  
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

{% include warning.html content="**DO NOT USE PRONTERFACE** it will convert all text to upper case. If you really must, please do the following. <br/>  If you wanted to use “PassWord”, you would write P”P’a’s’sW’o’r’d” with the ‘ indicating the following letter should be lower case. Explanation [here](https://duet3d.dozuki.com/Wiki/Gcode#Section_M587_Add_WiFi_host_network_to_remembered_list_or_list_remembered_networks)." %}

{% include important.html content="Both the SSID and Password used to connect to your WiFi are case sensitive."%}

The blue light on the WiFi chip shoould then flash blue and will go solid when a connection has been established. The ip address will be shown on the serial connection. It is also possible to type just M552 to get the current ip address reported back.

The final thing to do is add the line “M552 S1” to your config file. This can be done through the web interface. This just ensures that the WiFi connection is started at start up. There is no need to add the M587 command as this is written permanently to the flash of the ESP8266 chip.

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
If the values still result in a heater fault, please refer to [this](https://duet3d.dozuki.com/Wiki/Tuning_the_heater_temperature_control#Section_Setting_the_model_parameters_manually) wiki page for information about how to adjust the values manually.  