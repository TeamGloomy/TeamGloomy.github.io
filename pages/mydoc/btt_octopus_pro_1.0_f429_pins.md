---
title: BTT Octopus Pro v1.0 F429 Version Pin Names in Firmware
tags: []
keywords: 
last_updated: 30/11/2021
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
|Enable Pins|F.14|F.15|G.5|A.0|G.2|F.1|D.4|E.0|
|Step Pins|F.13|G.0|F.11|G.4|F.9|C.13|E.2|E.6|
|Direction Pins|F.12|G.1|G.3|C.1|F.10|F.0|E.3|A.14|
|UART Pins|C.4|D.11|C.6|C.7|F.2|E.4|E.1|D.3|

<div class="datatable-end"></div>

## BTT Octopus Pro v1.0 F429 Version Other Pins in Firmware 

If more than one pin name is availble, either name can be used in the firmware (config.g).  
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of PA0, PA.0, PA_0, A0, A.0 or A_0.

{% include warning.html content="The BTT Octopus Pro v1.0 F429 Version Pinout is incorrect for RX and TX pins on the WiFi header. They should be A.9 and A.10" %}

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|
| :------------- |:-------------|:-------------|
|F.3|bedtemp|tb|
|F.4|e0temp|th0|
|F.5|e1temp|th1|
|F.6|e2temp|th2|
|F.7|e3temp|th3|
|G.6|xstop|x-stop|
|G.9|ystop|y-stop|
|G.10|zstop|z-stop|
|G.11|e0stop|e0det|
|G.12|e1stop|e1det|
|G.13|e2stop|e2det|
|G.14|e3stop|e3det|
|G.15|e4stop|e4det|
|B.6|servo0||
|B.7|probe||
|A.1|bed|hbed|
|A.2|e0heat|heat0|
|A.3|e1heat|heat1|
|B.10|e2heat|heat2|
|B.11|e3heat|heat3|
|A.8|fan0|fan|
|E.5|fan1||
|D.12|fan2||
|D.13|fan3||
|D.14|fan4||
|D.15|fan5||
|E.10|LCDCS||
|B.2|LCDENCA||
|B.1|LCDENCB||
|E.8|LCDBEEP||
|E.7|LCDBTN||
|E.12|LCDD4||
|E.9|LCDEN||
|B.0|Neopixel||
|A.9|TX1|tft-tx|
|A.10|RX1|tft-rx|
|C.4|X-CS||
|D.11|Y-CS||
|C.6|Z-CS||
|C.7|E0-CS||
|F.2|E1-CS||
|E.4|E2-CS||
|E.1|E3-CS||
|D.3|E4-CS||
|A.6|MISO||
|A.7|MOSI||
|A.5|SCK||
|B.8|SCL1||
|B.9|SDA1||
|E.11|PSON||
|C.0|PWRDET||
|A.13|LED||

<div class="datatable-end"></div>