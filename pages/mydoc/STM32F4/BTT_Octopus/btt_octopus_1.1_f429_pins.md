---
title: BTT Octopus v1.1 F429 Version Pin Names in Firmware
tags: []
keywords: 
last_updated: 18/05/2022
summary: "The pin names of the BTT Octopus v1.1 F429 Version in the firmware"
sidebar: mydoc_sidebar
permalink: btt_octopus_1.1_f429_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## BTT Octopus v1.1 F429 Version Pinout Diagram

{% include image.html file="btt_octopus_1.1_pins.png" url="https://teamgloomy.github.io/images/btt_octopus_1.1_pins.png" alt="BTT Octopus v1.1 F429 Version" caption="BTT Octopus v1.1 F429 Version Pinout" %}

## BTT Octopus v1.1 F429 Version Driver Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|5|6|7|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|:-------------|:-------------|:-------------|
|Enable Pins|F.14|F.15|G.5|A.0|G.2|F.1|D.4|E.0|
|Step Pins|F.13|G.0|F.11|G.4|F.9|C.13|E.2|E.6|
|Direction Pins|F.12|G.1|G.3|C.1|F.10|F.0|E.3|A.14|
|UART Pins|C.4|D.11|C.6|C.7|F.2|E.4|E.1|D.3|

<div class="datatable-end"></div>

## BTT Octopus v1.1 F429 Version Other Pins in Firmware 

If more than one pin name is availble, either name can be used in the firmware (config.g).  
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of PA0, PA.0, PA_0, A0, A.0 or A_0.

{% include warning.html content="The BTT Octopus v1.1 F429 Version Pinout is incorrect for RX and TX pins on the WiFi header. They should be A.9 and A.10" %}

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|PWM Hardware Timer|
| :------------- |:-------------|:-------------|:-------------|
|A.1|bed|hbed|Timer 2|
|A.13|LED|||
|A.2|e0heat|heat0|Timer 2|
|A.3|e1heat|heat1|Timer 2|
|A.4|LCD_SS|||
|A.5|LCD_SCK||Timer 8|
|A.6|LCD_MISO||Timer 13|
|A.7|LCD_MOSI||Timer 14|
|A.8|fan0|||
|B.0|Neopixel||Timer 3|
|B.1|BTN_EN1||Timer 3|
|B.10|e2heat|heat2|Timer 2|
|B.11|e3heat|heat3|Timer 2|
|B.2|BTN_EN2|||
|B.6|servo0||Timer 4|
|B.7|probe||Timer 4|
|B.8|SCL1||Timer 10|
|B.9|SDA1||Timer 11|
|C.0|PWRDET|||
|C.15|LCD_CD|||
|C.4|X-CS|||
|C.6|Z-CS||Timer 8|
|C.7|E0-CS||Timer 3|
|D.11|Y-CS|||
|D.12|fan2||Timer 4|
|D.13|fan3|||
|D.14|fan4||Timer 4|
|D.15|fan5||Timer 4|
|D.3|E4-CS|||
|E.1|E3-CS|||
|E.10|LCD_RS|||
|E.11|PSON|||
|E.12|LCD_D4|||
|E.13|LCD_D5|||
|E.14|LCD_D6|||
|E.15|LCD_D7|||
|E.4|E2-CS|||
|E.5|fan1||Timer 9|
|E.7|BTN_ENC|||
|E.8|BEEP|||
|E.9|LCD_EN|||
|F.2|E1-CS|||
|F.3|bedtemp|tb||
|F.4|e0temp|th0||
|F.5|e1temp|th1||
|F.6|e2temp|th2|Timer 10|
|F.7|e3temp|th3|Timer 11|
|G.10|zstop|z-stop||
|G.11|e0stop|e0det||
|G.12|e1stop|e1det||
|G.13|e2stop|e2det||
|G.14|e3stop|e3det||
|G.15|e4stop|e4det||
|G.6|xstop|x-stop||
|G.9|ystop|y-stop||

<div class="datatable-end"></div>