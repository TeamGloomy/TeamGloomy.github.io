---
title: Fly-ProX10 H723 Pin Names in Firmware in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 27/11/2024
summary: "The pin names of the Fly-ProX10 H723 in the firmware"
sidebar: mydoc_sidebar
permalink: fly_prox10_h723_pins_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Fly-ProX10 H723 Pinout Diagram

{% include image.html file="fly_prox10_pins.png" url="https://teamgloomy.github.io/images/fly_prox10_pins.png" alt="Fly-ProX10 H723" caption="Fly-ProX10 H723 Pinout" %}

## Fly-ProX10 H723 Driver Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|5|6|7|8|9|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|:-------------|:-------------|:-------------|:-------------|:-------------|
|Enable Pins|PG_10|PE_13|PG_0|PF_13|PB_2|PC_0|PF_4|PF_0|PC_13|PG_15|
|Step Pins|PE_7|PE_8|PE_9|PE_10|PE_11|PE_2|PE_3|PE_4|PE_1|PE_0|
|Direction Pins|PG_11|PE_14|PG_1|PF_14|PF_11|PF_10|PF_2|PC_15|PB_7|PG_14|
|UART Pins|PG_12|PE_15|PE_12|PF_15|PF_12|PF_5|PF_1|PC_14|PB_6|PG_13|

<div class="datatable-end"></div>

## Fly-ProX10 H723 Other Pins in Firmware

If more than one pin name is availble, either name can be used in the firmware (config.g).  
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of PA0, PA.0, PA_0, A0, A.0 or A_0.  

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|Pin Name 3|Pin Name 4|PWM Hardware Timer|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|
|PA_0|fan0||||Timer 2|
|PA_1|fan1||||Timer 2|
|PA_10|RX1|||||
|PA_15|fan4||||Timer 2|
|PA_2|fan2||||Timer 15|
|PA_3|fan3||||Timer 2|
|PA_4|adc2|||||
|PA_9|TX1|||||
|PB_0|adc3|out3|||Timer 3|
|PB_1|hvin||||Timer 3|
|PB_10|fan5||||Timer 2|
|PB_11|fan6pwm||||Timer 2|
|PC_1|adc4|out4||||
|PC_3|probe|||||
|PC_4|adc1|out1||||
|PC_5|adc0|out0||||
|PC_6|pwmout0|pwm0|servo||Timer 3|
|PC_7|bedout|bed|||Timer 8|
|PD_12|fan7pwm||||Timer 4|
|PD_14|fan6||||Timer 4|
|PD_15|fan7||||Timer 4|
|PE_5|heat4||||Timer 15|
|PE_6|heat3|||||
|PF_3|adc5|out5||||
|PF_6|heat2||||Timer 16|
|PF_7|heat1||||Timer 17|
|PF_8|heat0||||Timer 13|
|PF_9|in|pwmout1|pwm1||Timer 14|
|PF_10|ADC_3|out3||||
|PG_2|io6|||||
|PG_3|io5|||||
|PG_4|io4|||||
|PG_5|io3|||||
|PG_6|io2|||||
|PG_7|io1|||||
|PG_8|io0|||||

<div class="datatable-end"></div>

## Configured SPI connections

The below SPI channels are preconfigured in the firmware.  
Where NoPin is present, then that pin is not configured by default.  

<div class="datatable-begin"></div>

|SPI Channel| CLK | MISO | MOSI | Hardware or Software | Use |
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|
|0|PA_5|PA_6|PA_7|Hardware|Drivers|
|1|PB_13|PB_14|PB_15|Hardware|WiFi|
|2|NoPin|NoPin|NoPin|Hardware||
|3|NoPin|NoPin|NoPin|Software||
|4|NoPin|NoPin|NoPin|Software||
|5|NoPin|NoPin|NoPin|Software||
|6|NoPin|NoPin|NoPin|Hardware||
|7|NoPin|NoPin|NoPin|Hardware||
|8|NoPin|NoPin|NoPin|Hardware||

<div class="datatable-end"></div>
