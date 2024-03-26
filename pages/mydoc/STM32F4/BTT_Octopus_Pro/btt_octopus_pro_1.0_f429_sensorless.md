---
title: Sensorless Homing on a BTT Octopus Pro v1.0 F429 Version
tags: []
keywords: 
last_updated: 06/01/2023
summary: "Using and Configuring Sensorless Homing on a BTT Octopus Pro v1.0 F429 Version"
sidebar: mydoc_sidebar
permalink: btt_octopus_pro_1.0_f429_sensorless.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: BTT Octopus Pro v1.0 F429 Version
stepperSPI: 0
TMC: "{ PG_6, PG_9, PG_10, PG_11, PG_12, PG_13, PG_14, PG_15 }"
example: "stepper.TmcDiagPins = { PG_6, PG_9 }"
example2: "stepper.TmcDiagPins = { NoPin, PG_9 }"
board: biqoctopuspro_1.0
onboardDrivers: no
---

{% include custom/3.4/sensorless.html %}

### Driver Diag Pin

If you want to use sensorless homing, a jumper needs adding next to each appropriate endstop as shown below.

{% include image.html file="btt_octopus_pro_1.0_sensorless.png" alt="BTT Octopus Pro v1.0 Diag" caption="BTT Octopus Pro v1.0 Pro v1.0 F429 Version Sensorless Homing Jumper Locations" %}

{% include custom/3.4/sensorless_2.html %}
