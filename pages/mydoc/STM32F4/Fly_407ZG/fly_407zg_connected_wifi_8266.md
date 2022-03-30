---
title: Connecting a Fly-407ZG via an ESP8266 WiFi Adapter
tags: []
keywords: 
last_updated: 25/03/2022
summary: "How to connect to a Fly-407ZG via an ESP8266 WiFi Adapter"
sidebar: mydoc_sidebar
permalink: fly_407zg_connected_wifi_8266.html
folder: mydoc
comments: false
toc: false
datatable: true 
---

## Overview

The Fly-407ZG is an STM32F407ZGT6 based board.

## Firmware File

Choose the correct corresponding firmware (firmware-stm32f4-wifi-XXX.bin) from [here](https://github.com/gloomyandy/RepRapFirmware/releases). Remember to rename it to firmware.bin. Put it in the root of a FAT32 formatted SD card. The maximum size supported card is 32GB.

## WiFi

Use a nodemcu ESP8266 with USB programming as it already 5v tolerant and it allows for updating via USB.

### BOM

* 1 x nodemcu ESP8266 or Wemos D1 mini
* 3 x 47R resistor
* 1 x 470R resistor
* 3 x 2200R resistor
* jumpers or other ways of connecting to the Fly-407ZG

### Preparing the ESP8266

Follow the instructions [here](stm32_esp8266.html).

### Connecting the ESP8266

The pinout for the Fly-407ZG can be found [here](https://github.com/FLYmaker/FLYF407ZG/blob/master/picture/Pin%20diagram.png) and the schematic for the Duet 2 WiFI for reference can be found [here](https://github.com/T3P3/Duet/blob/master/Duet2/Duet2v1.04/DuetWifiv1.04a_Schematic.pdf). 

The table below shows the pins required on the ESP8266 and what they are connected to on the Fly-407ZG. Please ensure that your cables are no longer than 30cm although they should ideally be as short as possible.  

There is an alternative method of connecting the ESP8266 detailed [here](/fly_407zg_alternative_esp.html).  

<div class="datatable-begin"></div>

| ESP8266 Pin       | Fly-407ZG Pin       | Resistor Value  |
| :-------------: |:-------------:| :---------------:|
| RST           | PB2 on EXP2         | 470R            |
| CS/GPIO15     | PF11 on EXP2         | 2200R           |
| MOSI/GPIO13   | PB15 on EXP2         | 47R             |
| MISO/GPIO12   | PB14 on EXP2         | 47R             |
| SCLK/GPIO14  | PB13 on EXP2         | 47R             |
| ESP_DATA_Ready/GPIO0   | PE15 on EXP1         | 2200R             |
| LPC_DATA_Ready/GPIO4   | PB10 on EXP1         | None            |
| VIN(5v)   | 5v on EXP1          | None             |
| GND   | GND on EXP1          | 2200R to RST             |

<div class="datatable-end"></div>

{% include warning.html content="The cables used need to be very very short. Even 10cm ones don't work so they must be shorter than that" %}

If you would rather use a pre-made WiFI board, then the one produced by [flymaker](https://www.aliexpress.com/item/1005001370540066.html) is recommended.  

### Prepare the SD Card

Follow the instructions on [Getting Started with RRF3](getting_started.html)

### Board.txt file

You will also need a board.txt file in the sys folder. Below are the contents that should be used.

```
//Config for Fly-407ZG
board = fly_f407zg
8266wifi.espDataReadyPin = E.15
8266wifi.TfrReadyPin = B.10
8266wifi.espResetPin = B.2
8266wifi.csPin = F.11
heat.tempSensePins = { F.3, A.0, C.1, C.0, F.10, F.5, F.4 }
```

### Updating the ESP8266 by RRF

If you have an ESP8266 WiFi adapter that supports updating via RRF, you need to add the following information to the board.txt file.  
```
8266wifi.serialRxTxPins = { A.10, A.9 }
serial.aux.rxTxPins = { nopin, nopin }
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

The Fly-407ZG is the only STM32 board that can't be used with 5160 drivers when using an ESP8266 WiFi adapter using the standard connection method. This is due to them sharing the SPI pins used to also gain SBC support. You need to connect the ESP8266 via the [alternative method](./fly_407zg_alternative_esp.html).  

#### Sensorless Homing

To be able to use sensorless homing on this board, a jumper cable needs to be installed between the diag pin of the driver and an endstop input.  
For more information about setting up sensorless homing, please read [this](sensorless.html).   

### Board.txt Location

Place the *board.txt* file in a directory called "sys" on the SD card and install the SD card in the Fly-407ZG.   

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