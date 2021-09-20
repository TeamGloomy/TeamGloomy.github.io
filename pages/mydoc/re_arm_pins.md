---
title: Re-Arm Names in Firmware
tags: []
keywords: 
last_updated: 19/09/2021
summary: "The pin names of the Re-Arm in the firmware"
sidebar: mydoc_sidebar
permalink: re_arm_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Re-Arm Pinout Diagram

{% include image.html file="re_arm.png" alt="Re-Arm" caption="Re-Arm Pinout" %}

## Re-Arm Driver Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|
|Enable Pins|0.10|0.19|0.21|0.4|4.29|
|Step Pins|2.1|2.2|2.3|2.0|2.8|
|Direction Pins|0.11|0.20|0.22|0.5|2.13|
|UART Pins|N/A|N/A|N/A|N/A|N/A|

<div class="datatable-end"></div>

## Re-Arm Other Pins in Firmware 

If more than one pin name is availble, either name can be used in the firmware (config.g).  
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of P0.1 or P0_1.  

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|
| :------------- |:-------------|:-------------|
|0.0|d20||
|0.1|d21||
|0.16|d16||
|0.23|e0temp|t0|
|0.24|bedtemp|t1|
|0.25|e1temp|t2|
|0.26|d63||
|0.27|d57||
|0.28|d58||
|1.18|servo3|d4|
|1.19|servo2|d5|
|1.20|servo0|d11|
|1.21|servo1|d6|
|1.22|d41||
|1.23|d53||
|1.24|xstop|xmin|
|1.25|xstopmax|xmax|
|1.26|ystop|ymin|
|1.27|ystopmax|ymax|
|1.28|zstop|zmin|
|1.29|zstopmaz|zmax|
|1.30|d37||
|1.31|d49||
|2.4|e1heat|d9|
|2.5|e0heat|d10|
|2.6|d59||
|2.7|bed|d8|
|2.11|d35||
|2.12|pson||
|3.25|d33||
|3.26|d31||
|4.28|play||

<div class="datatable-end"></div>