---
title: SKR3 H743 Pin Names in Firmware
tags: []
keywords: 
last_updated: 29/11/2022
summary: "The pin names of the SKR3 H743 in the firmware"
sidebar: mydoc_sidebar
permalink: skr_3_h743_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## SKR3 H743 Pinout Diagram

{% include image.html file="skr3_pins.png" url="https://teamgloomy.github.io/images/skr3_pins.png" alt="SKR3" caption="SKR3 Pinout" %}

## SKR3 H743 Driver Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|
|Enable Pins|D.6|D.1|E.0|C.7|D.13|
|Step Pins|D.4|A.15|E.2|D.15|D.11|
|Direction Pins|D.3|A.8|E.3|D.14|D.10|
|UART Pins|D.5|D.0|E.1|C.6|D.12|

<div class="datatable-end"></div>

## SKR3 H743 Other Pins in Firmware 

If more than one pin name is availble, either name can be used in the firmware (config.g).  
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of PA0, PA.0, PA_0, A0, A.0 or A_0.  

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|PWM Hardware Timer|
| :------------- |:-------------|:-------------|:-------------|
|A.0|e1stop|e1det|Timer 2|
|A.1|bedtemp|tb|Timer 15|
|A.13|LED|||
|A.2|e0temp|th0|Timer 15|
|A.3|e1temp|th1|Timer 2|
|A.4|LCD_SS|||
|A.5|LCD_SCK||Timer 8|
|A.6|LCD_MISO||Timer 13|
|A.7|LCD_MOSI||Timer 14|
|B.0|BTN_ENC||Timer 3|
|B.1|LCD_EN||Timer 3|
|B.2|BTN_EN2|||
|B.3|e0heat|heat0|Timer 2|
|B.4|e1heat|heat1|Timer 3|
|B.5|fan2||Timer 3|
|B.6|fan1||Timer 16|
|B.7|fan0|fan|Timer 17|
|C.0|zstop|z-stop||
|C.1|xstop|x-stop||
|C.13|probe|||
|C.15|PWRDET|||
|C.2|e0stop|e0det||
|C.3|ystop|y-stop||
|C.4|LCD_CD|||
|C.5|BEEP|||
|D.7|bed|hbed||
|E.10|LCD_D5|||
|E.11|LCD_D6|||
|E.12|LCD_D7|||
|E.4|PSON||Timer 15|
|E.5|servo0||Timer 15|
|E.6|Neopixel||Timer 15|
|E.7|BTN_EN1|||
|E.8|LCD_RS|||
|E.9|LCD_D4|||

<div class="datatable-end"></div>