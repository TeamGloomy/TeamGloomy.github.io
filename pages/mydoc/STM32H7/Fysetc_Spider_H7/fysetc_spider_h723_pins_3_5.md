---
title: Fysetc Spider H723 Pin Names in Firmware in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 10/04/2024
summary: "The pin names of the Fysetc Spider H723 in the firmware"
sidebar: mydoc_sidebar
permalink: fysetc_spider_h723_pins_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Fysetc Spider H723 Pinout Diagram

{% include image.html file="Spider-H7-Pinout.png" url="https://teamgloomy.github.io/images/Spider-H7-Pinout.png" alt="Fysetc Spider H723" caption="Fysetc Spider H723 Pinout" %}

## Fysetc Spider H723 Driver Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|5|6|7|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|:-------------|:-------------|:-------------|
|Enable Pins|PE_9|PD_9|PD_15|PD_4|PE_5|PE_3|PE_8|PC_5|
|Step Pins|PE_11|PD_8|PD_14|PD_5|PE_6|PE_2|PD_12|PE_1|
|Direction Pins|PE_10|PB_12|PD_13|PD_6|PC_13|PE_4|PC_4|PE_0|
|UART Pins|PE_7|PE_15|PD_10|PD_7|PC_14|PC_15|PA_15|PD_11|

<div class="datatable-end"></div>

## Fysetc Spider H723 Other Pins in Firmware

If more than one pin name is availble, either name can be used in the firmware (config.g).  
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of PA0, PA.0, PA_0, A0, A.0 or A_0.  

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|Pin Name 3|Pin Name 4|PWM Hardware Timer|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|
|PA_0|zmin||||Timer 2|
|PA_1|xmax||||Timer 2|
|PA_2|ymax||||Timer 15|
|PA_3|zmax||||Timer 2|
|PA_8|btnenc|||||
|PA_13|fan0.pwm|||||
|PA_14|fan1.pwm|||||
|PB_0|bedtemp||||Timer 3|
|PB_1|e4temp||||Timer 3|
|PB_2|fan2.pwm|||||
|PB_3|e2heat|||||
|PB_4|bed|||||
|PB_5|LED.G|||||
|PB_6|LED.R||||Timer 4|
|PB_7|LED.B||||Timer 4|
|PB_8|scl|||||
|PB_9|sda|||||
|PB_11|neopixel||||Timer 2|
|PB_13|ymin|||||
|PB_14|xmin|||||
|PC_0|e0temp|||||
|PC_1|e1temp|||||
|PC_2|e2temp|||||
|PC_3|e3temp|||||
|PC_6|btnen1||||Timer 3|
|PC_7|btnen2||||Timer 8|
|PC_8|e1heat|||||
|PC_9|beep|||||
|PC_10|lcdd4|||||
|PC_11|lcden|||||
|PC_12|lcdd5|||||
|PD_3|status|||||

<div class="datatable-end"></div>

## Configured SPI connections

The below SPI channels are preconfigured in the firmware.  
Where NoPin is present, then that pin is not configured by default.  

<div class="datatable-begin"></div>

|SPI Channel| CLK | MISO | MOSI | Hardware or Software | Use |
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|
|0|PA_5|PA_6|PA_7|Hardware|SD Card|
|1|NoPin|NoPin|NoPin|Hardware||
|2|PC_10|PC_11|PC_12|Hardware|WiFi|
|3|NoPin|NoPin|NoPin|Software||
|4|NoPin|NoPin|NoPin|Software||
|5|NoPin|NoPin|NoPin|Software||
|6|PE_12|PE_13|PE_14|Hardware|Drivers|
|7|NoPin|NoPin|NoPin|Hardware||
|8|NoPin|NoPin|NoPin|Hardware||

<div class="datatable-end"></div>
