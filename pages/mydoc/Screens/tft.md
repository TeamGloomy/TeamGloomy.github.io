---
title: TFT Screen Configuration
tags: []
keywords: 
last_updated: 18/02/2025
summary: "TFT Screen Configuration"
sidebar: mydoc_sidebar
permalink: tft.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

We don't recommend using the BTT TFT firmware with RRF, even though it advertises as working with RRF. Instead, you should use [this fork](https://github.com/kisslorand/BTT-TFT-FW) as it fixes a lot of issues with the BTT version and it actually works.

## Connection to the board

Use pins +5V, GND, TX and RX on the "screen/tft/aux" header. These should be connected to +5V, GND, TX and RX on the TFT, making sure that TX and RX are swapped.  
The specific screen pages for each board have more information.  

## Loading the firmware

There is now an RRF config.ini  
It needs to be renamed from config_rrf.ini to config.ini for flashing of the firmware.  

## Config.g Changes

Add the following line to your config.g to enable the screen

```M575 P1 S2 B57600```

If the screen says `No printer connected` try with other values for the `S` parameter (possible values are `0`, `1`, `2` and `3`)
