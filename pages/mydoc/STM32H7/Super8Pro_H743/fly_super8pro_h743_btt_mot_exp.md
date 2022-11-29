---
title: Connecting a BTT-MOT-EXP to a Fly-Super8Pro H743
tags: []
keywords: 
last_updated: 29/11/2022
summary: "How to connect a BTT-MOT-EXP to a Fly-Super8Pro H743"
sidebar: mydoc_sidebar
permalink: fly_super8pro_h743_btt_mot_exp.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

BigTreeTech released the [BTT-MOT-EXP](https://github.com/bigtreetech/BTT-Expansion-module/tree/master/BTT%20EXP-MOT). It is an adapter that would ordinarily allow 3 more extra drivers to be added to an Fly-Super8Pro H743. 

## Connecting the boards

Connect two 10-pin IDC cables between EXP1 and EXP2 on the Fly-Super8Pro H743 and EXP1 and EXP2 on the BTT EXP-MOT V1.0.  
12/24v power should be connected to the BTT-MOT-EXP to power the drivers.  
If using the drivers in UART mode, a jumper should be added to the pins underneath the driver as normal.  

## Fly-Super8Pro H743 Board.txt configuration

Please edit the stepper.numSmartDrivers in the board.txt file to 11 (assuming you have TMC2208, TMC2009, TMC2225, TMC2226 or TMC5160 drivers in all other sockets).  
```
stepper.numSmartDrivers = 11
```

Please add the following lines to the board.txt.  
```
stepper.enablePins = { F.11, F.14, G.1, E.9, F.2, C.15, G.4, G.7, G.15, G.13, G.14}
stepper.stepPins = { E.2, E.3, E.4, E.14, E.15, E.1, E.0, E.6, A.7, B.7, A.6 }
stepper.directionPins = { C.5, F.13, G.0, E.8, E.11, F.0, G.3, G.6, B.6, A.4, A.5 }
stepper.TmcUartPins = { C.4, F.12, F.15, E.7, E.10, F.1, G.2, G.5, C.13, G.8, E.13 }
```

Thanks to @o_lampe for the above.

## Sensorless Homing

**Supported by only the TMC2209, TMC2226 and TMC5160**
If using sensorless homing/stall detection on the BTT-MOT-EXP with TMC2209 or TMC2226 the following line must be added to the board.txt file. It is not needed with TMC5160.
```
stepper.TmcDiagPins = { G.12, G.11, G.10, G.9, D.7, D.6, A.8, F.3, C.14, B.2, E.12 }
```
Please only include the diag pin numbers where you intend to use sensorless homing on that axis.  
For example, if you only intend to use sensorless homing/stall detection on driver 0 and driver 1, only include G.12 and G.11 in your board.txt file.  
For more information about setting up sensorless homing, please read [this](fly_super8pro_h743_sensorless.html){:target="_blank"}.  

## Config.g Modification

The three added drivers would become driver 8, driver 9 and driver 10.  
e.g.
```
M569 P8 S0
M569 P9 S0
M569 P10 S0
```