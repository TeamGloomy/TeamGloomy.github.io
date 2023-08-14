---
title: Fly-E3-Pro-v3 Pin Names in Firmware
tags: []
keywords: 
last_updated: 12/06/2023
summary: "The pin names of the Fly-E3-Pro-v3 in the firmware"
sidebar: mydoc_sidebar
permalink: fly_e3_pro_v3_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Fly-E3-Pro-v3 Pinout Diagram

{% include image.html file="fly_e3_prov3_pins.svg" url="https://teamgloomy.github.io/images/fly_e3_prov3_pins.svg" alt="Fly-E3-Pro-v3" caption="Fly-E3-Pro-v3 Pinout" %}

## Fly-E3-Pro-v3 Driver Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0 (X)|1 (Y)|2 (Z)|3 (E0)|4 (E1)|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|
|Enable Pins|PE_5|PE_1|PC_2|PD_6|PC_15|
|Step Pins|PE_3|PB_9|PA_15|PD_4|PC_13|
|Direction Pins|PE_2|PB_8|PD_7|PD_3|PC_0|
|UART Pins|PE_4|PE_0|PA_8|PD_5|PC_14|

<div class="datatable-end"></div>

## Fly-E3-Pro-v3 Other Pins in Firmware

If more than one pin name is availble, either name can be used in the firmware (config.g).  
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of PA0, PA.0, PA_0, A0, A.0 or A_0.  

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|PWM Hardware Timer|
| :------------- |:-------------|:-------------|:-------------|
|PA_0|bed|hbed|Timer 2|
|PA_1|e1temp|t1|Timer 2|
|PA_10|RX1|BTN_EN1||
|PA_13|LCD_CD|||
|PA_14|LCD_EN|||
|PA_2|xmin|xstop|Timer 2|
|PA_3|bedtemp|tb|Timer 2|
|PA_4|e0temp|t0||
|PA_5|e0heat|he0|Timer 8|
|PA_6|fan1||Timer 13|
|PA_7|fan0|fan|Timer 14|
|PA_9|TX1|BTN_EN2||
|PB_0|servo0||Timer 3|
|PB_1|laser||Timer 3|
|PB_10|ymin|ystop|Timer 2|
|PB_11|neopixel||Timer 2|
|PB_2|LCD_SS|||
|PB_3|LCD_SCK||Timer 2|
|PB_4|LCD_MISO||Timer 3|
|PB_5|LCD_MOSI||Timer 3|
|PB_6|fan2||Timer 4|
|PB_7|fan3||Timer 4|
|PC_1|boardtemp|tboard||
|PC_4|zmin|zstop||
|PC_5|probe|||
|PC_6|e1heat|he1|Timer 8|
|PD_0|e0min|e0stop||
|PD_1|e1min|e1stop||
|PD_10|pwr|PWRDET||
|PD_11|PSON|||
|PE_10|LCD_D5|||
|PE_11|BEEP|||
|PE_12|BTN_ENC|||
|PE_6|LCD_RS||Timer 9|
|PE_7|LCD_D6|||
|PE_8|LCD_D7|||
|PE_9|LCD_D4|||

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
|3|PC_2|PC_0|PC_1|Software|
|4|PE_10|NoPin|PE_8|Software|
|5|NoPin|NoPin|NoPin|Software|

<div class="datatable-end"></div>
