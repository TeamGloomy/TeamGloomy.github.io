---
title: Fly-E3 Pin Names in Firmware
tags: []
keywords: 
last_updated: 20/09/2021
summary: "The pin names of the Fly-E3 in the firmware"
sidebar: mydoc_sidebar
permalink: fly_e3_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Fly-E3 Pinout Diagram

{% include image.html file="fly_e3.svg" url="https://teamgloomy.github.io/images/fly_e3.svg" alt="Fly-E3" caption="Fly-E3 Pinout" %}

## Fly-E3 Drivers Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0 (X)|1 (Y)|2 (Z)|3 (E0)|
| :------------- |:-------------|:-------------|:-------------|:-------------|
|Step Pins|C.13|E.3|B.9|B.3|
|Direction Pins|C.14|E.4|E.0|B.4|
|Enable Pins|C.15|E.5|E.1|B.5|
|UART Pins|E.6|E.2|B.8|D.7|

<div class="datatable-end"></div>

## Fly-E3 Other Pins in Firmware 

If more than one pin name is availble, either name can be used in the firmware (config.g).    
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of PA0, PA.0, PA_0, A0, A.0 or A_0.  

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|
| :------------- |:-------------|:-------------|
|A.0|bed|hbed|
|A.1|ymin|ystop|
|A.2|xmin|xstop|
|A.3|bedtemp|tb|
|A.4|e0temp|t0|
|A.5|e0heat|he0|
|A.6|fan1||
|A.7|fan0|fan|
|A.9|TX1||
|A.10|RX1||
|A.13|SWDIO||
|A.14|SWCLK||
|A.15|SDCD||
|B.0|servo0||
|B.1|lcden||
|B.10|FPC1||
|B.11|FPC2||
|C.4|probe||
|C.5|zmin|zstop|
|C.6|FPC9||
|C.8|SDD0||
|C.9|SDD1||
|C.10|SDD2||
|C.11|SDD3||
|C.12|SDSCK||
|D.0|FPC10||
|D.1|FPC11||
|D.2|SDCMD||
|D.10|FPC3||
|D.11|FPC4||
|D.12|FPC5||
|D.13|FPC6||
|D.14|FPC7||
|D.15|FPC8||
|E.7|lcdrs||
|E.8|lcdd4||
|E.9|btnen2||
|E.10|btnen1||
|E.11|btnenc||
|E.12|beep||

<div class="datatable-end"></div>