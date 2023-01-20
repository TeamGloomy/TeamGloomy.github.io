---
title: BTT Octopus Pro v1.0 F429 Version Pin Names in Firmware
tags: []
keywords: 
last_updated: 18/01/2023
summary: "The pin names of the BTT Octopus Pro v1.0 F429 Version in the firmware"
sidebar: mydoc_sidebar
permalink: btt_octopus_pro_1.0_f429_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## BTT Octopus Pro v1.0 F429 Version Pinout Diagram

{% include image.html file="btt_octopus_pro_1.0_pins.png" url="https://teamgloomy.github.io/images/btt_octopus_pro_1.0_pins.png" alt="BTT Octopus Pro v1.0 F429 Version" caption="BTT Octopus Pro v1.0 F429 Version Pinout" %}

## BTT Octopus Pro v1.0 F429 Version Driver Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|5|6|7|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|:-------------|:-------------|:-------------|
|Enable Pins|PF_14|PF_15|PG_5|PA_0|PG_2|PF_1|PD_4|PE_0|
|Step Pins|PF_13|PG_0|PF_11|PG_4|PF_9|PC_13|PE_2|PE_6|
|Direction Pins|PF_12|PG_1|PG_3|PC_1|PF_10|PF_0|PE_3|PA_14|
|UART Pins|PC_4|PD_11|PC_6|PC_7|PF_2|PE_4|PE_1|PD_3|

<div class="datatable-end"></div>

## BTT Octopus Pro v1.0 F429 Version Other Pins in Firmware 

If more than one pin name is availble, either name can be used in the firmware (config.g).  
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of PA0, PA.0, PA_0, A0, A.0 or A_0.

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|PWM Hardware Timer|
| :------------- |:-------------|:-------------|:-------------|
|PA_1|bed|hbed|Timer 2|
|PA_10|RX1|tft-rx||
|PA.13|LED|||
|PA.2|e0heat|heat0|Timer 2|
|PA.3|e1heat|heat1|Timer 2|
|PA.4|LCD_SS|||
|PA.5|LCD_SCK||Timer 8|
|PA.6|LCD_MISO||Timer 13|
|PA.7|LCD_MOSI||Timer 14|
|PA.8|fan0|fan||
|PA.9|TX1|tft-tx||
|PPB_0|Neopixel||Timer 3|
|PPB_1|BTN_EN1||Timer 3|
|PPB_10|e2heat|heat2|Timer 2|
|PPB_11|e3heat|heat3|Timer 2|
|PPB_2|BTN_EN2|||
|PPB_6|servo0||Timer 4|
|PPB_7|probe||Timer 4|
|PPB_8|SCL1||Timer 10|
|PPB_9|SDA1||Timer 11|
|PPC_0|PWRDET|||
|PPC_15|LCD_CD|||
|PPC_4|X-CS|||
|PPC_5|probe1|||
|PPC_6|Z-CS||Timer 8|
|PC.7|E0-CS||Timer 3|
|PD.3|E4-CS|||
|PD.11|Y-CS|||
|PD.12|fan2||Timer 4|
|PD.13|fan3||Timer 4|
|PD.14|fan4||Timer 4|
|PD.15|fan5||Timer 4|
|PE.1|E3-CS|||
|PE.10|LCD_RS|||
|PE.11|PSON|||
|PE.12|LCD_D4|||
|PE.13|LCD_D5|||
|PE.14|LCD_D6|||
|PE.15|LCD_D7|||
|PE.4|E2-CS|||
|PE.5|fan1||Timer 9|
|PE.7|BTN_ENC|||
|PE.8|BEEP|||
|PE.9|LCD_EN|||
|PF.2|E1-CS|||
|PF.3|bedtemp|tb||
|PF.4|e0temp|th0||
|PF.5|e1temp|th1||
|PF.6|e2temp|th2|Timer 10|
|PF.7|e3temp|th3|Timer 11|
|PG.10|zstop|z-stop||
|PG.11|e0stop|e0det||
|PG.12|e1stop|e1det||
|PG.13|e2stop|e2det||
|PG.14|e3stop|e3det||
|PG.15|e4stop|e4det||
|PG.6|xstop|x-stop||
|PG.9|ystop|y-stop||

<div class="datatable-end"></div>