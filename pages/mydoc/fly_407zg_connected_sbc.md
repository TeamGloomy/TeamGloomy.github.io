---
title: Connecting a Fly-407ZG via SBC
tags: []
keywords: 
last_updated: 20/01/2021
summary: "Connecting a Fly-407ZG via SBC"
sidebar: mydoc_sidebar
permalink: fly_407zg_connected_sbc.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The Fly-407ZG is an STM32F407ZGT6 based board.

## Firmware File

Choose the correct corresponding firmware (firmware-stm32f4-sbc.bin) from [here](https://github.com/gloomyandy/RepRapFirmware/releases). Remember to rename it to firmware.bin. Put it in the root of a FAT32 formatted SD card.

## SBC

Connecting a Single Board Computer, such as a raspberry pi 3B/3B+/4

### Prepare the Raspberry Pi

Follow the instructions detailed [here](mydoc_stm32_sbc.html).

### BOM

* 5 x 100R resistor
* jumpers or other ways of connecting to the Fly-407ZG

### Connecting the SBC to the Fly-407ZG

The pinout for the Fly-407ZG can be found [here](https://github.com/FLYmaker/FLYF407ZG/blob/master/picture/Pin%20diagram.png) and the schematic for the Duet 3 for reference can be found [here](https://github.com/Duet3D/Duet3-Mainboard-6HC/blob/master/Duet3_Mainboard_v1.0/Duet3_MB_schematic_v1.0.pdf). The raspberry pi GPIO pinout can be found [here](https://www.google.com/search?q=raspberry+pi+gpio+pinout&rlz=1C1CHBD_en-GBGB889GB889&sxsrf=ALeKk01CVlA8N_CGAQqQGp-7_N3pXiV0LA:1586203613303&source=lnms&tbm=isch&sa=X&ved=2ahUKEwid56X3zNToAhXSURUIHX3IAnkQ_AUoAXoECA0QAw&biw=1920&bih=937). 

The table below shows the pins required on the SBC and what they are connected to on the Fly-407ZG. Please ensure that your cables are no longer than 30cm although they should ideally be as short as possible. 

<div class="datatable-begin"></div>

| SBC Pin       | Fly-407ZG Pin       | Resistor Value  |
| :-------------: |:-------------:| :---------------:|
| 23/BCM11/SPI0 Clk           | PB13 on EXP2          | 100R            |
| 21/BCM9/SPI0 Miso    | PB14 on EXP2         | 100R           |
| 19/BCM10/SPI0 Mosi   | PB15 on EXP2          | 100R             |
| 24/BCM8/SPIO CE0   | PF11 on EXP2          | 100R             |
| 22/BCM25  | PB2 on EXP2          | 100R             |
| 20/GND   | GND on EXP2          | None             |

<div class="datatable-end"></div>

Don't power the raspberry pi from the Fly-407ZG. Either us a 12/24v to 5v step down transformer or power the pi from the micro usb or usb-c port.

### Prepare the SD Card

All the SD card on the Fly-407ZG needs is the board.txt file with the following contents.

```
//Config for Fly-407ZG
lpc.board = fly_f407zg
sbc.lpcTfrReadyPin = B.2
sbc.csPin = F.11
```

If using TMC22XX drivers (thats either the TMC2208, TMC2209, TMC2225 or TMC2226), the following line must also be added to the board.txt file
```
stepper.numSmartDrivers = X
```
Where X is the number of drivers fitted. The drivers must be continuous and start at unit 0. So, for the Fly-407ZG board, if you have say 3 TMC2208s and 1 other driver, the 2208s must be in slots 0, 1, 2 and the remaining driver in slot 3 or 4. You can use RRF to assign any of those slots to an axis/extruder.

Place the *board.txt* file in a directory called "sys" on the SD card and install the SD card in the Fly-407ZG.   

### Finally...

Turn it all on and you should be good to go.

You can either navigate to duet3.local or find the IP address of the rasberry pi using your router. If you don't have access to that, use something like [Fing](https://www.fing.com/products/fing-desktop) to scan your network.

Once you've connected to the raspberry pi through your router, start to customise your config.g file etc or upload the outputted zip file from the [Configurator](https://teamgloomy.github.io/LPCConfigurator) to the pi using the system tab of DWC.

### Errors

Please report any  disconnects on either the forum or discord.

### Changing the SBC hostname

This is an optional step if you only have a single duet3 on your network. It is required if you have more than one SBC configured RRF setup (as each setup on a network needs a unique host name) or you just want to change the name from the default "duet3".

The name of the printer is its hostname on the network, you will need to connect to the SBC over SSH in order to run the Raspberry Pi configuration utility and change the hostname.

{% include note.html content="you cannot currently use the gcode command M550 to set your printer hostname, as you can when using a wifi setup" %}

1. Connect via ssh
2. At a command prompt type
```
sudo raspi-config
```
3. Select “System Options” -> Hostname-> “OK”-> and set the new printername/hostname.

4. Select “Finish” and reboot.

{% include note.html content="The hostname must confirm to certain limitations to be valid. Valid characters for hostnames are letters from a to z, the digits from 0 to 9, the hyphen (-)." %}