---
title: Connecting Type 'K' Thermocouple to a GTR v1.0 in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 03/04/2024
summary: "How to connect a Type 'K' Thermocouple to a GTR v1.0"
sidebar: mydoc_sidebar
permalink: gtr_type-k_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

GTR v1.0 boards should have support for Type 'K' thermocouples.  
The chip shown below in red, is the MAX31855K 'K' type thermocouple support.  

{% include image.html file="gtr-typek.jpg" alt="GTR MAX31855K Chip" caption="GTR 'K' Thermocouple Chip" %}

## Config.g changes

To use the Type 'K' Thermocouple on your hotend, use the following code in config.g

```text
M308 S1 P"PH_9" Y"thermocouple-max31855"
```

Make sure to (re)run the PID-tuning, e.g. [M303 T0 S20](https://docs.duet3d.com/en/User_manual/Connecting_hardware/Heaters_tuning).
