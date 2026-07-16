---
title: Fly-Super8Pro H723 Pin Names in Firmware
tags: []
keywords: 
last_updated: 10/04/2024
summary: "The pin names of the Fly-Super8Pro H723 in the firmware"
permalink: fly_super8pro_h723_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-Super8Pro H723
---

## {{page.boardname}} Pinout Diagram

{% include image.html file="fly_super8_pins.svg" url="https://teamgloomy.github.io/images/fly_super8_pins.svg" alt="Fly-Super8Pro H723" caption="Fly-Super8Pro H723 Pinout" %}

## {{page.boardname}} Driver Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|5|6|7|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|:-------------|:-------------|:-------------|
|Enable Pins|PF_11|PF_14|PG_1|PE_9|PF_2|PC_15|PG_4|PG_7|
|Step Pins|PE_2|PE_3|PE_4|PE_14|PE_15|PE_1|PE_0|PE_6|
|Direction Pins|PC_5|PF_13|PG_0|PE_8|PE_11|PF_0|PG_3|PG_6|
|UART Pins|PC_4|PF_12|PF_15|PE_7|PE_10|PF_1|PG_2|PG_5|

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
|PA_4|lcdss|||
|PA_5|lcdsck|Timer 2|Timer 2|
|PA_6|lcdmiso|Timer 13|Timer 13|
|PA_7|lcdmosi|Timer 14|Timer 14|
|PA_8|io6|||
|PA_9|tx1|||
|PA_10|rx1|||
|PA_15|fan4|Timer 2|Timer 2|
|PB_0|heat0|Timer 3|Timer 8|
|PB_1|heat1|Timer 3|Timer 8|
|PB_2|lcden|||
|PB_6|btnen2|Timer 4|Timer 4|
|PB_7|btnen1|Timer 4|Timer 4|
|PB_10|fan6|Timer 2|Timer 2|
|PB_11|fan5|Timer 2|Timer 2|
|PC_0|adc4, out4|||
|PC_1|adc5, out5|||
|PC_3|probe|||
|PC_6|pwmout0, pwm0, servo|Timer 3|Timer 8|
|PC_7|heat2|Timer 8|Timer 8|
|PC_13|lcdd5|||
|PC_14|lcdd4|||
|PD_6|io5|||
|PD_7|io4|||
|PD_12|fan7|Timer 4|Timer 4|
|PD_14|fan8|Timer 4|Timer 4|
|PD_15|fan9|Timer 4|Timer 4|
|PE_5|bedout, bed|Timer 15|Timer 15|
|PE_12|beep|||
|PE_13|btnenc|||
|PF_3|hvin|||
|PF_4|adc0, out0|||
|PF_5|adc1, out1|||
|PF_6|heat4|Timer 16|Timer 16|
|PF_7|heat3|Timer 17|Timer 17|
|PF_8|in7, pwmout1, pwm1|Timer 13|Timer 13|
|PF_9|adc2, pwmout2, pwm2, out2|Timer 14|Timer 14|
|PF_10|adc3, out3|||
|PG_8|lcdrs|||
|PG_9|io3|||
|PG_10|io2|||
|PG_11|io1|||
|PG_12|io0|||
|PG_13|lcdd7|||
|PG_14|lcdd6|||
|PG_15|lcdcd|||

<div class="datatable-end"></div>

## Configured SPI connections

The below SPI channels are preconfigured in the firmware.  
Where NoPin is present, then that pin is not configured by default.  

<div class="datatable-begin"></div>

|SPI Channel| CLK | MISO | MOSI | Hardware or Software | Use |
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|
|0|PA_5|PA_6|PA_7|Hardware|SBC SPI|
|1|PB_13|PB_14|PB_15|Hardware|WiFi|
|2|PB_3|PB_4|PB_5|Hardware|Drivers|
|3|PD_3|PD_4|PD_5|Software|Accelerometer|
|4|NoPin|NoPin|NoPin|Software|None|
|5|PC_14|NoPin|PB_2|Software|Reprapdiscount Display|
|6|NoPin|NoPin|NoPin|Hardware|None|
|7|NoPin|NoPin|NoPin|Hardware|None|
|8|NoPin|NoPin|NoPin|Hardware|None|

<div class="datatable-end"></div>
