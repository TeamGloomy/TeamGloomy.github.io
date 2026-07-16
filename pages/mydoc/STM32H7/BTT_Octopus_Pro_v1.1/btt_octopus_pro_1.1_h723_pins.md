---
title: BTT Octopus Pro v1.1 Pin Names in Firmware
tags: []
keywords: 
last_updated: 27/12/2023
summary: "The pin names of the BTT Octopus Pro v1.1 in the firmware"
permalink: btt_octopus_pro_1.1_h723_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: BTT Octopus Pro v1.1
---

## {{page.boardname}} Pinout Diagram

{% include image.html file="btt_octopus_pro_1.1_pins.jpg" url="https://teamgloomy.github.io/images/btt_octopus_pro_1.1_pins.jpg" alt="BTT Octopus Pro v1.1" caption="BTT Octopus Pro v1.1 Pinout" %}

## {{page.boardname}} Driver Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|5|6|7|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|:-------------|:-------------|:-------------|
|Enable Pins|PF_14|PF_15|PG_5|PA_2|PG_2|PF_1|PD_4|PE_0|
|Step Pins|PF_13|PG_0|PF_11|PG_4|PF_9|PC_13|PE_2|PE_6|
|Direction Pins|PF_12|PG_1|PG_3|PC_1|PF_10|PF_0|PE_3|PA_14|
|UART Pins|PC_4|PD_11|PC_6|PC_7|PF_2|PE_4|PE_1|PD_3|

<div class="datatable-end"></div>

## {{page.boardname}} Other Pins in Firmware

If more than one pin name is availble, either name can be used in the firmware (config.g).  
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of PA0, PA.0, PA_0, A0, A.0 or A_0.

<div class="datatable-begin"></div>

|Pin|Pin Name(s)|PWM Timer (up to 3.6)|PWM Timer (from 3.7)|
| :------------- |:-------------|:-------------|:-------------|
|PA_0|e0heat, heat0|Timer 2|Timer 2|
|PA_1|bed, hbed|Timer 2|Timer 2|
|PA_3|e1heat, heat1|Timer 2|Timer 5|
|PA_4|lcdss|||
|PA_5|lcdsck, sck|Timer 2|Timer 2|
|PA_6|lcdmiso, miso|Timer 13|Timer 13|
|PA_7|lcdmosi, mosi|Timer 14|Timer 14|
|PA_8|fan0, fan|||
|PA_9|tx1, tfttx|||
|PA_10|rx1, tftrx|||
|PA_13|led, status|||
|PB_0|e2heat, heat2|Timer 3|Timer 8|
|PB_1|btnen1|Timer 3|Timer 8|
|PB_2|btnen2|||
|PB_6|servo0|Timer 4|Timer 4|
|PB_7|probe|Timer 4|Timer 4|
|PB_8|scl1|Timer 16|Timer 16|
|PB_9|sda1|Timer 17|Timer 17|
|PB_10|neopixel|Timer 2|Timer 2|
|PB_11|e3heat, heat3|Timer 2|Timer 2|
|PC_0|pwrdet|||
|PC_4|xcs|||
|PC_5|probe1|||
|PC_6|zcs|Timer 3|Timer 8|
|PC_7|e0cs|Timer 8|Timer 8|
|PC_15|lcdcd|||
|PD_3|e4cs|||
|PD_5|rx2|||
|PD_6|tx2|||
|PD_11|ycs|||
|PD_12|fan2|Timer 4|Timer 4|
|PD_13|fan3|Timer 4|Timer 4|
|PD_14|fan4|Timer 4|Timer 4|
|PD_15|fan5|Timer 4|Timer 4|
|PE_1|e3cs|||
|PE_4|e2cs|||
|PE_5|fan1|Timer 15|Timer 15|
|PE_7|btnenc|||
|PE_8|beep|||
|PE_9|lcden|||
|PE_10|lcdrs|||
|PE_11|pson|||
|PE_12|lcdd4|||
|PE_13|lcdd5|||
|PE_14|lcdd6|||
|PE_15|lcdd7|||
|PF_2|e1cs|||
|PF_3|bedtemp, tb|||
|PF_4|e0temp, th0|||
|PF_5|e1temp, th1|||
|PF_6|e2temp, th2|Timer 16|Timer 16|
|PF_7|e3temp, th3|Timer 17|Timer 17|
|PG_6|xstop|||
|PG_9|ystop|||
|PG_10|zstop|||
|PG_11|e0stop, e0det|||
|PG_12|e1stop, e1det|||
|PG_13|e2stop, e2det|||
|PG_14|e3stop, e3det|||
|PG_15|e4stop, e4det|||

<div class="datatable-end"></div>

## {{page.boardname}} Configured SPI connections

The below SPI channels are preconfigured in the firmware.  
Where NoPin is present, then that pin is not configured by default.  

<div class="datatable-begin"></div>

|SPI Channel| CLK | MISO | MOSI | Hardware or Software | Use |
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|
|0|PA_5|PA_6|PA_7|Hardware|Drivers|
|1|PB_13|PC_2|PC_3|Hardware|SBC SPI|
|2|PB_3|PB_4|PB_5|Hardware||
|3|NoPin|NoPin|NoPin|Software|None|
|4|PE_8|PE_9|PE_7|Software||
|5|PE_12|NoPin|PE_9|Software||
|6|NoPin|NoPin|NoPin|Hardware|None|
|7|NoPin|NoPin|NoPin|Hardware|None|
|8|NoPin|NoPin|NoPin|Hardware|None|

<div class="datatable-end"></div>
