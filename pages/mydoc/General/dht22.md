---
title: How to connect a DHT22
tags: []
keywords: 
last_updated: 28/06/2023
summary: "How to connect a DHT22"
sidebar: mydoc_sidebar
permalink: dht22.html
folder: mydoc
comments: false
toc: false
---

{% include important.html content="This page is only applicable to STM32 based boards only." %}
## Overview

From 3.4.1-RC1, DHT22 sensors can now be connected to RRF.
The duet docs page for DHT22 sensors can be found [here](https://docs.duet3d.com/en/User_manual/Connecting_hardware/Temperature_connecting_DHT)

### What pin to choose?

A DHT22 sensor requires 3 pins to be connected. +3.3v (not 5v), ground and a signal pin.  
Ideally a pin that does not have a bunch of signal conditioning or level shifting stuff connected to it should be chosen, for example, on the EXP1 or EXP2 header. It must also be interrupt capable.

### How do you know what pin is interrupt capable? 
Please see [this page](./interrupt_pins.html) for more information.  