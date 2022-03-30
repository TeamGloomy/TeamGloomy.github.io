---
title: SKR-RRF-E3 + IDEX Pin Names in Firmware
tags: []
keywords: 
last_updated: 29/03/2022
summary: "SKR-RRF-E3 + IDEX Pin Names"
sidebar: mydoc_sidebar
permalink: skr_rrf_e3_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## SKR-RRF-E3 Pinout Diagram

{% include image.html file="skr_rrf_e3_pins.png" url="https://teamgloomy.github.io/images/skr_rrf_e3_pins.png" alt="SKR-RRF-E3" caption="SKR-RRF-E3 Pinout" %}

## IDEX Pinout Diagram

{% include image.html file="skr_rrf_e3_idex_pins.png" url="https://teamgloomy.github.io/images/skr_rrf_e3_idex_pins.png" alt="SKR-RRF-E3 IDEX" caption="SKR-RRF-E3 IDEX Pinout" %}

## SKR-RRF-E3 + IDEX Driver Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|5|
| :---|:----|:----|:-----|:-----|:-----|:-----|:-----|
|Enable Pins|PD_7|PD_3|PD_14|PD_10|PC_13|PE_15|
|Step Pins|PD_5|PD_0|PC_6|PD_12|PC_15|PE_13|
|Direction Pins|PD_4|PA_15|PC_7|PD_13|PA_8|PE_12|
|UART Pins|PD_6|PD_1|PD_15|PD_11|PC_14|PE_14|

<div class="datatable-end"></div>

## SKR-RRF-E3 + IDEX Other Pins in Firmware 

If more than one pin name is availble, either name can be used in the firmware (config.g). 
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of PA0, PA.0, PA_0, A0, A.0 or A_0.  

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|
| :------------- |:-------------|:-------------|
|A.0|e0temp|th0|
|A.1|bedtemp|tb|
|A.10|RX1|tft-rx|
|A.2|e1temp|th1|
|A.3|PT100|th2|
|A.9|TX1|tft-tx|
|B.0|servo0||
|B.1|LCD_D6||
|B.10|e1stop||
|B.11|x2stop||
|B.2|LCD_D4||
|B.3|e0heat|heat0|
|B.4|bed|hbed|
|B.5|fan0|fan|
|B.6|fan1||
|B.7|Neopixel||
|B.8|SDA1||
|B.9|SCL1||
|C.0|xstop|x-stop|
|C.1|ystop|y-stop|
|C.2|zstop|z-stop|
|C.3|e0stop|e0det|
|C.5|probe||
|E.0|PWRDET||
|E.1|PSON||
|E.10|LCD_D5||
|E.11|LCD_D7||
|E.2|LED||
|E.4|e1heat||
|E.5|fan2||
|E.6|fan3||
|E.7|LCD_EN||
|E.8|BEEP||
|E.9|BTN_ENC||
|E.3|IO||

<div class="datatable-end"></div>