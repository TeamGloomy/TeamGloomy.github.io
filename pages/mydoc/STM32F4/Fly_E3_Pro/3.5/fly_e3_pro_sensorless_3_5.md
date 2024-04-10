---
title: Sensorless Homing on a Fly-E3-Pro in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 02/04/2024
summary: "Using and Configuring Sensorless Homing on a Fly-E3-Pro"
sidebar: mydoc_sidebar
permalink: fly_e3_pro_sensorless_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-E3-Pro
smartdrivers: 5
stepperSPI: 2
TMC: "{ PA_2, PA_1, PC_5 }"
example: "stepper.TmcDiagPins = { PA_2, PA_1 }"
example2: "stepper.TmcDiagPins = { NoPin, PA_1 }"
board: fly_e3_pro
onboardDrivers: true
driverType: TMC2209
diagPinInfo: fly_e3_pro_general_3_5.html
---

{% include custom/3.5/sensorless.html %}

### Driver Diag Pin

To use sensorless homing, a jumper must be installed on the diag header.

{% include image.html file="fly_e3_pro_diag.png" alt="Fly-E3-Pro Diag Jumpers" caption="Fly-E3-Pro Diag Jumper Locations" %}

{% include custom/3.5/sensorless_2.html %}
