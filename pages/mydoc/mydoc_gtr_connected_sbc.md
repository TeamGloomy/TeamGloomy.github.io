---
title: Connecting a GTR via SBC
tags: []
keywords: 
last_updated: 15/01/2021
summary: "Connecting a GTR via SBC"
sidebar: mydoc_sidebar
permalink: mydoc_gtr_connected_sbc.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The GTR is an STM32F407ZGT6 based board.

## Firmware File

Choose the correct corresponding firmware (firmware-stm32f4-sbc.bin) from [here](https://github.com/gloomyandy/RepRapFirmware/releases). Remember to rename it to firmware.bin. Put it in the root of the SD card.

## SBC

Connecting a Single Board Computer, such as a raspberry pi 3B/3B+/4

### Prepare the Raspberry Pi

Follow the instructions detailed [here](mydoc_stm32_sbc.html).

### BOM

* 5 x 100R resistor
* jumpers or other ways of connecting to the GTR

### Connecting the SBC to the SKR GTR v1.0

The pinout for the SKR can be found [here](https://github.com/bigtreetech/BIGTREETECH-GTR-V1.0/blob/master/BTT%20GTR%20V1.0/manual/GTR%20V1.0%20PIn.PDF) and the schematic for the Duet 3 for reference can be found [here](https://github.com/Duet3D/Duet3-Mainboard-6HC/blob/master/Duet3_Mainboard_v1.0/Duet3_MB_schematic_v1.0.pdf). The raspberry pi GPIO pinout can be found [here](https://www.google.com/search?q=raspberry+pi+gpio+pinout&rlz=1C1CHBD_en-GBGB889GB889&sxsrf=ALeKk01CVlA8N_CGAQqQGp-7_N3pXiV0LA:1586203613303&source=lnms&tbm=isch&sa=X&ved=2ahUKEwid56X3zNToAhXSURUIHX3IAnkQ_AUoAXoECA0QAw&biw=1920&bih=937). 

The table below shows the pins required on the SBC and what they are connected to on the GTR. Please ensure that your cables are no longer than 30cm although they should ideally be as short as possible.  

<div class="datatable-begin"></div>

| SBC Pin       | GTR Pin       | Resistor Value  |
| :-------------: |:-------------:| :---------------:|
| 23/BCM11/SPI0 Clk           | PB13          | 100R            |
| 21/BCM9/SPI0 Miso    | PB14          | 100R           |
| 19/BCM10/SPI0 Mosi   | PB15          | 100R             |
| 24/BCM8/SPIO CE0   | PB12          | 100R             |
| 22/BCM25  | PB10          | 100R             |
| 20/GND   | GND on EXP2          | None             |

<div class="datatable-end"></div>

Don't power the raspberry pi from the GTR. Either us a 12/24v to 5v step down transformer or power the pi from the micro usb or usb-c port.

### Prepare the SD Card

All the SD card on the SKR GTR needs is the board.txt file with the following contents.

```
//Config for SKR GTR v1.0
lpc.board = biqugtr_1.0
sbc.lpcTfrReadyPin = B.10
```

If using TMC22XX drivers (thats either the TMC2208 or TMC2209), the following line must also be added to the board.txt file
```
stepper.numSmartDrivers = X
```
Where X is the number of drivers fitted. The drivers must be continuous and start at unit 0. So, for the SKR board, if you have say 3 TMC2208s and 1 other driver, the 2208s must be in slots 0, 1, 2 and the remaining driver in slot 3 or 4. You can use RRF to assign any of those slots to an axis/extruder.

{% include warning.html content="The GTR sensorless homing jumpers don't do anything so if you don't want to use sensorless homing and use normal endstops, you will have to remove the diag pin from your drivers - [Evidence](https://github.com/bigtreetech/BIGTREETECH-GTR-V1.0/issues/12)" %}

If using sensorless homing/stall detection (supported by only the TMC2209 or TMC2226), the following line must be added to the board.txt file.
```
stepper.TmcDiagPins = {F.2, C.13, E.0, G.14, G.9, D.3, I.4, F.4, F.6, I.7, F.12}
```
Please only include the diag pin numbers where you intend to use sensorless homing on that axis. For example, if you only intend to use sensorless homing/stall detection on driver 0 and driver 1, only include F.2 and C.13 in your board.txt file.

Place the *board.txt* file in a directory called "sys" on the SD card and install the SD card in the SKR Pro v1.1 and 1.2.   

### Finally...

Turn it all on and you should be good to go.

You can either navigate to duet3.local or find the IP address of the rasberry pi using your router. If you don't have access to that, use something like [Fing](https://www.fing.com/products/fing-desktop) to scan your network.

Once you've connected to the raspberry pi through your router, start to customise your config.g file etc or upload the outputted zip file from the [LPC Configurator](https://jaysuk.github.io/LPCConfigurator) to the pi using the system tab of DWC.

### Errors

Please report any  disconnects on either the forum or discord.