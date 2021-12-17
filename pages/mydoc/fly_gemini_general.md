---
title: Fly-Gemini General Information
tags: []
keywords: 
last_updated: 17/12/2021
summary: "General information regarding the Fly-Gemini"
sidebar: mydoc_sidebar
permalink: fly_gemini_general.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

This page covers any general information for the Fly-Gemini board.  
It is currently available through [AliExpress](https://www.aliexpress.com/item/1005003536896114.html).  

### Driver Jumpers

The jumpers should be installed as below. "Common Interpolation" should be used for standalone drivers. "SPI mode Interpolation" is supported for TMC5160 drivers. "UART mode Interpolation" should be used when using smart drivers (i.e. TMC2208, TMC2209, TMC2225 and TMC2226)

{% include image.html file="fly_e3_jumpers.png" alt="Fly-E3 Jumpers" caption="Fly-E3 Driver Jumper Locations" %}

### Driver Diag Pin

The driver diag pin is used for sensorless homing and stall detection.  
The Fly-Gemini **does not** have a way of disabling the diag pin as it is designed to be used with [Fly-2209 drivers](https://www.aliexpress.com/item/1005001877899893.html) which have a switch on the underside of them for disabling the diag pin.  
If you plan on using endstops rather than sensorless homing and do not have the Fly-2209 drivers, you need to bend or remove the diag pin. 

### Fan Mosfets

The Fly-Super8 has a unique feature in that the fan mosfets are replaceable.
Each mosfet (VS3622e) controls two of the fan outputs.
The orientation that the fan mostfet is plugged into the board doesn't matter.

{% include image.html file="fly_gemini_fan_mosfet.png" alt="Fly-Gemini Fan Mosfet" caption="Fly-Gemini Fan Mosfet" %}

### Fan Voltage

The fan voltage can be set using jumpers to either 5v, 12v and Vin.  
Set them as shown below.  

{% include image.html file="fly_gemini_fan_voltage.png" alt="Fly-Gemini Fan Voltage" caption="Fly-Gemini Fan Voltage" %}

### Maximum Input voltage

#### Board/Bed Power

The board can handle an input voltage up to 30v.

#### Driver Power

The board can handle an input voltage up to 62v.

### Initial Installation

The board that you will receive doesn't have any firmware installed so when plugged into a computer, the board will show as an unidentified device.
Follow the [SBC instructions](fly_gemini_connected_sbc.html).