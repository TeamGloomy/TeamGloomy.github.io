---
title: AFC-Lite V1.0 H723 CAN-FD Information in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 23/05/2025
summary: "How to connect the AFC-Lite V1.0 H723 to a CAN-FD Mainboard"
sidebar: mydoc_sidebar
permalink: afc_lite_v1_0_h723_canfd_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The AFC-Lite V1.0 H723 can be connected to any Duet 3 mainboards produced by Duet3D (or cloned by Fysetc) as well as another STM32H743 or STM32H723 board. This includes, but is not limited to:

* Duet 3 6HC
* Duet 3 6XD
* Duet 3 Mini 5+
* Fysetc Big Dipper
* STM32H723 board
* STM32H743 board
* STM32F4 board with an spi2can module

### How to connect the board

CAN-FD only requires 2 wires to be connected between each board, CAN-H and CAN-L.  
We recommend using stranded twisted wire pairs, such as those found in ethernet patch cables. If using a board such as the Fly-RRF-36 that comes supplied with a cable, we suggest twisting the CAN wires together.  

The yellow wire on the CAN-FD cable is the CAN-H wire and the white is the CAN-L wire. CAN-H is connected to CAN-H and CAN-L is connected to CAN-L on the mainboard.  

Please ensure that you have the 120 ohm jumper installed if you are using this just with a mainboard or if it is the last expansion board on the CANbus.  

The default CAN address is set by the firmware as 119.
