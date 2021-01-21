---
title: SKR v1.4 and SKR v1.4T Pin Names in Firmware
tags: []
keywords: 
last_updated: 15/01/2021
summary: "SKR v1.4 and SKR v1.4T Pin Names"
sidebar: mydoc_sidebar
permalink: skr_1.4_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## SKR v1.4 and SKR v1.4T Pinout Diagram

{% include image.html file="skr_1.4.png" alt="SKR v1.4" caption="SKR v1.4 and SKR v1.4T Pinout" %}

## SKR v1.4 and SKR v1.4T Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|
|Enable Pins|2.1|2.8|0.21|2.12|1.16|
|Step Pins|2.2|0.19|0.22|2.13|1.15|
|Direction Pins|2.6|0.20|2.11|0.11|1.14|
|UART Pins|1.10|1.9|1.8|1.4|1.1|

<div class="datatable-end"></div>

Other pin numbers. Either name can be used in the firmware (config.g).

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|
| :------------- |:-------------|:-------------|
|0.0|i2c1|P0.0|
|0.1|i2c2|P0.1|
|0.10|probe||
|0.16|P0.16||
|0.23|e1temp|th1|
|0.24|e0temp|th0|
|0.25|bedtemp|tb|
|0.26|SPI1|P0.26|
|0.27|P0.27||
|0.28|P0.28||
|1.0|pwrdet|P1.0|
|1.18|P1.18||
|1.19|P1.19||
|1.20|P1.20||
|1.21|P1.21||
|1.22|P1.22||
|1.23|P1.23||
|1.24|neopixel|P1.24|
|1.25|e1stop|e1det|
|1.26|e0stop|e0det|
|1.27|zstop|z-stop|
|1.28|ystop|y-stop|
|1.29|xstop|x-stop|
|1.30|P1.30||
|1.31|P1.31||
|2.0|servo0||
|2.3|fan0|fan|
|2.4|e1heat|he1|
|2.5|bed|hbed|
|2.7|e0heat|he0|
|3.25|P3.25||
|3.26|P3.26||
|4.28|wifi1|P4.28|
|4.29|wifi2|P4.29|

<div class="datatable-end"></div>