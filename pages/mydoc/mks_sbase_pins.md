---
title: MKS Sbase v1.3 Pin Names in Firmware
tags: []
keywords: 
last_updated: 15/01/2021
summary: "The pin names of the MKS Sbase v1.3 in the firmware"
sidebar: mydoc_sidebar
permalink: mks_sbase_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## MKS Sbase v1.3 Pinout Diagram

{% include image.html file="mks_sbase.png" alt="MKS Sbase v1.3" caption="MKS Sbase v1.3 Pinout" %}

## MKS Sbase v1.3 Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|
|Enable Pins|0.4|0.10|0.19|0.21|4.29|
|Step Pins|2.0|2.1|2.2|2.3|2.8|
|Direction Pins|0.5|0.11|0.20|0.22|2.13|

<div class="datatable-end"></div>

Other pin numbers. Either name can be used in the firmware (config.g).  
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of P0.1, P0_1, 0.1 or 0_1.  

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|
| :------------- |:-------------|:-------------|
|0.23|bedtemp|th1|
|0.24|e0temp|th2|
|0.25|e1temp|th3|
|0.26|th4||
|1.24|xstop|xmin|
|1.25|xstopmax|xmax|
|1.26|ystop|ymin|
|1.27|ystopmax|ymax|
|1.28|zstop|zmin|
|1.29|zstopmax|zmax|
|2.4|fan0|fan|
|2.5|bed||
|2.6|e1heat|e2|
|2.7|e0heat|e1|

<div class="datatable-end"></div>