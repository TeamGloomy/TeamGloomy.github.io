---
title: Fly-CDY General Information
tags: []
keywords: 
last_updated: 03/02/2021
summary: "General information regarding the Fly-CDY"
sidebar: mydoc_sidebar
permalink: fly_cdy_general.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

This page covers any general information for the Fly-CDY board.  
It is currently available through [AliExpress](https://www.aliexpress.com/item/1005001701631493.html)

### Driver Jumpers

The jumpers should be installed as below. "Common Interpolation" should be used for standalone drivers. "SPI mode Interpolation" is not a currently supported configuration as this port does not support SPI communication to drivers. "UART mode Interpolation" should be used when using smart drivers (i.e. TMC2208, TMC2209, TMC2225 and TMC2226)

{% include image.html file="fly_e3_jumpers.png" alt="Fly-E3 Jumpers" caption="Fly-E3 Driver Jumper Locations" %}

### Initial Installation

The board that you will receive doesn't have any firmware installed so when plugged into a computer, the board will show as an unidentified device.
Follow the [WiFi instructions](fly_cdy_connected_wifi.html).

### Issues

There is a known issue with the bootloader that is shipped with the Fly-CDY board.  
It will manifest itself in the board being unable to boot if the E1 UART connector is in place.  
There are 2 methods that can be employed to fix this issue.  

#### Method 1

Rather then installing the jumper for UART mode as described above, install it as shown in the image below.  

{% include image.html file="fly_cdy_fix.jpg" alt="Fly-CDY Fix" caption="Fly-CDY E1 Jumper Fix Method 1" %}

Then include the following line in the board.txt file.  
```
stepper.TmcUartPins = { 1.4, 1.10, 1.16, 4.28, 0.21, 0.10, NoPin }
```  

#### Method 2

This involves updating the bootloader on the Fly-CDY and required a [USB TTL device](https://www.amazon.co.uk/dp/B00AFRXKFU/ref=cm_sw_em_r_mt_dp_2D8VTXSMW5DWXBT7F9GN).  

Ensure the power is disconnected from your Fly-CDY although ideally, this should be done with nothing else connected to the board.  
Connect the USB TTL to the Fly-CDY.  

<div class="datatable-begin"></div>

|:---|:---|
|TTL|CDY|
|+5V|+5V|
|GND|GND|
|RX|TX|
|TX|RX|

<div class="datatable-end"></div>

{% include image.html file="fly_cdy_fix2.jpg" alt="Fly-CDY Fix 2" caption="Fly-CDY E1 Jumper Fix Method 2" %}

Download and install [Flash Magic](https://www.flashmagictool.com/download.html&d=10.90/FlashMagic.exe).  
Download and install the updated bootloader from [here](https://github.com/FLYmaker/FLY-CDY/blob/master/Bootloader/CDY_bootloader.hex).
Launch flash magic. 

{% include image.html file="flash_magic.jpg" alt="Flash Magic" caption="Flash Magic Settings" %}

As shown above, instep 1 select LPC1769 in the first box, the COM port should be the COM port of your Fly-CDY board and set the baudrate to 38400.  
In step 2, make sure "Erase all..." is unticked and "Erase blocks..." is ticked.  
In step 3, browse and select the new bootloader image you downloaded from above.  
In step 4, make sure "Verify..." is ticked and "Patch" and "Fill unused" are unticked.  

Hold both the reset and boot buttons on the Fly-CDY. Then release the reset button and then the boot button.  
Press Start on Flash Magic.  

Once the flashing has been completed, the UART connection can be used as normal.