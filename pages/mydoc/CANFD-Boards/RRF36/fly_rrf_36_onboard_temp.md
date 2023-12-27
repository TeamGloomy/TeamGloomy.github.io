---
title: Configuring the Fly-RRF-36 onboard temperature sensor
tags: []
keywords: 
last_updated: 15/12/2022
summary: "How to configure the Fly-RRF-36 onboard temperature sensor"
sidebar: mydoc_sidebar
permalink: fly_rrf_36_onboard_temp.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The Fly-RRF-36 has a temperature sensor on the PCB, that can be used to monitor the chamber temperature.

### Config

{% include important.html content="The changes shown below that are to be made to config.g assume that the toolboard uses the default CAN address of 124. If you have changed the default CAN address, make sure you change the 124 to the correct address." %}

Use the following line to activate the temperature sensor.  

```text
M308 S2 P"124.temp1" Y"thermistor" A"Chamber Temperature" T100000 B4092
```

The sensor can be added to the temperature graph by selecting `extra` on the heater control panel in DWC.  
{% include image.html file="board_temperature.png" url="<https://teamgloomy.github.io/images/board_temperature.png>" alt="Board Temperature" caption="Board Temperature" %}  

The sensor can also be used to trigger a fan etc when a certain threshold is met.
