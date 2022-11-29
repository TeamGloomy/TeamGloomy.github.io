---
title: Fly-Super8Pro H743 General Information
tags: []
keywords: 
last_updated: 29/11/2022
summary: "General information regarding the Fly-Super8Pro H743"
sidebar: mydoc_sidebar
permalink: fly_super8pro_h743_general.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

This page covers any general information for the Fly-Super8Pro H743 board.  
It is currently available through [AliExpress](https://www.aliexpress.com/item/1005004431621335.html). 

### Board.txt Name

The board name in board.txt is **fly_super8h7**.

### Board Fuses

The board is supplied without the fuses installed.  
It is supplied with different fuses than the listing on AliExpress. The fuses should be installed as shown below.  

{% include image.html file="fly_super8_fuses.png" alt="Fly-Super8 Fuses" caption="Fly-Super8 Fuses" %}

### Driver Jumpers

The jumpers should be installed as below. "Common Interpolation" should be used for standalone drivers. "SPI mode Interpolation" is supported for TMC5160 drivers. "UART mode Interpolation" should be used when using smart drivers (i.e. TMC2208, TMC2209, TMC2225 and TMC2226)

{% include image.html file="fly_e3_jumpers.png" alt="Fly-Super8 Jumpers" caption="Fly-Super Driver Jumper Locations" %}

### Driver Diag Pin

The driver diag pin is used for sensorless homing and stall detection.  
The Fly-Super8Pro H743 **does not** have a way of disabling the diag pin as it is designed to be used with [Fly-2209 drivers](https://www.aliexpress.com/item/1005001877899893.html) which have a switch on the underside of them for disabling the diag pin.  
If you plan on using endstops rather than sensorless homing and do not have the Fly-2209 drivers, you need to bend or remove the diag pin.  

### Driver Signal Voltage

The output voltage of each driver EN, STEP and DIR can be configured to either 3.3v, 5v or 12v. The default is 5v.  

{% include image.html file="fly_super8_driver_voltage.png" alt="Fly-Super8 Signal Voltage" caption="Fly-Super8Pro Driver Signal Voltage" %}

### Fan Mosfets

The Fly-Super8Pro H743 has a unique feature in that the fan mosfets are replaceable.
Each mosfet (VS3622e) controls two of the fan outputs.
The orientation that the fan mostfet is plugged into the board doesn't matter.

### Fan Voltage

The fan voltage can be set using jumpers to either 5v, 12v and Vin.  
Set them as shown below.  

{% include image.html file="fly_super8_fan_voltage.png" alt="Fly-Super8 Fan Voltage" caption="Fly-Super8 Fan Voltage" %}

### IO Output Voltage

The IO output voltage can be set to either 3.3v, 5v or 12v. The default is 5v. 
Set them as shown below.  

{% include image.html file="fly_super8_io_voltage.png" alt="Fly-Super8 IO Voltage" caption="Fly-Super8 IO Voltage" %}

### Maximum HV Input voltage

The three HV drivers have been tested with 48v.

### Thermistor Connection  

Thermistors should use the ADC inputs. The thermistors should be connected between ground and the signal pin.  

### Initial Installation

The board that you will receive doesn't have any firmware installed so when plugged into a computer, the board will show as an unidentified device.
It also doesn't have an RRF compatible bootloader installed as default.
Follow the [Bootloader instructions](fly_super8pro_h743_bootloader.html).
Follow the [WiFi instructions](fly_super8pro_h743_connected_wifi.html).