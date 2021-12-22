---
title: TFT Screen Configuration
tags: []
keywords: 
last_updated: 22/12/2021
summary: "TFT Screen Configuration"
sidebar: mydoc_sidebar
permalink: tft.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The most recent version of the [standard bigtreetech TFT firmware](https://github.com/bigtreetech/BIGTREETECH-TouchScreenFirmware/tree/master/Copy%20to%20SD%20Card%20root%20directory%20to%20update) has built in support for RepRapFirmware. The pre-built images have this enabled by default.

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
