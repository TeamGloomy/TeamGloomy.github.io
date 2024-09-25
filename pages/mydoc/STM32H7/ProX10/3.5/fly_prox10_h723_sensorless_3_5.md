---
title: Sensorless Homing on a Fly-ProX10 H723 in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 10/04/2024
summary: "Using and Configuring Sensorless Homing on a Fly-ProX10 H723"
sidebar: mydoc_sidebar
permalink: fly_prox10_h723_sensorless_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-ProX10 H723
stepperSPI: 2
TMC: "{ PG_8, PG_7, PG_6, PG_5, PG_4, PG_3, PG_2, PB_1, PF_9, PC_6 }"
example: "stepper.TmcDiagPins = { PG_8, PG_7 }"
example2: "stepper.TmcDiagPins = { NoPin, PG_7 }"
board: fly_prox10_h723
onboardDrivers: false
---

{% include custom/3.5/sensorless.html %}

{% include custom/3.5/sensorless_2.html %}
