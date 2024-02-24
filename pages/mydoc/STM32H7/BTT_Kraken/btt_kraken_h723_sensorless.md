---
title: Sensorless Homing on a BTT Kraken
tags: []
keywords: 
last_updated: 24/02/2024
summary: "Using and Configuring Sensorless Homing on a BTT Kraken"
sidebar: mydoc_sidebar
permalink: btt_kraken_h723_sensorless.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: BTT Kraken
stepperSPI: 3
TMC: "{ PG_6, PG_9, PG_10, PG_11, PG_12, PG_13, PG_14, PG_15 }"
example: "stepper.TmcDiagPins = { PG_6, PG_9 }"
example2: "stepper.TmcDiagPins = { NoPin, PG_9 }"
board: biqukraken_h723
onboardDrivers: "yes"
driverType: 2160
---

{% include custom/sensorless_5160.html %}
