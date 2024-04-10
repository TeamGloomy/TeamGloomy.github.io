---
title: Connecting a PT100 or PT1000 to a BTT Kraken
tags: []
keywords: 
last_updated: 27/12/2023
summary: "How to connect a PT100 or PT1000 to a BTT Kraken"
sidebar: mydoc_sidebar
permalink: btt_kraken_h723_pt100.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: BTT Kraken
---

## Overview

The {{boardname}} has support for two x 2 wire and 4 wire PT100 and PT1000.  

## Board Setup

The {{boardname}} has a series of dip switches that must be set when using 2 and 4 wire PT100 and PT1000.  

The dip switches should be set as shown in the table below.  

{% include image.html file="btt_kraken_pt100.png" alt="BTT Kraken PT100/PT1000 Dip Switch Settings" caption="BTT Kraken PT100/PT1000 Dip Switch Settings" %}  

## Board.txt modifications

The following lines should be added to the board.txt file.

```text
heat.spiTempSensorChannel = 2
heat.spiTempSensorCSPins = { PC_9, PA_8 }
```

## Config.g changes

### PT100

To use the PT100 on your hotend, use the following code in config.g
If you are in a country where the mains frequency is 50Hz, change the F60 to F50 (if you don't know, look [here](https://www.oaktreeproducts.com/img/product/description/List%20of%20Worldwide%20AC%20Voltages.pdf))

```text
M308 S1 P"PC_9" Y"rtd-max31865" F60 R430
```

{% include warning.html content="Make sure you include the R430 as the BTT Kraken uses a different reference resistor than expected" %}

### PT1000

To use the PT1000 on your hotend, use the following code in config.g
If you are in a country where the mains frequency is 50Hz, change the F60 to F50 (if you don't know, look [here](https://www.oaktreeproducts.com/img/product/description/List%20of%20Worldwide%20AC%20Voltages.pdf))

```text
M308 S1 P"PC_9" Y"rtd-max31865" F60 R4300
```

{% include warning.html content="Make sure you include the R4300 as the BTT Kraken uses a different reference resistor than expected" %}
