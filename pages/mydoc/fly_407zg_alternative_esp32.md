---
title: Alternative connection of an ESP32 to a Fly-407ZG
tags: []
keywords: 
last_updated: 22/07/2021
summary: "Alternative connection of an ESP32 to a Fly-407ZG to allow SPI controlled drivers to be installed"
sidebar: mydoc_sidebar
permalink: fly_407zg_alternative_esp32.html
folder: mydoc
comments: false
toc: false
datatable: true 
---

# Overview

The below describes an alternative method of connecting an ESP32 to the Fly-407ZG.
This alternative modification provides 2 advantages.
    * SPI controlled drivers (TMC5160) can be used
    * Both RRF updating of the ESP32 and serial displays can be used at the same time  
This will involve soldering some cables to the board.  
  
## BOM

* 1 x ESP32 adapter (any of the [3 types](/adapters_esp32.html) will be suitable)
* Some cable

## Connecting the Adapter

This example uses the Fly WiFi Adapter.  

### Cables to solder to the Fly-407ZG

11 cables are to be soldered to the board. 6 of these are on the onboard ESP pads, 3 to the eeprom and MAX6675 connections and 2 to EXP1.  

Connect the 6 cables to the Fly-407ZG as shown below

{% include image.html file="fly_407zg_method2_1.png" alt="Fly-407ZG" caption="Fly-407ZG 6 cables" %}

Connect the 3 cables to the Fly-407ZG as shown below

{% include image.html file="fly_407zg_method2_2.png" alt="Fly-407ZG" caption="Fly-407ZG 3 cables" %}

Connect the 2 cables to the Fly-407ZG as shown below

{% include image.html file="fly_407zg_method2_3.png" alt="Fly-407ZG" caption="Fly-407ZG 2 cables" %}

### Cables to solder to the Adapter

The 11 cables soldered to the Fly-407ZG then need to be attached to the adapter.  
2 of the 11 cables should be attached as shown below. The RX cable from the Fly-407ZG should be connected to the TX pad on the adapter and the TX cable from the Fly-407ZG should be connected to the RX pad on the adapter.  

{% include image.html file="fly_407zg_method1_3.png" alt="Fly-407ZG" caption="Adapter cables 1" %}

The remainder of the cables are to be connected to the adapter as shown below.  

{% include image.html file="fly_407zg_alt_esp32.png" alt="Fly-407ZG" caption="Adapter cables remainder" %}

### Board.txt Changes

The following changes should be made to the board.txt file

```
//ESP32 Settings
SPI2.pins={ B.3, B.4, B.5 }
8266wifi.espDataReadyPin = B.7
8266wifi.lpcTfrReadyPin = B.6
8266wifi.espResetPin = A.4
8266wifi.csPin = G.15
8266wifi.spiChannel=2
serial.aux.rxTxPins = { A.10, A.9 }
8266wifi.serialRxTxPins = { G.9, G.14 }
```

</div>

</div>