---
title: Connecting a PT100 or PT1000 to a BTT Octopus Pro v1.0 F429 Version in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 02/04/2024
summary: "How to connect a PT100 or PT1000 to a BTT Octopus Pro v1.0 F429 Version"
sidebar: mydoc_sidebar
permalink: btt_octopus_pro_1.0_f429_pt100_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The BTT Octopus Pro v1.0 F429 Version has support for PT100 and PT1000.  

## Board Setup

The BTT Octopus Pro v1.0 F429 Version has a series of dip switches that must be set when using 2, 3 and 4 wire PT100 and PT1000.  

{% include image.html file="btt_octopus_pro_1.0_pt100_dip.png" alt="BTT Octopus Pro v1.0 PT100/PT1000 Dip Switch Location" caption="BTT Octopus Pro v1.0 PT100/PT1000 Dip Switch Location" %}  

The dip switches should be set as shown in the table below.  

{% include image.html file="btt_octopus_pro_1.0_pt100_table.png" alt="BTT Octopus Pro v1.0 PT100/PT1000 Dip Switch Settings" caption="BTT Octopus Pro v1.0 PT100/PT1000 Dip Switch Settings" %}  

### PT100 3 Wire

If using a 3 wire PT100, move the resistor from the blue box to the red box as shown below. As the resistor is only 0 ohm, it can be replaced by a solder bridge.  

{% include image.html file="btt_octopus_pro_1.0_pt100_resistor.png" alt="BTT Octopus Pro v1.0 PT100 3 wire Settings" caption="BTT Octopus Pro v1.0 PT100 3 wire Settings" %}  

## Config.g changes

### PT100

To use the PT100 on your hotend, use the following code in config.g
If you are in a country where the mains frequency is 50Hz, change the F60 to F50 (if you don't know, look [here](https://www.oaktreeproducts.com/img/product/description/List%20of%20Worldwide%20AC%20Voltages.pdf))

```text
M308 S1 P"PF_8" Y"rtd-max31865" F60 R430
```

{% include warning.html content="Make sure you include the R430 as the BTT Octopus Pro v1.0 F429 Version uses a different reference resistor than expected" %}

### PT1000

To use the PT1000 on your hotend, use the following code in config.g
If you are in a country where the mains frequency is 50Hz, change the F60 to F50 (if you don't know, look [here](https://www.oaktreeproducts.com/img/product/description/List%20of%20Worldwide%20AC%20Voltages.pdf))

```text
M308 S1 P"PF_8" Y"rtd-max31865" F60 R4300
```

{% include warning.html content="Make sure you include the R4300 as the BTT Octopus Pro v1.0 F429 Version uses a different reference resistor than expected" %}