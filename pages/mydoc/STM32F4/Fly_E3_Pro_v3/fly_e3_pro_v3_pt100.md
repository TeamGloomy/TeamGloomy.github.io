---
title: Connecting a PT100 or Type 'K' Thermocouple to a Fly-E3-Pro-v3
tags: []
keywords: 
last_updated: 15/06/2022
summary: "How to connect a PT100 or Type 'K' Thermocouple to a Fly-E3-Pro-v3"
sidebar: mydoc_sidebar
permalink: fly_e3_pro_v3_pt100.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

Some Fly-E3-Pro-v3 boards have support for PT100 and type 'K' thermocouples.  
If your board has the chip shown below in red, you have PT100 support.  

{% include image.html file="fly_e3_prov3_pt100.png" alt="Fly-E3-Pro-v3 PT100 Chip" caption="Fly-E3-Pro-v3 PT100 Chip" %}  

If your board has the chip shown below in red, you have 'K' type thermocouple support.  

{% include image.html file="fly_e3_prov3_k.png" alt="Fly-E3-Pro-v3 K Chip" caption="Fly-E3-Pro-v3 'K' Thermocouple Chip" %}

## Board.txt modifications

The following lines should be added to the board.txt file.

```
SPI3.pins = { D.14, D.12, D.13 }
heat.spiTempSensorChannel = 3
heat.spiTempSensorCSPins = { D.15, C.7 }
```

## Config.g changes

### PT100

{% include important.html content="The Fly-E3-Pro-v3 is designed to work with 3 wire PT100 temperature sensors rather than the typical 2 wire ones." %}

A 2 wire PT100 can be converted to a 3 wire PT100. Ideally, all wires going to the PT100 should be of the same type and length to ensure they're all the same resistance. Cut the wires of the PT100 close (around 50 - 100mm) to the sensor. Then attach 1 wire to 1 wire of the sensor and attach the other 2 wires to the other wire of the sensor.

{% include image.html file="3_wire_PT100.png" alt="3 Wire PT100" caption="3 wire PT100" %}  

Connect the two wires to connectors 1 and 2 and connect the single wire to connector 3.  

{% include image.html file="fly_e3_prov3_pt100_connection.png" alt="Fly-E3-Pro-v3 Connection" caption="Fly-E3-Pro-v3 PT100 Connection" %}  

To use the PT100 on your hotend, use the following code in config.g
If you are in a country where the mains frequency is 50Hz, change the F60 to F50 (if you don't know, look [here](https://www.oaktreeproducts.com/img/product/description/List%20of%20Worldwide%20AC%20Voltages.pdf))

```
M308 S1 P"PD15" Y"rtd-max31865" F60 R430 W3
```

{% include warning.html content="Make sure you include the R430 as the Fly-E3-Pro-v3 uses a different reference resistor than expected" %}

### Type 'K' Thermocouple

To use the Type 'K' Thermocouple on your hotend, use the following code in config.g

```
M308 S1 P"C7" Y"thermocouple-max31855"
```