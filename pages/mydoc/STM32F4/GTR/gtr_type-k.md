---
title: Connecting Type 'K' Thermocouple to a GTR v1.0
tags: []
keywords: 
last_updated: 14/09/2021
summary: "How to connect a Type 'K' Thermocouple to a GTR v1.0"
sidebar: mydoc_sidebar
permalink: gtr_type-k.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

GTR v1.0 boards should have support for Type 'K' thermocouples.  
The chip shown below in red, is the MAX31855K 'K' type thermocouple support.  

{% include image.html file="gtr-typek.jpg" alt="GTR MAX31855K Chip" caption="GTR 'K' Thermocouple Chip" %}

## Board.txt modifications

The following lines should be added to the board.txt file.

```
heat.tempSensePins = {PC_0, PC_1, PC_2, PC_3}  //regular thermistor pins
//heat.tempSensePins = {PA_3, PF_9, PF_10, PF_7, PF_5}  //M5 expansion thermistor pins
SPI4.pins = {PI_1, PI_2, NoPin} //MAX31855K SPI connections SCK, MISO, MOSI
heat.spiTempSensorChannel = 4 //Channel 4 should be free, otherwise try other software SPI
heat.spiTempSensorCSPins = {PH_9} //MAX31855K Chip Select
```

## Config.g changes

To use the Type 'K' Thermocouple on your hotend, use the following code in config.g

```
M308 S1 P"PH_9" Y"thermocouple-max31855"
```

Make sure to (re)run the PID-tuning, e.g. [M303 T0 S20](https://docs.duet3d.com/en/User_manual/Connecting_hardware/Heaters_tuning).
