---
title: Sensorless Homing on a BTT Octopus Pro v1.1
tags: []
keywords: 
last_updated: 24/02/2024
summary: "Using and Configuring Sensorless Homing on a BTT Octopus Pro v1.1"
sidebar: mydoc_sidebar
permalink: btt_octopus_pro_1.1_h723_sensorless.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: BTT Octopus Pro v1.1
stepperSPI: 0
TMC: "{ PG_6, PG_9, PG_10, PG_11, PG_12, PG_13, PG_14, PG_15 }"
example: "stepper.TmcDiagPins = { PG_6, PG_9 }"
example2: "stepper.TmcDiagPins = { NoPin, PG_9 }"
board: biquoctopuspro_V1.1_h723
onboardDrivers: false
---

{% include custom/3.4/sensorless.html %}

### Driver Diag Pin

If you want to use sensorless homing, using TMC2209 or TMC2226, a jumper needs adding next to each appropriate endstop as shown below.  

{% include image.html file="btt_octopus_pro_1.0_sensorless.png" alt="BTT Octopus Pro v1.1 Diag" caption="BTT Octopus Pro v1.0 Pro v1.1 Sensorless Homing Jumper Locations" %}

{% include custom/3.4/sensorless_2.html %}
