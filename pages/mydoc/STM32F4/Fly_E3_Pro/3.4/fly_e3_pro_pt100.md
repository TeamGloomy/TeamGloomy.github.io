---
title: Connecting a PT100 or Type 'K' Thermocouple to a Fly-E3-Pro
tags: []
keywords: 
last_updated: 14/07/2021
summary: "How to connect a PT100 or Type 'K' Thermocouple to a Fly-E3-Pro"
sidebar: mydoc_sidebar
permalink: fly_e3_pro_pt100.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

Some Fly-E3-Pro boards have support for PT100 and type 'K' thermocouples.  
If your board has the chip shown below in red, you have PT100 support.  

{% include image.html file="fly_e3_pro_pt100.png" alt="Fly-E3-Pro PT100 Chip" caption="Fly-E3-Pro PT100 Chip" %}  

If your board has the chip shown below in red, you have 'K' type thermocouple support.  

{% include image.html file="fly_e3_pro_k.png" alt="Fly-E3-Pro K Chip" caption="Fly-E3-Pro 'K' Thermocouple Chip" %}

## Board.txt modifications

The following lines should be added to the board.txt file.

```text
SPI3.pins = { PD_14, PD_12, PD_13 }
heat.spiTempSensorChannel = 3
heat.spiTempSensorCSPins = { PD_15, PC_7 }
```

## Config.g changes

### PT100

To use the PT100 on your hotend, use the following code in config.g
If you are in a country where the mains frequency is 50Hz, change the F60 to F50 (if you don't know, look [here](https://www.oaktreeproducts.com/img/product/description/List%20of%20Worldwide%20AC%20Voltages.pdf))

```text
M308 S1 P"PD15" Y"rtd-max31865" F60 R430
```

{% include warning.html content="Make sure you include the R430 as the Fly-E3 uses a different reference resistor than expected" %}

### Type 'K' Thermocouple

To use the Type 'K' Thermocouple on your hotend, use the following code in config.g

```text
M308 S1 P"C7" Y"thermocouple-max31855"
```
