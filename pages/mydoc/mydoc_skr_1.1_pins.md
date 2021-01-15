---
title: SKR 1.1 Pin Names in Firmware
tags: []
keywords: 
last_updated: 15/01/2021
summary: "SKR 1.1 Pin Names"
sidebar: mydoc_sidebar
permalink: mydoc_skr_1.1_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## SKR v1.1 Pinout Diagram

{% include image.html file="skr_1.1.png" alt="SKR 1.1" caption="SKR 1.1 Pinout" %}

## SKR v1.1 Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type/Driver Number|0|1|2|3|4|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|
|Enable Pins|4.28|2.0|0.19|2.12|0.10|
|Step Pins|0.4|2.1|0.20|0.11|0.1|
|Direction Pins|0.5|2.2|0.21|2.13|0.0|
|UART Pins|N/A|N/A|N/A|N/A|N/A|

<div class="datatable-end"></div>

Other pin numbers. Either name can be used in the firmware (config.g).

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|
| :------------- |:-------------|:-------------|
|0.2|P0.2||
|0.3|P0.3||
|0.15|P0.15||
|0.16|P0.16||
|0.17|P0.17||
|0.18|P0.18||
|0.23|bedtemp|tb|
|0.24|e0temp|th0|
|0.25|e1temp|th1|
|1.23|P1.23||
|1.24|zstopmax|z+|
|1.25|zstop|z-|
|1.26|ystopmax|y+|
|1.27|ystop|y-|
|1.28|xstopmax|x+|
|1.29|xstop|x-|
|1.30|P1.30||
|1.31|P1.31||
|2.3|fan0|fan|
|2.4|e1heat|he1|
|2.5|bed|hbed|
|2.6|P2.6||
|2.7|e0heat|he0|
|2.11|P2.11||
|3.25|P3.25||
|3.26|P3.26||

<div class="datatable-end"></div>