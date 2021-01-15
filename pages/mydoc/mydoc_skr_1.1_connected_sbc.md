---
title: Connecting an SKR 1.1 via SBC
tags: []
keywords: 
last_updated: 15/01/2021
summary: "Connecting an SKR 1.1 via SBC"
sidebar: mydoc_sidebar
permalink: mydoc_skr_1.1_connected_sbc.html
folder: mydoc
comments: false
toc: false
---

## Overview

The SKR 1.1 is an LPC1768 based board.

## Firmware File

Choose the correct corresponding firmware (firmware-lpc-sbc.bin) from [here](https://github.com/gloomyandy/RepRapFirmware/releases). Remember to rename it to firmware.bin

## SBC

Connecting a Single Board Computer, such as a raspberry pi 3B/3B+/4

### Prepare the Raspberry Pi

Follow the instructions detailed [here](https://github.com/gloomyandy/RepRapFirmware/wiki/SBC-LPC-Stable) for Stable builds
Follow the instructions detailed [here](https://github.com/gloomyandy/RepRapFirmware/wiki/SBC-LPC-Unstable) for Unstable/Beta builds

### BOM

* 5 x 100R resistor
* jumpers or other ways of connecting to the SKR

### Connecting the SBC to the SKR v1.1

The pinout for the SKR can be found [here](https://github.com/gloomyandy/RepRapFirmware/wiki/SKR-1.1-Pins) and the schematic for the Duet 3 for reference can be found [here](https://github.com/Duet3D/Duet3-Mainboard-6HC/blob/master/Duet3_Mainboard_v1.0/Duet3_MB_schematic_v1.0.pdf). The raspberry pi GPIO pinout can be found [here](https://www.google.com/search?q=raspberry+pi+gpio+pinout&rlz=1C1CHBD_en-GBGB889GB889&sxsrf=ALeKk01CVlA8N_CGAQqQGp-7_N3pXiV0LA:1586203613303&source=lnms&tbm=isch&sa=X&ved=2ahUKEwid56X3zNToAhXSURUIHX3IAnkQ_AUoAXoECA0QAw&biw=1920&bih=937). 

The table below shows the pins required on the SBC and what they are connected to on the SKR. Please ensure that your cables are no longer than 30cm although they should ideally be as short as possible.  

| SBC Pin       | SKR Pin       | Resistor Value  |
| :-------------: |:-------------:| :---------------:|
| 23/BCM11/SPI0 Clk           | 0.15          | 100R            |
| 21/BCM9/SPI0 Miso    | 0.17          | 100R           |
| 19/BCM10/SPI0 Mosi   | 0.18          | 100R             |
| 24/BCM8/SPIO CE0   | 0.16          | 100R             |
| 22/BCM25  | 1.31          | 100R             |
| 6/GND   | GND on EXP1          | None             |

Don't power the raspberry pi from the SKR. Either us a 12/24v to 5v step down transformer or power the pi from the micro usb or usb-c port.

### Prepare the SD Card

All the SD card on the SKR v1.1 needs is the board.txt file with the following contents.

```
//Config for BIQU SKR v1.1
lpc.board = biquskr_1.1
sbc.lpcTfrReadyPin = 1.31
adc.prefilter.enable =true
```

Place the *board.txt* file in a directory called "sys" on the SD card and install the SD card in the SKR v1.1.   

### Finally...

Turn it all on and you should be good to go.

You can either navigate to duet3.local or find the IP address of the rasberry pi using your router. If you don't have access to that, use something like [Fing](https://www.fing.com/products/fing-desktop) to scan your network.

Once you've connected to the raspberry pi through your router, start to customise your config.g file etc or upload the outputted zip file from the [LPC Configurator](https://jaysuk.github.io/LPCConfigurator) to the pi using the system tab of DWC.

### Errors

Please report any  disconnects on either the forum or discord.