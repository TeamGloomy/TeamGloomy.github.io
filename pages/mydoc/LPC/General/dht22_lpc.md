---
title: How to connect a DHT22
tags: []
keywords: 
last_updated: 28/06/2023
summary: "How to connect a DHT22"
permalink: dht22_lpc.html
folder: mydoc
comments: false
toc: false
---

{% include important.html content="This page is only applicable to STM32 based boards only." %}

## Overview

From 3.4.1-RC1, DHT22 sensors can now be connected to RRF.
The Duet docs page for DHT22 sensors can be found [here](https://docs.duet3d.com/en/User_manual/Connecting_hardware/Temperature_connecting_DHT)

### What pin to choose?

A DHT22 sensor requires 3 pins to be connected: +3.3V (not 5V), ground and a signal pin.  
Ideally, choose a pin that does not have any additional signal conditioning or level shifting circuitry connected to it, for example on the EXP1 or EXP2 header. It must also be interrupt capable.

### How do you know what pin is interrupt capable?

Please see [this page](./interrupt_pins_lpc.html) for more information.  
