---
title: Connecting a BTT-MOT-EXP to an SKR v2.0
tags: []
keywords: 
last_updated: 23/05/2021
summary: "Connecting a BTT-MOT-EXP to an SKR v2.0"
sidebar: mydoc_sidebar
permalink: skr_2.0_btt_mot_exp.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

BigTreeTech released the [BTT-MOT-EXP](https://github.com/bigtreetech/BTT-Expansion-module/tree/master/BTT%20EXP-MOT). It is an adapter that would ordinarily allow 3 more extra drivers to be added to an SKR v2.0. 

## Connecting the boards

Connect two 10-pin IDC cables between EXP1 and EXP2 on the SKR v2.0 and EXP1 and EXP2 on the BTT EXP-MOT V1.0.  
12/24v power should be connected to the BTT-MOT-EXP to power the drivers.  
If using the drivers in UART mode, a jumper should be added to the pins underneath the driver as normal.  

## SKR v2.0 Board.txt configuration

Please edit the stepper.numSmartDrivers in the board.txt file to 8 (assuming you have TMC2208, TMC2009, TMC2225, TMC2226 or TMC5160 drivers in all other sockets).  
```
stepper.numSmartDrivers = 8
```

Please add the following lines to the board.txt.  
```
stepper.enablePins = {E.3, D.6, D.1, C.7, D.13, C.4, E.13, E.12}
stepper.stepPins = {E.2, D.5, A.15, D.15, D.11, A.7, E.7, A.6}
stepper.directionPins = {E.1, D.4, A.8, D.14, D.10, B.2, A.4, A.5}
stepper.TmcUartPins = {E.0, D.3, D.0, C.6, D.12, E.11, B.9, B.0}
```

## Sensorless Homing

**Supported by only the TMC2209, TMC2226 and TMC5160**
If using sensorless homing/stall detection on the BTT-MOT-EXP with TMC2209 or TMC2226 the following line must be added to the board.txt file. It is not needed with TMC5160.
```
stepper.TmcDiagPins = {C.1, C.3, C.0, C.2, A.0, E.10, B.1, C.5}
```
Please only include the diag pin numbers where you intend to use sensorless homing on that axis.  
For example, if you only intend to use sensorless homing/stall detection on driver 0 and driver 1, only include F.2 and C.13 in your board.txt file.  
For more information about setting up sensorless homing, please read [this](sensorless.html){:target="_blank"}.  

## Config.g Modification

The three added drivers would become driver 5, driver 6 and driver 7.  
e.g.
```
M569 P5 S0
M569 P6 S0
M569 P7 S0
```