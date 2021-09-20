---
title: Fly-407ZG Pin Names in Firmware
tags: []
keywords: 
last_updated: 20/09/2021
summary: "The pin names of the Fly-407ZG used in the firmware"
sidebar: mydoc_sidebar
permalink: fly_407zg_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Fly-407ZG Pinout Diagram

{% include image.html file="fly_407zg_pins.svg" url"https://teamgloomy.github.io/images/fly_407zg_pins.svg" alt="Fly-407ZG" caption="Fly-407ZG Pinout" %}

## Fly-407ZG Driver Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|5|6|7|8|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|:-----|:--|:--|:--|
|Enable Pins|E.1|G.12|D.7|D.4|D.0|G.8|G.5|G.2|D.9|
|Step Pins|B.9|B.8|A.8|C.7|C.6|D.15|D.14|D.13|D.12|
|Direction Pins|E.0|G.11|D.6|D.3|A.15|G.7|G.4|D.11|D.8|
|UART Pins|G.13|G.10|D.5|D.1|A.14|G.6|G.3|D.10|B.12|

<div class="datatable-end"></div>

## Fly-407ZG Other Pins in Firmware 

If more than one pin name is availble, either name can be used in the firmware (config.g).  
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of PA0, PA.0, PA_0, A0, A.0 or A_0.  

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|
| :------------- |:-------------|:-------------|
|A.0|e0temp|t0|
|A.1|fan3||
|A.2|fan2||
|A.3|dljc||
|A.9|TX1||
|A.10|RX1||
|B.11|fan5||
|C.0|e2temp|t2|
|C.1|e1temp|t1|
|C.2|xmax|xstopmax|
|C.3|xmin|xstop|
|C.8|SDD0||
|C.9|SDD1||
|C.10|SDD2||
|C.11|SDD3||
|C.12|SDSCK||
|C.13|SDCD||
|C.14|z3||
|C.15|zmax|zstopmax|
|D.2|SDCMD||
|E.2|bed|hbed|
|E.3|e5heat|he5|
|E.4|e4heat|he4|
|E.5|e3heat|he3|
|E.6|e2heat|he2|
|E.8|fan0|fan|
|E.11|servo0||
|E.13|fan4||
|F.0|zmin|zstop|
|F.2|ymin|ystop|
|F.3|bedtemp|tb|
|F.1|ymax|ystopmax|
|F.4|e5temp|t5|
|F.5|e4temp|t4|
|F.6|e1heat|he1|
|F.7|e0heat|he0|
|F.9|fan1||
|F.10|e3temp|t3|

<div class="datatable-end"></div>