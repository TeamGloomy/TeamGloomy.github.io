---
title: Fly-Super5Pro H723 CAN-FD Information in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 10/04/2024
summary: "How to connect the Fly-Super5Pro H723 to a CAN-FD Expansion board"
sidebar: mydoc_sidebar
permalink: fly_super5pro_h723_canfd_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The Fly-Super5Pro H723 can be connected to any of the CAN-FD expansion boards produced by Duet3D (or cloned by Fysetc) as well as another STM32H743 or STM32H723 board running in expansion board mode. This includes, but is not limited to:

* Duet 3 6HC (in expansion board mode - M954)
* Duet 3 6XD (in expansion board mode - M954)
* Duet 3 Mini 5+ (in expansion board mode - M954)
* Fysetc Big Dipper (in expansion board mode - M954)
* Another STM32H723 board (in expansion board mode - M954)
* Another STM32H743 board (in expansion board mode - M954)
* Duet 3 1XD
* Duet 3 3HC
* Duet 3 1HCL
* Duet 3 1LC
* Duet 3 Distribution Board
* Sammy-C21

### How to connect the board

CAN-FD only requires 2 wires to be connected between each board, CAN-H and CAN-L.  
We recommend using stranded twisted wire pairs, such as those found in ethernet patch cables. If using a board such as the Fly-RRF-36 that comes supplied with a cable, we suggest twisting the CAN wires together.  

Using the Fly-RRF-36 as example (and the image below), the yellow wire on the CAN-FD cable is the CAN-H wire and the white is the CAN-L wire. They should be connected to the two pins nearest to the WiFi module on the Fly-Super5Pro H723. CAN-H is connected to CAN-H and CAN-L is connected to CAN-L.  

{% include image.html file="fly_super5pro_can.png" url="<https://teamgloomy.github.io/images/fly_super5pro_can.png>" alt="Toolboard CAN-FD wiring" caption="Toolboard CAN-FD wiring" %}

Please ensure that you have the two jumpers installed as shown below if you are using this board as a mainboard or if it is the last expansion board on the CANbus.  

{% include image.html file="fly_super5pro_can_resistor.png" url="<https://teamgloomy.github.io/images/fly_super5pro_can_resistor.png>" alt="Fly-Super5Pro H723 CAN-FD 120ohm Resistors" caption="Fly-Super5Pro H723 CAN-FD 120ohm Resistors" %}
