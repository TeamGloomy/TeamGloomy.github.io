---
title: SKR3 H743 Pin Names in Firmware
tags: []
keywords: 
last_updated: 12/06/2023
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
|Enable Pins|PD_6|PD_1|PE_0|PC_7|PD_13|
|Step Pins|PD_4|PA_15|PE_2|PD_15|PD_11|
|Direction Pins|PD_3|PA_8|PE_3|PD_14|PD_10|
|UART Pins|PD_5|PD_0|PE_1|PC_6|PD_12|

<div class="datatable-end"></div>

## SKR3 H743 Other Pins in Firmware

If more than one pin name is availble, either name can be used in the firmware (config.g).  
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of PA0, PA.0, PA_0, A0, A.0 or A_0.  

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|PWM Hardware Timer|
| :------------- |:-------------|:-------------|:-------------|
|PA_0|e1stop|e1det|Timer 2|
|PA_1|bedtemp|tb|Timer 15|
|PA_13|LED|||
|PA_2|e0temp|th0|Timer 15|
|PA_3|e1temp|th1|Timer 2|
|PA_4|LCD_SS|||
|PA_5|LCD_SCK||Timer 8|
|PA_6|LCD_MISO||Timer 13|
|PA_7|LCD_MOSI||Timer 14|
|PB_0|BTN_ENC||Timer 3|
|PB_1|LCD_EN||Timer 3|
|PB_2|BTN_EN2|||
|PB_3|e0heat|heat0|Timer 2|
|PB_4|e1heat|heat1|Timer 3|
|PB_5|fan2||Timer 3|
|PB_6|fan1||Timer 16|
|PB_7|fan0|fan|Timer 17|
|PC_0|zstop|z-stop||
|PC_1|xstop|x-stop||
|PC_13|probe|||
|PC_15|PWRDET|||
|PC_2|e0stop|e0det||
|PC_3|ystop|y-stop||
|PC_4|LCD_CD|||
|PC_5|BEEP|||
|PD_7|bed|hbed||
|PE_10|LCD_D5|||
|PE_11|LCD_D6|||
|PE_12|LCD_D7|||
|PE_4|PSON||Timer 15|
|PE_5|servo0||Timer 15|
|PE_6|Neopixel||Timer 15|
|PE_7|BTN_EN1|||
|PE_8|LCD_RS|||
|PE_9|LCD_D4|||

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
|3|NoPin|NoPin|NoPin|Software|
|4|NoPin|NoPin|NoPin|Software|
|5|NoPin|NoPin|NoPin|Software|
|6|NoPin|NoPin|NoPin|Hardware|
|7|NoPin|NoPin|NoPin|Hardware|
|8|NoPin|NoPin|NoPin|Hardware|

<div class="datatable-end"></div>
