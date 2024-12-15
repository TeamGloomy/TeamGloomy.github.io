---
title: Sensorless Homing on a BTT Scylla V1 in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 15/12/2024
summary: "Using and Configuring Sensorless Homing on a BTT Scylla V1"
sidebar: mydoc_sidebar
permalink: btt_scylla_v1_h723_sensorless_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: BTT Scylla V1
stepperSPI: 3
TMC: "{ PG_6, PG_9, PG_10, PG_11, PG_12, PG_13, PG_14, PG_15 }"
example: "stepper.TmcDiagPins = { PG_6, PG_9 }"
example2: "stepper.TmcDiagPins = { NoPin, PG_9 }"
board: kraken_h723
onboardDrivers: true
driverType: 2160
---

{% include custom/3.5/sensorless_5160.html %}
