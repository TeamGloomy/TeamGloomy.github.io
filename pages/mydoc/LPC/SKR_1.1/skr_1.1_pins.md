---
title: SKR v1.1 Pin Names in Firmware
tags: []
keywords: 
last_updated: 19/09/2021
summary: "The pin names of the SKR v1.1 in the firmware"
sidebar: mydoc_sidebar
permalink: skr_1.1_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## SKR v1.1 Pinout Diagram

{% include image.html file="skr_1.1.png" url="https://teamgloomy.github.io/images/skr_1.1.png" alt="SKR 1.1" caption="SKR 1.1 Pinout" %}

## SKR v1.1 Driver Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type/Driver Number|0|1|2|3|4|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|
|Enable Pins|4.28|2.0|0.19|2.12|0.10|
|Step Pins|0.4|2.1|0.20|0.11|0.1|
|Direction Pins|0.5|2.2|0.21|2.13|0.0|
|UART Pins|N/A|N/A|N/A|N/A|N/A|

<div class="datatable-end"></div>

## SKR v1.1 Other Pins in Firmware 

If more than one pin name is availble, either name can be used in the firmware (config.g).  
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of P0.1 or P0_1.  

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|
| :------------- |:-------------|:-------------|
|0.23|bedtemp|tb|
|0.24|e0temp|th0|
|0.25|e1temp|th1|
|1.24|zstopmax|z+|
|1.25|zstop|z-|
|1.26|ystopmax|y+|
|1.27|ystop|y-|
|1.28|xstopmax|x+|
|1.29|xstop|x-|
|2.3|fan0|fan|
|2.4|e1heat|he1|
|2.5|bed|hbed|
|2.7|e0heat|he0|

<div class="datatable-end"></div>