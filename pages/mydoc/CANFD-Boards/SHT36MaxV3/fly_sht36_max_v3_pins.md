---
title: Fly-SHT36 Max V3 Pin Names in Firmware
tags: []
keywords: 
last_updated: 15/06/2024
summary: "The pin names of the Fly-SHT36 Max V3 in the firmware"
sidebar: mydoc_sidebar
permalink: fly_sht36_max_v3_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Fly-SHT36 Max V3 Pinout Diagram

{% include image.html file="fly_sht36_pins.svg" url="https://teamgloomy.github.io/images/fly_sht36_pins.svg" alt="Fly-SHT36 Max V3" caption="Fly-SHT36 Max V3 Pinout" %}

## Fly-SHT36 Max V3 Driver Pins in Firmware

The driver pin numbers are configured within the firmware and can't be changed.

## Fly-SHT36 Max V3 Other Pins in Firmware

If more than one pin name is availble, either name can be used in the firmware (config.g).  

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|
| :------------- |:-------------|:-------------|
|GPIO13|out1||
|GPIO16|io2.in||
|GPIO17|max31865cs|rtdcs|
|GPIO20|io1.in||
|GPIO21|out2||
|GPIO22|io0.in||
|GPIO23|out0||
|GPIO24|io0.out||
|GPIO26|rgbled||
|GPIO27|temp0||
|GPIO28|temp1||

<div class="datatable-end"></div>
