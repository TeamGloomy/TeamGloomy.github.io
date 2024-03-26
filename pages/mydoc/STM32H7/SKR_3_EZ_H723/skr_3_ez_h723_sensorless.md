---
title: Sensorless Homing on an SKR3EZ H723
tags: []
keywords: 
last_updated: 04/06/2023
summary: "Using and Configuring Sensorless Homing on an SKR3EZ H723"
sidebar: mydoc_sidebar
permalink: skr_3_ez_h723_sensorless.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: SKR3EZ H723
stepperSPI: 3
spiInfo: "{ PE_14, PE_15, PE_13 }"
TMC: "{ PC_1, PC_3, PC_0, PC_2, PA_0 }"
example: "stepper.TmcDiagPins = { PC_1, PC_3 }"
example2: "stepper.TmcDiagPins = { NoPin, PC_3 }"
board: biquskr_3_ez_h723
onboardDrivers: no
---

{% include custom/3.4/sensorless.html %}

### Driver Diag Pin

If you want to use sensorless homing, a jumper needs adding under each driver you want to use it for as shown below.

{% include image.html file="skr3_diag.png" alt="SKR3 Diag" caption="SKR3 Sensorless Homing Jumper Locations" %}

{% include custom/3.4/sensorless_2.html %}
