---
title: PITB V2.0 Fans
tags: []
keywords: 
last_updated: 15/12/2024
summary: "How to use the Fan headers on a PITB V2.0"
sidebar: mydoc_sidebar
permalink: pitb_v2_fans.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

This page details how to use 2 wire fans with a PITB V2.0.  

{% include important.html content="The PITB V2.0 only supports 5V and 24V fans" %}

{% include important.html content="The changes shown below that are to be made to config.g assume that the PITB V2.0 uses the default CAN address of 124. If you have changed the default CAN address, make sure you change the 124 to the correct address." %}

### 2 Wire Fans

To connect a 2 wire fan to the PITB V2.0, you must ensure the following.  

* Connect the black wire of the fan to the GND pin on the header.
* Connect the red wire of the fan to the +V pin on the header.
* Ensure the jumper beneath the connector is set to the correct voltage (5V (red) or 24V (blue)).

{% include image.html file="pitb_v2_fans.png" url="https://teamgloomy.github.io/images/pitb_v2_fans.png" alt="PITB V2.0 2 Wire Fans" caption="PITB V2.0 2 Wire Fans" %}

```text  
M950 F3 C"124.out0" Q100
M106 F3 S0 H-1
```
