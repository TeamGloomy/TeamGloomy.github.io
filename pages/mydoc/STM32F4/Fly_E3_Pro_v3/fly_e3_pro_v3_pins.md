---
title: Fly-E3-Pro-v3 Pin Names in Firmware
tags: []
keywords: 
last_updated: 18/05/2022
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
|Enable Pins|E.5|E.1|C.2|D.6|C.15|
|Step Pins|E.3|B.9|A.15|D.4|C.13|
|Direction Pins|E.2|B.8|D.7|D.3|C.0|
|UART Pins|E.4|E.0|A.8|D.5|C.14|

<div class="datatable-end"></div>

## Fly-E3-Pro-v3 Other Pins in Firmware 

If more than one pin name is availble, either name can be used in the firmware (config.g).  
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of PA0, PA.0, PA_0, A0, A.0 or A_0.  

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|PWM Hardware Timer|
| :------------- |:-------------|:-------------|:-------------|
|A.0|bed|hbed|Timer 2|
|A.1|e1temp|t1|Timer 2|
|A.10|RX1|BTN_EN1||
|A.13|LCD_CD|||
|A.14|LCD_EN|||
|A.2|xmin|xstop|Timer 2|
|A.3|bedtemp|tb|Timer 2|
|A.4|e0temp|t0||
|A.5|e0heat|he0|Timer 8|
|A.6|fan1||Timer 13|
|A.7|fan0|fan|Timer 14|
|A.9|TX1|BTN_EN2||
|B.0|servo0||Timer 3|
|B.1|laser||Timer 3|
|B.10|ymin|ystop|Timer 2|
|B.11|neopixel||Timer 2|
|B.2|LCD_SS|||
|B.3|LCD_SCK||Timer 2|
|B.4|LCD_MISO||Timer 3|
|B.5|LCD_MOSI||Timer 3|
|B.6|fan2||Timer 4|
|B.7|fan3||Timer 4|
|C.1|boardtemp|tboard||
|C.4|zmin|zstop||
|C.5|probe|||
|C.6|e1heat|he1|Timer 8|
|D.0|e0min|e0stop||
|D.1|e1min|e1stop||
|D.10|pwr|PWRDET||
|D.11|PSON|||
|E.10|LCD_D5|||
|E.11|BEEP|||
|E.12|BTN_ENC|||
|E.6|LCD_RS||Timer 9|
|E.7|LCD_D6|||
|E.8|LCD_D7|||
|E.9|LCD_D4|||


<div class="datatable-end"></div>