---
title: Fly-SB2040 Pro Max V3 Pin Names in Firmware
tags: []
keywords: 
last_updated: 15/04/2024
summary: "The pin names of the Fly-SB2040 Pro Max V3 in the firmware"
sidebar: mydoc_sidebar
permalink: fly_sb2040_pro_max_v3_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
board: Fly-SB2040 Pro Max V3
---

## {{page.board}} Pinout Diagram

{% include image.html file="fly_sb2040_v3_pins.png" url="https://teamgloomy.github.io/images/fly_sb2040_v3_pins.png" alt="Fly-SB2040 Pro Max V3 Pins" caption="Fly-SB2040 Pro Max V3 Pins" %}

{% include image.html file="fly_sb2040_fv_1_pins.png" url="https://teamgloomy.github.io/images/fly_sb2040_fv_1_pins.png" alt="Fly-SB2040 Max V3 FB Daughterboard Pins" caption="Fly-SB2040 Max V3 FB Daughterboard Pins" %}

## {{page.board}} Driver Pins in Firmware

The driver pin numbers are configured within the firmware and can't be changed.

## {{page.board}} Other Pins in Firmware

If more than one pin name is availble, either name can be used in the firmware (config.g).  

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|
| :------------- |:-------------|:-------------|
|GPIO17|max31865cs|rtdcs|
|GPIO18|io0.in||
|GPIO19|out1||
|GPIO20|io1.in||
|GPIO21|out3||
|GPIO22|io2.in||
|GPIO23|out0||
|GPIO24|out2||
|GPIO26|rgbled||
|GPIO27|temp0||
|GPIO28|temp1||

<div class="datatable-end"></div>
