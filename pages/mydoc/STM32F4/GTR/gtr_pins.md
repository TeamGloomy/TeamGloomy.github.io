---
title: GTR + M5 Pin Names in Firmware
tags: []
keywords: 
last_updated: 08/06/2022
summary: "The pin names of the GTR + M5 in the firmware"
sidebar: mydoc_sidebar
permalink: gtr_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

{% include warning.html content="The GTR sensorless homing jumpers don't do anything so if you don't want to use sensorless homing and use normal endstops, you will have to remove the diag pin from your drivers - [Evidence](https://github.com/bigtreetech/BIGTREETECH-GTR-V1.0/issues/12)" %}

## GTR Pinout Diagram

{% include image.html file="gtr.png" url="https://teamgloomy.github.io/images/gtr.png" alt="GTR" caption="GTR Pinout" %}

## M5 Pinout Diagram

{% include image.html file="m5.png" url="https://teamgloomy.github.io/images/m5.png" alt="M5" caption="M5 Pinout" %}

## GTR + M5 Driver Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|5|6|7|8|9|10|
| :---|:----|:----|:-----|:-----|:-----|:-----|:-----|:-----|:-----|:-----|:-----|
|Enable Pins|F.1|E.4|B.9|G.13|D.7|D.2|F.8|G.2|F.14|E.8|I.0|
|Step Pins|C.15|E.3|B.8|G.12|D.6|D.1|F.3|D.14|E.12|G.0|H.12|
|Direction Pins|F.0|E.2|B.7|G.11|D.5|D.0|G.3|D.11|E.10|G.1|H.15|
|UART Pins|C.14|E.1|B.5|G.10|D.4|C.12|G.4|E.15|E.7|F.15|H.14|

<div class="datatable-end"></div>

## GTR + M5 Other Pins in Firmware 

If more than one pin name is availble, either name can be used in the firmware (config.g).  
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of PA0, PA.0, PA_0, A0, A.0 or A_0.  

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|PWM Hardware Timer|
| :------------- |:-------------|:-------------|:-------------|
|A.1| e1heat|heat1|Timer 2
|A.15|BTNENC||Timer 2|
|A.2| bed|hbed|Timer 2|
|A.3| e3temp|Temp_M1|Timer 2|
|A.8|LCD_RS|||
|B.0| e2heat|heat2|Timer 3|
|B.1| e0heat|heat0|Timer 3|
|B.10|LCD_CD||Timer 2|
|B.11|servo0||Timer 2|
|B.12|LCD_SS|||
|B.13|LCD_SCK|||
|B.14|LCD_MISO||Timer 12|
|B.15|LCD_MOSI||Timer 8|
|B.3| SCK||Timer 2|
|B.5| Z-CS||Timer 3|
|B.6| MISO||Timer 4|
|C.0| bedtemp|t3||
|C.1| e0temp|t0||
|C.10|LCD_EN|||
|C.11|BEEP|||
|C.12|E2-CS|||
|C.13| ystop|y-stop||
|C.14|X-CS|||
|C.2| e1temp|t1||
|C.3| e2temp|t2||
|C.5| wifi5|||
|C.6| wifi4||Timer 8|
|C.7| wifi3||Timer 3|
|C.8| fan2||Timer 8|
|C.9| fan_M4||Timer 8|
|D.10|BTN_EN1|||
|D.12|e5heat|heat_M3|Timer 4|
|D.13|e4heat|heat_M2|Timer 4|
|D.15|e3heat|heat_M1|Timer 4|
|D.3| e2stop|e2det||
|D.4| E1-CS|||
|E.0| zstop|z-stop||
|E.1| Y-CS|||
|E.11|fan_M3|||
|E.13|e6heat|heat_M4||
|E.14| fan_M5|||
|E.5| fan0||Timer 9|
|E.6| fan1||Timer 9|
|E.9| fan_M2|||
|F.10|e5temp|Temp_M3||
|F.11|wifi1|||
|F.12|e7stop|M5_Stop||
|F.13|Neopixel|||
|F.2| xstop|x-stop||
|F.4| e4stop|M2_Stop||
|F.5| e7temp|Temp_M5||
|F.6| e5stop|M3_Stop|Timer 10|
|F.7| e6temp|Temp_M4|Timer 11|
|F.9| e4temp|Temp_M2|Timer 14|
|G.10|E0-CS|||
|G.14|e0stop|e0det||
|G.15| MOSI|||
|G.5|LCD_D7|||
|G.6|LCD_D6|||
|G.7|LCD_D5|||
|G.8|LCD_D4|||
|G.9| e1stop|e1det||
|H.10|BTN_EN2|||
|H.11|probe|||
|H.2| KCS|||
|H.6| EI2||Timer 12|
|I.1| KSCK|||
|I.11|EI1|||
|I.2| KMOSI|||
|I.4| e3stop|M1_Stop||
|I.5| fan_M1||Timer 8|
|I.6| e7heat|heat_M5|Timer 8|
|I.7| e6stop|M4_Stop||

<div class="datatable-end"></div>