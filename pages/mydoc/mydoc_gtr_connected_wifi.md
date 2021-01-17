---
title: Connecting a GTR via Wifi
tags: []
keywords: 
last_updated: 15/01/2021
summary: "Connecting a GTR via Wifi"
sidebar: mydoc_sidebar
permalink: mydoc_gtr_connected_wifi.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The GTR is an STM32F407ZGT6 based board.

## Firmware File

Choose the correct corresponding firmware (firmware-stm43f4-esp8266wifi.bin) from [here](https://github.com/gloomyandy/RepRapFirmware/releases). Remember to rename it to firmware.bin. Put it in the root of the SD card.

## Wifi

Use a nodemcu ESP8266 with USB programming as it already 5v tolerant and it allows for updating via USB.

{% include tip.html content="If you would prefer a premade adapter to enable WiFi, TeamGloomy have created a plugin WiFi adapter board for the GTR. It can be purchased on tindie [here](https://www.tindie.com/products/pcr/reprapfirmware-wifi-adapterboard-for-gtr/) " %}

### BOM

* 1 x nodemcu ESP8266 or Wemos D1 mini
* 3 x 47R resistor
* 1 x 470R resistor
* 3 x 2200R resistor
* jumpers or other ways of connecting to the GTR

### Preparing the ESP

Follow the instructions [here](mydoc_stm32_esp.html).

### Connecting the ESP

The pinout for the GTR can be found [here](https://github.com/bigtreetech/BIGTREETECH-SKR-PRO-V1.1/blob/master/manual/SKR-PRO-V1.1-Pin.pdf) and the schematic for the Duet 2 Wifi for reference can be found [here](https://github.com/T3P3/Duet/blob/master/Duet2/Duet2v1.04/DuetWifiv1.04a_Schematic.pdf). 

The table below shows the pins required on the ESP8266 and what they are connected to on the SKR. Please ensure that your cables are no longer than 30cm although they should ideally be as short as possible.  

<div class="datatable-begin"></div>

| ESP Pin       | GTR Pin       | Resistor Value  |
| :-------------: |:-------------:| :---------------:|
| RST           | PB10          | 470R            |
| CS/GPIO15     | PB12          | 2200R           |
| MOSI/GPIO13   | PB15          | 47R             |
| MISO/GPIO12   | PB14          | 47R             |
| SCLK/GPIO14  | PB13          | 47R             |
| ESP_DATA_Ready/GPIO0   | PA15          | 2200R             |
| LPC_DATA_Ready/GPIO4   | PC11          | None            |
| VIN(5v)   | 5v on EXP1          | None             |
| GND   | GND on EXP1          | 2200R to RST             |

<div class="datatable-end"></div>

{% include warning.html content="The cables used need to be very very short. Even 10cm ones don't work so they must be shorter than that" %}

### Prepare the SD Card

Follow the instructions on [Getting Started with RRF3](https://github.com/gloomyandy/RepRapFirmware/wiki/Getting-Started---RRF3)

### Board.txt file

You will also need a board.txt file in the sys folder. Below are the contents that should be used.

```
//Config for SKR GTR v1.0
lpc.board = biqugtr_1.0
8266wifi.espDataReadyPin = A.15
8266wifi.lpcTfrReadyPin = C.11
8266wifi.espResetPin = B.10
```

If using TMC22XX drivers (thats either the TMC2208, TMC2209, TMC2225 or TMC2226), the following line must also be added to the board.txt file
```
stepper.numSmartDrivers = X
```
Where X is the number of drivers fitted. The drivers must be continuous and start at unit 0. So, for the GTR board, if you have say 3 TMC2208s and 1 other driver, the 2208s must be in slots 0, 1, 2 and the remainiong driver in slot 3 or 4. You can use RRF to assign any of those slots to an axis/extruder.

{% include warning.html content="The GTR sensorless homing jumpers don't do anything so if you don't want to use sensorless homing and use normal endstops, you will have to remove the diag pin from your drivers - [Evidence](https://github.com/bigtreetech/BIGTREETECH-GTR-V1.0/issues/12)" %}

If using sensorless homing/stall detection (supported by only the TMC2209 or TMC2226), the following line must be added to the board.txt file.
```
stepper.TmcDiagPins = {F.2, C.13, E.0, G.14, G.9, D.3, I.4, F.4, F.6, I.7, F.12}
```
Please only include the diag pin numbers where you intend to use sensorless homing on that axis. For example, if you only intend to use sensorless homing/stall detection on driver 0 and driver 1, only include F.2 and C.13 in your board.txt file.

### Final Setup

Once connected, power up the board using 12-24v and connect to the USB port on the board. Using a program such as [termite](https://www.compuphase.com/software_termite.htm), connect to the board. Then type in the following

```
M552 S0
M587 S"your SSID" P"your password"
M552 S1
```

{% include warning.html content="**DO NOT USE PRONTERFACE** it will convert all text to upper case. If you really must, please do the following. <br/>  If you wanted to use “PassWord”, you would write P”P’a’s’sW’o’r’d” with the ‘ indicating the following letter should be lower case. Explanation [here](https://duet3d.dozuki.com/Wiki/Gcode#Section_M587_Add_WiFi_host_network_to_remembered_list_or_list_remembered_networks)." %}

The blue light on the wifi chip shoould then flash blue and will go solid when a connection has been established. The ip address will be shown on the serial connection. It is also possible to type just M552 to get the current ip address reported back.

The final thing to do is add the line “M552 S1” to your config file. This can be done through the web interface. This just ensures that the wifi connection is started at start up. There is no need to add the M587 command as this is written permanently to the flash of the ESP chip.