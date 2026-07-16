---
title: Sensorless Homing on an SKR3 H743 Version
tags: []
keywords: 
last_updated: 10/04/2024
summary: "Using and Configuring Sensorless Homing on an SKR3 H743 Version"
permalink: skr_3_h743_sensorless.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: SKR3 H743
TMC: "{ PC_1, PC_3, PC_0, PC_2, PA_0 }"
example: "stepper.TmcDiagPins = { PC_1, PC_3 }"
example2: "stepper.TmcDiagPins = { NoPin, PC_3 }"
onboardDrivers: false
---

{% include custom/H7/sensorless.html %}

### Driver Diag Pin

If you want to use sensorless homing, a jumper needs adding under each driver you want to use it for as shown below.

{% include image.html file="skr3_diag.png" alt="SKR3 Diag" caption="SKR3 Sensorless Homing Jumper Locations" %}

{% include custom/H7/sensorless_2.html %}
