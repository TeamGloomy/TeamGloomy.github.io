---
title: Connecting a screen to a Fly-E3-Pro-v2
tags: []
keywords: 
last_updated: 26/12/2021
summary: "How to connect a serial screen to a Fly-E3-Pro-v2"
sidebar: mydoc_sidebar
permalink: fly_e3_prov2_screen.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

Both serial screens (e.g. Fly Screens, BTT TFT, Paneldue) and 12864 displays (like the stock ender 3 screen) can be connected to a Fly-E3-Pro-v2.  
These instructions cover serial screens. Instructions for 12864 screens can be found [here](/fly_e3_pro_screen_12864.html).  

### Board.txt Preparation

To enable a screen to function correctly, the following lines need to be added to the board.txt file.  

```
serial.aux.rxTxPins = { A.10, A.9 }
```

<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a class="noCrossRef" href="#paneldue" data-toggle="tab">PanelDue</a></li>
    <li><a class="noCrossRef" href="#tft" data-toggle="tab">TFT</a></li>
    <li><a class="noCrossRef" href="#fly" data-toggle="tab">Fly Screen</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="paneldue" markdown="1">

Use pins +5V, GND, TX and RX on the "screen" header. These should be connected to +5V, GND, TX and RX on the PanelDue, making sure that TX and RX are swapped.

In config.g, the following command should be added.   
```
M575 P1 S1 B57600
```
From RepRapFirmware 3.2, it is possible to update the firmware on the PanelDue directly from the board. Please see [here](https://docs.duet3d.com/en/User_manual/RepRapFirmware/Updating_PanelDue#firmware-update-via-duet) for further instructions.  

</div>

<div role="tabpanel" class="tab-pane" id="tft" markdown="1">

Use pins +5V, GND, TX and RX on the "screen" header. These should be connected to +5V, GND, TX and RX on the TFT, making sure that TX and RX are swapped.

## Overview

The most recent version of the [standard bigtreetech TFT firmware](https://github.com/bigtreetech/BIGTREETECH-TouchScreenFirmware/tree/master/Copy%20to%20SD%20Card%20root%20directory%20to%20update) has built in support for RepRapFirmware. The pre-built images have this enabled by default.

## Loading the firmware

There is now an RRF config.ini  
It needs to be renamed from config_rrf.ini to config.ini for flashing of the firmware.  

## Config.g Changes

Add the following line to your config.g to enable the screen

```M575 P1 S2 B57600```

If the screen says `No printer connected` try with other values for the `S` parameter (possible values are `0`, `1`, `2` and `3`)

</div>

<div role="tabpanel" class="tab-pane" id="fly" markdown="1">

{% include image.html file="fly_screen_7.jpg" alt="Fly Screen 7 inch" caption="Fly Screen 7 inch Connection" %}

Please note the pinout of 5v (connected to NC), TX, RX and 0v.  
The cable that is supplied may be equipped with the correct connection for a duet board, so the plug will need changing to fit these boards. Remember to make sure that TX and RX are swapped.  

Use pins +5V, GND, TX and RX on the "screen" header. These should be connected to +5V, GND, TX and RX on the Fly Screen, making sure that TX and RX are swapped.

In config.g, the following command should be added.   
```
M575 P1 S0 B57600
```  
The latest version of the screen firmware can be found [here](https://github.com/Mellow-3D/FLY-Screen-RepRap/releases).  
To update the screen, put the update.img onto a blank SD card. Put the SD card into the screen and power it up. The update will then be flashed automatically. Once finished, power down the screen and remove the SD card.  

</div>

</div>
