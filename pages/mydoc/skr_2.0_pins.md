---
title: SKR v2.0 Pin Names in Firmware
tags: []
keywords: 
last_updated: 20/09/2021
summary: "The pin names of the SKR v2.0 in the firmware"
sidebar: mydoc_sidebar
permalink: skr_2.0_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## SKR v2.0 Pinout Diagram

{% include image.html file="skr_2.0_pins.png" url="https://teamgloomy.github.io/images/skr_2.0_pins.png" alt="SKR v2.0" caption="SKR v2.0 Pinout" %}

## SKR v2.0 Driver Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|
|Enable Pins|E.3| D.6| D.1| C.7| D.13|
|Step Pins|E.2| D.5| A.15| D.15| D.11|
|Direction Pins|E.1| D.4| A.8| D.14| D.10|
|UART Pins|E.0| D.3| D.0| C.6| D.12|

<div class="datatable-end"></div>

## SKR v2.0 Other Pins in Firmware 

If more than one pin name is availble, either name can be used in the firmware (config.g).  
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of PA0, PA.0, PA_0, A0, A.0 or A_0.  

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|
| :------------- |:-------------|:-------------|
|A.1|bedtemp|tb|
|A.2|e0temp|th0|
|A.3|e1temp|th1|
|C.1|xstop|x-stop|
|C.3|ystop|y-stop|
|C.0|zstop|z-stop|
|C.2|e0stop|e0det|
|A.0|e1stop|e1det|
|E.5|servo0||
|E.4|probe||
|D.7|bed|hbed|
|B.3|e0heat|heat0|
|B.4|e1heat|heat1|
|B.7|fan0|fan|
|B.6|fan1||
|B.5|fan2||
|E.9|LCDCS||
|B.2|LCDENCA||
|E.7|LCDENCB||
|C.5|LCDBEEP||
|B.0|LCDBTN||
|E.10|LCDD4||
|B.1|LCDEN||
|E.6|Neopixel||
|A.9|TX1|tft-tx|
|A.10|RX1|tft-rx|
|E.0|X-CS||
|D.3|Y-CS||
|D.0|Z-CS||
|C.6|E0-CS||
|D.12|E1-CS||
|A.14|MISO||
|E.14|MOSI||
|E.15|SCK||
|B.8|SCL1||
|B.9|SDA1||
|E.8|PSON||
|C.15|PWRDET||
|A.13|LED||
|C.13|SP||

<div class="datatable-end"></div>