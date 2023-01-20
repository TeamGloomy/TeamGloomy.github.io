---
title: Fly-407ZG Pin Names in Firmware
tags: []
keywords: 
last_updated: 18/01/2023
summary: "The pin names of the Fly-407ZG used in the firmware"
sidebar: mydoc_sidebar
permalink: fly_407zg_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Fly-407ZG Pinout Diagram

{% include image.html file="fly_407zg_pins.svg" url="https://teamgloomy.github.io/images/fly_407zg_pins.svg" alt="Fly-407ZG" caption="Fly-407ZG Pinout" %}

## Fly-407ZG Driver Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|5|6|7|8|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|:-----|:--|:--|:--|
|Enable Pins|PE_1|PG_12|PD_7|PD_4|PD_0|PG_8|PG_5|PG_2|PD_9|
|Step Pins|PB_9|PB_8|PA_8|PC_7|PC_6|PD_15|PD_14|PD_13|PD_12|
|Direction Pins|PE_0|PG_11|PD_6|PD_3|PA_15|PG_7|PG_4|PD_11|PD_8|
|UART Pins|PG_13|PG_10|PD_5|PD_1|PA_14|PG_6|PG_3|PD_10|PB_12|

<div class="datatable-end"></div>

## Fly-407ZG Other Pins in Firmware 

If more than one pin name is availble, either name can be used in the firmware (config.g).  
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of PA0, PA.0, PA_0, A0, A.0 or A_0.  

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|PWM Hardware Timer|
| :------------- |:-------------|:-------------|:-------------|
|PA_0|e0temp|t0|Timer 2|
|PA_1|fan3||Timer 2|
|PA_2|fan2||Timer 2|
|PA_3|dljc||Timer 2|
|PA_9|TX1|||
|PA_10|RX1|||
|PB_2|LCD_CD|||
|PB_10|BEEP||Timer 2|
|PB_11|fan5||Timer 2|
|PB_13|LCD_SCK|||
|PB_14|LCD_EN||Timer 12|
|PB_15|LCD_MOSI||Timer 8|
|PC_0|e2temp|t2||
|PC_1|e1temp|t1||
|PC_2|xmax|xstopmax||
|PC_3|xmin|xstop||
|PC_4|BTN_EN2|||
|PC_5|BTN_EN1|||
|PC_8|SDD0||Timer 8|
|PC_9|SDD1||Timer 8|
|PC_10|SDD2|||
|PC_11|SDD3|||
|PC_12|SDSCK|||
|PC_13|SDCD|||
|PC_14|z3|||
|PC_15|zmax|zstopmax||
|PD_2|SDCMD|||
|PE_2|bed|hbed||
|PE_3|e5heat|he5||
|PE_4|e4heat|he4||
|PE_5|e3heat|he3|Timer 9|
|PE_6|e2heat|he2|Timer 9|
|PE_7|LCD_D7|||
|PE_8|LCD_D6|||
|PE_9|LCD_D5|||
|PE_10|LCD_D4|||
|PE_11|servo0|||
|PE_12|LCD_RS|||
|PE_13|fan4|||
|PE_14|LCD_EN|||
|PE_15|BTN_ENC|||
|PF_0|zmin|zstop||
|PF_2|ymin|ystop||
|PF_3|bedtemp|tb||
|PF_1|ymax|ystopmax||
|PF_4|e5temp|t5||
|PF_5|e4temp|t4||
|PF_6|e1heat|he1|Timer 10|
|PF_7|e0heat|he0|Timer 11|
|PF_8|fan0|fan|Timer 13|
|PF_9|fan1||Timer 14|
|PF_10|e3temp|t3||
|PF_11|LCD_SS|||

<div class="datatable-end"></div>