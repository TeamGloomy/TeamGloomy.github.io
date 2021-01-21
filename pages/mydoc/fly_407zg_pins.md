---
title: Fly-407ZG Pin Names in Firmware
tags: []
keywords: 
last_updated: 15/01/2021
summary: "Fly-407ZG Pin Names"
sidebar: mydoc_sidebar
permalink: fly_407zg_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Fly-407ZG Pinout Diagram

{% include image.html file="fly_407zg.png" alt="Fly-407ZG" caption="Fly-407ZG Pinout" %}

## Fly-407ZG Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|5|6|7|8|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|:-----|:--|:--|:--|
|Enable Pins|PE_1|PG_12|PD_7|PD_4|PD_0|PG_8|PG_5|PG_2|PD_9|
|Step Pins|PB_9|PB_8|PA_8|PC_7|PC_6|PD_15|PD_14|PD_13|PD_12|
|Direction Pins|PE_0|PG_11|PD_6|PD_3|PA_15|PG_7|PG_4|PD_11|PD_8|
|UART Pins|PG_13|PG_10|PD_5|PD_1|PA_14|PG_6|PG_3|PD_10|PB_12|

<div class="datatable-end"></div>

Other pin numbers. Either name can be used in the firmware (config.g).

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|
| :------------- |:-------------|:-------------|
|PA_0|e0temp|t0|
|PA_1|fan3||
|PA_2|fan2||
|PA_3|dljc||
|PA_9|TX1||
|PA_10|RX1||
|PB_2|PB2||
|PB_10|PB10||
|PB_11|fan5||
|PB_13|PB13||
|PB_14|PB14||
|PB_15|PB15||
|PC_0|e2temp|t2|
|PC_1|e1temp|t1|
|PC_2|xmax|xstopmax|
|PC_3|xmin|xstop|
|PC_4|PC4||
|PC_5|PC5||
|PC_8|SDD0||
|PC_9|SDD1||
|PC_10|SDD2||
|PC_11|SDD3||
|PC_12|SDSCK||
|PC_13|SDCD||
|PC_14|z3||
|PC_15|zmax|zstopmax|
|PD_2|SDCMD||
|PE_2|bed|hbed|
|PE_3|e5heat|he5|
|PE_4|e4heat|he4|
|PE_5|e3heat|he3|
|PE_6|e2heat|he2|
|PE_7|PE7||
|PE_8|fan0|fan|
|PE_8|PE8||
|PE_9|PE9||
|PE_10|PE10||
|PE_11|servo0||
|PE_12|PE12||
|PE_13|fan4||
|PE_14|PE14||
|PE_15|PE15||
|PF_0|zmin|zstop|
|PF_2|ymin|ystop|
|PF_3|bedtemp|tb|
|PF_3|ymax|ystopmax|
|PF_4|e5temp|t5|
|PF_5|e4temp|t4|
|PF_6|e1heat|he1|
|PF_7|e0heat|he0|
|PF_9|fan1||
|PF_10|e3temp|t3|
|PF_11|PF11||

<div class="datatable-end"></div>