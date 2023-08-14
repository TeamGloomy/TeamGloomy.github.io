---
title: BTT Octopus Pro v1.0 F429 Version Pin Names in Firmware
tags: []
keywords: 
last_updated: 12/06/2023
summary: "The pin names of the BTT Octopus Pro v1.0 F429 Version in the firmware"
sidebar: mydoc_sidebar
permalink: btt_octopus_pro_1.0_f429_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: BTT Octopus Pro v1.0 F429 Version
---

## {{boardname}} Pinout Diagram

{% include image.html file="btt_octopus_pro_1.0_pins.png" url="https://teamgloomy.github.io/images/btt_octopus_pro_1.0_pins.png" alt="BTT Octopus Pro v1.0 F429 Version" caption="BTT Octopus Pro v1.0 F429 Version Pinout" %}

## {{boardname}} Driver Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|5|6|7|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|:-------------|:-------------|:-------------|
|Enable Pins|PF_14|PF_15|PG_5|PA_0|PG_2|PF_1|PD_4|PE_0|
|Step Pins|PF_13|PG_0|PF_11|PG_4|PF_9|PC_13|PE_2|PE_6|
|Direction Pins|PF_12|PG_1|PG_3|PC_1|PF_10|PF_0|PE_3|PA_14|
|UART Pins|PC_4|PD_11|PC_6|PC_7|PF_2|PE_4|PE_1|PD_3|

<div class="datatable-end"></div>

## {{boardname}} Other Pins in Firmware

If more than one pin name is availble, either name can be used in the firmware (config.g).  
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of PA0, PA.0, PA_0, A0, A.0 or A_0.

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|PWM Hardware Timer|
| :------------- |:-------------|:-------------|:-------------|
|PA_1|bed|hbed|Timer 2|
|PA_10|RX1|tft-rx||
|PA_13|LED|||
|PA_2|e0heat|heat0|Timer 2|
|PA_3|e1heat|heat1|Timer 2|
|PA_4|LCD_SS|||
|PA_5|LCD_SCK||Timer 8|
|PA_6|LCD_MISO||Timer 13|
|PA_7|LCD_MOSI||Timer 14|
|PA_8|fan0|fan||
|PA_9|TX1|tft-tx||
|PB_0|Neopixel||Timer 3|
|PB_1|BTN_EN1||Timer 3|
|PB_10|e2heat|heat2|Timer 2|
|PB_11|e3heat|heat3|Timer 2|
|PB_2|BTN_EN2|||
|PB_6|servo0||Timer 4|
|PB_7|probe||Timer 4|
|PB_8|SCL1||Timer 10|
|PB_9|SDA1||Timer 11|
|PC_0|PWRDET|||
|PC_15|LCD_CD|||
|PC_4|X-CS|||
|PC_5|probe1|||
|PC_6|Z-CS||Timer 8|
|PC_7|E0-CS||Timer 3|
|PD_3|E4-CS|||
|PD_11|Y-CS|||
|PD_12|fan2||Timer 4|
|PD_13|fan3||Timer 4|
|PD_14|fan4||Timer 4|
|PD_15|fan5||Timer 4|
|PE_1|E3-CS|||
|PE_10|LCD_RS|||
|PE_11|PSON|||
|PE_12|LCD_D4|||
|PE_13|LCD_D5|||
|PE_14|LCD_D6|||
|PE_15|LCD_D7|||
|PE_4|E2-CS|||
|PE_5|fan1||Timer 9|
|PE_7|BTN_ENC|||
|PE_8|BEEP|||
|PE_9|LCD_EN|||
|PF_2|E1-CS|||
|PF_3|bedtemp|tb||
|PF_4|e0temp|th0||
|PF_5|e1temp|th1||
|PF_6|e2temp|th2|Timer 10|
|PF_7|e3temp|th3|Timer 11|
|PG_10|zstop|z-stop||
|PG_11|e0stop|e0det||
|PG_12|e1stop|e1det||
|PG_13|e2stop|e2det||
|PG_14|e3stop|e3det||
|PG_15|e4stop|e4det||
|PG_6|xstop|x-stop||
|PG_9|ystop|y-stop||

<div class="datatable-end"></div>

## {{boardname}} Configured SPI connections

The below SPI channels are preconfigured in the firmware.  
Where NoPin is present, then that pin is not configured by default.  

<div class="datatable-begin"></div>

|SPI Channel| CLK | MISO | MOSI | Hardware or Software |
| :------------- |:-------------|:-------------|:-------------|:-------------|
|0|PA_5|PA_6|PA_7|Hardware|
|1|PB_13|PC_2|PC_3|Hardware|
|2|PB_3|PB_4|PB_5|Hardware|
|3|NoPin|NoPin|NoPin|Software|
|4|NoPin|NoPin|NoPin|Software|
|5|NoPin|NoPin|NoPin|Software|

<div class="datatable-end"></div>
