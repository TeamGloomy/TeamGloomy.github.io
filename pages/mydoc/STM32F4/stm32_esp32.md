---
title:  Configuring an ESP32 WiFi Module for STM32 Boards
tags: 
keywords: 
last_updated: 27/06/2023
summary: "How to configure an ESP32 WiFi Module for use with STM32 Based Boards"
sidebar: mydoc_sidebar
permalink: stm32_esp32.html
folder: mydoc
toc: false
comments: false
---

<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a class="noCrossRef" href="#preparing" data-toggle="tab">Initial Configuration</a></li>
    <li><a class="noCrossRef" href="#updating" data-toggle="tab">Updating Existing</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="preparing" markdown="1">

## Overview

These instructions are aimed at users who's mainboard does not contain an onboard WiFi Module and an extra module has had to be connected to the EXP1/EXP2 ports.  

## Initial Configuration

### Manual Flashing

The image to flash to the ESP32 can be found [here](https://github.com/gloomyandy/DuetWiFiSocketServer/releases).  

{% include note.html content="Use the latest release for stable builds and the newest pre-release for unstable builds.  <br/>
Make sure you download DuetWiFiServer-esp32-stm32f4.bin  " %}  

It should be flashed using [esptool.py](https://github.com/espressif/esptool). Use the code below as an example. Change the Com port to match the ESP32 device and make sure you give the .bin file its complete file location if its not in the same folder as esptools.

`esptool.py --chip esp32 --port COM4 write_flash 0x00000 DuetWiFiServer-esp32-stm32f4.bin`

On a side note, I have a very handy little tool installed on my main laptop thats monitoring for any serial devices as they are plugged in and you get a popup with the Com port number. If you’re interested, it can be found [here](https://helmpcb.com/software/serial-port-monitor).

### RRF based flashing

{% include warning.html content="This cannot be used in conjunction with using a screen on the Fly-407ZG unless using the alternative wifi method" %}  

The WiFi UART interface will require changes to your board.txt file. You need to define the pins used by the UART (the builds provided have support for UART0 and UART3 defined, this takes the form:
`8266wifi.serialRxTxPins = {RXPin, TXPin}`
This information has been added to the connecting via WiFi page for each board.  

You will also need to hook up the ESP32 UART pins (marked RX/TX on most modules).

Download the latest stable DuetWiFiServer-esp32-stm32f4.bin (or the latest unstable release if using unstable releases) from [here](https://github.com/gloomyandy/DuetWiFiSocketServer/releases), rename it to DuetWiFiServer.bin and put it in the sys folder on the SD card.

{% include important.html content="From 3.3, the DuetWiFiServer.bin file needs to be placed in a folder called firmware. This folder should be placed in the root of the SD card."%}  

Then send the following commands  

```text
M552 S0
M997 S1
M552 S0
```

</div>

<div role="tabpanel" class="tab-pane" id="updating" markdown="1">

## Updating Existing

There are two methods to update the boards if a new version of the ESP32 firmware is released

### Manual Updating

This method follows the flashing instructions for preparation. To allow the ESP32 to be put in reset mode, its best to disconnect it from the board.

### DWC based Updating

{% include warning.html content="This cannot be used in conjunction with using a screen on the Fly-407ZG unless using the alternative wifi method" %}  

The WiFi UART interface will require changes to your board.txt file. You need to define the pins used by the UART (the builds provided have support for UART0 and UART3 defined), this takes the form:
`8266wifi.serialRxTxPins = {RXPin, TXPin}`
This information has been added to the connecting via WiFi page for each board.  

You will also need to hook up the ESP32 UART pins (marked RX/TX on most modules).

Download the latest stable DuetWiFiServer-esp32-stm32f4.bin (or the latest unstable release if using unstable releases) from [here](https://github.com/gloomyandy/DuetWiFiSocketServer/releases) and upload it to the system folder using DWC. DWC should ask you if you want to install the update. If it doesn't, issue the command M997 S1.

</div>

</div>
