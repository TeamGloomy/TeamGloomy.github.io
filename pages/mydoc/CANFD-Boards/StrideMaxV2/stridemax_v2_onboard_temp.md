---
title: Configuring the StrideMax V2 onboard temperature sensor
tags: []
keywords: 
last_updated: 16/12/2023
summary: "How to configure the StrideMax V2 onboard temperature sensor"
sidebar: mydoc_sidebar
permalink: stridemax_v2_onboard_temp.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The StrideMax V2 has two temperature sensors on the PCB, that can be used to monitor the driver temperature.

### Hardware Setup

If using the onboard temperature sensor, ensure there is a jumper installed beneath either temp1 (if using the onboard sensor for driver 0) or temp2 (if using the onboard sensor for driver 1). External sensors can be used if the jumper is removed.  

### Config

{% include important.html content="The changes shown below that are to be made to config.g assume that the StrideMax V2 uses the default CAN address of 124. If you have changed the default CAN address, make sure you change the 124 to the correct address." %}

Use the following line to activate the temperature sensor.  

```text
M308 S2 P"124.temp1" Y"thermistor" A"Driver 0" T100000 B4092
M308 S2 P"124.temp2" Y"thermistor" A"Driver 1" T100000 B4092
```

The sensor can be added to the temperature graph by selecting `extra` on the heater control panel in DWC.  
{% include image.html file="board_temperature.png" url="<https://teamgloomy.github.io/images/board_temperature.png>" alt="Board Temperature" caption="Board Temperature" %}  

The sensor can also be used to trigger a fan etc when a certain threshold is met.
