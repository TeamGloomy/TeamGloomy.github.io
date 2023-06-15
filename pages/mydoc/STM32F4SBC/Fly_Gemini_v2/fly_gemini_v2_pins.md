---
title: Fly-Gemini-V2 Pin Names in Firmware
tags: []
keywords: 
last_updated: 12/06/2023
summary: "The pin names of the Fly-Gemini-V2 in the firmware"
sidebar: mydoc_sidebar
permalink: fly_gemini_v2_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Fly-Gemini-V2 Pinout Diagram

{% include image.html file="fly_gemini_v2_pins.svg" url="https://teamgloomy.github.io/images/fly_gemini_v2_pins.svg" alt="Fly-Gemini-V2" caption="Fly-Gemini-V2 Pinout" %}

## Fly-Gemini-V2 Driver Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0 (X)|1 (Y)|2 (Z)|3 (E0)|
| :------------- |:-------------|:-------------|:-------------|:-------------|
|Enable Pins|PB_2|PD_2|PC_12|PC_11|
|Step Pins|PC_13|PC_14|PC_15|PC_3|
|Direction Pins|PC_1|PC_4|PC_5|PC_8|
|UART Pins|PB_11|PB_9|PB_8|PB_7|

<div class="datatable-end"></div>

## Fly-Gemini-V2 Other Pins in Firmware 

If more than one pin name is availble, either name can be used in the firmware (config.g).  
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of PA0, PA.0, PA_0, A0, A.0 or A_0.  

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|PWM Hardware Timer|
| :------------- |:-------------|:-------------|:-------------|
|PA_0|e0heat|he0|Timer 2|
|PA_1|probe||Timer 2|
|PA_10|RX1|||
|PA_13|LCD_EN|||
|PA_14|BTN_EN2|||
|PA_15|BTN_EN1||Timer 2|
|PA_2|bed|hbed|Timer 2|
|PA_3|xstop||Timer 2|
|PA_4|BTN_ENC|||
|PA_8|LCD_D5|||
|PA_9|TX1|||
|PB_0|servo0||Timer 3|
|PB_1|ystop||Timer 3|
|PB_10|zstop||Timer 2|
|PB_12|LCD_SS||Timer 2|
|PB_13|LCD_SCK|||
|PB_14|LCD_MISO||Timer 12|
|PB_15|LCD_MOSI||Timer 8|
|PB_3|LCD_CD||Timer 2|
|PC_0|e0temp|t0||
|PC_2|bedtemp|tb||
|PC_6|fan0|fan|Timer 8|
|PC_7|fan1||Timer 3|

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

<div class="datatable-end"></div>