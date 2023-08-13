---
title: Fly-RRF-36 Pin Names in Firmware
tags: []
keywords: 
last_updated: 21/05/2023
summary: "The pin names of the Fly-RRF-36 in the firmware"
sidebar: mydoc_sidebar
permalink: fly_rrf_36_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Fly-RRF-36 Pinout Diagram

{% include image.html file="fly_rrf_36_pins.svg" url="<https://teamgloomy.github.io/images/fly_rrf_36_pins.svg>" alt="Fly-RRF-36" caption="Fly-RRF-36 Pinout" %}

## Fly-RRF-36 Driver Pins in Firmware

The driver pin numbers are configured within the firmware and can't be changed.

## Fly-RRF-36 Other Pins in Firmware

If more than one pin name is availble, either name can be used in the firmware (config.g).  

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|
| :------------- |:-------------|:-------------|
|GPIO0|out1||
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
