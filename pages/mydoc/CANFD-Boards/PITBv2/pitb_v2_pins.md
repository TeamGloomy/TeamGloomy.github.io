---
title: PITB V2.0 Pin Names in Firmware
tags: []
keywords: 
last_updated: 15/12/2024
summary: "The pin names of the PITB V2.0 in the firmware"
sidebar: mydoc_sidebar
permalink: pitb_v2_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## PITB V2.0 Pinout Diagram

{% include image.html file="pitb_v2_pinout.png" url="https://teamgloomy.github.io/images/pitb_v2_pinout.png" alt="PITB V2.0" caption="PITB V2.0 Pinout" %}

## PITB V2.0 Driver Pins in Firmware

The driver pin numbers are configured within the firmware and can't be changed.

## PITB V2.0 Other Pins in Firmware

If more than one pin name is availble, either name can be used in the firmware (config.g).  

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|
| :------------- |:-------------|:-------------|
|GPIO0|out0||
|GPIO16|io0.in||
|GPIO17|io1.in||
|GPIO18|out1||
|GPIO19|rgbled||
|GPIO24|i2c.sda||
|GPIO25|i2c.sdl||
|GPIO26|temp0||
|GPIO27|temp1||
|GPIO28|temp2||

<div class="datatable-end"></div>
