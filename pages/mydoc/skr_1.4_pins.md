---
title: SKR v1.4 and SKR v1.4T Pin Names in Firmware
tags: []
keywords: 
last_updated: 19/09/2021
summary: "The pin names of the SKR v1.4 and SKR v1.4T in the firmware"
sidebar: mydoc_sidebar
permalink: skr_1.4_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## SKR v1.4 and SKR v1.4T Pinout Diagram

{% include image.html file="skr_1.4.png" alt="SKR v1.4" caption="SKR v1.4 and SKR v1.4T Pinout" %}

## SKR v1.4 and SKR v1.4T Driver Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|
|Enable Pins|2.1|2.8|0.21|2.12|1.16|
|Step Pins|2.2|0.19|0.22|2.13|1.15|
|Direction Pins|2.6|0.20|2.11|0.11|1.14|
|UART Pins|1.10|1.9|1.8|1.4|1.1|

<div class="datatable-end"></div>

## SKR v1.4 and SKR v1.4T Other Pins in Firmware 

If more than one pin name is availble, either name can be used in the firmware (config.g). 
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of P0.1 or P0_1.  

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|
| :------------- |:-------------|:-------------|
|0.0|i2c1||
|0.1|i2c2||
|0.10|probe||
|0.23|e1temp|th1|
|0.24|e0temp|th0|
|0.25|bedtemp|tb|
|0.26|SPI1||
|1.0|pwrdet||
|1.24|neopixel||
|1.25|e1stop|e1det|
|1.26|e0stop|e0det|
|1.27|zstop|z-stop|
|1.28|ystop|y-stop|
|1.29|xstop|x-stop|
|2.0|servo0||
|2.3|fan0|fan|
|2.4|e1heat|he1|
|2.5|bed|hbed|
|2.7|e0heat|he0|
|4.28|wifi1||
|4.29|wifi2||

<div class="datatable-end"></div>