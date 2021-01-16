---
title: MKS SGen L v2.0 Pin Names in Firmware
tags: []
keywords: 
last_updated: 15/01/2021
summary: "MKS SGen L v2.0 Pin Names"
sidebar: mydoc_sidebar
permalink: mydoc_mks_sgen_l_2_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## MKS SGen L v2.0 Pinout Diagram

{% include image.html file="mks_sgen_l_2.png" alt="MKS SGen L v2.0" caption="MKS SGen L v2.0 Pinout" %}

## MKS SGen L v2.0 Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|
|Enable Pins|2.1|2.8|0.21|2.12|0.10|
|Step Pins|2.2|0.19|0.22|2.13|1.9|
|Direction Pins|2.3|0.20|2.11|0.11|1.14|
|UART Pins|1.1|1.8|1.10|1.15|1.17|

<div class="datatable-end"></div>

Other pin numbers. Either name can be used in the firmware (config.g).

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|
| :------------- |:-------------|:-------------|
|0.2|P0.2||
|0.3|P0.3||
|0.4|P0.4||
|0.5|P0.5||
|0.7|P0.7||
|0.8|P0.8||
|0.9|P0.9||
|0.15|P0.15||
|0.16|P0.16||
|0.17|P0.17||
|0.18|P0.18||
|0.23|e0temp|th1|
|0.24|bedtemp|TB|
|0.25|e1temp|th2|
|0.26|P0.26||
|0.27|P0.27||
|0.28|P0.28||
|1.0|P1.0||
|1.4|fan1|P1.4|
|1.16|P1.16||
|1.18|led1|P1.18|
|1.19|led2|P1.19|
|1.20|led3|P1.20|
|1.21|led4|P1.21|
|1.22|P1.22||
|1.23|servo0|P1.23|
|1.24|zstopmax|Z+|
|1.25|zstop|Z-|
|1.26|ystopmax|Y+|
|1.27|ystop|Y-|
|1.28|xstopmax|X+|
|1.29|xstop|X-|
|1.30|P1.30||
|1.31|P1.31||
|2.0|servo1|P2.0|
|2.4|fan0|P2.4|
|2.5|bed||
|2.6|e1heat|he1|
|2.7|e0heat|he0|
|3.25|P3.25||
|3.26|P3.26||
|4.28|P4.28||
|4.29|P4.29||

<div class="datatable-end"></div>