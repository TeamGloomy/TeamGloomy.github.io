---
title: AFC-Lite V1.0 H723 Pin Names in Firmware
tags: []
keywords: 
last_updated: 23/03/2025
summary: "The pin names of the AFC-Lite V1.0 H723 in the firmware"
permalink: afc_lite_v1_0_h723_pins.html
folder: mydoc
comments: false
toc: false
datatable: true

---

## AFC-Lite V1.0 H723 Pinout Diagram

{% include image.html file="afc_lite_v1_pins.png" url="https://teamgloomy.github.io/images/afc_lite_v1_pins.png" alt="AFC-Lite V1.0 H723" caption="AFC-Lite V1.0 H723 Pinout" %}

## AFC-Lite V1.0 H723 Driver Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|
| :------------- |:-------------|:-------------|:-------------|:-------------|
|Enable Pins|PD_6|PD_1|PE_0|PC_7|
|Step Pins|PD_4|PC_12|PE_2|PD_15|
|Direction Pins|PD_3|PC_11|PE_3|PD_14|
|UART Pins|PD_5|PD_0|PE_1|PC_6|

<div class="datatable-end"></div>

## AFC-Lite V1.0 H723 Other Pins in Firmware

If more than one pin name is availble, either name can be used in the firmware (config.g).  
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of PA0, PA.0, PA_0, A0, A.0 or A_0.  

<div class="datatable-begin"></div>

|Pin|Pin Name(s)|PWM Timer (up to 3.6)|PWM Timer (from 3.7)|
| :------------- |:-------------|:-------------|:-------------|
|PA_0|dc11|Timer 2|Timer 2|
|PA_1|dc21|Timer 2|Timer 2|
|PA_2|slp1|Timer 15|Timer 15|
|PA_5|slp2|Timer 2|Timer 2|
|PA_6|dc12|Timer 13|Timer 13|
|PA_7|dc22|Timer 14|Timer 14|
|PA_13|status|||
|PB_0|sw3|Timer 3|Timer 8|
|PB_1|sw4|Timer 3|Timer 8|
|PB_2|sw5|||
|PB_10|n3, neopixel3|Timer 2|Timer 2|
|PB_11|n4, neopixel4|Timer 2|Timer 2|
|PB_13|slp3|||
|PB_14|dc13|Timer 12|Timer 12|
|PB_15|dc23|Timer 12|Timer 12|
|PC_4|sw1|||
|PC_5|sw2|||
|PD_11|slp4|||
|PD_12|dc14|Timer 4|Timer 4|
|PD_13|dc24|Timer 4|Timer 4|
|PE_7|sw6|||
|PE_8|sw7|||
|PE_9|sw8|||
|PE_10|sw9|||
|PE_11|sw10|||
|PE_12|sw11|||
|PE_13|sw12|||
|PE_14|n1, neopixel1|||
|PE_15|n2, neopixel2|||

<div class="datatable-end"></div>

## Configured SPI connections

The below SPI channels are preconfigured in the firmware.  
Where NoPin is present, then that pin is not configured by default.  

<div class="datatable-begin"></div>

|SPI Channel| CLK | MISO | MOSI | Hardware or Software | Use |
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|
|0|NoPin|NoPin|NoPin|Hardware|None|
|1|NoPin|NoPin|NoPin|Hardware|None|
|2|NoPin|NoPin|NoPin|Hardware|None|
|3|NoPin|NoPin|NoPin|Software|None|
|4|NoPin|NoPin|NoPin|Software|None|
|5|NoPin|NoPin|NoPin|Software|None|
|6|NoPin|NoPin|NoPin|Hardware|None|
|7|NoPin|NoPin|NoPin|Hardware|None|
|8|NoPin|NoPin|NoPin|Hardware|None|

<div class="datatable-end"></div>
