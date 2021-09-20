---
title: SKR-RRF-E3 + IDEX Pin Names in Firmware
tags: []
keywords: 
last_updated: 20/09/2021
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
|PA_0|e0temp|th0|
|PA_1|bedtemp|tb|
|PA_10|RX1|tft-rx|
|PA_2|e1temp|th1|
|PA_3|PT100|th2|
|PA_4|PA4| //RST|
|PA_5|PA5| //EN|
|PA_6|PA6| //IO0|
|PA_7|PA7| //IO4|
|PA_9|TX1|tft-tx|
|PB_0|servo0||
|PB_1|LCDCS||
|PB_10|e1stop||
|PB_11|x2stop||
|PB_12|PB12|//CS|
|PB_13|PB13|//CLK|
|PB_14|PB14|//MISO|
|PB_15|PB15|//MOSI|
|PB_2|LCDENCB||
|PB_3|e0heat|heat0|
|PB_4|bed|hbed|
|PB_5|fan0|fan|
|PB_6|fan1||
|PB_7|Neopixel|PB7|
|PB_8|SDA1|PB8|
|PB_9|SCL1|PB9|
|PC_0|xstop|x-stop|
|PC_1|ystop|y-stop|
|PC_2|zstop|z-stop|
|PC_3|e0stop|e0det|
|PC_5|probe||
|PD_10|PD10|//IO2|
|PD_11|PD11|//IO0|
|PD_12|PD12|//EN|
|PD_13|PD13|//RST|
|PD_8|PD8||
|PD_9|PD9||
|PE_0|PWRDET|PE0|
|PE_1|PSON|PE1|
|PE_10|LCDD4||
|PE_11|LCDEN||
|PE_2|LED|PE2|
|PE_4|e1heat||
|PE_5|fan2||
|PE_6|fan3||
|PE_7|LCDENCB||
|PE_8|LCDBEEP||
|PE_9|LCDBTN||
|PE3|IO||

<div class="datatable-end"></div>