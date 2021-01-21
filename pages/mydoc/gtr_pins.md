---
title: GTR + M5 Pin Names in Firmware
tags: []
keywords: 
last_updated: 15/01/2021
summary: "GTR + M5 Pin Names"
sidebar: mydoc_sidebar
permalink: gtr_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

{% include warning.html content="The GTR sensorless homing jumpers don't do anything so if you don't want to use sensorless homing and use normal endstops, you will have to remove the diag pin from your drivers - [Evidence](https://github.com/bigtreetech/BIGTREETECH-GTR-V1.0/issues/12)" %}

## GTR Pinout Diagram

{% include image.html file="gtr.png" alt="GTR" caption="GTR Pinout" %}

## M5 Pinout Diagram

{% include image.html file="m5.png" alt="M5" caption="M5 Pinout" %}

## GTR + M5 Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|5|6|7|8|9|10|
| :---|:----|:----|:-----|:-----|:-----|:-----|:-----|:-----|:-----|:-----|:-----|
|Enable Pins|PF_1|PE_4|PB_9|PG_13|PD_7|PD_2|PF_8|PG_2|PF_4|PE_8|PI_0|
|Step Pins|PC_15|PE_3|PB_8|PG_12|PD_6|PD_1|PF_3|PD_14|PE_12|PG_0|PH_12|
|Direction Pins|PF_0|PE_2|PB_7|PG_11|PD_5|PD_0|PG_3|PD_11|PE_10|PG_1|PH_15|
|UART Pins|PC_13|PC_14|PE_1|PB_5|PG_10|PD_4|PC_12|PG_4|PE_15|PE_7|PF_15|PH_14|

<div class="datatable-end"></div>

Other pin numbers. Either name can be used in the firmware (config.g).

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|
| :------------- |:-------------|:-------------|
|PA_1| e1heat|heat1|
|PA_10|PA10||
|PA_15|PA15||
|PA_2| bed|hbed|
|PA_3| e3temp|Temp_M1|
|PA_8| PA8||
|PA_9| PA9||
|PB_0| e2heat|heat2|
|PB_1| e0heat|heat0|
|PB_10|PB10||
|PB_11|servo0||
|PB_12|PB12||
|PB_13|PB13||
|PB_14|PB14||
|PB_15|PB15||
|PB_3| SCK|PB3|
|PB_5| Z-CS|PB5|
|PB_6| MISO|PB6|
|PC_0| bedtemp|t3|
|PC_1| e0temp|t0|
|PC_10|PC10||
|PC_11|PC11||
|PC_12|E2-CS|PC12|
|PC_13| ystop|y-stop|
|PC_14|X-CS|PC10|
|PC_2| e1temp|t1|
|PC_3| e2temp|t2|
|PC_5| wifi5|PC5|
|PC_6| wifi4|PC6|
|PC_7| wifi3|PC7|
|PC_8| fan2||
|PC_9| fan_M4||
|PD_10|PD10||
|PD_12|e5heat|heat_M3|
|PD_13|e4heat|heat_M2|
|PD_15|e3heat|heat_M1|
|PD_3| e2stop|e2det|
|PD_4| E1-CS|PD4|
|PE_0| zstop|z-stop|
|PE_1| Y-CS|PE1|
|PE_11|fan_M3||
|PE_13|e6heat|heat_M4|
|PE_14| fan_M5||
|PE_5| fan0||
|PE_6| fan1||
|PE_9| fan_M2||
|PF_10|e5temp|Temp_M3|
|PF_11|wifi1|PF11|
|PF_12|e7stop|M5_Stop|
|PF_13|Neopixel|PF13|
|PF_13| RGB_LEDPF13||
|PF_2| xstop|x-stop|
|PF_4| e4stop|M2_Stop|
|PF_5| e7temp|Temp_M5|
|PF_6| e5stop|M3_Stop|
|PF_7| e6temp|Temp_M4|
|PF_9| e4temp|Temp_M2|
|PG_10|E0-CS|PG10|
|PG_14|e0stop|e0det|
|PG_15| MOSI|PG15|
|PG_5| PG5||
|PG_6| PG6||
|PG_7| PG7||
|PG_8| PG8||
|PG_9| e1stop|e1det|
|PH_10|PH10||
|PH_11|probe||
|PH_13|PH13||
|PH_2| KCS|PH2|
|PH_6| EI2|PH6|
|PH_7| PH7||
|PH_8| PH8||
|PI_1| KSCK|PI1|
|PI_10|PI10||
|PI_11|EI1|PI11|
|PI_2| KMOSI|PI2|
|PI_4| e3stop|M1_Stop|
|PI_5| fan_M1||
|PI_6| e7heat|heat_M5|
|PI_7| e6stop|M4_Stop|
|PI_8| PI8||
|PI_9| PI9||

<div class="datatable-end"></div>