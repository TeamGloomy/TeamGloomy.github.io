---
title: SKR Pro v1.1 and v1.2 Pin Names in Firmware
tags: []
keywords: 
last_updated: 15/01/2021
summary: "The pin names of the SKR Pro v1.1 and v1.2 in the firmware"
sidebar: mydoc_sidebar
permalink: skr_pro_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

{% include warning.html content="The SKR Pro v1.1 and v1.2 sensorless homing jumpers don't do anything so if you don't want to use sensorless homing and use normal endstops, you will have to remove the diag pin from your drivers - [Evidence](https://github.com/bigtreetech/BIGTREETECH-GTR-V1.0/issues/12)" %}

## SKR Pro v1.1 Pinout Diagram

{% include image.html file="skr_pro_1.1.png" alt="SKR Pro v1.1" caption="SKR Pro v1.1 Pinout" %}

## SKR Pro v1.2 Pinout Diagram

{% include image.html file="skr_pro_1.2.png" alt="SKR Pro v1.2" caption="SKR Pro v1.2 Pinout" %}

## SKR Pro v1.1 and v1.2 Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|5|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|:-----|
|Enable Pins|F.2|D.7|C.0|C.3|A.3|F.0|
|Step Pins|E.9|E.11|E.13|E.14|D.15|D.13|
|Direction Pins|F.1|E.8|C.2|A.0|E.7|G.9|
|UART Pins|C.13|E.3|E.1|D.4|D.1|D.6|

<div class="datatable-end"></div>

Other pin numbers. Either name can be used in the firmware (config.g).  
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of PA0, PA.0, PA_0, A0, A.0 or A_0.  

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|
| :------------- |:-------------|:-------------|
|A.1| servo0||
|A.2| probe||
|A.15| X-CS||
|B.0| e2heat|he2|
|B.1| e0heat|he0|
|B.10| xstop|x-stop|
|B.3| E0-CS||
|B.8| Y-CS||
|B.9| Z-CS||
|C.6| wifi4||
|C.7| wifi3||
|C.8| fan0|fan|
|D.12| bed|hbed|
|D.14| e1heat|he1|
|E.10| e1stop|e1det|
|E.12| ystop|y-stop|
|E.15| e0stop|e0det|
|E.5| fan1||
|E.6| fan2||
|F.14| wifi5||
|F.15| wifi6||
|F.3| e0temp|t0|
|F.4| e1temp|t1|
|F.5| e2temp|t2|
|F.6| bedtemp|t3|
|G.0| wifi1||
|G.1| wifi2||
|G.12| E2-CS||
|G.15| E1-CS||
|G.5| e2stop|e2det|
|G.8| zstop|z-stop|

<div class="datatable-end"></div>