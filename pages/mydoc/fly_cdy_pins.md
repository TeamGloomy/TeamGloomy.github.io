---
title: Fly-CDY Pin Names in Firmware
tags: []
keywords: 
last_updated: 19/09/2021
summary: "Fly-CDY Pin Names"
sidebar: mydoc_sidebar
permalink: fly_cdy_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Fly-CDY Pinout Diagram

{% include image.html file="fly_cdy.png" alt="Fly-CDY" caption="Fly-CDY Pinout" %}

## fly-CDY Driver Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|5|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|:----|
|Enable Pins|1.0|1.8|1.14|1.17|0.4|2.13|
|Step Pins|2.0|2.1|2.2|2.3|2.4|2.5|
|Direction Pins|1.1|1.9|1.15|4.29|2.11|0.11|
|UART Pins|1.4|1.10|1.16|4.28|2.12|0.10|


<div class="datatable-end"></div>

## Fly-CDY Other Pins in Firmware 

If more than one pin name is availble, either name can be used in the firmware (config.g).   
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of P0.1 or P0_1.  

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|
| :------------- |:-------------|:-------------|
|0.0|wifi2|P0.0|
|0.1|wifi1|P0.1|
|0.23|bedtemp|tb|
|0.24|e2temp|t2|
|0.25|e1temp|t1|
|0.26|e0temp|t0|
|1.18|fan0||
|1.19|zstopmax|zmax|
|1.20|e1heat||
|1.21|fan1||
|1.22|zstop|zmin|
|1.23|e2heat||
|1.24|fan2||
|1.25|ystopmax|ymax|
|1.26|servo0||
|1.27|ystop|ymin|
|1.28|xstopmax|xmax|
|1.29|xstop|xmin|
|3.25|e0heat||
|3.26|bed||

<div class="datatable-end"></div>