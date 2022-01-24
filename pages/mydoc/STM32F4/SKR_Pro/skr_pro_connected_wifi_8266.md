---
title: Connecting an SKR Pro v1.1 and v1.2 via an ESP8266 WiFi Adapter
tags: []
keywords: 
last_updated: 15/07/2021
summary: "Connecting an SKR Pro v1.1 and v1.2 via an ESP8266 WiFi Adapter"
sidebar: mydoc_sidebar
permalink: skr_pro_connected_wifi_8266.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The SKR Pro v1.1 and v1.2 are STM32F407ZGT6 based boards.

## Firmware File

Choose the correct corresponding firmware (firmware-stm32f4-wifi-XXX.bin) from [here](https://github.com/gloomyandy/RepRapFirmware/releases). Remember to rename it to firmware.bin. Put it in the root of a FAT32 formatted SD card.  

## ESP8266 WiFi

Use a nodemcu ESP8266 with USB programming as it already 5v tolerant and it allows for updating via USB.

{% include tip.html content="If you would prefer a premade adapter to enable WiFi, TeamGloomy have created a plugin WiFi adapter board for the SKR Pro v1.1 and v1.2. It can be purchased on tindie [here](https://www.tindie.com/products/pcr/reprapfirmware-wifi-adapterboard-for-skr-pro/) " %}

### BOM

* 1 x nodemcu ESP8266 or Wemos D1 mini
* 3 x 47R resistor
* 1 x 470R resistor
* 3 x 2200R resistor
* jumpers or other ways of connecting to the SKR

### Preparing the ESP8266

Follow the instructions [here](https://github.com/gloomyandy/RepRapFirmware/wiki/ESP8266-LPC).

### Connecting the ESP8266

The pinout for the SKR (The EXP1 and EXP2 pinouts are the same for the SKR Pro v1.1 and 1.2) can be found [here](https://github.com/bigtreetech/BIGTREETECH-SKR-PRO-V1.1/blob/master/manual/SKR-PRO-V1.1-Pin.pdf) and the schematic for the Duet 2 WiFi for reference can be found [here](https://github.com/T3P3/Duet/blob/master/Duet2/Duet2v1.04/DuetWifiv1.04a_Schematic.pdf). 

The table below shows the pins required on the ESP8266 and what they are connected to on the SKR. Please ensure that your cables are no longer than 30cm although they should ideally be as short as possible.  

<div class="datatable-begin"></div>

| ESP8266 Pin       | SKR Pin       | Resistor Value  |
| :-------------: |:-------------:| :---------------:|
| RST           | PF12 on EXP2         | 470R            |
| CS/GPIO15     | PB12 on EXP2         | 2200R           |
| MOSI/GPIO13   | PB15 on EXP2         | 47R             |
| MISO/GPIO12   | PB14 on EXP2         | 47R             |
| SCLK/GPIO14  | PB13 on EXP2         | 47R             |
| ESP_DATA_Ready/GPIO0   | PA8 on EXP1         | 2200R             |
| LPC_DATA_Ready/GPIO4   | PG4 on EXP1         | None            |
| VIN(5v)   | 5v on EXP1          | None             |
| GND   | GND on EXP1          | 2200R to RST             |

<div class="datatable-end"></div>

{% include warning.html content="The cables used need to be very very short. Even 10cm ones don't work so they must be shorter than that" %}

### Prepare the SD Card

Follow the instructions on [Getting Started with RRF3](getting_started.html)

### Board.txt file

You will also need a board.txt file in the sys folder. Below are the contents that should be used.

```
//Config for SKR Pro v1.1 and 1.2
board = biquskrpro_1.1
8266wifi.espDataReadyPin = A.8
8266wifi.TfrReadyPin = G.4
8266wifi.espResetPin = F.12
heat.tempSensePins = { F.6, F.3, F.4, F.5 }
```

### Updating the ESP8266 by RRF

If you have a WiFi adapter that supports updating via RRF, you need to add the following information to the board.txt file.   
```
8266wifi.serialRxTxPins = { D.9, D.8 } 
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

TMC5160 drivers are supported from 3.3 beta 1 onwards.
If using TMC5160 drivers, the following lines must also be added to the board.txt file.  
```
stepper.num5160Drivers = X
stepper.spiChannel = 2
```
Where X is the number of TMC5160 drivers fitted. The drivers must be continuous and start at unit 0. So, if you have say 3 TMC5160s and 1 TMC22XX and 1 other driver, the 5160s must be in slots 0, 1, and 2, the TMC22XX in slot 3 and the remaining driver in 4. You can use RRF to assign any of those slots to an axis/extruder.  

The SKR Pro also uses a different pin for the CS for SPI so you need to modify stepper.TmcUartPins in board.txt accordingly.

<div class="datatable-begin"></div>

| Driver       | UART Pin       | SPI Pin  |
| :-------------: |:-------------:| :---------------:|
| X           | C.13         | A.15           |
| Y     | E.3         | B.8           |
| Z   | E.1         | B.9             |
| E0   | D.4        | B.3             |
| E1  | D.1         | G.15             |
| E2   | D.6        | G.12             |
| BTT-EXP-MOT 1 | F.11 ||
| BTT-EXP-MOT 2 | G.10 ||

<div class="datatable-end"></div>

For example, if you had TMC5160s on X and Y, you would add the following line to your board.txt
```
stepper.TmcUartPins = { A.15, B.8, E.1, D.4, D.1, D.6, F.11, G.10, NoPin, NoPin, NoPin }
```
Note the added two SPI pins for the TMC5160s and then the remainder of the pins are the UART pins used by TMC22XX drivers.

#### Sensorless Homing

**Supported by only the TMC2209, TMC2226 and TMC5160**
If using sensorless homing/stall detection with TMC2209 or TMC2226 the following line must be added to the board.txt file. It is not needed with TMC5160.
```
stepper.TmcDiagPins = { B.10, E.12, G.8, E.15, E.10, G.5 }
```
Please only include the diag pin numbers where you intend to use sensorless homing on that axis.  
For example, if you only intend to use sensorless homing/stall detection on driver 0 and driver 1, only include B.10 and E.12 in your board.txt file.  
For more information about setting up sensorless homing, please read [this](sensorless.html).   

#### Driver Diag Pin

{% include warning.html content="The SKR Pro v1.1 and v1.2 sensorless homing jumpers don't do anything so if you don't want to use sensorless homing and use normal endstops, you will have to remove the diag pin from your drivers - [Evidence](https://github.com/bigtreetech/BIGTREETECH-GTR-V1.0/issues/12)" %}

### Board.txt Location

Place the *board.txt* file in a directory called "sys" on the SD card and install the SD card in the SKR Pro.

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