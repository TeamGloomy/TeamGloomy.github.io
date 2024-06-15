---
title: Connecting Neopixels to a Fly-SHT36 Max V3
tags: []
keywords: 
last_updated: 15/06/2024
summary: "How to connect Neopixels to a Fly-SHT36 Max V3"
sidebar: mydoc_sidebar
permalink: fly_sht36_max_v3_neopixels.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The Fly-SHT36 Max V3 has support for connecting Neopixels using the header called "rgbled" (GPIO26).  

### Wiring

Neopixels can be wired to the Fly-SHT36 Max V3 as shown below.

{% include image.html file="fly_sht36_neopixels.png" alt="Fly-SHT36 Max V3 Neopixel Wiring" caption="Fly-SHT36 Max V3 Neopixel Wiring" %}

### Configuration

The Neopixels should be configured in config.g using M950 as detailed [here](https://docs.duet3d.com/en/User_manual/Reference/Gcodes#m950-create-heater-fan-spindle-or-gpioservo-pin).  
For example, using the default toolboard address of 124 with RGBW Neopixels  

```text
M950 C"124.rgbled" E0 T2
```

[M150](https://docs.duet3d.com/en/User_manual/Reference/Gcodes#m150-set-led-colours) can then be used to set the colours and brightness.  
For example, the below example will set 3 RGBw neopixels to white.  

```text
M150 E0 R0 B0 U0 W255 S3 F0
```
