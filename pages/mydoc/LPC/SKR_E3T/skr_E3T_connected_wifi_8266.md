---
title: Connecting an SKR E3 Turbo via an ESP8266 WiFi Adapter
tags: []
keywords: 
last_updated: 15/07/2021
summary: "How to connect an SKR E3 Turbo via an ESP8266 WiFi Adapter"
sidebar: mydoc_sidebar
permalink: skr_E3T_connected_wifi_8266.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The SKR E3 Turbo is an LPC1769 based board.

## Firmware File

Choose the correct corresponding firmware (firmware-lpc-wifi-XXX.bin) from [here](https://github.com/gloomyandy/RepRapFirmware/releases). Remember to rename it to firmware.bin. Put it in the root of a FAT32 formatted SD card.   

## ESP8266 WiFi

Use a nodemcu ESP8266 with USB programming as it already 5v tolerant and it allows for updating via USB.

{% include tip.html content="If you would prefer a premade adapter to enable WiFi, TeamGloomy have created a plugin WiFi adapter board for the SKR E3 Turbo. It can be purchased on tindie [here](https://www.tindie.com/products/pcr/reprapfirmware-wifi-adapterboard-for-skr-e3-turbo/) " %}

### BOM

* 1 x nodemcu ESP8266 or Wemos D1 mini
* 3 x 47R resistor
* 1 x 470R resistor
* 3 x 2200R resistor
* jumpers or other ways of connecting to the SKR

### Preparing the ESP8266

Follow the instructions [here](https://github.com/gloomyandy/RepRapFirmware/wiki/ESP8266-LPC).

### Connecting the ESP8266

The pinout for the SKR E3 Turbo can be found [here](https://github.com/bigtreetech/BIGTREETECH-SKR-E3-Turbo/blob/master/Hardware/BTT%20SKR%20E3%20Turbo-Pin.pdf) and the schematic for the Duet 2 WiFi for reference can be found [here](https://github.com/T3P3/Duet/blob/master/Duet2/Duet2v1.04/DuetWifiv1.04a_Schematic.pdf). 

The table below shows the pins required on the ESP8266 and what they are connected to on the SKR. Please ensure that your cables are no longer than 30cm although they should ideally be as short as possible.  

<div class="datatable-begin"></div>

| ESP8266 Pin       | SKR Pin       | Resistor Value  |
| :-------------: |:-------------:| :---------------:|
| RST           | 2.8 on EXP1         | 470R            |
| CS/GPIO15     | 0.16 on EXP1         | 2200R           |
| MOSI/GPIO13   | 0.18 on EXP1         | 47R             |
| MISO/GPIO12   | 0.17 on EXP1         | 47R             |
| SCLK/GPIO14  | 0.15 on EXP1         | 47R             |
| ESP_DATA_Ready/GPIO0   | 0.19 on EXP1         | 2200R             |
| LPC_DATA_Ready/GPIO4   | 0.20 on EXP1         | None            |
| VIN(5v)   | 5v on EXP1          | None             |
| GND   | GND on EXP1          | 2200R to RST             |

<div class="datatable-end"></div>

### Prepare the SD Card

Follow the instructions on [Getting Started with RRF3](getting_started.html)

### Board.txt file

You will also need a board.txt file in the sys folder. Below are the contents that should be used. 

```
//Config for SKR E3 Turbo
board = biquskr_e3t
//WiFi pins
8266wifi.espDataReadyPin = 0.19
8266wifi.TfrReadyPin = 0.20
8266wifi.espResetPin = 2.8
heat.tempSensePins = { 0.25, 0.24, 0.23 }
```

### Updating the ESP8266 by RRF

If you have a WiFi adapter that supports updating via RRF, you need to add the following information to the board.txt file.  
```
8266wifi.serialRxTxPins = { 0.3, 0.2 } 
serial.aux.rxTxPins = { nopin, nopin }
```

#### Smart Drivers

If using TMC22XX drivers (thats either the TMC2208, TMC2209, TMC2225 or TMC2226), the following line must also be added to the board.txt file
```
stepper.numSmartDrivers = X
```
Where X is the number of drivers fitted. The drivers must be continuous and start at unit 0. So, for the SKR board, if you have say 3 TMC2208s and 1 other driver, the 2208s must be in slots 0, 1, 2 and the remaining driver in slot 3 or 4. You can use RRF to assign any of those slots to an axis/extruder.  

#### Sensorless Homing

If using sensorless homing/stall detection (supported by only the TMC2209 or TMC2226), the following line must be added to the board.txt file.
```
stepper.TmcDiagPins = { 1.29, 1.28, 1.27, 1.26, 1.25 }
```
Please only include the diag pin numbers where you intend to use sensorless homing on that axis. For example, if you only intend to use sensorless homing/stall detection on driver 0 and driver 1, only include 1.29 and 1.28 in your board.txt file.  
For more information about setting up sensorless homing, please read [this](sensorless.html).  

#### Driver Diag Pin

The driver diag pin is used for sensorless homing and stall detection.  
The SKR E3 Turbo **does not** have a way of disabling the diag pin.
If you plan on using endstops rather than sensorless homing, you need to bend or remove the diag pin.  

### Board.txt Location

Place the *board.txt* file in a directory called "sys" on the SD card and install the SD card in the SKR E3 Turbo.

### Final Setup

Once connected, power up the board using 12-24v and connect to the USB port on the board. Using a program such as putty. Follow the instructions [here](putty.html) to set it up for RRF. Then type in the following  

{% include callout.html content="If updating the ESP32 using RRF, type the following.  

```
M997 S1
```<br/>
Wait for the uploading of the WiFi firmware to finish. Then send the following<br/>
```
M552 S-1
```<br/>
Continue with the instructions below." type="info" %} 

```
M552 S0
M587 S"your SSID" P"your password"
M552 S1
```

{% include warning.html content="**DO NOT USE PRONTERFACE** it will convert all text to upper case. If you really must, please do the following. <br/>  If you wanted to use “PassWord”, you would write P”P’a’s’sW’o’r’d” with the ‘ indicating the following letter should be lower case. Explanation [here](https://docs.duet3d.com/en/User_manual/Reference/Gcodes#m587-add-wifi-host-network-to-remembered-list-or-list-remembered-networks)." %}

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
If the values still result in a heater fault, please refer to [this](https://docs.duet3d.com/en/User_manual/Connecting_hardware/Heaters_tuning#setting-the-model-parameters-manually) wiki page for information about how to adjust the values manually.  