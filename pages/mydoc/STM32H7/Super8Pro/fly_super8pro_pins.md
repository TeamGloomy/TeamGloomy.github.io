---
title: Fly-Super8Pro Pin Names in Firmware
tags: []
keywords: 
last_updated: 24/08/2022
summary: "The pin names of the Fly-Super8 in the firmware"
sidebar: mydoc_sidebar
permalink: fly_super8pro_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Fly-Super8Pro Pinout Diagram

{% include image.html file="fly_super8_pins.svg" url="https://teamgloomy.github.io/images/fly_super8_pins.svg" alt="Fly-Super8Pro" caption="Fly-Super8Pro Pinout" %}

## Fly-Super8Pro Driver Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|5|6|7|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|:-------------|:-------------|:-------------|
|Enable Pins|F.11|F.14|G.1|E.9|F.2|C.15|G.4|G.7|
|Step Pins|E.2|E.3|E.4|E.14|E.15|E.1|E.0|E.6|
|Direction Pins|C.5|F.13|G.0|E.8|E.11|F.0|G.3|G.6|
|UART Pins|C.4|F.12|F.15|E.7|E.10|F.1|G.2|G.5|

<div class="datatable-end"></div>

## Fly-Super8Pro Other Pins in Firmware 

If more than one pin name is availble, either name can be used in the firmware (config.g).  
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of PA0, PA.0, PA_0, A0, A.0 or A_0.  

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|Pin Name 3|Pin Name 4|PWM Hardware Timer|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|
|A.0|fan0||||Timer 2|
|A.1|fan1||||Timer 2|
|A.10|RX1|||||
|A.15|fan4||||Timer 2|
|A.2|fan2||||Timer 15|
|A.3|fan3||||Timer 2|
|A.4|LCD_SS|||||
|A.5|LCD_SCK||||Timer 5|
|A.6|LCD_MISO||||Timer 13|
|A.7|LCD_MOSI||||Timer 14|
|A.8|io6|||||
|A.9|TX1|||||
|B.0|heat0||||Timer 3|
|B.1|heat1||||Timer 3|
|B.10|fan6||||Timer 2|
|B.11|fan5||||Timer 2|
|B.2|LCD_EN|||||
|B.6|BTN_EN2||||Timer 4|
|B.7|BTN_EN1||||Timer 4|
|C.0|ADC_4|out4||||
|C.1|ADC_5|out5||||
|C.13|LCD_D5|||||
|C.14|LCD_D4|||||
|C.3|probe|||||
|C.6|pwm_out0|pwm0|servo|out0|Timer 3|
|C.7|heat2||||Timer 8|
|D.12|fan7||||Timer 4|
|D.14|fan8||||Timer 4|
|D.15|fan9||||Timer 4|
|D.6|io5|||||
|D.7|io4|||||
|E.12|BEEP|||||
|E.13|BTN_ENC|||||
|E.5|bedout|bed|||Timer 15|
|F.3|hvin|||||
|F.4|ADC_0|out0||||
|F.5|ADC_1|out1||||
|F.6|heat4||||Timer 16|
|F.7|heat3||||Timer 17|
|F.8|in7|pwm_out1|pwm1|out1|Timer 13|
|F.9|ADC_2|pwm_out2|pwm2|out2|Timer 14|
|F.10|ADC_3|out3||||
|G.10|io2|||||
|G.11|io1|||||
|G.12|io0|||||
|G.13|LCD_D7|||||
|G.14|LCD_D6|||||
|G.15|LCD_CD|||||
|G.8|LCD_RS|||||
|G.9|io3|||||

<div class="datatable-end"></div>