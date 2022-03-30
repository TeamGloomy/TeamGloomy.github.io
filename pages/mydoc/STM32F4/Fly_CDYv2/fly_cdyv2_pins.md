---
title: Fly-CDYv2 Pin Names in Firmware
tags: []
keywords: 
last_updated: 30/03/2022
summary: "The pin names of the Fly-CDYv2 used in the firmware"
sidebar: mydoc_sidebar
permalink: fly_cdyv2_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Fly-CDYv2 Pinout Diagram

{% include image.html file="fly_cdyv2.svg" url="https://teamgloomy.github.io/images/fly_cdyv2.svg" alt="Fly-CDYv2" caption="Fly-CDYv2 Pinout" %}

## fly-CDYv2 Driver Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|5|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|:----|
|Enable Pins|C.1|C.14|B.8|D.7|D.4|D.0|
|Step Pins|E.5|E.4|E.3|E.2|E.1|E.0|
|Direction Pins|C.0|C.13|B.7|D.6|D.3|A.15|
|UART Pins|C.15|A.8|B.6|D.5|D.1|E.9|


<div class="datatable-end"></div>

## Fly-CDYv2 Other Pins in Firmware 

If more than one pin name is availble, either name can be used in the firmware (config.g).  
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of PA0, PA.0, PA_0, A0, A.0 or A_0.  

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|
| :------------- |:-------------|:-------------|
|A.0|fan0|fan|
|A.1|fan1||
|A.10|RX1|LCD_RS|
|A.13|LCD_D6||
|A.14|LCD_D7||
|A.2|fan2||
|A.3|e0temp|t0|
|A.4|SPI1SDCS|LCD_SS|
|A.5|SPI1SCK|LCD_SCK|
|A.6|SPI1MISO|LCD_MISO|
|A.7|SPI1MOSI|LCD_MOSI|
|A.9|TX1|BTN_ENC|
|B.0|bed|hbed|
|B.1|bedtemp|tb|
|B.10|zmin|zstop|
|B.11|zmax|zstopmax|
|B.2|LCD_EN||
|B.3|MOTSCK||
|B.4|MOTMISO||
|B.5|MOTMOSI||
|B.9|Laser||
|C.2|probe||
|C.3|Power_ADC|PC3|
|C.4|e1temp|t1|
|C.5|e2temp|t2|
|C.6|xmax|xstopmax|
|C.7|xmin|xstop|
|D.10|ymax|ystopmax|
|D.11|ymin|ystop|
|D.12|e0heat|he0|
|D.13|e1heat|he1|
|D.14|e2heat|he2|
|D.15|Neopixel|LED|
|D.8|BTN_EN1||
|D.9|BTN_EN2||
|E.13|LCD_CD||
|E.14|LCD_D5||
|E.15|LCD_D4||
|E.6|servo0||
|E.7|SPI1CS1||
|E.8|SPI1CS2||

<div class="datatable-end"></div>