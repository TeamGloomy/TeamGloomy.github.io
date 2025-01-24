---
title: Sensorless Homing on a Fly-MMU V1.0 H723 in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 15/12/2024
summary: "Using and Configuring Sensorless Homing on a Fly-MMU V1.0 H723"
sidebar: mydoc_sidebar
permalink: fly_mmu_v1_0_h723_sensorless_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-MMU V1.0 H723
stepperSPI: 2
TMC: "{ PC_14,PA_4,PE_8,PE_9 }"
example: "stepper.TmcDiagPins = { PB_7, PC_12 }"
example2: "stepper.TmcDiagPins = { NoPin, PC_12 }"
board: fly_super5_h723
onboardDrivers: false
---

{% include custom/3.5/sensorless.html %}

{% include custom/3.5/sensorless_2.html %}
