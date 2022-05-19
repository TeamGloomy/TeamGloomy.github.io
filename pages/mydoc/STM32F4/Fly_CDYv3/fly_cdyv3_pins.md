---
title: Fly-CDYv3 Pin Names in Firmware
tags: []
keywords: 
last_updated: 18/05/2022
summary: "The pin names of the Fly-CDYv3 used in the firmware"
sidebar: mydoc_sidebar
permalink: fly_cdyv3_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Fly-CDYv3 Pinout Diagram

{% include image.html file="fly_cdyv3.svg" url="https://teamgloomy.github.io/images/fly_cdyv3.svg" alt="Fly-CDYv3" caption="Fly-CDYv3 Pinout" %}

## fly-CDYv3 Driver Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|5|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|:----|
|Enable Pins|C.1|C.14|B.8|D.7|D.4|D.0|
|Step Pins|E.5|E.4|E.3|E.2|E.1|E.0|
|Direction Pins|C.0|C.13|B.7|D.6|D.3|A.15|
|UART Pins|C.15|A.8|B.6|D.5|D.1|E.9|


<div class="datatable-end"></div>

## Fly-CDYv3 Other Pins in Firmware 

If more than one pin name is availble, either name can be used in the firmware (config.g).  
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of PA0, PA.0, PA_0, A0, A.0 or A_0.  

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|PWM Hardware Timer|
| :------------- |:-------------|:-------------|:-------------|
|A.3|e0temp|t0|Timer 2|
|C.4|e1temp|t1||
|C.5|e2temp|t2||
|B.1|bedtemp|tb|Timer 3|
|C.7|xmin|xstop|Timer 3|
|C.6|xmax|xstopmax|Timer 8|
|D.11|ymin|ystop||
|D.10|ymax|ystopmax||
|B.10|zmin|zstop|Timer 2|
|B.11|zmax|zstopmax|Timer 2|
|E.6|servo0||Timer 9|
|C.2|probe|||
|B.0|bed|hbed|Timer 3|
|D.12|e0heat|he0|Timer 4|
|D.13|e1heat|he1||
|D.14|e2heat|he2|Timer 4|
|A.0|fan0|fan|Timer 2|
|A.1|fan1||Timer 2|
|A.2|fan2||Timer 2|
|A.14|lcdd7|||
|A.13|lcdd6|||
|E.15|lcdd4|||
|E.14|lcdd5|||
|B.1|lcden||Timer 3|
|E.13|tfcd|||
|A.9|TX1|btnenc||
|A.10|RX1|lcdrs||
|D.8|btnen2|||
|D.9|btnen1|||
|A.4|SPI1SDCS|||
|A.5|SPI1SCK||Timer 8|
|A.6|SPI1MISO||Timer 13|
|A.7|SPI1MOSI||Timer 14|
|E.7|SPI1CS1|||
|E.8|SPI1CS2|||
|B.3|MOTSCK||Timer 2|
|B.4|MOTMISO||Timer 3|
|B.5|MOTMOSI||Timer 3|
|D.15|Neopixel|LED|Timer 4|
|B.9|Laser|||
|C.3|Power_ADC|PC3||

<div class="datatable-end"></div>