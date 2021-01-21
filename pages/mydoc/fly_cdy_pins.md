---
title: Fly-CDY Pin Names in Firmware
tags: []
keywords: 
last_updated: 15/01/2021
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

## fly-CDY Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|5|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|:----|
|Enable Pins|1.0|1.8|1.14|1.17|0.4|2.13|
|Step Pins|2.0|2.1|2.2|2.3|2.4|2.5|
|Direction Pins|1.1|1.9|1.15|4.29|2.11|0.11|
|UART Pins|1.4|1.10|1.16|4.28|2.12|0.10|


<div class="datatable-end"></div>

Other pin numbers. Either name can be used in the firmware (config.g).

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|
| :------------- |:-------------|:-------------|
|0.0|wifi2|P0.0|
|0.1|wifi1|P0.1|
|0.2|P0.2||
|0.3|P0.3||
|0.15|P0.15||
|0.16|P0.16||
|0.17|P0.17||
|0.18|P0.18||
|0.19|P0.19||
|0.20|P0.20||
|0.21|P0.21||
|0.22|P0.22||
|0.23|bedtemp|tb|
|0.24|e2temp|t2|
|0.25|e1temp|t1|
|0.26|e0temp|t0|
|0.28|P0.28||
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
|1.30|P1.30||
|1.31|P1.31||
|2.6|P2.6||
|2.7|P2.7||
|2.8|P2.8||
|P2.10|P2.10||
|3.25|e0heat||
|3.26|bed||

<div class="datatable-end"></div>