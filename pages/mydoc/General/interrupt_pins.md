---
title: How to Know What Pin is Interrupt Capable
tags: []
keywords: 
last_updated: 28/06/2023
summary: "How to Know What Pin is Interrupt Capable"
sidebar: mydoc_sidebar
permalink: interrupt_pins.html
folder: mydoc
comments: false
toc: false
---

### How do you know what pin is interrupt capable? 
Well, any STM32 pin is interrupt capable **but** you can only have one pin with the same number as an interrupt pin.  
For example, on the Fly-E3-Pro, pin PB_12 is used as the chip select pin for the WiFi. That means that no other pin that ends in .12 can be used for something that requires the pin to be interrupt capable.  
You can see all the pins that are currently assigned as an interrupt using M122 P200.  

{% include image.html file="interrupt_pins.png" alt="Interrupt Pins Assigned" caption="Interrupt Pins Assigned" %}

### Example Config.g Code

Below is an example config.g code

```
M308 S10 P"PB_5" Y"dht22" A"Chbr Temp[C]"
M308 S11 P"S10.1" Y"dhthumidity" A"Chbr Hum[%]"
```