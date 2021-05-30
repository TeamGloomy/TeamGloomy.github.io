---
title: Fly-CDYv2 Pin Names in Firmware
tags: []
keywords: 
last_updated: 25/05/2021
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
|Enable Pins|C.1|C.14|B.8|D.7|D.4|D.0|
|Step Pins|E.5|E.4|E.3|E.2|E.1|E.0|
|Direction Pins|C.0|C.13|B.7|D.6|D.3|A.15|
|UART Pins|C.15|A.8|B.6|D.5|D.1|E.9|


<div class="datatable-end"></div>

Other pin numbers. Either name can be used in the firmware (config.g).

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|
| :------------- |:-------------|:-------------|
|A.3|e0temp|t0|
|C.4|e1temp|t1|
|C.5|e2temp|t2|
|B.1|bedtemp|tb|
|C.7|xmin|xstop|
|C.6|xmax|xstopmax|
|D.11|ymin|ystop|
|D.10|ymax|ystopmax|
|B.10|zmin|zstop|
|B.11|zmax|zstopmax|
|E.6|servo0||
|C.2|probe||
|B.0|bed|hbed|
|D.12|e0heat|he0|
|D.13|e1heat|he1|
|D.14|e2heat|he2|
|A.0|fan0|fan|
|A.1|fan1||
|A.2|fan2||
|A.14|lcdd7||
|A.13|lcdd6||
|E.15|lcdd4||
|E.14|lcdd5||
|B.1|lcden||
|E.13|tfcd||
|A.9|TX1|btnenc|
|A.10|RX1|lcdrs|
|D.8|PD8|btnen2|
|D.9|PD9|btnen1|
|E.10|PE10||
|E.11|PE11||
|E.12|PE12||
|A.4|PA4|SPI1SDCS|
|A.5|PA5|SPI1SCK|
|A.6|PA6|SPI1MISO|
|A.7|PA7|SPI1MOSI|
|E.7|PE7|SPI1CS1|
|E.8|PE8|SPI1CS2|
|B.3|PB3|MOTSCK|
|B.4|PB4|MOTMISO|
|B.5|PB5|MOTMOSI|
|D.15|Neopixel|LED|
|B.9|PB9|Laser|
|C.3|Power_ADC|PC3|

<div class="datatable-end"></div>