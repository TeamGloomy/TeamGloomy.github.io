---
title: Fly-E3-Pro Pin Names in Firmware
tags: []
keywords: 
last_updated: 20/09/2021
summary: "The pin names of the Fly-E3-Pro in the firmware"
sidebar: mydoc_sidebar
permalink: fly_e3_pro_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Fly-E3-Pro Pinout Diagram

{% include image.html file="fly_e3_pro_pins.svg" alt="Fly-E3-Pro" caption="Fly-E3-Pro Pinout" %}

## Fly-E3-Pro Driver Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0 (X)|1 (Y)|2 (Z)|3 (E0)|4 (E1)|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|
|Enable Pins|E.5|E.1|B.5|D.6|C.15|
|Step Pins|E.3|B.9|B.3|D.4|C.13|
|Direction Pins|E.2|B.8|D.7|D.3|C.0|
|UART Pins|E.4|E.0|B.4|D.5|C.14|

<div class="datatable-end"></div>

## Fly-E3-Pro Other Pins in Firmware 

If more than one pin name is availble, either name can be used in the firmware (config.g).  
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of PA0, PA.0, PA_0, A0, A.0 or A_0.  

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|
| :------------- |:-------------|:-------------|
|A.0|bed|hbed|
|A.1|e1temp|t1|
|A.10|RX1||
|A.2|xmin|xstop|
|A.3|bedtemp|tb|
|A.4|e0temp|t0|
|A.5|e0heat|he0|
|A.6|fan1||
|A.7|fan0|fan|
|A.8|LED||
|A.9|TX1||
|B.0|servo0||
|B.1|lcden||
|B.10|ymin|ystop|
|B.11|neopixel||
|B.6|fan2||
|B.7|fan3||
|C.1|boardtemp|tboard|
|C.10|SDD2||
|C.11|SDD3||
|C.12|SDSCK||
|C.3|Power_ADC||
|C.4|zmin|zstop|
|C.5|probe||
|C.6|e1heat|he1|
|C.8|SDD0||
|C.9|SDD1||
|D.0|e0min|e0stop|
|D.1|e1min|e1stop|
|D.10|pwr| PWRDET|
|D.11|PSON||
|D.2|SDCMD||
|E.10|btnen1||
|E.11|btnenc||
|E.12|beep||
|E.6|laser||
|E.7|lcdrs||
|E.8|lcdd4||
|E.9|btnen2||

<div class="datatable-end"></div>