---
title: Connecting an MKS Sbase v1.3 via Wifi
tags: []
keywords: 
last_updated: 21/01/2021
summary: "Connecting an MKS Sbase v1.3 via Wifi"
sidebar: mydoc_sidebar
permalink: mks_sbase_connected_wifi.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The MKS Sbase is an LPC1768 based board. 

## Firmware File

Choose the correct corresponding firmware (firmware-lpc-esp8266wifi.bin) from [here](https://github.com/gloomyandy/RepRapFirmware/releases). Remember to rename it to firmware.bin. Put it in the root of a FAT32 formatted SD card.   

## Wifi

{% include warning.html content="To be able to use wifi with the MKS Sbase v1.3, a hardware modification is required." %}

I’ve used a nodemcu ESP8266 with USB programming as it already 5v tolerant and it allows for updating via USB.

### Background

The main problem is that MOSI0 is not available at a pin header other than the LCD headers and there it is only available via a level shifter. 
Unfortunately that level shifter is one way and so MOSI0 can only be used as an output, but in the case of the WiFi module on the LPC, it is an SPI slave device, not a master and so this pin needs to be used as an input, which means it is not going to work. 
All of the other MOSI0 lines can be found on J7 but unfortunately not P0.18.
MOSI0 can be routed either to pin P0.18 or to pin P1.24. P1.24 is the X- endstop pin so is externally accessible. However it has a small filter (couple of resistors and a capacitor) hooked up to it and these prevent the high speed SPI signal from being read by the MCU.

### Modification of the MKS Sbase v1.3

As P1.24 (the Xmin pin) is most easily accessible, we are going to go that route.
Three components need to be removed from the board using a soldering iron.
They are R39, R42 and C32 and can be found next to the Xmin endstop.
Once removed, R42 (the bottom one) should be bridged. A small piece of wire can be used (in the image below, it was a small piece of resistor leg).

{% include image.html file="mks_sbase_mod.jpg" alt="MKS Sbase MOD" caption="MKS Sbase Modification" %}

### BOM

* 1 x nodemcu ESP8266 or Wemos D1 mini
* 3 x 47R resistor
* 1 x 470R resistor
* 3 x 2200R resistor
* jumpers or other ways of connecting to the MKS Sbase

### Preparing the ESP

Follow the instructions [here](mydoc_lpc_esp.html).

### Connecting the ESP

The pinout for the MKS Sbase v1.3 can be found [here](https://github.com/bigtreetech/BIGTREETECH-SKR-V1.3/blob/master/BTT%20SKR%20V1.4/Hardware/BTT%20SKR%20V1.4PIN.pdf) and the schematic for the Duet 2 Wifi for reference can be found [here](https://github.com/T3P3/Duet/blob/master/Duet2/Duet2v1.04/DuetWifiv1.04a_Schematic.pdf). 

The table below shows the pins required on the ESP and what they are connected to on the SKR. Please ensure that your cables are no longer than 30cm although they should ideally be as short as possible.  

<div class="datatable-begin"></div>

| ESP Pin       | MKS Sbase Pin       | Resistor Value  |
| :-------------: |:-------------:| :---------------:|
| RST           | 1.31 on EXP1         | 470R            |
| CS/GPIO15     | 0.16 on J7        | 2200R           |
| MOSI/GPIO13   | 1.24 on xstop        | 47R             |
| MISO/GPIO12   | 0.17 on J7         | 47R             |
| SCLK/GPIO14  | 0.15 on J7         | 47R             |
| ESP_DATA_Ready/GPIO0   | 2.11 on J8         | 2200R             |
| LPC_DATA_Ready/GPIO4   | 1.30 on EXP1         | None            |
| VIN(5v)   | 5v on EXP1          | None             |
| GND   | GND on EXP1          | 2200R to RST             |

<div class="datatable-end"></div>

{% include note.html content="Make sure that you use the pins on J7 (0.15, 0.16 and 0.17) rather than those available on EXP1."%}

### Prepare the SD Card

Follow the instructions on [Getting Started with RRF3](https://github.com/gloomyandy/RepRapFirmware/wiki/Getting-Started---RRF3)

### Board.txt file

You will also need a board.txt file in the sys folder. Below are the contents that should be used.

```
//Config for MKS Sbase v1.3
lpc.board = mkssbase_1.3
//wifi pins
8266wifi.espDataReadyPin = 2.11
8266wifi.lpcTfrReadyPin = 1.30
8266wifi.espResetPin = 1.31
SSP0.pins = {0.15, 0.17, 1.24, 0.16}
```

### Final Setup

Once connected, power up the board using 12-24v and connect to the USB port on the board. Using a program such as [termite](https://www.compuphase.com/software_termite.htm), connect to the board. As of release 3.2_4, the recommended terminal program is [YAT](https://sourceforge.net/projects/y-a-terminal/). Then type in the following

```
M552 S0
M587 S"your SSID" P"your password"
M552 S1
```

{% include warning.html content="**DO NOT USE PRONTERFACE** it will convert all text to upper case. If you really must, please do the following. <br/>  If you wanted to use “PassWord”, you would write P”P’a’s’sW’o’r’d” with the ‘ indicating the following letter should be lower case. Explanation [here](https://duet3d.dozuki.com/Wiki/Gcode#Section_M587_Add_WiFi_host_network_to_remembered_list_or_list_remembered_networks)." %}

The blue light on the wifi chip shoould then flash blue and will go solid when a connection has been established. The ip address will be shown on the serial connection. It is also possible to type just M552 to get the current ip address reported back.

The final thing to do is add the line “M552 S1” to your config file. This can be done through the web interface. This just ensures that the wifi connection is started at start up. There is no need to add the M587 command as this is written permanently to the flash of the ESP chip.