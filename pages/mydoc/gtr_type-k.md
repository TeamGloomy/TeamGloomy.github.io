---
title: Connecting Type 'K' Thermocouple to a GTR v1.0
tags: []
keywords: 
last_updated: 14/07/2021
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

{% include image.html file="https://user-images.githubusercontent.com/33468777/132959121-dadc6998-be6a-4735-8a0c-d68b92aa20f8.JPG" alt="GTR MAX31855K Chip" caption="GTR 'K' Thermocouple Chip" %}

## Board.txt modifications

The following lines should be added to the board.txt file.

```
heat.tempSensePins = {C.0, C.1, C.2, C.3}  //regular thermistor pins
//heat.tempSensePins = {A.3, F.9, F.10, F.7, F.5}  //M5 expansion thermistor pins
SPI4.pins = {I.1, I.2, NoPin} //MAX31855K SPI connections SCK, MISO, MOSI
heat.spiTempSensorChannel = 4 //Channel 4 should be free, otherwise try other software SPI
heat.spiTempSensorCSPins = {H.9} //MAX31855K Chip Select
```

## Config.g changes

To use the Type 'K' Thermocouple on your hotend, use the following code in config.g

```
M308 S1 P"H.9" Y"thermocouple-max31855"
```

Make sure to (re)run the PID-tuning, e.g. [M303 T0 S20](https://duet3d.dozuki.com/Wiki/Tuning_the_heater_temperature_control).
