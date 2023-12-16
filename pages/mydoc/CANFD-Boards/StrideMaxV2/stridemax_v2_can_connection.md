---
title: Connecting a StrideMax V2 via CAN-FD
tags: []
keywords: 
last_updated: 16/12/2023
summary: "How to connect a StrideMax V2 via CAN-FD"
sidebar: mydoc_sidebar
permalink: stridemax_v2_can_connection.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The StrideMax V2 can be connected to any of the mainboards produced by Duet3D, an STM32H723, STM32H743 or an STM32F4 with an spican module.  

### How to connect the board

CAN-FD only requires 2 wires to be connected between each board, CAN-H and CAN-L.  
Connect the power cables to your 24/48v PSU.  
The CAN-H connection on the StrideMax V2 should be connected to the CAN-H connection on the mainboard or spican module and the CAN-L connection on the StrideMax V2 should be connected to the CAN-L connection on the mainboard or spican module.  

### Commissioning

All boards in the system must have different CAN addresses. The StrideMax V2 are by default set to a CAN address of 124. Therefore, if you have more than one StrideMax V2 or an RP2040 based toolboard, only one of them must be powered up and connected to the CAN bus. So disconnect power to all but one of them (you can leave the CAN bus connected if it's easier).

#### Checking the toolboard connection is functional

Power up the printer. All the Power LEDs on the StrideMax V2 should illuminate.
You can then check that the toolboard is communicating correctly by sending the following command:  

```text
M115 B124
```

The firmware version running on the StrideMax V2 will then be reported.  

#### Set the CAN address

* Send command M115 B# to verify that the main board can communicate with the StrideMax V2, where # is the original CAN address (normally 124)
* Send command M952 B# A## where ## is the new address you want to use. We suggest you use addresses starting at 30 for Expansion Boards. So for the first StrideMax V2, if your new CAN board was at address 124, send M952 B124 A30.
* Power the system down and up again, or send M999 B124. This will cause the StrideMax V2 to restart with the new address.
* Send command M115 B30 (or whatever address you chose) to verify that you can communicate with the StrideMax V2 at its new address
* You can now power up the next StrideMax V2 or Toolboard and commission it in the same way, choosing a different CAN address for it.

#### Startup Time

It is recommended to add the following to config.g, before any commands that reference any CAN bus connected expansion boards

```text
G4 S2 ; wait for expansion boards to start
```
