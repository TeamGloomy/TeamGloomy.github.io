---
title: Connecting a BTT-MOT-EXP to an SKR v1.4
tags: []
keywords: 
last_updated: 15/07/2021
summary: "How to connect a BTT-MOT_EXP to an SKR v1.4"
sidebar: mydoc_sidebar
permalink: skr_1.4_btt_mot_exp.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

BigTreeTech released the [BTT-MOT-EXP](https://github.com/bigtreetech/BTT-Expansion-module/tree/master/BTT%20EXP-MOT). It is an adapter that would ordinarily allow 3 more extra drivers to be added to an SKR v1.4. To allow a WiFi or SBC connection, some of those pins required. Luckily though, TeamGloomy have produced an [adapter](https://www.tindie.com/products/pcr/rrf-btt-mot-exp-adapter-for-skr-1x/) to allow the BTT-MOT-EXP to be connected and for 2 out of the 3 driver connections to be used. 

{% include note.html content="This ultimately allows you to run 7 drivers with an SKR v1.4 based system." %}

{% include image.html file="btt_mot_exp_wifi.jpg" alt="BTT-MOT-EXP for WiFi Adapters" caption="BTT-MOT-EXP for WiFi Adapters" %}

{% include image.html file="btt_mot_exp_older_wifi.jpg" alt="BTT-MOT-EXP for older WiFi Adapters" caption="BTT-MOT-EXP for older WiFi Adapters" %}

{% include image.html file="btt_mot_exp_sbc.jpg" alt="BTT-MOT-EXP for SBC Adapters" caption="BTT-MOT-EXP for SBC Adapters" %}

## Connecting the boards

A single 10-pin IDC cable is required between the WiFi/adaptor board and the board connected to the BTT EXP-MOT V1.0.  
12/24v power should be connected to the BTT-MOT-EXP to power the drivers.  
If using the drivers in UART mode, a jumper should be added to the pins underneath the driver as normal.  

## SKR 1.4 Board.txt configuration

Please edit the stepper.numSmartDrivers in the board.txt file to 7 (assuming you have TMC2208, TMC2009, TMC2225 or TMC2226 drivers in all other sockets).  
```
stepper.numSmartDrivers = 7
```

{% include important.html content="The defining of the pins is not required from RepRapFirmware version 3.2 onwards. This information is retained here for reference." %}

Please add the following lines to the board.txt.  
```
stepper.enablePins = { 2.1, 2.8, 0.21, 2.12, 1.16, 1.18, 1.23 }
stepper.stepPins = { 2.2, 0.19, 0.22, 2.13, 1.15, 1.21, 1.20 }
stepper.directionPins = { 2.6, 0.20, 2.11, 0.11, 1.14, 1.19, 1.22 }
stepper.TmcUartPins = { 1.10, 1.9, 1.8, 1.4, 1.1, 3.25, 3.26 }
```

## Config.g Modification

The two added drivers would become driver 6 and driver 7.  
e.g.
```
M569 P5 S0
M569 P6 S0
```