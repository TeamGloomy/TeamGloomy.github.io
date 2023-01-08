---
title: Troodon V2 Printer Pin Names in Firmware
tags: []
keywords: 
last_updated: 06/01/2023
summary: "The pin names of the Troodon V2 Printer in the firmware"
sidebar: mydoc_sidebar
permalink: troodon_v2_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Troodon V2 Stock Board Pinout

{% include image.html file="octopus_x7_pins.png" url="https://teamgloomy.github.io/images/octopus_x7_pins.png" alt="Troodon V2 Pinout" caption="Troodon V2 Pinout" %}

## Troodon V2 Stock Board Driver Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|5|6|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|:-------------|:-------------|
|Enable Pins|PA_1| PC_1| PC_5| PE_10| PE_15| PF_12| PG_1|
|Step Pins|PA_3| PC_2| PB_0| PE_11| PB_10| PF_13| PE_7|
|Direction Pins|PA_4| PC_3| PB_1| PE_12| PB_11| PF_14| PE_8|
|UART Pins|PA_2| PC_0| PC_4| PE_9| PE_14| PF_11| PG_0|

<div class="datatable-end"></div>

## Troodon V2 Stock Board Other Pins in Firmware 

If more than one pin name is availble, either name can be used in the firmware (config.g).  
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of PA0, PA.0, PA_0, A0, A.0 or A_0.

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|PWM Hardware Timer|
| :------------- |:-------------|:-------------|:-------------|
|PA_0|bedtemp|tb|Timer 2|
|PB_12|LCDSS|||
|PB_13|LCDSCK|||
|PB_14|LCDMISO||Timer 12|
|PB_15|LCDMOSI||Timer 12|
|PB_7|fan1||Timer 4|
|PB_8|fan0|fan|Timer 10|
|PB_9|e0heat||Timer 11|
|PC_13|zstop|||
|PC_14|e0stop|e0det||
|PC_15|ystop|||
|PC_6|fan3||Timer 8|
|PC_7|LED|STATUS|Timer 3|
|PD_10|BTNEN1|||
|PD_11|LCDD7|||
|PD_12|bed||Timer 4|
|PD_13|LCDD6||Timer 4|
|PD_14|LCDD5||Timer 4|
|PD_15|LCDD4||Timer 4|
|PD_8|LCDCD|||
|PD_9|BTNEN2|||
|PE_13|diag4|||
|PE_5|fan2||Timer 9|
|PE_6|fan4||Timer 9|
|PF_0|SDA1|||
|PF_1|SCL1|||
|PF_15|diag6|||
|PF_2|xstop|||
|PF_3|e0temp|th0||
|PF_4|probe|PS1||
|PF_9|diag5||Timer 14|
|PG_2|LCDRS|||
|PG_3|LCDEN|||
|PG_4|BTNENC|||
|PG_5|BEEP|||
|PG_7|pro_sw|PS||

<div class="datatable-end"></div>

## Troodon V2 Stock Board Hardware SPI pins in Firmware 

Hardware SPI pins

<div class="datatable-begin"></div>

|SPI Channel|SCK|MISO|MOSI|
| :------------- |:-------------|:-------------|:-------------|
|SPI0|PA_5|PA_6|PA_7|
|SPI1|PB_13|PB_14|PB_15|
|SPI2|PB_3|PB_4|PB_5|

<div class="datatable-end"></div>