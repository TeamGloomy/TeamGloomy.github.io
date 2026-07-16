---
title: Fly-E3-Ultra H723 Pin Names in Firmware
tags: []
keywords: 
last_updated: 23/04/2025
summary: "The pin names of the Fly-E3-Ultra H723 in the firmware"
permalink: fly_e3_ultra_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-E3-Ultra H723
---

## {{page.boardname}} Pinout Diagram

{% include image.html file="fly_e3_ultra_pins.avif" url="https://teamgloomy.github.io/images/fly_e3_ultra_pins.avif" alt="Fly-E3-Ultra H723" caption="Fly-E3-Ultra H723 Pinout" %}

## {{page.boardname}} Driver Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|
|Enable Pins|PE_5|PE_1|PC_2|PD_6|PC_15|
|Step Pins|PE_3|PD_1|PA_15|PD_4|PC_13|
|Direction Pins|PE_2|PD_0|PD_7|PD_3|PC_0|
|UART Pins|PE_4|PE_0|PA_8|PD_5|PC_14|

<div class="datatable-end"></div>

## {{page.boardname}} Other Pins in Firmware

If more than one pin name is availble, either name can be used in the firmware (config.g).  
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of PA0, PA.0, PA_0, A0, A.0 or A_0.  

<div class="datatable-begin"></div>

|Pin|Pin Name(s)|PWM Timer (up to 3.6)|PWM Timer (from 3.7)|
| :------------- |:-------------|:-------------|:-------------|
|PA_0|bed, hbed|Timer 2|Timer 2|
|PA_1|e1temp, t1|Timer 2|Timer 2|
|PA_2|e0heat, he0|Timer 15|Timer 15|
|PA_3|bedtemp, tb|Timer 2|Timer 5|
|PA_4|e0temp, t0|||
|PA_9|tx1, btnen2|||
|PA_10|rx1, btnen1|||
|PA_13|lcdcd|||
|PA_14|lcden|||
|PB_0|servo0|Timer 3|Timer 8|
|PB_1|laser|Timer 3|Timer 8|
|PB_2|lcdss|||
|PB_3|lcdsck|Timer 2|Timer 2|
|PB_4|lcdmiso|Timer 3||
|PB_5|lcdmosi|Timer 3||
|PB_6|fan2|Timer 4|Timer 4|
|PB_7|fan3|Timer 4|Timer 4|
|PB_10|ymin, ystop|Timer 2|Timer 2|
|PB_11|neopixel|Timer 2|Timer 2|
|PC_1|boardtemp, tboard|||
|PC_4|zmin, zstop|||
|PC_5|probe|||
|PC_6|e1heat, he1|Timer 3|Timer 8|
|PC_8|sdd0|Timer 8|Timer 8|
|PC_9|sdd1|Timer 8|Timer 8|
|PC_10|sdd2|||
|PC_11|sdd3|||
|PC_12|sdsck|||
|PD_2|sdcmd|||
|PD_10|pwr, pwrdet|||
|PD_11|pson|||
|PD_12|xmin, xstop|Timer 4|Timer 4|
|PD_14|fan1|Timer 4|Timer 4|
|PE_6|lcdrs|Timer 15|Timer 15|
|PE_7|lcdd6|||
|PE_8|lcdd7|||
|PE_9|lcdd4|||
|PE_10|lcdd5|||
|PE_11|beep|||
|PE_12|btnenc|||

<div class="datatable-end"></div>

## Configured SPI connections

The below SPI channels are preconfigured in the firmware.  
Where NoPin is present, then that pin is not configured by default.  

<div class="datatable-begin"></div>

|SPI Channel| CLK | MISO | MOSI | Hardware or Software | Use |
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|
|0|PA_4|PA_5|PA_6|Hardware|MAX31855 and MAX31865|
|1|PB_13|PB_14|PB_15|Hardware|WiFi|
|2|PB_3|PB_4|PB_5|Hardware|EXP2|
|3|NoPin|NoPin|NoPin|Software|None|
|4|PE_10|NoPin|PE_8|Software|Single wire Ender displays|
|5|PE_9|NoPin|PA_14|Software|Reprapdiscount Display|
|6|NoPin|NoPin|NoPin|Hardware|None|
|7|NoPin|NoPin|NoPin|Hardware|None|
|8|NoPin|NoPin|NoPin|Hardware|None|

<div class="datatable-end"></div>
