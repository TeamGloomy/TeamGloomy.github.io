---
title: Sensorless Homing on a Fly-Super8 in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 03/04/2024
summary: "Using and Configuring Sensorless Homing on a Fly-Super8"
sidebar: mydoc_sidebar
permalink: fly_super8_sensorless_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-Super8
stepperSPI: 2
TMC: "{ PG_12, PG_11, PG_10, PG_9, PD_7, PD_6, PA_8, PF_3 }"
example: "stepper.TmcDiagPins = { PG_12, PG_11 }"
example2: "stepper.TmcDiagPins = { NoPin, PG_11 }"
board: fly_super8
onboardDrivers: false
---

{% include custom/3.5/sensorless.html %}

{% include custom/3.5/sensorless_2.html %}
