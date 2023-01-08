---
title: Sensorless Homing on a Fly-Super8
tags: []
keywords: 
last_updated: 06/01/2023
summary: "Using and Configuring Sensorless Homing on a Fly-Super8"
sidebar: mydoc_sidebar
permalink: fly_super8_sensorless.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-Super8
stepperSPI: 2
TMC: "{ G.12, G.11, G.10, G.9, D.7, D.6, A.8, F.3 }"
example: "stepper.TmcDiagPins = { G.12, G.11 }"
example2: "stepper.TmcDiagPins = { NoPin, G.11 }"
board: fly_super8
onboardDrivers: no
---

{% include custom/sensorless.html %}

{% include custom/sensorless_2.html %}