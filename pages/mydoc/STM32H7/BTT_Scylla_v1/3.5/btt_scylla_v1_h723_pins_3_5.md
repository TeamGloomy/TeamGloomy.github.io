---
title: BTT Scylla V1 Pin Names in Firmware in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 15/12/2024
summary: "The pin names of the BTT Scylla V1 in the firmware"
sidebar: mydoc_sidebar
permalink: btt_scylla_v1_h723_pins_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: BTT Scylla V1
---

## {{boardname}} Pinout Diagram

{% include image.html file="btt_scylla_v1_pins.png" url="https://teamgloomy.github.io/images/btt_scylla_v1_pins.png" alt="BTT Scylla V1" caption="BTT Scylla V1 Pinout" %}

## {{boardname}} Driver Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|
| :------------- |:-------------|:-------------|:-------------|:-------------|
|Enable Pins|PC_0| PC_2| PE_5| PE_1|
|Step Pins|PA_0| PC_13| PB_8| PD_3|
|Direction Pins|PA_1| PE_6| PB_9| PD_4|
|UART Pins|PC_15| PC_14| PE_2| PE_4|

<div class="datatable-end"></div>

## {{boardname}} Other Pins in Firmware

If more than one pin name is availble, either name can be used in the firmware (config.g).  
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of PA0, PA.0, PA_0, A0, A.0 or A_0.

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|PWM Hardware Timer|
| :------------- |:-------------|:-------------|:-------------|
|PA_4|aux0pwm|aux0||
|PA_5|aux1pwm|aux1|Timer 8|
|PA_6|aux2pwm|aux2|Timer 13|
|PA_7|mistpwm|mist|Timer 14|
|PA_8|ymin|||
|PA_9|tx1|rs485a||
|PA_10|rx1|rs485b||
|PB_0|spindledir||Timer 3|
|PB_1|spindlepwm||Timer 3|
|PB_7|extin0|ioin||
|PB_10|scl||Timer 2|
|PB_11|sda||Timer 2|
|PC_1|xdiag|||
|PC_3|ydiag|||
|PC_4|coolantpwm|coolant||
|PC_5|spindleen|||
|PC_6|xmax|||
|PC_7|zmin|||
|PD_5|relayctr|relay||
|PD_6|rgbpwm|neopixel||
|PD_8|tx3|||
|PD_9|rx3|||
|PD_11|xmin|||
|PD_12|zmax|||
|PD_13|amax|||
|PD_14|ymin|||
|PD_15|amin|||
|PE_0|adiag|||
|PE_3|zdiag|||
|PE_7|tool|||
|PE_15|probe|||

<div class="datatable-end"></div>

## {{boardname}} Configured SPI connections

The below SPI channels are preconfigured in the firmware.  
Where NoPin is present, then that pin is not configured by default.  

<div class="datatable-begin"></div>

|SPI Channel| CLK | MISO | MOSI | Hardware or Software | Use |
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|
|0|NoPin|NoPin|NoPin|Hardware|None|
|1|PB_13|PB_14|PB_15|Hardware|SBC SPI|
|2|PB_3|PB_4|PB_5|Hardware|Drivers|
|3|NoPin|NoPin|NoPin|Hardware|None|
|4|NoPin|NoPin|NoPin|Software|None|
|5|NoPin|NoPin|NoPin|Software|None|
|6|PE_12|PE_13|PE_14|Hardware|WiFi|
|7|NoPin|NoPin|NoPin|Hardware|None|
|8|NoPin|NoPin|NoPin|Hardware|None|

<div class="datatable-end"></div>
