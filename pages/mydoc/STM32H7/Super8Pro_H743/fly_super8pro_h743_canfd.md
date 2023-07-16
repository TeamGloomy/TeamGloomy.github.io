---
title: Fly-Super8Pro H743 CAN-FD Information
tags: []
keywords: 
last_updated: 29/11/2022
summary: "How to connect the Fly-Super8Pro H743 to a CAN-FD Expansion board"
sidebar: mydoc_sidebar
permalink: fly_super8pro_h743_canfd.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The Fly-Super8Pro H743 can be connected to any of the CAN-FD expansion boards produced by Duet3D (or cloned by Fysetc) as well as another STM32H743 or STM32H723 board running in expansion board mode. This includes, but is not limited to:
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
We recommend using stranded twisted wire pairs, such as those found in ethernet patch cables.

Using the Fly-RRF-36 as example (and the image below), the yellow wire on the CAN-FD cable is the CAN-H wire and the white is the CAN-L wire. They should be connected to the two pins nearest to the WiFi module on the Fly-Super8Pro H723. CAN-H is connected to CAN-H and CAN-L is connected to CAN-L.  

{% include image.html file="fly_super8pro_can.png" url="https://teamgloomy.github.io/images/fly_super8pro_can.png" alt="Toolboard CAN-FD wiring" caption="Toolboard CAN-FD wiring" %}