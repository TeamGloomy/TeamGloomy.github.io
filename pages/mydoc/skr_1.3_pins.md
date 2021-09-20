---
title: SKR v1.3 Pin Names in Firmware
tags: []
keywords: 
last_updated: 19/09/2021
summary: "The pin names of the SKR v1.3 in the firmware"
sidebar: mydoc_sidebar
permalink: skr_1.3_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## SKR v1.3 Pinout Diagram

{% include image.html file="skr_1.3.png" url="https://teamgloomy.github.io/images/skr_1.3.png" alt="SKR v1.3" caption="SKR v1.3 Pinout" %}

## SKR v1.3 Driver Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|
|Enable Pins|2.1|2.8|0.21|2.12|0.10|
|Step Pins|2.2|0.19|0.22|2.13|0.1|
|Direction Pins|2.6|0.20|2.11|0.11|0.0|
|UART Pins|1.17|1.15|1.10|1.8|1.1|

<div class="datatable-end"></div>

## SKR v1.3 Other Pins in Firmware 

If more than one pin name is availble, either name can be used in the firmware (config.g). 
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of P0.1 or P0_1.  

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|
| :------------- |:-------------|:-------------|
|0.23|bedtemp|tb|
|0.24|e0temp|th0|
|0.25|e1temp|th1|
|0.27|data2|P0.27|
|1.24|zstopmax|z+|
|1.25|zstop|z-|
|1.26|ystopmax|y+|
|1.27|ystop|y-|
|1.28|xstopmax|x+|
|1.29|xstop|x-|
|2.0|servo0|servo|
|2.3|fan0|fan|
|2.4|e1heat|he1|
|2.5|bed|hbed|
|2.7|e0heat|he0|

<div class="datatable-end"></div>