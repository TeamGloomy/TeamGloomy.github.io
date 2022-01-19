---
title: Connecting an SKR v2.0 via an ESP8266 or ESP32 WiFi Adapter
tags: []
keywords: 
last_updated: 19/01/2022
summary: "How to connect to an SKR v2.0 via an ESP8266 or ESP32 WiFi Adapter"
sidebar: mydoc_sidebar
permalink: skr_2.0_connected_wifi_8266.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The SKR v2.0 is an STM32F407VGT6 based board.

## Flashing the board firmware

Choose the correct corresponding firmware (firmware-stm32f4-wifi-XXX.bin) from [here](https://github.com/gloomyandy/RepRapFirmware/releases){:target="_blank"}. Remember to rename it to firmware.bin. Put it in the root of a FAT32 formatted SD card.   

## WiFi firmware preparation
Choose the correct corresponding firmware from [here](https://github.com/gloomyandy/DuetWiFiSocketServer/releases){:target="_blank"}. 
* DuetWiFiServer-esp8266-stm32f4.bin for ESP8266
* DuetWiFiServer-esp32-stm32f4.bin for ESP32
Remember to rename it to DuetWiFiServer.bin. Put it in a folder called firmware in the SD card.  

## WiFi

You will need a BTT or MKS produced ESP8266 WiFi module or a [Fly/Mellow ESP32 Module](https://www.aliexpress.com/item/1005003088425354.html).   

Make sure the jumpers are installed next to the WiFi headers as shown below. 

{% include image.html file="skr_2.0_wifi.PNG" alt="SKR v2.0 WiFi Jumpers" caption="SKR v2.0 WiFi Jumpers" %}

### Prepare the SD Card

Follow the instructions on [Getting Started with RRF3](getting_started.html){:target="_blank"}

### Board.txt file

You will also need a board.txt file in the sys folder. Below are the contents that should be used. 

```
//Config for BIQU SKR v2.0
board = biquskr_2
//WiFi pins
8266wifi.espDataReadyPin = B.10;
8266wifi.TfrReadyPin = B.11;
8266wifi.espResetPin = C.14;
//ESP8266 RX/TX Settings
8266wifi.serialRxTxPins = { D.9, D.8 } ;
serial.aux.rxTxPins = { A.10, A.9 };
heat.tempSensePins = { D.7, B.3, B.4 }
```

### Smart Drivers

If using TMC5160 or TMC22XX drivers (where 22XX is either the TMC2208, TMC2209, TMC2225 or TMC2226), the following line must also be added to the board.txt file
```
stepper.numSmartDrivers = X
```
Where X is the number of drivers fitted in total.

#### TMC22XX UART Drivers

The drivers must be continuous and start at unit 0 (unless TMC5160 are also used, which case they must be installed after them). So, for the SKR board, if you have say 3 TMC2208s and 1 other driver, the 2208s must be in slots 0, 1, 2 and the remaining driver in slot 3 or 4. You can use RRF to assign any of those slots to an axis/extruder. 

#### TMC5160 SPI Drivers

If using TMC5160 drivers, the following lines must also be added to the board.txt file.  
```
stepper.num5160Drivers = X
stepper.spiChannel = 3
SPI3.pins = { E.15, A.14, E.14 }
```
Where X is the number of TMC5160 drivers fitted. The drivers must be continuous and start at unit 0. So, if you have say 3 TMC5160s and 1 TMC22XX and 1 other driver, the 5160s must be in slots 0, 1, and 2, the TMC22XX in slot 3 and the remaining driver in 4. You can use RRF to assign any of those slots to an axis/extruder.  

#### Sensorless Homing

**Supported by only the TMC2209, TMC2226 and TMC5160**
If using sensorless homing/stall detection with TMC2209 or TMC2226 the following line must be added to the board.txt file. It is not needed with TMC5160.
```
stepper.TmcDiagPins = { C.1, C.3, C.0, C.2, A.0 }
```
Please only include the diag pin numbers where you intend to use sensorless homing on that axis.  
For example, if you only intend to use sensorless homing/stall detection on driver 0 and driver 1, only include F.2 and C.13 in your board.txt file.  
For more information about setting up sensorless homing, please read [this](sensorless.html){:target="_blank"}.  

### Driver Diag Pin

If you want to use sensorless homing, a jumper needs adding under each driver you want to use it for as shown below.

{% include image.html file="skr_2.0_diag.png" alt="SKR v2.0 Diag" caption="SKR v2.0 Sensorless Homing Jumper Locations" %}

### Board.txt Location

Place the *board.txt* file in a directory called "sys" on the SD card and install the SD card in the SKR v2.0.     

### Final Setup

Once connected, power up the board using 12-24v and connect to the USB port on the board. Using a program such as putty. Follow the instructions [here](putty.html) to set it up for RRF. Then type in the following  

```
M997 S1
```
Wait for the uploading of the WiFi firmware to finish. Then send the following
```
M552 S-1
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
If the values still result in a heater fault, please refer to [this](https://duet3d.dozuki.com/Wiki/Tuning_the_heater_temperature_control#Section_Setting_the_model_parameters_manually){:target="_blank"} wiki page for information about how to adjust the values manually.  