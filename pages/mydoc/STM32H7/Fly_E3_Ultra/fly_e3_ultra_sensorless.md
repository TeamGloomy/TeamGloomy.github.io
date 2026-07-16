---
title: Sensorless Homing on a Fly-E3-Ultra H723
tags: []
keywords: 
last_updated: 23/04/2025
summary: "Using and Configuring Sensorless Homing on a Fly-E3-Ultra H723"
permalink: fly_e3_ultra_sensorless.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-E3-Ultra H723
TMC: "{ PD_12, PB_10, PC_4 }"
example: "stepper.TmcDiagPins = { PD_12, PB_10 }"
example2: "stepper.TmcDiagPins = { NoPin, PB_10 }"
onboardDrivers: true
driverType: TMC2209
diagPinInfo: fly_e3_ultra_general.html
---

{% include custom/H7/sensorless.html %}

### Driver Diag Pin

To use sensorless homing, a jumper must be installed on the diag header.

{% include image.html file="fly_e3_pro_diag.png" alt="Fly-E3-Ultra H723 Diag Jumpers" caption="Fly-E3-Ultra H723 Diag Jumper Locations" %}

{% include custom/H7/sensorless_2.html %}
