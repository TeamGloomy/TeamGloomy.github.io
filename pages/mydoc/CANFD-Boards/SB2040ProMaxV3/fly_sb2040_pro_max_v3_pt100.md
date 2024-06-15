---
title: Connecting a PT100 or PT1000 to a Fly-SB2040 Pro Max V3
tags: []
keywords: 
last_updated: 16/04/2024
summary: "How to connect a PT100 or PT1000 to a Fly-SB2040 Pro Max V3"
sidebar: mydoc_sidebar
permalink: fly_sb2040_pro_max_v3_pt100.html
folder: mydoc
comments: false
toc: false
datatable: true
board: Fly-SB2040 Pro Max V3
---

## Overview

The {{page.board}} toolboards have support for PT100 and PT1000 temperature sensors.  
For PT1000, you can either use this connection method described here or the standard temperature sensor connector with a jumper installed as described on the general information page.  

## Hardware Setup

The use of PT100 and PT1000 temperature sensors is setup using the 8 dip switches on the {{page.board}}.  

{% include image.html file="fly_sb2040_v3_dips.png" alt="Fly-SB2040 Pro Max V3 DIP Switches" caption="Fly-SB2040 Pro Max V3 DIP Switches" %}  

Use the image below to setup the jumpers on the 8 dip switches according to the type of PT100 or PT1000 temperature sensors you are connecting.  

{% include image.html file="fly_sb2040_v3_pt100" alt="Fly-SB2040 Pro Max V3 PT100/PT1000 DIP Switch Settings" caption="Fly-SB2040 Pro Max V3 PT100/PT1000 DIP Switch Settings" %}  

## Config.g changes

### PT100

{% include important.html content="The changes shown below that are to be made to config.g assume that the toolboard uses the default CAN address of 124. If you have changed the default CAN address, make sure you change the 124 to the correct address." %}

To use the PT100 on your hotend, use the following code in config.g
If you are in a country where the mains frequency is 50Hz, change the F60 to F50 (if you don't know, look [here](https://www.oaktreeproducts.com/img/product/description/List%20of%20Worldwide%20AC%20Voltages.pdf))

```text
M308 S1 P"124.max31865cs" Y"rtd-max31865" F60 R430 W#
```

{% include warning.html content="The # in W# is the number of wires your PT100 has, which is either 2, 3 or 4 and should be changed accordingly." %}

{% include warning.html content="Make sure you include the R430 as the Fly-SB2040 Pro Max V3 uses a different reference resistor than expected" %}

### PT1000

To use the PT1000 on your hotend, use the following code in config.g
If you are in a country where the mains frequency is 50Hz, change the F60 to F50 (if you don't know, look [here](https://www.oaktreeproducts.com/img/product/description/List%20of%20Worldwide%20AC%20Voltages.pdf))

```text
M308 S1 P"124.max31865cs" Y"rtd-max31865" F60 R4300 W#
```

{% include warning.html content="The # in W# is the number of wires your PT1000 has, which is either 2, 3 or 4 and should be changed accordingly." %}

{% include warning.html content="Make sure you include the R4300 as the Fly-SB2040 Pro Max V3 uses a different reference resistor than expected" %}
