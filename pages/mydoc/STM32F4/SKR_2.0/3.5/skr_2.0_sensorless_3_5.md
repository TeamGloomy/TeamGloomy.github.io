---
title: Sensorless Homing on an SKR v2.0 in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 03/04/2024
summary: "Using and Configuring Sensorless Homing on an SKR v2.0"
sidebar: mydoc_sidebar
permalink: skr_2.0_sensorless_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: SKR v2.0
stepperSPI: 3
spiInfo: "{ PE_15, PA_14, PE_14 }"
TMC: "{ PC_1, PC_3, PC_0, PC_2, PA_0 }"
example: "stepper.TmcDiagPins = { PC_1, PC_3 }"
example2: "stepper.TmcDiagPins = { NoPin, PC_3 }"
board: biquskr_2
onboardDrivers: false
---

{% include custom/3.5/sensorless.html %}

### Driver Diag Pin

If you want to use sensorless homing, a jumper needs adding under each driver you want to use it for as shown below.

{% include image.html file="skr_2.0_diag.png" alt="SKR v2.0 Diag" caption="SKR v2.0 Sensorless Homing Jumper Locations" %}

{% include custom/3.5/sensorless_2.html %}
