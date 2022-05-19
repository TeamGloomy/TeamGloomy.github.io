---
title: SKR Pro v1.1 and v1.2 Pin Names in Firmware
tags: []
keywords: 
last_updated: 18/05/2022
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

{% include image.html file="skr_pro_1.1.png" url="https://teamgloomy.github.io/images/skr_pro_1.1.png" alt="SKR Pro v1.1" caption="SKR Pro v1.1 Pinout" %}

## SKR Pro v1.2 Pinout Diagram

{% include image.html file="skr_pro_1.2.png" url="https://teamgloomy.github.io/images/skr_pro_1.2.png" alt="SKR Pro v1.2" caption="SKR Pro v1.2 Pinout" %}

## SKR Pro v1.1 and v1.2 Driver Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|5|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|:-----|
|Enable Pins|F.2|D.7|C.0|C.3|A.3|F.0|
|Step Pins|E.9|E.11|E.13|E.14|D.15|D.13|
|Direction Pins|F.1|E.8|C.2|A.0|E.7|G.9|
|UART Pins|C.13|E.3|E.1|D.4|D.1|D.6|

<div class="datatable-end"></div>

## SKR Pro v1.1 and v1.2 Other Pins in Firmware 

If more than one pin name is availble, either name can be used in the firmware (config.g).  
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of PA0, PA.0, PA_0, A0, A.0 or A_0.  

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|PWM Hardware Timer|
| :------------- |:-------------|:-------------|:-------------|
|A.1| servo0||Timer 2|
|A.2| probe||Timer 2|
|A.8|BTNENC|||
|A.15| X-CS||Timer 2|
|B.0| e2heat|he2|Timer 3|
|B.1| e0heat|he0|Timer 3|
|B.10| xstop|x-stop|Timer 2|
|B.12|LCD_SS||Timer 2|
|B.13|LCD_SCK|||
|B.14|LCD_MISO||Timer 12|
|B.15|LCD_MOSI||Timer 8|
|B.3| E0-CS||Timer 2|
|B.8| Y-CS||Timer 10|
|B.9| Z-CS||Timer 11|
|C.6| wifi4||Timer 8|
|C.7| wifi3||Timer 3|
|C.8| fan0|fan|Timer 8|
|D.10|LCD_RS|||
|D.11|LCD_EN|||
|D.12| bed|hbed|Timer 4|
|D.14| e1heat|he1|Timer 4|
|E.10| e1stop|e1det||
|E.12| ystop|y-stop||
|E.15| e0stop|e0det||
|E.5| fan1||Timer 9|
|E.6| fan2||Timer 9|
|F.11|BTN_EN2|||
|F.12|LCD_CD|||
|F.13|KILL|||
|F.14| wifi5|||
|F.15| wifi6|||
|F.3| e0temp|t0||
|F.4| e1temp|t1||
|F.5| e2temp|t2||
|F.6| bedtemp|t3|Timer 10|
|G.0| wifi1|||
|G.1| wifi2|||
|G.10|BTN_EN1|||
|G.12| E2-CS|||
|G.15| E1-CS|||
|G.2|LCD_D4|||
|G.3|LCD_D5|||
|G.4| BEEP|||
|G.5| e2stop|e2det||
|G.6|LCD_D6|||
|G.7|LCD_D7|||
|G.8| zstop|z-stop||

<div class="datatable-end"></div>