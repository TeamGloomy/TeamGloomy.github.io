---
title: Fly-CDYv2 Pin Names in Firmware
tags: []
keywords: 
last_updated: 12/06/2023
summary: "The pin names of the Fly-CDYv2 used in the firmware"
sidebar: mydoc_sidebar
permalink: fly_cdyv2_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Fly-CDYv2 Pinout Diagram

{% include image.html file="fly_cdyv2.svg" url="</images/fly_cdyv2.svg>" alt="Fly-CDYv2" caption="Fly-CDYv2 Pinout" %}

## fly-CDYv2 Driver Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|5|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|:----|
|Enable Pins|PC_1|PC_14|PB_8|PD_7|PD_4|PD_0|
|Step Pins|PE_5|PE_4|PE_3|PE_2|PE_1|PE_0|
|Direction Pins|PC_0|PC_13|PB_7|PD_6|PD_3|PA_15|
|UART Pins|PC_15|PA_8|PB_6|PD_5|PD_1|PE_9|

<div class="datatable-end"></div>

## Fly-CDYv2 Other Pins in Firmware

If more than one pin name is availble, either name can be used in the firmware (config.g).  
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of PA0, PA.0, PA_0, A0, A.0 or A_0.  

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|PWM Hardware Timer|
| :------------- |:-------------|:-------------|:-------------|
|PA_0|fan0|fan|Timer 2|
|PA_1|fan1||Timer 2|
|PA_10|RX1|LCD_RS||
|PA_13|LCD_D6|||
|PA_14|LCD_D7|||
|PA_2|fan2||Timer 2|
|PA_3|e0temp|t0|Timer 2|
|PA_4|SPI1SDCS|LCD_SS||
|PA_5|SPI1SCK|LCD_SCK|Timer 8|
|PA_6|SPI1MISO|LCD_MISO|Timer 13|
|PA_7|SPI1MOSI|LCD_MOSI|Timer 14|
|PA_9|TX1|BTN_ENC||
|PB_0|bed|hbed|Timer 3|
|PB_1|bedtemp|tb|Timer 3|
|PB_10|zmin|zstop|Timer 2|
|PB_11|zmax|zstopmax|Timer 2|
|PB_2|LCD_EN|||
|PB_3|MOTSCK||Timer 2|
|PB_4|MOTMISO||Timer 3|
|PB_5|MOTMOSI||Timer 3|
|PB_9|Laser||Timer 11|
|PC_2|probe|||
|PC_3|Power_ADC|PC3||
|PC_4|e1temp|t1||
|PC_5|e2temp|t2||
|PC_6|xmax|xstopmax|Timer 8|
|PC_7|xmin|xstop|Timer 3|
|PD_10|ymax|ystopmax||
|PD_11|ymin|ystop||
|PD_12|e0heat|he0|Timer 4|
|PD_13|e1heat|he1|Timer 4|
|PD_14|e2heat|he2|Timer 4|
|PD_15|Neopixel|LED|Timer 4|
|PD_8|BTN_EN1|||
|PD_9|BTN_EN2|||
|PE_13|LCD_CD|||
|PE_14|LCD_D5|||
|PE_15|LCD_D4|||
|PE_6|servo0||Timer 9|
|PE_7|SPI1CS1|||
|PE_8|SPI1CS2|||

<div class="datatable-end"></div>

## Configured SPI connections

The below SPI channels are preconfigured in the firmware.  
Where NoPin is present, then that pin is not configured by default.  

<div class="datatable-begin"></div>

|SPI Channel| CLK | MISO | MOSI | Hardware or Software |
| :------------- |:-------------|:-------------|:-------------|:-------------|
|0|PA_5|PA_6|PA_7|Hardware|
|1|PB_13|PB_14|PB_15|Hardware|
|2|PB_3|PB_4|PB_5|Hardware|
|3|PE_15|NoPin|PB_2|Software|
|4|NoPin|NoPin|NoPin|Software|
|5|NoPin|NoPin|NoPin|Software|

<div class="datatable-end"></div>
