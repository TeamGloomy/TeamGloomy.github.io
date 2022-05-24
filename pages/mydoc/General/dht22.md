---
title: How to connect a DHT22
tags: []
keywords: 
last_updated: 18/05/2022
summary: "How to connect a DHT22 - STM32 only"
sidebar: mydoc_sidebar
permalink: dht22.html
folder: mydoc
comments: false
toc: false
---

## Overview

From 3.4.1-RC1, DHT22 sensors can now be connected to RRF.
The duet docs page for DHT22 sensors can be found [here](https://docs.duet3d.com/en/User_manual/Connecting_hardware/Temperature_connecting_DHT)

### What pin to choose?

A DHT22 sensor requires 3 pins to be connected. +3.3v (not 5v), ground and a signal pin.  
Ideally a pin that does not have a bunch of signal conditioning or level shifting stuff connected to it should be chosen, for example, on the EXP1 or EXP2 header. It must also be interrupt capable.

### How do you know what pin is interrupt capable? 
Well, any STM32 pin is interrupt capable **but** you can only have one pin with the same number as an interrupt pin.  
For example, on the Fly-E3-Pro, pin B.12 is used as the chip select pin for the WiFi. That means that no other pin that ends in .12 can be used for something that requires the pin to be interrupt capable.  
You can see all the pins that are currently assigned as an interrupt using M122 P200.  

{% include image.html file="interrupt_pins.png" alt="Interrupt Pins Assigned" caption="Interrupt Pins Assigned" %}

### Example Config.g Code

Below is an example config.g code

```
M308 S10 P"B.5" Y"dht22" A"Chbr Temp[C]"
M308 S11 P"S10.1" Y"dhthumidity" A"Chbr Hum[%]"
```