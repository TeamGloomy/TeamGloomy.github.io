---
title: Fly-E3-Pro Pin Names in Firmware
tags: []
keywords: 
last_updated: 15/01/2021
summary: "Fly-E3-Pro Pin Names"
sidebar: mydoc_sidebar
permalink: fly_e3_pro_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Fly-E3-Pro Pinout Diagram

{% include image.html file="fly_e3_pro_pins.svg" alt="Fly-E3-Pro" caption="Fly-E3-Pro Pinout" %}

## Fly-E3-Pro Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|
|Enable Pins|PE_5|PE_1|PB_5|PD_6|PC_15|
|Step Pins|PE_3|PB_9|PB_3|PD_4|PC_13
|Direction Pins|PE_2|PB_8|PD_7|PD_3|PC_0|
|UART Pins|PE_4|PE_0|PB_4|PD_5|PC_14|

<div class="datatable-end"></div>

Other pin numbers. Either name can be used in the firmware (config.g).

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|
| :------------- |:-------------|:-------------|
|PA_0|bed|hbed|
|PA_1|e1temp|t1|
|PA_10|RX1||
|PA_2|xmin|xstop|
|PA_3|bedtemp|tb|
|PA_4|e0temp|t0|
|PA_5|e0heat|he0|
|PA_6|fan1||
|PA_7|fan0|fan|
|PA_8|LED||
|PA_9|TX1||
|PB_0|servo0||
|PB_1|lcden||
|PB_10|ymin|ystop|
|PB_11|neopixel||
|PB_6|fan2||
|PB_7|fan3||
|PC_1|boardtemp|tboard|
|PC_10|SDD2||
|PC_11|SDD3||
|PC_12|SDSCK||
|PC_3|Power_ADC||
|PC_4|zmin|zstop|
|PC_5|probe||
|PC_6|e1heat|he1|
|PC_8|SDD0||
|PC_9|SDD1||
|PD_0|e0min|e0stop|
|PD_1|e1min|e1stop|
|PD_10|pwr| PWRDET|
|PD_11|PSON||
|PD_2|SDCMD||
|PE_10|btnen1||
|PE_11|btnenc||
|PE_12|beep||
|PE_6|laser||
|PE_7|lcdrs||
|PE_8|lcdd4||
|PE_9|btnen2||

<div class="datatable-end"></div>