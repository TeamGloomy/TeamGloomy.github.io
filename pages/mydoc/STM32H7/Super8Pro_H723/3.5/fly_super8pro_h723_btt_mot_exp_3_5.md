---
title: Connecting a BTT-MOT-EXP to a Fly-Super8Pro H723 in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 10/04/2024
summary: "How to connect a BTT-MOT-EXP to a Fly-Super8Pro H723"
sidebar: mydoc_sidebar
permalink: fly_super8pro_h723_btt_mot_exp_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

BigTreeTech released the [BTT-MOT-EXP](https://github.com/bigtreetech/BTT-Expansion-module/tree/master/BTT%20EXP-MOT). It is an adapter that would ordinarily allow 3 more extra drivers to be added to an Fly-Super8Pro H723.  

## Connecting the boards

Connect two 10-pin IDC cables between EXP1 and EXP2 on the Fly-Super8Pro H723 and EXP1 and EXP2 on the BTT EXP-MOT V1.0.  
12/24v power should be connected to the BTT-MOT-EXP to power the drivers.  
If using the drivers in UART mode, a jumper should be added to the pins underneath the driver as normal.  

## Fly-Super8Pro H723 Board.txt configuration

Please edit the stepper.numSmartDrivers in the board.txt file to 11 (assuming you have TMC2208, TMC2009, TMC2225, TMC2226 or TMC5160 drivers in all other sockets).  

```text
stepper.numSmartDrivers = 11
```

Please add the following lines to the board.txt.  

```text
stepper.enablePins = { PF_11, PF_14, PG_1, PE_9, PF_2, PC_15, PG_4, PG_7, PG_15, PG_13, PG_14}
stepper.stepPins = { PE_2, PE_3, PE_4, PE_14, PE_15, PE_1, PE_0, PE_6, PA_7, PB_7, PA_6 }
stepper.directionPins = { PC_5, PF_13, PG_0, PE_8, PE_11, PF_0, PG_3, PG_6, PB_6, PA_4, PA_5 }
stepper.TmcUartPins = { PC_4, PF_12, PF_15, PE_7, PE_10, PF_1, PG_2, PG_5, PC_13, PG_8, PE_13 }
```

Thanks to @o_lampe for the above.

## Sensorless Homing

**Supported by only the TMC2209, TMC2226 and TMC5160**
If using sensorless homing/stall detection on the BTT-MOT-EXP with TMC2209 or TMC2226 the following line must be added to the board.txt file. It is not needed with TMC5160.

```text
stepper.TmcDiagPins = { PG_12, PG_11, PG_10, PG_9, PD_7, PD_6, PA_8, PF_3, PC_14, PB_2, PE_12 }
```

Please only include the diag pin numbers where you intend to use sensorless homing on that axis.  
For example, if you only intend to use sensorless homing/stall detection on driver 0 and driver 1, only include PG_12 and PG_11 in your board.txt file.  
For more information about setting up sensorless homing, please read [this](fly_super8pro_h723_sensorless_3_5.html){:target="_blank"}.  

## Config.g Modification

The three added drivers would become driver 8, driver 9 and driver 10.  
e.g.

```text
M569 P8 S0
M569 P9 S0
M569 P10 S0
```
