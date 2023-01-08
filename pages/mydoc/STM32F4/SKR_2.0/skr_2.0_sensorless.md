---
title: Sensorless Homing on an SKR v2.0
tags: []
keywords: 
last_updated: 06/01/2023
summary: "Using and Configuring Sensorless Homing on an SKR v2.0"
sidebar: mydoc_sidebar
permalink: skr_2.0_sensorless.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: SKR v2.0
stepperSPI: 3
spiInfo: "{ E.15, A.14, E.14 }"
TMC: "{ C.1, C.3, C.0, C.2, A.0 }"
example: "stepper.TmcDiagPins = { C.1, C.3 }"
example2: "stepper.TmcDiagPins = { NoPin, C.3 }"
board: biquskr_2
onboardDrivers: no
---

{% include custom/sensorless.html %}

### Driver Diag Pin

If you want to use sensorless homing, a jumper needs adding under each driver you want to use it for as shown below.

{% include image.html file="skr_2.0_diag.png" alt="SKR v2.0 Diag" caption="SKR v2.0 Sensorless Homing Jumper Locations" %}

{% include custom/sensorless_2.html %}