---
title: Connecting an SKR Pro v1.1 and v1.2 via SBC
tags: []
keywords: 
last_updated: 15/01/2021
summary: "Connecting an SKR Pro v1.1 and v1.2 via SBC"
sidebar: mydoc_sidebar
permalink: mydoc_skr_pro_connected_sbc.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The SKR Pro v1.1 and v1.2 are STM32F407ZGT6 based boards.

## Firmware File

Choose the correct corresponding firmware (firmware-stm32f4-sbc.bin) from [here](https://github.com/gloomyandy/RepRapFirmware/releases). Remember to rename it to firmware.bin. Put it in the root of the SD card.

## SBC

Connecting a Single Board Computer, such as a raspberry pi 3B/3B+/4

### Prepare the Raspberry Pi

Follow the instructions detailed [here](mydoc_stm32_sbc.html).

### BOM

* 5 x 100R resistor
* jumpers or other ways of connecting to the SKR

### Connecting the SBC to the SKR Pro v1.1 and 1.2

The pinout for the SKR (The EXP1 and EXP2 pinouts are the same for the SKR Pro v1.1 and 1.2) can be found [here](https://github.com/bigtreetech/BIGTREETECH-SKR-PRO-V1.1/blob/master/manual/SKR-PRO-V1.1-Pin.pdf) and the schematic for the Duet 3 for reference can be found [here](https://github.com/Duet3D/Duet3-Mainboard-6HC/blob/master/Duet3_Mainboard_v1.0/Duet3_MB_schematic_v1.0.pdf). The raspberry pi GPIO pinout can be found [here](https://www.google.com/search?q=raspberry+pi+gpio+pinout&rlz=1C1CHBD_en-GBGB889GB889&sxsrf=ALeKk01CVlA8N_CGAQqQGp-7_N3pXiV0LA:1586203613303&source=lnms&tbm=isch&sa=X&ved=2ahUKEwid56X3zNToAhXSURUIHX3IAnkQ_AUoAXoECA0QAw&biw=1920&bih=937). 

The table below shows the pins required on the SBC and what they are connected to on the SKR Pro v1.1 and 1.2. Please ensure that your cables are no longer than 30cm although they should ideally be as short as possible.  

<div class="datatable-begin"></div>

| SBC Pin       | SKR Pin       | Resistor Value  |
| :-------------: |:-------------:| :---------------:|
| 23/BCM11/SPI0 Clk           | PB13          | 100R            |
| 21/BCM9/SPI0 Miso    | PB14          | 100R           |
| 19/BCM10/SPI0 Mosi   | PB15          | 100R             |
| 24/BCM8/SPIO CE0   | PB12          | 100R             |
| 22/BCM25  | PF12          | 100R             |
| 6/GND   | GND on EXP2          | None             |

<div class="datatable-end"></div>

Don't power the raspberry pi from the SKR Pro. Either us a 12/24v to 5v step down transformer or power the pi from the micro usb or usb-c port.

### Prepare the SD Card

All the SD card on the SKR Pro v1.1 and 1.2 needs is the board.txt file with the following contents.

```
//Config for SKR Pro v1.1 and 1.2
lpc.board = biquskrpro_1.1
sbc.lpcTfrReadyPin = F.12
adc.prefilter.enable =true
```

If using TMC22XX drivers (thats either the TMC2208, TMC2209, TMC2225 or TMC2226), the following line must also be added to the board.txt file
```
stepper.numSmartDrivers = X
```
Where X is the number of drivers fitted. The drivers must be continuous and start at unit 0. So, for the SKR board, if you have say 3 TMC2208s and 1 other driver, the 2208s must be in slots 0, 1, 2 and the remaining driver in slot 3 or 4. You can use RRF to assign any of those slots to an axis/extruder.

{% include warning.html content="The SKR Pro v1.1 and v1.2 sensorless homing jumpers don't do anything so if you don't want to use sensorless homing and use normal endstops, you will have to remove the diag pin from your drivers." %}

If using sensorless homing/stall detection (supported by only the TMC2209 or TMC2226), the following line must be added to the board.txt file.
```
stepper.TmcDiagPins = {B.10, E.12, G.8, E.15, E.10, G.5}
```
Please only include the diag pin numbers where you intend to use sensorless homing on that axis. For example, if you only intend to use sensorless homing/stall detection on driver 0 and driver 1, only include B.10 and E.12 in your board.txt file.

Place the *board.txt* file in a directory called "sys" on the SD card and install the SD card in the SKR Pro v1.1 and 1.2.   

### Finally...

Turn it all on and you should be good to go.

You can either navigate to duet3.local or find the IP address of the rasberry pi using your router. If you don't have access to that, use something like [Fing](https://www.fing.com/products/fing-desktop) to scan your network.

Once you've connected to the raspberry pi through your router, start to customise your config.g file etc or upload the outputted zip file from the [LPC Configurator](https://jaysuk.github.io/LPCConfigurator) to the pi using the system tab of DWC.

### Errors

Please report any  disconnects on either the forum or discord.