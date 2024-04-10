---
title: Sensorless Homing on a Fly-Super5Pro H723 in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 10/04/2024
summary: "Using and Configuring Sensorless Homing on a Fly-Super5Pro H723"
sidebar: mydoc_sidebar
permalink: fly_super5pro_h723_sensorless_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-Super5Pro H723
stepperSPI: 2
TMC: "{ PB_7, PC_7, PC_6, PC_13, PC_14, PC_15 }"
example: "stepper.TmcDiagPins = { PB_7, PC_7 }"
example2: "stepper.TmcDiagPins = { NoPin, PC_7 }"
board: fly_super5_h723
onboardDrivers: false
---

{% include custom/3.5/sensorless.html %}

{% include custom/3.5/sensorless_2.html %}
