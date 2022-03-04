---
title: Fly-Gemini-V1 Pin Names in Firmware
tags: []
keywords: 
last_updated: 04/03/2022
summary: "The pin names of the Fly-Gemini-V1 in the firmware"
sidebar: mydoc_sidebar
permalink: fly_gemini_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Fly-Gemini-V1 Pinout Diagram

{% include image.html file="fly_gemini_pins.svg" url="https://teamgloomy.github.io/images/fly_gemini_pins.svg" alt="Fly-Gemini-V1" caption="Fly-Gemini-V1 Pinout" %}

## Fly-Gemini-V1 Driver Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0 (X)|1 (Y)|2 (Z)|3 (E0)|
| :------------- |:-------------|:-------------|:-------------|:-------------|
|Enable Pins|B.2|B.6|B.5|B.4|
|Step Pins|C.13|C.14|C.15|C.3|
|Direction Pins|C.1|C.4|C.5|C.7|
|UART Pins|B.11|B.9|B.8|B.7|

<div class="datatable-end"></div>

## Fly-Gemini-V1 Other Pins in Firmware 

If more than one pin name is availble, either name can be used in the firmware (config.g).  
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of PA0, PA.0, PA_0, A0, A.0 or A_0.  

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|
| :------------- |:-------------|:-------------|
|C.0|e0temp|t0|
|C.2|bedtemp|tb|
|A.3|xstop||
|B.1|ystop||
|B.10|zstop||
|B.0|servo0||
|A.1|probe||
|A.2|bed|hbed|
|A.0|e0heat|he0|
|C.6|fan0|fan|
|C.9|SDD1||
|C.8|SDD0||
|C.12|SDSCK||
|D.2|SDCMD||
|C.11|SDD3||
|C.10|SDD2||
|A.9|TX1||
|A.10|RX1||

<div class="datatable-end"></div>