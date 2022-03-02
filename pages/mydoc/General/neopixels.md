---
title: Configuring Neopixels
tags: []
keywords: 
last_updated: 09/12/2021
summary: "Configuring Neopixels"
sidebar: mydoc_sidebar
permalink: neopixels.html
folder: mydoc
comments: false
toc: false
---

The maximum number of supported neopixels is 60.  
RGB and RGBW versions are supported. 
An external power supply should be used when more than 8 are being used.  

Ensure that you have the pin correctly defined in your board.txt file. Here is an example.  
```
led.neopixelPin = 1.24
```

For configuring them, use this [documentation](https://docs.duet3d.com/en/User_manual/Reference/Gcodes#m150-set-led-colours) for reference. 

{% include important.html content="Please be aware that this version of the firmware uses X2 rather than X1 in the M150 command. The Q command for frequency is also not supported." %}

## Custom Neopixel Timings

These take the form of `M150 X2 Tt0:t1:tc:tr`

* t0 is the high time for a 0 bit in nano seconds
* t1 is the high time for a 1 bit in nano seconds
* tc is the total cycle length (on plus off time) in nano seconds
* tr is the reset time in microseconds.

{% include tip.html content="The standard timing for WS2812B neopixels is T450:850:1250:50 from [here]{https://cdn-shop.adafruit.com/datasheets/WS2812B.pdf}. If you're having trouble controlling your neopixels, add these timings as described above." %}

So to set up a neopixel that needs a 0 time of say 300nS a 1 time of 800nS a cycle time of say 1250ns and a reset time of 250,000nS (or 250 uS) you use:  
```
M150 X2 T300:800:1250:250
```  
You can see the current settings with M150.

## Notes

Do not try to update the neopixels during motion or a momentary pause in movement would be caused.  
It is ok to change their status at the start and end of a print.  
Don't be tempted to use daemon.g unless you are able to arrange it to take place at a layer change.  

This may not work at all on any pin on the SKR-Pro as Neopixels really need a 5V control signal, which is why many boards like the GTR and SKR V1.4 have specific neopixel pins. Those pins have a level shifter that boosts the 3.3V signal to 5V. The SKR Pro does not have this. Sometimes you can make it work by providing the neopixels with a lower than 5V supply voltage, but it pretty much depends on the pixels that you have. Another option would be to use a level shifter.