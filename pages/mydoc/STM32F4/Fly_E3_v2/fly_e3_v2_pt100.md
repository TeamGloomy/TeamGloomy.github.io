---
title: Connecting a PT100 or Type 'K' Thermocouple to a Fly-E3-v2
tags: []
keywords: 
last_updated: 22/01/2023
summary: "How to connect a PT100 or Type 'K' Thermocouple to a Fly-E3-v2"
sidebar: mydoc_sidebar
permalink: fly_e3_v2_pt100.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

Some Fly-E3-v2 boards have support for PT100 and type 'K' thermocouples. If your board has the corresponding chip as identified below then you're good to go.  

{% include image.html file="fly_e3_v2_pt100.png" alt="Fly-E3-v2 PT100 Chip" caption="Fly-E3-v2 PT100 Chip" %}  
{% include image.html file="fly_e3_v2_ktype.png" alt="Fly-E3-v2 K Type Chip" caption="Fly-E3-v2 K Type Chip" %}

## Board.txt modifications

The following lines should be added to the board.txt file.

```
SPI3.pins = {PD_12, PD_13, PD_11}
heat.spiTempSensorChannel = 3
heat.spiTempSensorCSPins = { PD_15, PD_14 }
```

## Config.g changes

### PT100

To use the PT100 on your hotend, use the following code in config.g
If you are in a country where the mains frequency is 50Hz, change the F60 to F50 (if you don't know, look [here](https://www.oaktreeproducts.com/img/product/description/List%20of%20Worldwide%20AC%20Voltages.pdf))

```
M308 S1 P"PD_15" Y"rtd-max31865" F60 R430
```

{% include warning.html content="Make sure you include the R430 as the Fly-E3-v2 uses a different reference resistor than expected" %}

### Type 'K' Thermocouple

To use the Type 'K' Thermocouple on your hotend, use the following code in config.g

```
M308 S1 P"PD_14" Y"thermocouple-max6675"
```