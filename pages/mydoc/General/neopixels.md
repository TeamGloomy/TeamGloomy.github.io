---
title: Configuring Neopixels
tags: []
keywords: 
last_updated: 01/02/2023
summary: "Configuring Neopixels"
sidebar: mydoc_sidebar
permalink: neopixels.html
folder: mydoc
comments: false
toc: false
datatable: true
---

<ul id="profileTabs" class="nav nav-tabs">
  <li class="active"><a class="noCrossRef" href="#neo35" data-toggle="tab">Neopixels from RRF 3.5.0-beta.4</a></li>
  <li><a class="noCrossRef" href="#neo341" data-toggle="tab">Neopixels from RRF 3.4.1-RC1</a></li>  
  <li><a class="noCrossRef" href="#neo34" data-toggle="tab">Neopixels up to RRF 3.4.0</a></li>  
</ul>
  <div class="tab-content">

<div role="tabpanel" class="tab-pane" id="neo35" markdown="1">

The Neopixels should be configured in config.g using M950 as detailed [here](https://docs.duet3d.com/en/User_manual/Reference/Gcodes#m950-create-heater-fan-spindle-or-gpioservo-pin).  
For example, using the default toolboard address of 124 with RGBW Neopixels   
```
M950 C"neopixel" E0 T2
```

[M150](https://docs.duet3d.com/en/User_manual/Reference/Gcodes#m150-set-led-colours) can then be used to set the colours and brightness.  
For example, the below example will set 3 RGBw neopixels to white.  
```
M150 E0 R0 B0 U0 W255 S3 F0
```

</div>

<div role="tabpanel" class="tab-pane" id="neo34" markdown="1">

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

</div>

<div role="tabpanel" class="tab-pane" id="neo341" markdown="1">

The process to control neopixels from 3.4.1-RC1 has changed from using bit-banging to using Hardware DMA. This uses hardware to change the colour of the neopixels, allowing for colours to be changed whilst movement is taking place. This is supported by both the STM32F4 and STM32H7 builds.

This port of RRF sets up the neopixels using a different method to the Duet3D version.

Firstly, M950 should be used to set up an LED string

- M950 - Enn to specify an LED string number. when used with option E:
    - C"name" specifies the pin to use (must currently be on the main board)
    - Qnn (optional) SPI frequency (in Hz) used for hardware Neopixel control. Default 2.4MHz range 1MHz to 4Mhz
    - Tn (optional)  LED type: T0 = DotStar (not supported), T1 = RGB NeoPixel (default), T2 = bit-banged RGB NeoPixel, T3 = RGBW NeoPixel, T4 = bit-banged RGBW NeoPixel.
    - Laaaa:bbbb:cccc:dddd (optional) Neopixel timing aaaa:0 time, bbbb:1 time, cccc:cycle time (all in mS), dddd:reset time (in mS).
    - By default string 0 will be configured to use the pin specified in board.txt (if present).

Next, the neopixels can be controlled using M150

- M150 - Knn (optional) specifies the LED string number to use for this and subsequent M150 commands (initially set to K0). Options X and Q are no longer used (use M950 to specify these values if needed).

Here is an example
```
M950 E0 C"E.6" T3
M150 K0 R0 B0 U0 W255 S10 F0
```

</div>

</div>