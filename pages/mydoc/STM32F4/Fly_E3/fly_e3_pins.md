---
title: Fly-E3 Pin Names in Firmware
tags: []
keywords: 
last_updated: 12/06/2023
summary: "The pin names of the Fly-E3 in the firmware"
sidebar: mydoc_sidebar
permalink: fly_e3_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Fly-E3 Pinout Diagram

{% include image.html file="fly_e3.svg" url="https://teamgloomy.github.io/images/fly_e3.svg" alt="Fly-E3" caption="Fly-E3 Pinout" %}

## Fly-E3 Drivers Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0 (X)|1 (Y)|2 (Z)|3 (E0)|
| :------------- |:-------------|:-------------|:-------------|:-------------|
|Step Pins|PC_13|PE_3|PB_9|PB_3|
|Direction Pins|PC_14|PE_4|PE_0|PB_4|
|Enable Pins|PC_15|PE_5|PE_1|PB_5|
|UART Pins|PE_6|PE_2|PB_8|PD_7|

<div class="datatable-end"></div>

## Fly-E3 Other Pins in Firmware

If more than one pin name is availble, either name can be used in the firmware (config.g).  
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of PA0, PA.0, PA_0, A0, PA_0 or A_0.  

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|PWM Hardware Timer|
| :------------- |:-------------|:-------------|:-------------|
|PA_0|bed|hbed|Timer 2|
|PA_1|ymin|ystop|Timer 2|
|PA_2|xmin|xstop|Timer 2|
|PA_3|bedtemp|tb|Timer 2|
|PA_4|e0temp|t0||
|PA_5|e0heat|he0|Timer 8|
|PA_6|fan1||Timer 13|
|PA_7|fan0|fan|Timer 14|
|PA_9|TX1|||
|PA_10|RX1|||
|PA_13|SWDIO|||
|PA_14|SWCLK|||
|PA_15|SDCD||Timer 2|
|PB_0|servo0||Timer 3|
|PB_1|LCD_D7||Timer 3|
|PB_10|FPC1||Timer 2|
|PB_11|FPC2||Timer 2|
|PC_4|probe|||
|PC_5|zmin|zstop||
|PC_6|FPC9||Timer 8|
|PC_8|SDD0||Timer 8|
|PC_9|SDD1||Timer 8|
|PC_10|SDD2|||
|PC_11|SDD3|||
|PC_12|SDSCK|||
|PD_0|FPC10|||
|PD_1|FPC11|||
|PD_2|SDCMD|||
|PD_10|FPC3|||
|PD_11|FPC4|||
|PD_12|FPC5||Timer 4|
|PD_13|FPC6||Timer 4|
|PD_14|FPC7||Timer 4|
|PD_15|FPC8||Timer 4|
|PE_7|LCD_D6|||
|PE_8|LCD_D5|||
|PE_9|LCD_D4|||
|PE_10|LCD_EN|||
|PE_11|BTN_ENC|||
|PE_12|BEEP|||

<div class="datatable-end"></div>

## Configured SPI connections

The below SPI channels are preconfigured in the firmware.  
Where NoPin is present, then that pin is not configured by default.  

<div class="datatable-begin"></div>

|SPI Channel| CLK | MISO | MOSI | Hardware or Software |
| :------------- |:-------------|:-------------|:-------------|:-------------|
|0|PA_5|PA_6|PA_7|Hardware|
|1|PB_13|PB_14|PB_15|Hardware|
|2|NoPin|NoPin|NoPin|Hardware|
|3|PC_2|PC_0|PC_1|Software|
|4|PE_8|NoPin|PB_1|Software|
|5|PD_6|PD_4|PD_5|Software|

<div class="datatable-end"></div>
