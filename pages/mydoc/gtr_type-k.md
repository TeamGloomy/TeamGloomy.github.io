---
title: Connecting a PT100 or Type 'K' Thermocouple to a GTR v1.0
tags: []
keywords: 
last_updated: 14/07/2021
summary: "How to connect a PT100 or Type 'K' Thermocouple to a GTR v1.0"
sidebar: mydoc_sidebar
permalink: gtr_typek.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

GTR v1.0 boards should have support for Type 'K' thermocouples.  
The chip shown below in red, is the MAX31865 'K' type thermocouple support.  

{% include image.html file="fly_e3_pro_k.png" alt="Fly-E3-Pro K Chip" caption="Fly-E3-Pro 'K' Thermocouple Chip" %}

## Board.txt modifications

The following lines should be added to the board.txt file.

```
heat.tempSensePins = {C.0, C.1, C.2, C.3}  //regular thermistor pins
//heat.tempSensePins = {A.3, F.9, F.10, F.7, F.5}  //M5 expansion thermistor pins
SPI4.pins = {I.1, I.2, NoPin} //MAX31865 SPI connections SCK, MISO, MOSI
heat.spiTempSensorChannel = 4 //Channel 4 should be free, otherwise try other software SPI
heat.spiTempSensorCSPins = {H.9} //MAX31865 Chip Select
```

## Config.g changes

To use the Type 'K' Thermocouple on your hotend, use the following code in config.g

```
M308 S1 P"H.9" Y"thermocouple-max31855"
```

Make sure to (re)run the PID-tuning, e.g. [M303 T0 S20](https://duet3d.dozuki.com/Wiki/Tuning_the_heater_temperature_control).
