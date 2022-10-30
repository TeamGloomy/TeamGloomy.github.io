---
title: Custom Commands and G-Code
tags: []
keywords: 
last_updated: 17/05/2022
summary: "Custom Commands and G-Code that have been added to this port"
sidebar: mydoc_sidebar
permalink: custom_commands_gcode.html
folder: mydoc
comments: false
toc: false
---

There has been some additions made to [standard gcodes](https://docs.duet3d.com/en/User_manual/Reference/Gcodes) available.

## Additional GCodes
- M122 P200 - This gives an output of pin assignments for the configured board
- M150 - X2 has been added for the Neopixels. It should be used instead of X1. This is only applicable to this LPC/STM32 port. This has been removed in 3.4.1-RC1
- M150 - Knn (optional) specifies the LED string number to use for this and subsequent M150 commands (initially set to K0). Options X and Q are no longer used (use M950 to specify these values if needed).
- M308 - "thermocouple-max6675" has been added as an additional sensor type. This is only applicable to this LPC/STM32 port.
- M569.8 - For setting the sense resistor and maximum current of a driver not using the standard 0.075 Ohm for TMC5160s or 0.11 Ohm for TMC2209s.
- M950 - Enn to specify an LED string number. when used with option E:
    - C"name" specifies the pin to use (must currently be on the main board)
    - Qnn (optional) SPI frequency (in Hz) used for hardware Neopixel control. Default 2.4MHz range 1MHz to 4Mhz
    - Tn (optional)  LED type: T0 = DotStar (not supported), T1 = RGB NeoPixel (default), T2 = bit-banged RGB NeoPixel, T3 = RGBW NeoPixel, T4 = bit-banged RGBW NeoPixel.
    - Laaaa:bbbb:cccc:dddd (optional) Neopixel timing aaaa:0 time, bbbb:1 time, cccc:cycle time (all in nS), dddd:reset time (in mS).
    - By default string 0 will be configured to use the pin specified in board.txt (if present).

## Unsupported GCodes

M350 - For many of the drivers used on the supported board, the microstepping is controlled by hardware (e.g. by installing certain jumpers). This is only supported by TMC22XX and TMC5160 drivers set in UART/SPI mode.

M915 - Stall detection is now supported on the SKR v1.3, SKR v1.4, SKR E3 Turbo, Fly-CDY, MKS SGen L v1 and v2 and all STM32F4 and Stm32H7 boards when using TMC2209, TMC2226 or TMC5160 drivers

## Additional Meta Information
Version 3.01 and upwards of RRF includes support for conditional gcode. It does this through [meta commands](https://docs.duet3d.com/en/User_manual/Reference/Gcode_meta_commands) and querying data stored in the [object model Stable](https://github.com/Duet3D/RepRapFirmware/wiki/Object-Model-Documentation#overview) or [Object Model Unstable](https://github.com/Duet3D/RepRapFirmware/wiki/Object-Model-Documentation-Beta-&-RC).
