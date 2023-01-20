---
title: SKR v2.0 Pin Names in Firmware
tags: []
keywords: 
last_updated: 18/05/2022
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
|Enable Pins|PE_3| PD_6| PD_1| PC_7| PD_13|
|Step Pins|PE_2| PD_5| PA_15| PD_15| PD_11|
|Direction Pins|PE_1| PD_4| PA_8| PD_14| PD_10|
|UART Pins|PE_0| PD_3| PD_0| PC_6| PD_12|

<div class="datatable-end"></div>

## SKR v2.0 Other Pins in Firmware 

If more than one pin name is availble, either name can be used in the firmware (config.g).  
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of PA0, PA.0, PA_0, A0, A.0 or A_0.  

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|PWM Hardware Timer|
| :------------- |:-------------|:-------------|:-------------|
|PA_0|e1stop|e1det|Timer 2|
|PA_1|bedtemp|tb|Timer 2|
|PA_13|LED|||
|PA_14|MISO|||
|PA_2|e0temp|th0|Timer 2|
|PA_3|e1temp|th1|Timer 2|
|PA_4|LCD_SS|||
|PA_5|LCD_SCK||Timer 8|
|PA_6|LCD_MISO||Timer 13|
|PA_7|LCD_MOSI||Timer 14|
|PA_9|TX1|tft-tx||
|PA_10|RX1|tft-rx||
|PB_0|BTN_ENC||Timer 3|
|PB_1|LCD_EN||Timer 3|
|PB_2|BTN_EN2|||
|PB_3|e0heat|heat0|Timer 2|
|PB_4|e1heat|heat1|Timer 3|
|PB_5|fan2||Timer 3|
|PB_6|fan1||Timer 4|
|PB_7|fan0|fan|Timer 4|
|PB_8|SCL1||Timer 10|
|PB_9|SDA1||Timer 11|
|PC_0|zstop|z-stop||
|PC_1|xstop|x-stop||
|PC_13|SP|||
|PC_15|PWRDET|||
|PC_2|e0stop|e0det||
|PC_3|ystop|y-stop||
|PC_4|LCD_CD|||
|PC_5|BEEP|||
|PC_6|E0-CS||Timer 8|
|PD_0|Z-CS|||
|PD_3|Y-CS|||
|PD_7|bed|hbed||
|PD_12|E1-CS||Timer 4|
|PE_0|X-CS|||
|PE_10|LCD_D4|||
|PE_11|LCD_D5|||
|PE_12|LCD_D6|||
|PE_13|LCD_D7|||
|PE_14|MOSI|||
|PE_15|SCK|||
|PE_4|probe|||
|PE_5|servo0||Timer 9|
|PE_6|Neopixel||Timer 9|
|PE_7|BTN_EN1|||
|PE_8|PSON|||
|PE_9|LCD_RS|||

<div class="datatable-end"></div>