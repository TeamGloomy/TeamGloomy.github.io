---
title: Connecting a PT100 to a Fly-RRF-36
tags: []
keywords: 
last_updated: 15/06/2022
summary: "How to connect a PT100 to a Fly-RRF-36"
sidebar: mydoc_sidebar
permalink: fly_rrf_36_pt100.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

Some Fly-RRF-36 toolboards have support for PT100 temperature sensors.  
If your board has the chip shown below in red, you have PT100 support.  

{% include image.html file="fly_rrf_36_max_installed.png" alt="Fly-RRF-36 PT100 Chip" caption="Fly-RRF-36 PT100 Chip" %}  

## Hardware Setup

### 2-wire PT100

To use a 2-wire PT100, some pads need to be soldered to set the MAX31865 chip into the correct mode. Add solder as shown in the image below.  
{% include image.html file="fly_rrf_36_max_2.png" alt="Fly-RRF-36 2-wire mode" caption="Fly-RRF-36 2-wire mode" %}   
Connect the 2-wire PT100 to pins 2 and 3 as indicated on the pinout.  

### 3-wire PT100

To use a 3-wire PT100, some pads need to be soldered to set the MAX31865 chip into the correct mode. Add solder as shown in the image below.  
{% include image.html file="fly_rrf_36_max_3.png" alt="Fly-RRF-36 3-wire mode" caption="Fly-RRF-36 3-wire mode" %}   
Connect the 2 wires of the same colour to pins 1 and 2 the wire of a different colour to pin 3 as indicated on the pinout.

### 4-wire PT100

If using a 4 wire PT100, no further changes are required to the hardware. Connect the PT100 to pins 1, 2, 3 and 4 as indicated on the pinout.  

## Config.g changes

### PT100

{% include important.html content="The changes shown below that are to be made to config.g assume that the toolboard uses the default CAN address of 124. If you have changed the default CAN address, make sure you change the 124 to the correct address." %}

To use the PT100 on your hotend, use the following code in config.g
If you are in a country where the mains frequency is 50Hz, change the F60 to F50 (if you don't know, look [here](https://www.oaktreeproducts.com/img/product/description/List%20of%20Worldwide%20AC%20Voltages.pdf))

```
M308 S1 P"124.max31865cs" Y"rtd-max31865" F60 R430 W#
```
{% include warning.html content="The # in W# is the number of wires your PT100 has, which is either 2, 3 or 4 and should be changed accordingly." %}

{% include warning.html content="Make sure you include the R430 as the Fly-RRF-36 uses a different reference resistor than expected" %}