---
title: SKR3EZ H743 Pin Names in Firmware
tags: []
keywords: 
last_updated: 10/04/2024
summary: "The pin names of the SKR3EZ H743 in the firmware"
permalink: skr_3_ez_h743_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: SKR3EZ H743
---

## {{page.boardname}} Pinout Diagram

{% include image.html file="skr3_ez_pins.png" url="https://teamgloomy.github.io/images/skr3_ez_pins.png" alt="SKR3EZ" caption="SKR3EZ H743 Pinout" %}

## {{page.boardname}} Driver Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|
|Enable Pins|PD_6|PD_1|PE_0|PC_7|PD_13|
|Step Pins|PD_4|PA_15|PE_2|PD_15|PD_11|
|Direction Pins|PD_3|PA_8|PE_3|PD_14|PD_10|
|UART Pins|PD_5|PD_0|PE_1|PC_6|PD_12|

<div class="datatable-end"></div>

## {{page.boardname}} Other Pins in Firmware

If more than one pin name is availble, either name can be used in the firmware (config.g).  
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of PA0, PA.0, PA_0, A0, A.0 or A_0.  

<div class="datatable-begin"></div>

|Pin|Pin Name(s)|PWM Timer (up to 3.6)|PWM Timer (from 3.7)|
| :------------- |:-------------|:-------------|:-------------|
|PA_0|e1stop, e1det|Timer 2|Timer 2|
|PA_1|bedtemp, tb|Timer 2|Timer 5|
|PA_2|e0temp, th0|Timer 15|Timer 15|
|PA_3|e1temp, th1|Timer 2|Timer 2|
|PA_4|lcdss|||
|PA_5|lcdsck|Timer 2|Timer 2|
|PA_6|lcdmiso|Timer 13|Timer 13|
|PA_7|lcdmosi|Timer 14|Timer 14|
|PA_13|led, status|||
|PB_0|btnenc|Timer 3|Timer 8|
|PB_1|lcden|Timer 3|Timer 8|
|PB_2|btnen2|||
|PB_3|e0heat, heat0|Timer 2|Timer 2|
|PB_4|e1heat, heat1|Timer 3||
|PB_5|fan2|Timer 3||
|PB_6|fan1|Timer 4|Timer 4|
|PB_7|fan0, fan|Timer 4|Timer 4|
|PC_0|zstop|||
|PC_1|xstop|||
|PC_2|e0stop, e0det|||
|PC_3|ystop|||
|PC_4|lcdcd|||
|PC_5|beep|||
|PC_13|probe|||
|PC_15|pwrdet|||
|PD_7|bed, hbed|||
|PE_4|pson|||
|PE_5|servo0|Timer 15|Timer 15|
|PE_6|neopixel|Timer 15|Timer 15|
|PE_7|btnen1|||
|PE_8|lcdrs|||
|PE_9|lcdd4|||
|PE_10|lcdd5|||
|PE_11|lcdd6|||
|PE_12|lcdd7|||

<div class="datatable-end"></div>

## Configured SPI connections

The below SPI channels are preconfigured in the firmware.  
Where NoPin is present, then that pin is not configured by default.  

<div class="datatable-begin"></div>

|SPI Channel| CLK | MISO | MOSI | Hardware or Software | Use |
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|
|0|PA_5|PA_6|PA_7|Hardware|EXP2|
|1|PB_13|PB_14|PB_15|Hardware|SBC SPI|
|2|NoPin|NoPin|NoPin|Hardware|None|
|3|PE_14|PE_15|PE_13|Software|Drivers|
|4|PC_5|PB_1|PB_0|Software|Accelerometer|
|5|PE_9|NoPin|PB_1|Software|Reprapdiscount Display|
|6|NoPin|NoPin|NoPin|Hardware|None|
|7|NoPin|NoPin|NoPin|Hardware|None|
|8|NoPin|NoPin|NoPin|Hardware|None|

<div class="datatable-end"></div>
