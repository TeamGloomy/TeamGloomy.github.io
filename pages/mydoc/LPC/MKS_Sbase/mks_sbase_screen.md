---
title: Connecting a screen to an MKS Sbase v1.3
tags: []
keywords: 
last_updated: 22/12/2021
summary: "How to connect a serial screen to an MKS Sbase v1.3"
sidebar: mydoc_sidebar
permalink: mks_sbase_screen.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

Only screens that use a serial connection can be connected to the MKS Sbase v1.3

### Board.txt Preparation

To enable a screen to function correctly, the following lines need to be added to the board.txt file.  

```text
serial.aux.rxTxPins = { 0.3, 0.2 }
```

{% include important.html content="A screen can't be used in conjunction with upgrading the WiFi adapter via DWC as there is only one serial connection available." %}

<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a class="noCrossRef" href="#paneldue" data-toggle="tab">PanelDue</a></li>
    <li><a class="noCrossRef" href="#tft" data-toggle="tab">TFT</a></li>
    <li><a class="noCrossRef" href="#fly" data-toggle="tab">Fly Screen</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="paneldue" markdown="1">

Use pins +5V, GND, TX and RX on the AUX-1 header. These should be connected to +5V, GND, TX and RX on the PanelDue, making sure that TX and RX are swapped.

In config.g, the following command should be added.  

```text
M575 P1 S1 B57600
```

From RepRapFirmware 3.2, it is possible to update the firmware on the PanelDue directly from the board. Please see [here](https://docs.duet3d.com/en/User_manual/RepRapFirmware/Updating_PanelDue#firmware-update-via-duet) for further instructions.  

</div>

<div role="tabpanel" class="tab-pane" id="tft" markdown="1">

Use pins +5V, GND, TX and RX  on the AUX-1 header. These should be connected to +5V, GND, TX and RX on the TFT, making sure that TX and RX are swapped.

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

Use pins +5V, GND, TX and RX  on the AUX-1 header. These should be connected to +5V, GND, TX and RX on the Fly Screen, making sure that TX and RX are swapped.

In config.g, the following command should be added.  

```text
M575 P1 S0 B57600
```  

The latest version of the screen firmware can be found [here](https://github.com/Mellow-3D/FLY-Screen-RepRap/releases).  
To update the screen, put the update.img onto a blank SD card. Put the SD card into the screen and power it up. The update will then be flashed automatically. Once finished, power down the screen and remove the SD card.  

</div>

</div>
