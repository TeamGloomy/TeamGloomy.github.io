---
title: Fly-CDYv3 General Information
tags: []
keywords: 
last_updated: 15/06/2022
summary: "General information regarding the Fly-CDYv3"
sidebar: mydoc_sidebar
permalink: fly_cdyv3_general.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

This page covers any general information for the Fly-CDYv3 board.  
It is currently available through [AliExpress](https://s.click.aliexpress.com/e/_DBNB4zb)

### Board.txt Name

The board name in board.txt is **fly_cdyv3**.

### Board Fuses

The board is supplied without the fuses installed.  
It is supplied with different fuses than the listing on AliExpress. The fuses should be installed as shown below.  

{% include image.html file="fly_cdyv3_fuse.png" alt="Fly-CDYv3 Fuse" caption="Fly-CDYv3 Fuse" %}

### Driver Jumpers

The jumpers should be installed as below. "Common Interpolation" should be used for standalone drivers. "SPI mode Interpolation" is supported for TMC5160 drivers. "UART mode Interpolation" should be used when using smart drivers (i.e. TMC2208, TMC2209, TMC2225 and TMC2226)

{% include image.html file="fly_e3_jumpers.png" alt="Fly-CDYv3 Jumpers" caption="Fly-CDYv3 Driver Jumper Locations" %}

### Z Driver Jumpers

If only one Z output is being used, jumpers should be installed on the other Z output as shown below.

{% include image.html file="fly_407zg_Z_Jumpers.PNG" alt="Fly-CDYv3 Z Jumpers" caption="Fly-CDYv3 Driver Z Jumper Locations" %}

### Driver Diag Pin

The driver diag pin is used for sensorless homing and stall detection.  
The Fly-CDYv3 **does not** have a way of disabling the diag pin as it is designed to be used with [Fly-2209 drivers](https://s.click.aliexpress.com/e/_Dk7RGsv) which have a switch on the underside of them for disabling the diag pin.  
If you plan on using endstops rather than sensorless homing and do not have the Fly-2209 drivers, you need to bend or remove the diag pin.  

### Driver Signal Voltage

The output voltage of each driver EN, STEP and DIR can be configured to either 3.3v, 5v or 12v. The default is 5v.  

{% include image.html file="fly_cdyv3_driver_voltage.png" alt="Fly-CDYv3 Signal Voltage" caption="Fly-CDYv3 Driver Signal Voltage" %}

### Fan Mosfets

The Fly-CDYv3 has a unique feature in that the fan mosfets are replaceable.
Each mosfet (AO3400) controls one of the fan outputs.

{% include image.html file="fly_cdyv3_fan_mosfet.png" alt="Fly-CDYv3 Fans Mosfets" caption="Fly-CDYv3 Fans Mosfets" %}

### Fan Voltage

The fan voltage can be set using jumpers to either 5v, 12v and Vin.  
Set them as shown below.  

{% include image.html file="fly_cdyv3_fan_voltage.png" alt="Fly-CDYv3 Fan Voltage" caption="Fly-CDYv3 Fan Voltage" %}

### Input voltage

The board can handle an input voltage up to 32v.

### Initial Installation

The board that you will receive doesn't have any firmware installed so when plugged into a computer, the board will show as an unidentified device.
Follow the [WiFi instructions](fly_cdyv3_connected_wifi.html).