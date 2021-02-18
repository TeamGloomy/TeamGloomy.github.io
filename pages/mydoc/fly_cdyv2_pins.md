---
title: Fly-CDYv2 Pin Names in Firmware
tags: []
keywords: 
last_updated: 18/02/2021
summary: "Fly-CDYv2 Pin Names"
sidebar: mydoc_sidebar
permalink: fly_cdyv2_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Fly-CDYv2 Pinout Diagram

{% include image.html file="fly_cdyv2.svg" alt="Fly-CDYv2" caption="Fly-CDYv2 Pinout" %}

## fly-CDYv2 Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|5|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|:----|
|Enable Pins|PC_1|PC_14|PB_8|PD_7|PD_4|PD_0|
|Step Pins|PE_5|PE_4|PE_3|PE_2|PE_1|PE_0|
|Direction Pins|PC_0|PC_13|PB_7|PD_6|PD_3|PA_15|
|UART Pins|PC_15|PA_8|PB_6|PD_5|PD_1|PE_9|


<div class="datatable-end"></div>

Other pin numbers. Either name can be used in the firmware (config.g).

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|
| :------------- |:-------------|:-------------|
|PA_3|e0temp|t0|
|PC_4|e1temp|t1|
|PC_5|e2temp|t2|
|PB_1|bedtemp|tb|
|PC_7|xmin|xstop|
|PC_6|xmax|xstopmax|
|PD_11|ymin|ystop|
|PD_10|ymax|ystopmax|
|PB_10|zmin|zstop|
|PB_11|zmax|zstopmax|
|PE_6|servo0||
|PC_2|probe||
|PB_0|bed|hbed|
|PD_12|e0heat|he0|
|PD_13|e1heat|he1|
|PD_14|e2heat|he2|
|PA_0|fan0|fan|
|PA_1|fan1||
|PA_2|fan2||
|PA_14|lcdd7||
|PA_13|lcdd6||
|PE_15|lcdd4||
|PE_14|lcdd5||
|PB_1|lcden||
|PE_13|tfcd||
|PA_9|TX1|btnenc|
|PA_10|RX1|lcdrs|
|PD_8|PD8|btnen2|
|PD_9|PD9|btnen1|
|PE_10|PE10||
|PE_11|PE11||
|PE_12|PE12||
|PA_4|PA4|SPI1SDCS|
|PA_5|PA5|SPI1SCK|
|PA_6|PA6|SPI1MISO|
|PA_7|PA7|SPI1MOSI|
|PE_7|PE7|SPI1CS1|
|PE_8|PE8|SPI1CS2|
|PB_3|PB3|MOTSCK|
|PB_4|PB4|MOTMISO|
|PB_5|PB5|MOTMOSI|
|PD_15|Neopixel|LED|
|PB_9|PB9|Laser|
|PC_3|Power_ADC|PC3|

<div class="datatable-end"></div>