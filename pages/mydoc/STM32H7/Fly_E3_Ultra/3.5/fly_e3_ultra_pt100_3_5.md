---
title: Connecting a PT100 or Type 'K' Thermocouple to a Fly-E3-Ultra-Max H723 in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 23/04/2025
summary: "How to connect a PT100 or Type 'K' Thermocouple to a Fly-E3-Ultra"
sidebar: mydoc_sidebar
permalink: fly_e3_ultra_pt100_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The Fly-E3-Ultra-Max H723 boards have support for PT100 and type 'K' thermocouples.    

{% include image.html file="fly_e3_ultra_max.png" alt="Fly-E3-Ultra H723 vs Fly-E3-Ultra-Max H723" caption="Fly-E3-Ultra H723 vs Fly-E3-Ultra-Max H723" %}

## Config.g changes

### PT100 or PT1000

To use a 2 wire PT100 or PT1000, connect the wires as shown in the image below and set the first for switches as shown in the image.

{% include image.html file="fly_e3_ultra_2wire_pt100.png" alt="Fly-E3-Ultra 2 Wire PT100/PT1000" caption="Fly-E3-Ultra 2 Wire PT100/PT1000" %}  

To use a 3 wire PT100 or PT1000, connect the wires as shown in the image below and set the first for switches as shown in the image.

{% include image.html file="fly_e3_ultra_3wire_pt100.png" alt="Fly-E3-Ultra 3 Wire PT100/PT1000" caption="Fly-E3-Ultra 3 Wire PT100/PT1000" %}  

To use a 4 wire PT100 or PT1000, connect the wires as shown in the image below and set the first for switches as shown in the image.

{% include image.html file="fly_e3_ultra_4wire_pt100.png" alt="Fly-E3-Ultra 4 Wire PT100/PT1000" caption="Fly-E3-Ultra 4 Wire PT100/PT1000" %}  

To use the PT100 on your hotend, use the following code in config.g
If you are in a country where the mains frequency is 50Hz, change the F60 to F50 (if you don't know, look [here](https://www.oaktreeproducts.com/img/product/description/List%20of%20Worldwide%20AC%20Voltages.pdf))

```text
M308 S1 P"PD_13" Y"rtd-max31865" F60 R430 Wx
```

Set the W value to the number of wires you have.

{% include warning.html content="Make sure you include the R430 as the Fly-E3-Pro-v3 uses a different reference resistor than expected" %}

### Type 'K' Thermocouple

To use the Type 'K' Thermocouple on your hotend, use the following code in config.g

```text
M308 S1 P"PC_7" Y"thermocouple-max31855"
```
