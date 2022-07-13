---
title: Fly-407ZG General Information
tags: []
keywords: 
last_updated: 15/06/2022
summary: "General information regarding the Fly-407ZG"
sidebar: mydoc_sidebar
permalink: fly_407zg_general.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

This page covers any general information for the Fly-407ZG board.  
It is currently available through [AliExpress](https://www.aliexpress.com/item/4000609195834.html)

### Board.txt Name

The board name in board.txt is **fly_f407zg**.

### Heatsinks

The Fly-407ZG is supplied with 2 heatsinks. They should be installed as per the image below.

{% include image.html file="fly_407zg_heatsinks.jpg" alt="Fly-407ZG heatsink" caption="Fly-407ZG Heatsink Installation Location" %}

### Driver Jumpers

The jumpers should be installed as below. "Common Interpolation" should be used for standalone drivers. "SPI mode Interpolation" is not a currently supported configuration as this port does not support SPI communication to drivers. "UART mode Interpolation" should be used when using smart drivers (i.e. TMC2208, TMC2209, TMC2225 and TMC2226)

{% include image.html file="fly_407zg_jumpers.png" alt="Fly-407ZG Jumpers" caption="Fly-407ZG Driver Jumper Locations" %}

### Input voltage

The board can handle an input voltage up to 32v.

### Initial Installation

The board that you will receive doesn't have any firmware installed so when plugged into a computer, the board will show as an unidentified device.
Follow the [ESP8266 WiFi instructions](fly_407zg_connected_wifi_8266.html), [ESP32 WiFi instructions](fly_407zg_connected_wifi_32.html) or the [SBC instructions](fly_407zg_connected_sbc.html) for what to do next.

## Issues

Some boards shipped are missing the bootloader.  
If your board has the Mellow logo on the back and when you place a firmware.bin file on the SD card and it doesn;t get converted, then yours is one of these boards.  
Follow the below steps to rectify this issue.  

1. Download and install the STM32 software from [here](https://www.stmicroelectronics.com.cn/content/st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-programmers/stm32cubeprog.html).  
2. Add two jumpers to the fly board as shown below.

{% include image.html file="fly_407zg_fix.png" alt="Fly-407ZG Fix" caption="Fly-407ZG Fix Jumper Locations" %}

3. Plug the board in by USB. It should show up in the device manager as shown below.

{% include image.html file="fly_407zg_fix1.png" alt="Fly-407ZG Fix1" caption="Fly-407ZG Device Manager" %}

4. Open the STM32 software and configure the connection settings as shown below.  

{% include image.html file="fly_407zg_fix2.png" alt="Fly-407ZG Fix2" caption="Fly-407ZG Connection" %}

5. Download the latest copy of the bootloader from [here](https://github.com/FLYmaker/f407bootloader/releases/).  

6. Open the bootloader in the software as shown below.  

{% include image.html file="fly_407zg_fix3.png" alt="Fly-407ZG Fix3" caption="Fly-407ZG Load the Bootloader File" %}

7. Click the "Download" button as shown below.  

{% include image.html file="fly_407zg_fix4.png" alt="Fly-407ZG Fix4" caption="Fly-407ZG Flash the Bootloader" %}

8. Once complete, disconnect the Fly-407ZG from the computer and remove the jumpers. It can now be used as normal.  