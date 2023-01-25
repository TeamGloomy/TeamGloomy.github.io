---
title: Sensorless Homing on a Fly-Super8Pro H723
tags: []
keywords: 
last_updated: 25/01/2023
summary: "Using and Configuring Sensorless Homing on a Fly-Super8Pro H723"
sidebar: mydoc_sidebar
permalink: fly_super8pro_h723_sensorless.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-Super8Pro H723
stepperSPI: 2
TMC: "{ PG_12, PG_11, PG_10, PG_9, PD_7, PD_6, PA_8, PF_3 }"
example: "stepper.TmcDiagPins = { PG_12, PG_11 }"
example2: "stepper.TmcDiagPins = { NoPin, PG_11 }"
board: fly_super8_pro_h723
onboardDrivers: no
---

{% include custom/sensorless.html %}

{% include custom/sensorless_2.html %}