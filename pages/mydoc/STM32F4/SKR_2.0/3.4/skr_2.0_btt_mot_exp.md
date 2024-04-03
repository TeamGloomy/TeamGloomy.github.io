---
title: Connecting a BTT-MOT-EXP to an SKR v2.0
tags: []
keywords: 
last_updated: 21/12/2021
summary: "How to connect a BTT-MOT-EXP to an SKR v2.0"
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

```text
stepper.numSmartDrivers = 8
```

Please add the following lines to the board.txt.  

```text
stepper.enablePins = { PE_3, PD_6, PD_1, PC_7, PD_13, PC_4, PE_13, PE_12 }
stepper.stepPins = { PE_2, PD_5, PA_15, PD_15, PD_11, PA_7, PE_7, PA_6 }
stepper.directionPins = { PE_1, PD_4, PA_8, PD_14, PD_10, PB_2, PA_4, PA_5 }
stepper.TmcUartPins = { PE_0, PD_3, PD_0, PC_6, PD_12, PE_11, PE_9, PB_0 }
```

## Sensorless Homing

**Supported by only the TMC2209, TMC2226 and TMC5160**
If using sensorless homing/stall detection on the BTT-MOT-EXP with TMC2209 or TMC2226 the following line must be added to the board.txt file. It is not needed with TMC5160.

```text
stepper.TmcDiagPins = { PC_1, PC_3, PC_0, PC_2, PA_0, PE_10, PB_1, PC_5 }
```

Please only include the diag pin numbers where you intend to use sensorless homing on that axis.  
For example, if you only intend to use sensorless homing/stall detection on driver 0 and driver 1, only include PF_2 and PC_13 in your board.txt file.  
For more information about setting up sensorless homing, please read [this](skr_2.0_sensorless.html){:target="_blank"}.  

## Config.g Modification

The three added drivers would become driver 5, driver 6 and driver 7.  
e.g.

```text
M569 P5 S0
M569 P6 S0
M569 P7 S0
```
