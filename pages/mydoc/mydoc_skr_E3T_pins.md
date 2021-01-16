---
title: SKR E3 Turbo Pin Names in Firmware
tags: []
keywords: 
last_updated: 15/01/2021
summary: "SKR E3 Turbo Pin Names"
sidebar: mydoc_sidebar
permalink: mydoc_skr_E3T_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## SKR E3 Turbo Pinout Diagram

{% include image.html file="skr_E3T.png" alt="SKR E3 Turbo" caption="SKR E3 Turbo Pinout" %}

## SKR E3 Turbo Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|
|Enable Pins|1.0|1.9|1.16|0.4|0.21|
|Step Pins|1.4|1.14|4.29|2.6|2.11|
|Direction Pins|1.8|1.15|4.28|2.7|2.12|
|UART Pins|1.1|1.10|1.17|1.26|1.25|

<div class="datatable-end"></div>

Other pin numbers. Either name can be used in the firmware (config.g).

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|
| :------------- |:-------------|:-------------|
|0.0|eeprom0|SDA1|
|0.1|eeprom1|SCL1|
|0.15|P0.15||
|0.16|P0.16||
|0.17|P0.17||
|0.18|P0.18||
|0.19|P0.19||
|0.20|P0.20||
|0.23|e1temp|th1|
|0.24|e0temp|th0|
|0.25|bedtemp|tb|
|1.20|ptdet||
|1.21|pson||
|1.22|probe1||
|1.23|probe0||
|1.24|neopixel|P1.24|
|1.25|e1stop||
|1.26|e0stop||
|1.27|zstop||
|1.28|ystop||
|1.29|xstop||
|2.1|fan0||
|2.2|fan2||
|2.3|e1heat||
|2.4|e0heat||
|2.5|bed||
|2.8|P2.8||

<div class="datatable-end"></div>