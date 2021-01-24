---
title: Connecting a screen to a Fly-CDY
tags: []
keywords: 
last_updated: 15/01/2021
summary: "Connecting a screen to a Fly-CDY"
sidebar: mydoc_sidebar
permalink: fly_cdy_screen.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

Only screens that use a serial connection can be connected to the Fly-CDY.

### Board.txt Preparation

To enable a screen to function correctly, the following lines need to be added to the board.txt file.  

```
serial.aux.rxTxPins = {0.3, 0.2}
```

<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a class="noCrossRef" href="#paneldue" data-toggle="tab">PanelDue</a></li>
    <li><a class="noCrossRef" href="#tft" data-toggle="tab">TFT</a></li>
    <li><a class="noCrossRef" href="#fly" data-toggle="tab">Fly Screen</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="paneldue" markdown="1">

Use pins +5V, GND, TX and RX on the socket to the right of the SD card. These should be connected to +5V, GND, TX and RX on the PanelDue, making sure that TX and RX are swapped.

In config.g, the following command should be added.   
```
M575 P1 S1 B57600
```
From RepRapFirmware 3.2, it is possible to update the firmware on the PanelDue directly from the board. Please see [here](https://duet3d.dozuki.com/Wiki/PanelDue_Firmware_update#Section_Firmware_update_via_Duet) for further instructions.  

</div>

<div role="tabpanel" class="tab-pane" id="tft" markdown="1">

Use pins +5V, GND, TX and RX on the socket to the right of the SD card. These should be connected to +5V, GND, TX and RX on the TFT, making sure that TX and RX are swapped.

In config.g, the following command should be added.   
```
M575 P1 S1 B57600
M555 P2
```
Please see [here](/tft.html) for further information on ensuring you have the correct firmware installed.

</div>

<div role="tabpanel" class="tab-pane" id="fly" markdown="1">

{% include image.html file="fly_screen_7.jpg" alt="Fly Screen 7 inch" caption="Fly Screen 7 inch Connection" %}

Please note the pinout of 5v (connected to NC), TX, RX and 0v.  
The cable that is supplied may be equipped with the correct connection for a duet board, so the plug will need changing to fit these boards. Remember to make sure that TX and RX are swapped.  

Use pins +5V, GND, TX and RX on the socket to the right of the SD card. These should be connected to +5V, GND, TX and RX on the Fly Screen, making sure that TX and RX are swapped.

In config.g, the following command should be added.   
```
M575 P1 S0 B57600
```  
The latest version of the screen firmware can be found [here](https://github.com/FLYmaker/FLY-Screen/tree/master/reprap).  
To update the screen, put the update.img onto a blank SD card. Put the SD card into the screen and power it up. The update will then be flashed automatically. Once finished, power down the screen and remove the SD card.  

</div>

</div>