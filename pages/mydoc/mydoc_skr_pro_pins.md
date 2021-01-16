---
title: SKR Pro v1.1 and v1.2 Pin Names in Firmware
tags: []
keywords: 
last_updated: 15/01/2021
summary: "SKR Pro v1.1 and v1.2 Pin Names"
sidebar: mydoc_sidebar
permalink: mydoc_skr_pro_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

{% include warning.html content="The SKR Pro v1.1 and v1.2 sensorless homing jumpers don't do anything so if you don't want to use sensorless homing and use normal endstops, you will have to remove the diag pin from your drivers - [Evidence](https://github.com/bigtreetech/BIGTREETECH-GTR-V1.0/issues/12)" %}

## SKR Pro v1.1 Pinout Diagram

{% include image.html file="skr_pro_1.1.png" alt="SKR Pro v1.1" caption="SKR Pro v1.1 Pinout" %}

## SKR Pro v1.2 Pinout Diagram

{% include image.html file="skr_pro_1.2.png" alt="SKR Pro v1.2" caption="SKR Pro v1.2 Pinout" %}

## SKR Pro v1.1 and v1.2 Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|5|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|:-----|
|Enable Pins|PF_2|PD_7|PC_0|PC_3|PA_3|PF_0|
|Step Pins|PE_9|PE_11|PE_13|PE_14|PD_15|PD_13|
|Direction Pins|PF_1|PE_8|PC_2|PA_0|PE_7|PG_9|
|UART Pins|PC_13|PE_3|PE_1|PD_4|PD_1|PD_6|

<div class="datatable-end"></div>

Other pin numbers. Either name can be used in the firmware (config.g).

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|
| :------------- |:-------------|:-------------|
|PA_1| servo0||
|PA_15| X-CS|PA15|
|PA_2| probe||
|PA_8| PA8||
|PB_0| e2heat|he2|
|PB_1| e0heat|he0|
|PB_10| xstop|x-stop|
|PB_12| PB12||
|PB_13| PB13||
|PB_14| PB14||
|PB_15| PB15||
|PB_3| E0-CS|PB3|
|PB_6| PB6||
|PB_7| PB7||
|PB_8| Y-CS|PB8|
|PB_9| Z-CS|PB9|
|PC_1| PC1||
|PC_10| PC10||
|PC_11| PC11||
|PC_12| PC12||
|PC_4| PC4||
|PC_5| PC5||
|PC_6| wifi4|PC6|
|PC_7| wifi3|PC7|
|PC_8| fan0|fan|
|PC_9| PC9||
|PD_0| PD0||
|PD_0| PD5||
|PD_10| PD10||
|PD_11| PD11||
|PD_12| bed|hbed|
|PD_14| e1heat|he1|
|PD_2| PD2||
|PD_3| PD3||
|PD_8| PD8||
|PD_9| PD9||
|PE_0| PE0||
|PE_10| e1stop|e1det|
|PE_12| ystop|y-stop|
|PE_15| e0stop|e0det|
|PE_2| PE2||
|PE_4| PE4||
|PE_5| fan1||
|PE_6| fan2||
|PF_10| PF10||
|PF_11| PF11||
|PF_12| PF12||
|PF_13| PF13||
|PF_14| wifi5|PF14|
|PF_15| wifi6|PF15|
|PF_3| e0temp|t0|
|PF_4| e1temp|t1|
|PF_5| e2temp|t2|
|PF_6| bedtemp|t3|
|PF_7| PF7||
|PF_8| PF8||
|PF_9| PF9||
|PG_0| wifi1|PG0|
|PG_1| wifi2|PG1|
|PG_10| PG10||
|PG_11| PG11||
|PG_12| E2-CS|PG12|
|PG_13| PG13||
|PG_14| PG14||
|PG_15| E1-CS|PG15|
|PG_2| PG2||
|PG_3| PG3||
|PG_4| PG4||
|PG_5| e2stop|e2det|
|PG_6| PG6||
|PG_7| PG7||
|PG_8| zstop|z-stop|

<div class="datatable-end"></div>