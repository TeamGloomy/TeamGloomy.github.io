---
title: BTT Kraken Pin Names in Firmware
tags: []
keywords: 
last_updated: 27/12/2023
summary: "The pin names of the BTT Kraken in the firmware"
sidebar: mydoc_sidebar
permalink: btt_kraken_h723_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: BTT Kraken
---

## {{boardname}} Pinout Diagram

{% include image.html file="btt_kraken_pins.png" url="https://teamgloomy.github.io/images/btt_kraken_pins.png" alt="BTT Kraken" caption="BTT Kraken Pinout" %}

## {{boardname}} Driver Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|5|6|7|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|:-------------|:-------------|:-------------|
|Enable Pins|PE_6| PE_3| PE_0| PB_7| PG_13| PG_12| PB_5| PG_14|
|Step Pins|PC_14| PE_5| PE_2| PB_9| PG_9| PG_11| PB_4| PG_15|
|Direction Pins|PC_13| PE_4| PE_1| PB_8| PG_10| PD_7| PB_3| PB_6|
|UART Pins|PD_6| PD_5| PD_4| PD_3| PD_2| PA_15| PA_9| PA_10|

<div class="datatable-end"></div>

## {{boardname}} Other Pins in Firmware

If more than one pin name is availble, either name can be used in the firmware (config.g).  
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of PA0, PA.0, PA_0, A0, A.0 or A_0.

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|PWM Hardware Timer|
| :------------- |:-------------|:-------------|:-------------|
|PA_0|fan0||Timer 2|
|PA_1|fan1||Timer 15|
|PA_2|fan2||Timer 15|
|PA_3|fan3||Timer 2|
|PA_4|fan4|||
|PA_5|fan5||Timer 8|
|PA_6|fan6||Timer 13|
|PA_7|e3temp||Timer 14|
|PB_0|bedtemp||Timer 3|
|PB_1|e0temp||Timer 3|
|PB_10|SCL2||Timer 2|
|PB_11|SDA2||Timer 2|
|PC_0|e4stop|||
|PC_1|fan6.tacho|||
|PC_15|xstop|||
|PC_2|ADC1|||
|PC_3|ADC2|||
|PC_4|e2temp|||
|PC_5|e1temp|||
|PD_10|PSON|||
|PD_11|INDDET|||
|PD_12|LCDD7|||
|PD_13|LCDD6|||
|PD_14|LCDD5|||
|PD_15|LCDD4|||
|PE_11|LCDSS|||
|PE_12|LCDSCK|||
|PE_13|LCDMISO|||
|PE_14|LCDMOSI|||
|PE_7|servo1|||
|PE_8|fan7|||
|PE_9|servo0|||
|PF_0|ystop|||
|PF_1|zstop|||
|PF_10|e3stop|||
|PF_11|Neopixel1|||
|PF_12|Neopixel|||
|PF_2|e0stop|||
|PF_3|e1stop|||
|PF_4|e2stop|||
|PF_5|bed|||
|PF_6|e0heat||Timer 16|
|PF_7|e1heat||Timer 17|
|PF_8|e3heat||Timer 13|
|PF_9|e2heat||Timer 14|
|PG_0|fan7.tacho|||
|PG_1|probe|||
|PG_2|LCDRS|||
|PG_3|LCDEN|||
|PG_4|BTNENC|||
|PG_5|BEEP|||
|PG_6|LCDCD|||
|PG_7|BTNEN2|||
|PG_8|BTNEN1|||

<div class="datatable-end"></div>

## {{boardname}} Configured SPI connections

The below SPI channels are preconfigured in the firmware.  
Where NoPin is present, then that pin is not configured by default.  

<div class="datatable-begin"></div>

|SPI Channel| CLK | MISO | MOSI | Hardware or Software | Use |
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|
|0|NoPin|NoPin|NoPin|Hardware|None|
|1|PB_13|PB_14|PB_15|Hardware|SD Card|
|2|PC_10|PC_11|PC_12|Hardware|MAX 31865|
|3|PC_6|PC_7|PC_8|Software|Drivers|
|4|NoPin|NoPin|NoPin|Software|None|
|5|NoPin|NoPin|NoPin|Software|None|
|6|PE_12|PE_13|PE_14|Hardware|EXP2|
|7|NoPin|NoPin|NoPin|Hardware|None|
|8|NoPin|NoPin|NoPin|Hardware|None|

<div class="datatable-end"></div>
