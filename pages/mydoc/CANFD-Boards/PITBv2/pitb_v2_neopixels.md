---
title: Connecting Neopixels to a PITB V2.0
tags: []
keywords: 
last_updated: 15/12/2024
summary: "How to connect Neopixels to a PITB V2.0"
sidebar: mydoc_sidebar
permalink: pitb_v2_neopixels.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The PITB V2.0 has support for connecting Neopixels using the header called "rgbled" (GPIO26).  

### Wiring

Neopixels can be wired to the PITB V2.0 as shown on the pinout.  

### Configuration

{% include important.html content="The changes shown below that are to be made to config.g assume that the PITB V2.0 uses the default CAN address of 124. If you have changed the default CAN address, make sure you change the 124 to the correct address." %}

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
