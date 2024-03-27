---
title: Sensorless Homing on a Fly-E3-Pro-v3 in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 27/03/2024
summary: "Using and Configuring Sensorless Homing on a Fly-E3-Pro-v3"
sidebar: mydoc_sidebar
permalink: fly_e3_pro_v3_sensorless_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-E3-Pro-v3
stepperSPI: 2
TMC: "{ PA_2, PB_10, PC_4 }"
example: "stepper.TmcDiagPins = { PA_2, PB_10 }"
example2: "stepper.TmcDiagPins = { NoPin, PB_10 }"
board: fly_e3_prov3
onboardDrivers: yes
driverType: TMC2209
diagPinInfo: fly_e3_pro_v3_general.html
---

{% include custom/3.5/sensorless.html %}

### Driver Diag Pin

To use sensorless homing, a jumper must be installed on the diag header.

{% include image.html file="fly_e3_pro_diag.png" alt="Fly-E3-Pro-v3 Diag Jumpers" caption="Fly-E3-Pro-v3 Diag Jumper Locations" %}

{% include custom/3.5/sensorless_2.html %}
