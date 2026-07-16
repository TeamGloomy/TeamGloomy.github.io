---
title: Fly-Super5Pro H723 Pin Names in Firmware
tags: []
keywords: 
last_updated: 10/04/2024
summary: "The pin names of the Fly-Super5Pro H723 in the firmware"
permalink: fly_super5pro_h723_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-Super5Pro H723
---

## {{page.boardname}} Pinout Diagram

{% include image.html file="fly_super5pro_pins.svg" url="https://teamgloomy.github.io/images/fly_super5pro_pins.svg" alt="Fly-Super5Pro H723" caption="Fly-Super5Pro H723 Pinout" %}

## {{page.boardname}} Driver Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|
|Enable Pins|PB_11|PE_13|PE_9|PC_1|PE_3|
|Step Pins|PE_14|PE_11|PE_7|PE_4|PE_1|
|Direction Pins|PE_15|PE_12|PE_8|PE_5|PE_2|
|UART Pins|PB_10|PE_10|PA_4|PC_0|PE_0|

<div class="datatable-end"></div>

## {{page.boardname}} Other Pins in Firmware

If more than one pin name is availble, either name can be used in the firmware (config.g).  
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of PA0, PA.0, PA_0, A0, A.0 or A_0.  

<div class="datatable-begin"></div>

|Pin|Pin Name(s)|PWM Timer (up to 3.6)|PWM Timer (from 3.7)|
| :------------- |:-------------|:-------------|:-------------|
|PA_0|fan0|Timer 2|Timer 2|
|PA_1|fan1|Timer 2|Timer 2|
|PA_2|fan2|Timer 15|Timer 15|
|PA_3|fan3|Timer 2|Timer 5|
|PA_8|beep|||
|PA_13|btnenc|||
|PA_14|lcdrs|||
|PA_15|lcden|Timer 2|Timer 2|
|PB_0|bedout, bed|Timer 3|Timer 8|
|PB_1|adc2|Timer 3|Timer 8|
|PB_2|neopixel|||
|PB_3|lcdsck|Timer 2|Timer 2|
|PB_4|lcdmiso|Timer 3||
|PB_5|lcdmosi|Timer 3||
|PB_6|lcdss|Timer 4|Timer 4|
|PB_7|io0|Timer 4|Timer 4|
|PC_2|probe|||
|PC_4|adc0|||
|PC_5|adc1|||
|PC_6|io2|Timer 3|Timer 8|
|PC_7|io1|Timer 8|Timer 8|
|PC_13|io3|||
|PC_14|io4|||
|PC_15|io5|||
|PD_0|lcdd4|||
|PD_1|lcdd5|||
|PD_3|lcdd7|||
|PD_4|lcdd6|||
|PD_5|lcdcd|||
|PD_6|btnen1|||
|PD_7|btnen2|||
|PD_12|heat0|Timer 4|Timer 4|
|PD_13|heat1|Timer 4|Timer 4|
|PD_15|status|Timer 4|Timer 4|
|PE_6|servo0|Timer 15|Timer 15|

<div class="datatable-end"></div>

## Configured SPI connections

The below SPI channels are preconfigured in the firmware.  
Where NoPin is present, then that pin is not configured by default.  

<div class="datatable-begin"></div>

|SPI Channel| CLK | MISO | MOSI | Hardware or Software | Use |
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|
|0|PA_5|PA_6|PA_7|Hardware|Drivers|
|1|PB_13|PB_14|PB_15|Hardware|SBC SPI|
|2|PB_3|PB_4|PB_5|Hardware|EXP2|
|3|NoPin|NoPin|NoPin|Software|None|
|4|NoPin|NoPin|NoPin|Software|None|
|5|PD_0|NoPin|PA_15|Software|Reprapdiscount Display|
|6|NoPin|NoPin|NoPin|Hardware|None|
|7|NoPin|NoPin|NoPin|Hardware|None|
|8|NoPin|NoPin|NoPin|Hardware|None|

<div class="datatable-end"></div>
