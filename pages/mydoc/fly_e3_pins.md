---
title: Fly-E3 Pin Names in Firmware
tags: []
keywords: 
last_updated: 15/01/2021
summary: "Fly-E3 Pin Names"
sidebar: mydoc_sidebar
permalink: fly_e3_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Fly-E3 Pinout Diagram

{% include image.html file="fly_e3.png" alt="Fly-E3" caption="Fly-E3 Pinout" %}

## Fly-E3 Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|
| :------------- |:-------------|:-------------|:-------------|:-------------|
|Step Pins|PC_13|PE_3|PB_9|PB_3|
|Direction Pins|PC_14|PE_4|PE_0|PB_4|
|Enable Pins|PC_15|PE_5|PE_1|PB_5|
|UART Pins|PE_6|PE_2|PD_5|PD_7|

<div class="datatable-end"></div>

Other pin numbers. Either name can be used in the firmware (config.g).

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|
| :------------- |:-------------|:-------------|
|PA_0|bed|hbed|
|PA_1|ymin|ystop|
|PA_2|xmin|xstop|
|PA_3|bedtemp|tb|
|PA_4|e0temp|t0|
|PA_5|e0heat|he0|
|PA_6|fan1||
|PA_7|fan0|fan|
|PA_8|PA8||
|PA_9|TX1||
|PA_10|RX1||
|PA_15|SDCD||
|PB_0|servo0||
|PB_1|lcden||
|PB_10|PB10||
|PB_10|FPC1||
|PB_11|PB11||
|PB_11|FPC2||
|PC_0|PC0||
|PC_1|PC1||
|PC_2|PC2||
|PC_3|PC3||
|PC_4|probe||
|PC_5|zmin|zstop|
|PC_6|FPC9||
|PC_7|PC7||
|PC_8|SDD0||
|PC_9|SDD1||
|PC_10|SDD2||
|PC_11|SDD3||
|PC_12|SDSCK||
|PD_0|FPC10||
|PD_1|FPC11||
|PD_2|SDCMD||
|PD_10|FPC3||
|PD_11|FPC4||
|PD_12|FPC5||
|PD_13|FPC6||
|PD_14|FPC7||
|PD_15|FPC8||
|PE_7|lcdrs||
|PE_8|lcdd4||
|PE_9|btnen2||
|PE_10|btnen1||
|PE_11|btnenc||
|PE_12|beep||
|PE_13|PE13||
|PE_14|PE14||
|PE_15|PE15||

<div class="datatable-end"></div>