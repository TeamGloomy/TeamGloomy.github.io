---
title: Fly-MMU V1.0 H723 Pin Names in Firmware in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 06/01/2025
summary: "The pin names of the Fly-MMU V1.0 H723 in the firmware"
sidebar: mydoc_sidebar
permalink: fly_mmu_v1_0_h723_pins_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Fly-MMU V1.0 H723 Pinout Diagram

{% include image.html file="fly_mmu_v1_pins.png" url="https://teamgloomy.github.io/images/fly_mmu_v1_pins.png" alt="Fly-MMU V1.0 H723" caption="Fly-MMU V1.0 H723 Pinout" %}

## Fly-MMU V1.0 H723 Driver Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|
| :------------- |:-------------|:-------------|:-------------|:-------------|
|Enable Pins|PE_5|PA_7|PB_0|PE_12|
|Step Pins|PE_4|PC_4|PC_5|PE_14|
|Direction Pins|PE_6|PA_6|PB_1|PE_13|
|UART Pins|PC_13|PA_5|PE_7|PE_11|

<div class="datatable-end"></div>

## Fly-MMU V1.0 H723 Other Pins in Firmware

If more than one pin name is availble, either name can be used in the firmware (config.g).  
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of PA0, PA.0, PA_0, A0, A.0 or A_0.  

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|PWM Hardware Timer|
| :------------- |:-------------|:-------------|
|PA_0|servo3|Timer 2|
|PA_1|servo2|Timer 2|
|PA_2|servo1|Timer 15|
|PA_3|servo0|Timer 2|
|PA_8|driverneopixel||
|PA_15|status|Timer 2|
|PC_0|endstop5||
|PC_1|endstop4||
|PC_2|endstop3||
|PC_3|endstop2||
|PD_3|endstop10||
|PD_4|endstop9||
|PD_5|endstop8||
|PD_6|endstop7||
|PD_7|endstop6||
|PE_2|endstop1||
|PE_3|endstop0||
|PE_10|neopixel||

<div class="datatable-end"></div>

## Configured SPI connections

The below SPI channels are preconfigured in the firmware.  
Where NoPin is present, then that pin is not configured by default.  

<div class="datatable-begin"></div>

|SPI Channel| CLK | MISO | MOSI | Hardware or Software | Use |
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|
|0|NoPin|NoPin|NoPin|Hardware||
|1|PB_13|PB_14|PB_15|Hardware| SD Card (If installed)|
|2|PB_3|PB_4|PB_5|Hardware| Drivers |
|3|NoPin|NoPin|NoPin|Software||
|4|NoPin|NoPin|NoPin|Software||
|5|NoPin|NoPin|NoPin|Software||
|6|NoPin|NoPin|NoPin|Hardware||
|7|NoPin|NoPin|NoPin|Hardware||
|8|NoPin|NoPin|NoPin|Hardware||

<div class="datatable-end"></div>
