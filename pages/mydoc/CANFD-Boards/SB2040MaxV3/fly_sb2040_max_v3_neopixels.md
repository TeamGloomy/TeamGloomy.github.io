---
title: Connecting Neopixels to a Fly-SB2040 Max V3
tags: []
keywords: 
last_updated: 15/04/2024
summary: "How to connect Neopixels to a Fly-SB2040 Max V3"
sidebar: mydoc_sidebar
permalink: fly_sb2040_max_v3_neopixels.html
folder: mydoc
comments: false
toc: false
datatable: true
board: Fly-SB2040 Max V3
---

## Overview

The {{page.board}} has support for connecting Neopixels using the header called "rgb" (GPIO26) on the Fly-SB2040-FV daughterboard.  

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
