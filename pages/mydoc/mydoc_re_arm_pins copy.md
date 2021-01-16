---
title: Re-Arm Names in Firmware
tags: []
keywords: 
last_updated: 15/01/2021
summary: "Re-Arm Pin Names"
sidebar: mydoc_sidebar
permalink: mydoc_re_arm_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Re-Arm Pinout Diagram

{% include image.html file="re_arm.png" alt="Re-Arm" caption="Re-Arm Pinout" %}

## Re-Arm Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|
|Enable Pins|0.10|0.19|0.21|0.4|4.29|
|Step Pins|2.1|2.2|2.3|2.0|2.8|
|Direction Pins|0.11|0.20|0.22|0.5|2.13|
|UART Pins|N/A|N/A|N/A|N/A|N/A|

<div class="datatable-end"></div>

Other pin numbers. Either name can be used in the firmware (config.g).

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|
| :------------- |:-------------|:-------------|
|0.0|d20|P0.0|
|0.1|d21|P0.1|
|0.16|d16|P0.16|
|0.23|e0temp|t0|
|0.24|bedtemp|t1|
|0.25|e1temp|t2|
|0.26|d63|P0.26|
|0.27|d57|P0.27|
|0.28|d58|P0.28|
|1.18|servo3|d4|
|1.19|servo2|d5|
|1.20|servo0|d11|
|1.21|servo1|d6|
|1.22|d41|P1.22|
|1.23|d53|P1.23|
|1.24|xstop|xmin|
|1.25|xstopmax|xmax|
|1.26|ystop|ymin|
|1.27|ystopmax|ymax|
|1.28|zstop|zmin|
|1.29|zstopmaz|zmax|
|1.30|d37|P1.30|
|1.31|d49|P1.31|
|2.4|e1heat|d9|
|2.5|e0heat|d10|
|2.6|d59|P2.6|
|2.7|bed|d8|
|2.11|d35|P2.11|
|2.12|pson|P2.12|
|3.25|d33|P3.25|
|3.26|d31|P3.26|
|4.28|play|P4.28|

<div class="datatable-end"></div>