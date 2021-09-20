---
title: MKS SGen L v2.0 Pin Names in Firmware
tags: []
keywords: 
last_updated: 19/09/2021
summary: "The pin names of the MKS SGen L v2.0 in the firmware"
sidebar: mydoc_sidebar
permalink: mks_sgen_l_2_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## MKS SGen L v2.0 Pinout Diagram

{% include image.html file="mks_sgen_l_2.png" alt="MKS SGen L v2.0" caption="MKS SGen L v2.0 Pinout" %}

## MKS SGen L v2.0 Driver Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|
|Enable Pins|2.1|2.8|0.21|2.12|0.10|
|Step Pins|2.2|0.19|0.22|2.13|1.9|
|Direction Pins|2.3|0.20|2.11|0.11|1.14|
|UART Pins|1.1|1.8|1.10|1.15|1.17|

<div class="datatable-end"></div>

## MKS SGen L v2.0 Other Pins in Firmware 

If more than one pin name is availble, either name can be used in the firmware (config.g).  
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of P0.1 or P0_1.  

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|
| :------------- |:-------------|:-------------|
|0.23|e0temp|th1|
|0.24|bedtemp|TB|
|0.25|e1temp|th2|
|1.4|fan1||
|1.18|led1||
|1.19|led2||
|1.20|led3||
|1.21|led4||
|1.23|servo0||
|1.24|zstopmax|Z+|
|1.25|zstop|Z-|
|1.26|ystopmax|Y+|
|1.27|ystop|Y-|
|1.28|xstopmax|X+|
|1.29|xstop|X-|
|2.0|servo1||
|2.4|fan0||
|2.5|bed||
|2.6|e1heat|he1|
|2.7|e0heat|he0|

<div class="datatable-end"></div>