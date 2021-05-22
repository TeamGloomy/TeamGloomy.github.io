---
title: SKR v2.0 Pin Names in Firmware
tags: []
keywords: 
last_updated: 15/01/2021
summary: "SKR v2.0 Pin Names"
sidebar: mydoc_sidebar
permalink: skr_2.0_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## SKR Pro v2.0 Pinout Diagram

{% include image.html file="skr_2.0_pins.png" alt="SKR v2.0" caption="SKR v2.0 Pinout" %}

## SKR v2.0 Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|
|Enable Pins|PE_3| PD_6| PD_1| PC_7| PD_13|
|Step Pins|PE_2| PD_5| PA_15| PD_15| PD_11|
|Direction Pins|PE_1| PD_4| PA_8| PD_14| PD_10|
|UART Pins|PE_0| PD_3| PD_0| PC_6| PD_12|

<div class="datatable-end"></div>

Other pin numbers. Either name can be used in the firmware (config.g).

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|
| :------------- |:-------------|:-------------|
|PA_1|bedtemp|tb|
|PA_2|e0temp|th0|
|PA_3|e1temp|th1|
|PC_1|xstop|x-stop|
|PC_3|ystop|y-stop|
|PC_0|zstop|z-stop|
|PC_2|e0stop|e0det|
|PA_0|e1stop|e1det|
|PE_5|servo0||
|PE_4|probe||
|PD_7|bed|hbed|
|PB_3|e0heat|heat0|
|PB_4|e1heat|heat1|
|PB_7|fan0|fan|
|PB_6|fan1||
|PB_5|fan2||
|PE_9|LCDCS||
|PB_2|LCDENCA||
|PE_7|LCDENCB||
|PC_5|LCDBEEP||
|PB_0|LCDBTN||
|PE_10|LCDD4||
|PB_1|LCDEN||
|PE_6|Neopixel|PE6|
|PA_9|TX1|tft-tx|
|PA_10|RX1|tft-rx|
|PD_8|PD8||
|PD_9|PD9||
|PE_0|X-CS|PE0|
|PD_3|Y-CS|PD3|
|PD_0|Z-CS|PD0|
|PC_6|E0-CS|PC6|
|PD_12|E1-CS|PD12|
|PA_14|MISO|PA14|
|PE_14|MOSI|PE14|
|PE_15|SCK|PE15|
|PB_8|SCL1|PB8|
|PB_9|SDA1|PB9|
|PC_14|PC14| //RST|
|PB_10|PB10| //IO0|
|PB_11|PB11| //IO4|
|PB_12|PB12| //CS|
|PB_13|PB13| //CLK|
|PB_14|PB14| //MISO|
|PB_15|PB15| //MOSI|
|PE_8|PSON|PE8|
|PC_15|PWRDET|PC15|
|PA_13|LED|PA13|
|PC_13|SP|PC13|

<div class="datatable-end"></div>