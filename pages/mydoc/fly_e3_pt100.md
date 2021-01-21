---
title: Connecting a PT100 or Type 'K' Thermocouple to a Fly-E3
tags: []
keywords: 
last_updated: 21/01/2021
summary: "Connecting a PT100 or Type 'K' Thermocouple to a Fly-E3"
sidebar: mydoc_sidebar
permalink: fly_e3_pt100.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

Some Fly-E3 boards have support for PT100 and type 'K' thermocouples. If your board has the two chips in the red square populated then you are good to go.

{% include image.html file="fly_e3_pt100.jpg" alt="Fly-E3 PT100 Chip" caption="Fly-E3 PT100 Chip" %}

## Board.txt modifications

The following lines should be added to the board.txt file.

```
softwareSPI1.pins = {C.2,C.0,C.1}
heat.spiTempSensorChannel = 3
heat.spiTempSensorCSPins = {C.3, C.7}
```

## Config.g changes

### PT100

To use the PT100 on your hotend, use the following code in config.g
If you are in a country where the mains frequency is 50Hz, change the F60 to F50 (if you don't know, look [here](https://www.oaktreeproducts.com/img/product/description/List%20of%20Worldwide%20AC%20Voltages.pdf))

```
M308 S1 P"PC3" Y"rtd-max31865" F60 R430
```

{% include warning.html content="Make sure you include the R430 as the Fly-E3 uses a different reference resistor than expected" %}

### Type 'K' Thermocouple

To use the Type 'K' Thermocouple on your hotend, use the following code in config.g

```
M308 S1 P"C7" Y"thermocouple-max6675"
```