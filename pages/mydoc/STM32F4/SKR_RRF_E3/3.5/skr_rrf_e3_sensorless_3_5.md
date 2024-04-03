---
title: Sensorless Homing on a SKR-RRF-E3 in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 03/04/2024
summary: "Using and Configuring Sensorless Homing on a SKR-RRF-E3"
sidebar: mydoc_sidebar
permalink: skr_rrf_e3_sensorless_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: SKR-RRF-E3
smartdrivers: 4
stepperSPI: 2
TMC: "{ PC_0, PC_1, PC_2, PC_3, PB_11, PB_10 }"
example: "stepper.TmcDiagPins = { PC_0, PC_1 }"
example2: "stepper.TmcDiagPins = { NoPin, PC_1 }"
board: biquskr_rrf_e3_1.1
onboardDrivers: "yes"
driverType: TMC2209
diagPinInfo: skr_rrf_e3_general_3_5.html
---

{% include custom/3.5/sensorless.html %}

### Driver Diag Pin

To use sensorless homing, a jumper must be installed on the diag header.

{% include image.html file="skr_rrf_e3_diag.png" alt="SKR-RRF-E3 Diag Jumpers" caption="SKR-RRF-E3 Diag Jumper Locations" %}

{% include custom/3.5/sensorless_2.html %}
