---
title: SKR3EZ H743 CAN-FD Information
tags: []
keywords: 
last_updated: 29/11/2022
summary: "How to connect the SKR3EZ H743 to a CAN-FD Expansion board"
sidebar: mydoc_sidebar
permalink: skr_3_ez_h743_canfd.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The SKR3EZ H743 can be connected to any of the CAN-FD expansion boards produced by Duet3D (or cloned by Fysetc) as well as another STM32H743 or STM32H723 board running in expansion board mode. This includes, but is not limited to:

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

Using the Duet 3 1LC toolboard as example (and the image below), the red wire on the CAN-FD cable is the CAN-H wire and the black is the CAN-L wire. They should be connected to the middle two connections on the CAN-FD connector on the SKR3 EZ H743. CAN-H is connected to CAN-H and CAN-L is connected to CAN-L.  
Although the SKR3 EZ H743 also provides ground and 24v on that same 6 pin JST connector, we recommend wiring the toolboard directly to the PSU.

{% include image.html file="toolboard_canfd.png" url="<https://teamgloomy.github.io/images/toolboard_canfd.png>" alt="Toolboard CAN-FD wiring" caption="Toolboard CAN-FD wiring" %}
