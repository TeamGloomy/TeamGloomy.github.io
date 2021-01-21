---
title: Configuring Neopixels
tags: []
keywords: 
last_updated: 15/01/2021
summary: "Configuring Neopixels"
sidebar: mydoc_sidebar
permalink: mydoc_neopixels.html
folder: mydoc
comments: false
toc: false
---

The maximum number of supported neopixels is 60.  
Only RGB versions are supported, so no RGBW neopixels. 
An external power supply should be used when more than 8 are being used.  

Ensure that you have the pin correctly defined in your board.txt file. Here is an example.  
```
led.neopixelPin = 1.24
```

For configuring them, use this [documentation](https://duet3d.dozuki.com/Wiki/Gcode#Section_M150_Set_LED_colours) for reference. 

{% include important.html content="Please be aware that this version of the firmware uses X2 rather than X1 in the M150 command. The Q command for frequency is also not supported." %}

## Notes

Do not try to update the neopixels during motion or a momentary pause in movement would be caused.  
It is ok to change their status at the start and end of a print.  
Don't be tempted to use daemon.g unless you are able to arrange it to take place at a layer change.  