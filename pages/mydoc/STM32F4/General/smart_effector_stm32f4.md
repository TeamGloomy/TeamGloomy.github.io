---
title: Connecting a Smart Effector
tags: []
keywords: 
last_updated: 06/09/2022
summary: "Connecting a Smart Effector"
permalink: smart_effector_stm32f4.html
folder: mydoc
comments: false
toc: false
---

It is possible to connect the [Smart Effector](https://docs.duet3d.com/en/Duet3D_hardware/Accessories/Smart_Effector) to an LPC or STM32 based board.

## Wiring

{% include image.html file="smarteffector_wiring_v3.0_d1.0.png" url="https://teamgloomy.github.io/images/smarteffector_wiring_v3.0_d1.0.png" alt="Smart Effector v3 Wiring" caption="Smart Effector v3 Wiring" %}  
The Smart Effector can work off both 3.3V and 5V. The LPC and STM32 boards typically only have 5V easily accessible.  
The Z Probe Mod pin only needs to be connected if you need to adjust the sensitivity, which normally isn't necessary.

### SKR 1.4 as an example

The servo0 pin is a good candidate for connecting the Z probe, as it supplies both power and an input pin.
Connect the NPWR to the power input on the Smart Effector, ground to ground and pin 2.0 to the Z Probe Output.
The rest of the wiring is as per the documentation.

## Config.g Changes

Using the SKR 1.4 as an example, change the config.g accordingly.  

```text
M558 P8 H2 F1000 T12000 R0.2 S0.02 A5 C"servo0"
G31 X0 Y0 Z-0.1
```
