---
title: StrideMax Dual V2.0 Pin Names in Firmware
tags: []
keywords: 
last_updated: 27/12/2023
summary: "The pin names of the StrideMax Dual V2.0 in the firmware"
sidebar: mydoc_sidebar
permalink: stridemax_v2_pins.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## StrideMax Dual V2.0 Pinout Diagram

{% include image.html file="stridemax_v2_pins.svg" url="https://teamgloomy.github.io/images/stridemax_v2_pins.svg" alt="StrideMax Dual V2.0" caption="StrideMax Dual V2.0 Pinout" %}

## StrideMax Dual V2.0 Driver Pins in Firmware

The driver pin numbers are configured within the firmware and can't be changed.

## StrideMax Dual V2.0 Other Pins in Firmware

If more than one pin name is availble, either name can be used in the firmware (config.g).  

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|
| :------------- |:-------------|:-------------|
|GPIO0|out0||
|GPIO15|io3.in|tach0|
|GPIO16|io0.in||
|GPIO17|io1.in||
|GPIO18|out1||
|GPIO19|rgbled||
|GPIO25|io4.in|tach1|
|GPIO26|temp0||
|GPIO27|temp1||
|GPIO28|temp2||

<div class="datatable-end"></div>
