---
title: Custom Commands and G-Code
tags: []
keywords: 
last_updated: 28/06/2023
summary: "Custom Commands and G-Code that have been added to this port"
permalink: custom_commands_gcode.html
folder: mydoc
comments: false
toc: false
---

There have been some additions made to [standard gcodes](https://docs.duet3d.com/en/User_manual/Reference/Gcodes) available.

## Additional GCodes

- M122 P200 - This gives an output of pin assignments for the configured board
- M308 - "thermocouple-max6675" has been added as an additional sensor type. This is only applicable to this STM32 port.
- M569.9 - For setting the sense resistor and maximum current of a driver not using the standard 0.075 Ohm for TMC5160s or 0.11 Ohm for TMC2209s. This is applicable to the STM32 port only.  
- M950 - Enn to specify an LED string number. When used with option E:
  - C"name" specifies the pin to use (must currently be on the main board)
  - Qnn (optional) SPI frequency (in Hz) used for hardware Neopixel control. Default 2.4MHz range 1MHz to 4MHz
  - Tn (optional)  LED type: T0 = DotStar (not supported), T1 = RGB NeoPixel (default), T2 = bit-banged RGB NeoPixel, T3 = RGBW NeoPixel, T4 = bit-banged RGBW NeoPixel. This has been changed in 3.5.0-Beta.4 and we now follow the Duet3D convention.  
  - Laaaa:bbbb:cccc:dddd (optional) Neopixel timing aaaa:0 time, bbbb:1 time, cccc:cycle time (all in ns), dddd:reset time (in ms).
  - By default string 0 will be configured to use the pin specified in board.txt (if present).
