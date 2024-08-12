---
title: Connecting a PT100 or PT1000 to a BTT Octopus Pro v1.1
tags: []
keywords: 
last_updated: 12/08/2023
summary: "How to connect a PT100 or PT1000 to a BTT Octopus Pro v1.1"
sidebar: mydoc_sidebar
permalink: btt_octopus_pro_1.1_h723_pt100.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: BTT Octopus Pro v1.1
---

## Overview

The {{boardname}} has support for PT100 and PT1000.  

## Board Setup

The {{boardname}} has a series of dip switches that must be set when using 2, 3 and 4 wire PT100 and PT1000.  

{% include image.html file="btt_octopus_pro_1.0_pt100_dip.png" alt="BTT Octopus Pro v1.1 PT100/PT1000 Dip Switch Location" caption="BTT Octopus Pro v1.1 PT100/PT1000 Dip Switch Location" %}  

The dip switches should be set as shown in the table below.  

{% include image.html file="btt_octopus_pro_1.0_pt100_table.png" alt="BTT Octopus Pro v1.1 PT100/PT1000 Dip Switch Settings" caption="BTT Octopus Pro v1.1 PT100/PT1000 Dip Switch Settings" %}  

### PT100 3 Wire

If using a 3 wire PT100, move the resistor from the blue box to the red box as shown below. As the resistor is only 0 ohm, it can be replaced by a solder bridge.  

{% include image.html file="btt_octopus_pro_1.0_pt100_resistor.png" alt="BTT Octopus Pro v1.1 PT100 3 wire Settings" caption="BTT Octopus Pro v1.1 PT100 3 wire Settings" %}  

## Board.txt modifications

The following lines should be added to the board.txt file.

```text
heat.spiTempSensorChannel = 0
heat.spiTempSensorCSPins = {PF_8}
```

## Config.g changes

### PT100

To use the PT100 on your hotend, use the following code in config.g
If you are in a country where the mains frequency is 50Hz, change the F60 to F50 (if you don't know, look [here](https://www.oaktreeproducts.com/img/product/description/List%20of%20Worldwide%20AC%20Voltages.pdf))

```text
M308 S1 P"PF_8" Y"rtd-max31865" F60 R430
```

{% include warning.html content="Make sure you include the R430 as the BTT Octopus Pro v1.1 uses a different reference resistor than expected" %}

### PT1000

To use the PT1000 on your hotend, use the following code in config.g
If you are in a country where the mains frequency is 50Hz, change the F60 to F50 (if you don't know, look [here](https://www.oaktreeproducts.com/img/product/description/List%20of%20Worldwide%20AC%20Voltages.pdf))

```text
M308 S1 P"PF_8" Y"rtd-max31865" F60 R430
```

{% include warning.html content="Make sure you include the R430 as the BTT Octopus Pro v1.1 uses a different reference resistor than expected" %}
