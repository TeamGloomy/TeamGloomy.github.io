---
title: Sensorless Homing on a Fysetc Spider H723 in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 14/03/2026
summary: "Using and Configuring Sensorless Homing on a Fysetc Spider H723"
sidebar: mydoc_sidebar
permalink: fysetc_spider_h723_sensorless_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fysetc Spider H723
stepperSPI: 6
TMC: "{ PB_14, PB_13, PA_0, PA_1, PA_2, PA_3 }"
example: "stepper.TmcDiagPins = { PB_14, PB_13 }"
example2: "stepper.TmcDiagPins = { NoPin, PB_13 }"
board: fysetc_spider_h723
onboardDrivers: false
---

{% include custom/3.5/sensorless.html %}

{% include custom/3.5/sensorless_2.html %}
