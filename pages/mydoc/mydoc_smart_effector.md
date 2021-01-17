---
title: Connecting a Smart Effector
tags: []
keywords: 
last_updated: 15/01/2021
summary: "Connecting a Smart Effector"
sidebar: mydoc_sidebar
permalink: mydoc_smart_effector.html
folder: mydoc
comments: false
toc: false
---

It is possible to connect the [Smart Effector](https://duet3d.dozuki.com/Wiki/Smart_effector_and_carriage_adapters_for_delta_printer) to an LPC or STM32 based board.

## Wiring

![image](https://d17kynu4zpq5hy.cloudfront.net/igi/duet3d/iF3XhAWQZk6IZFkH.large)  
The Smart Effector can work off both 3.3v and 5v. The LPC and STM32 boards typically only have 5v available in an easy to use place.  
The Z Probe Mod pin is only required to be connected if you need to adjust the sensitivity, which in normal circumstances won't be required.

### SKR 1.4 as an example

The servo0 pin is a very good candidate for connecting the Z Probe to as it supplies power as well as an input pin.
Connect the NPWR to the power input on the Smart Effector, ground to ground and pin 2.0 to the Z Probe Output.
The rest of the wiring is as per the documentation.

## Config.g Changes

Using the SKR 1.4 as an example, change the config.g accordingly.  
```
M558 P8 H2 F1000 T12000 R0.2 S0.02 A5 C"servo0"
G31 X0 Y0 Z-0.1
```