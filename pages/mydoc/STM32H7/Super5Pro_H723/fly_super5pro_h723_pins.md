---
title: Fly-Super5Pro H723 Pin Names in Firmware
tags: []
keywords: 
last_updated: 12/06/2023
summary: "The pin names of the Fly-Super5Pro H723 in the firmware"
sidebar: mydoc_sidebar
permalink: fly_super5pro_h723_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Fly-Super5Pro H723 Pinout Diagram

{% include image.html file="fly_super5pro_pins.svg" url="<https://teamgloomy.github.io/images/fly_super5pro_pins.svg>" alt="Fly-Super5Pro H723" caption="Fly-Super5Pro H723 Pinout" %}

## Fly-Super5Pro H723 Driver Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|
|Enable Pins|PB_11| PE_13| PE_9| PC_1| PE_3|
|Step Pins|PE_14| PE_11| PE_7| PE_4| PE_1|
|Direction Pins|PE_15| PE_12| PE_8| PE_5| PE_2|
|UART Pins|PB_10| PE_10| PA_4| PC_0| PE_0|

<div class="datatable-end"></div>

## Fly-Super5Pro H723 Other Pins in Firmware

If more than one pin name is availble, either name can be used in the firmware (config.g).  
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of PA0, PA.0, PA_0, A0, A.0 or A_0.  

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|PWM Hardware Timer|
| :------------- |:-------------|:-------------|
|PC_4|ADC0||
|PC_5|ADC1||
|PB_1|ADC2|Timer 3|
|PB_7|IO0|Timer 4|
|PC_7|IO1|Timer 8|
|PC_6|IO2|Timer 3|
|PC_13|IO3||
|PC_14|IO4||
|PC_15|IO5||
|PB_2|NEOPIXEL||
|PE_6|SERVO0|Timer 15|
|PC_2|probe||
|PD_12|heat0|Timer 4|
|PD_13|heat1|Timer 4|
|PB_0|bedout|Timer 3|
|PA_0|fan0|Timer 2|
|PA_1|fan1|Timer 2|
|PA_2|fan2|Timer 15|
|PA_3|fan3|Timer 2|
|PA_8|BEEP||
|PA_13|BTNENC||
|PA_15|LCDEN|Timer 2|
|PA_14|LCDRS||
|PD_0|LCDD4||
|PD_1|LCDD5||
|PD_4|LCDD6||
|PD_2|LCDD7||
|PB_4|LCDMISO|Timer 3|
|PB_3|LCDSCK|Timer 3|
|PD_7|BTNEN2||
|PB_6|LCDSS|Timer 4|
|PD_6|BTNEN1||
|PB_5|LCDMOSI|Timer 3|
|PD_5|LCDCD||

<div class="datatable-end"></div>

## Configured SPI connections

The below SPI channels are preconfigured in the firmware.  
Where NoPin is present, then that pin is not configured by default.  

<div class="datatable-begin"></div>

|SPI Channel| CLK | MISO | MOSI | Hardware or Software |
| :------------- |:-------------|:-------------|:-------------|:-------------|
|0|PA_5|PA_6|PA_7|Hardware|
|1|PB_13|PB_14|PB_15|Hardware|
|2|PB_3|PB_4|PB_5|Hardware|
|3|NoPin|NoPin|NoPin|Software|
|4|NoPin|NoPin|NoPin|Software|
|5|NoPin|NoPin|NoPin|Software|
|6|NoPin|NoPin|NoPin|Hardware|
|7|NoPin|NoPin|NoPin|Hardware|
|8|NoPin|NoPin|NoPin|Hardware|

<div class="datatable-end"></div>
