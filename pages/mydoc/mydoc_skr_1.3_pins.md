---
title: SKR v1.3 Pin Names in Firmware
tags: []
keywords: 
last_updated: 15/01/2021
summary: "SKR v1.3 Pin Names"
sidebar: mydoc_sidebar
permalink: mydoc_skr_1.3_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## SKR v1.3 Pinout Diagram

{% include image.html file="skr_1.3.png" alt="SKR v1.3" caption="SKR v1.3 Pinout" %}

## SKR v1.3 Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|
|Enable Pins|2.1|2.8|0.21|2.12|0.10|
|Step Pins|2.2|0.19|0.22|2.13|0.1|
|Direction Pins|2.6|0.20|2.11|0.11|0.0|
|UART Pins|1.17|1.15|1.10|1.8|1.1|

<div class="datatable-end"></div>

Other pin numbers. Either name can be used in the firmware (config.g).

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|
| :------------- |:-------------|:-------------|
|0.16|P0.16||
|0.23|bedtemp|tb|
|0.24|e0temp|th0|
|0.25|e1temp|th1|
|0.27|data2|P0.27|
|0.28|P0.28||
|1.18|P1.18||
|1.19|P1.19||
|1.20|P1.20||
|1.21|P1.21||
|1.22|P1.22||
|1.23|P1.23||
|1.24|zstopmax|z+|
|1.25|zstop|z-|
|1.26|ystopmax|y+|
|1.27|ystop|y-|
|1.28|xstopmax|x+|
|1.29|xstop|x-|
|1.30|P1.30||
|1.31|P1.31||
|2.0|servo0|servo|
|2.3|fan0|fan|
|2.4|e1heat|he1|
|2.5|bed|hbed|
|2.7|e0heat|he0|
|3.25|P3.25||
|3.26|P3.26||

<div class="datatable-end"></div>