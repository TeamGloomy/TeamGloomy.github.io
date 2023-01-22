---
title: Sensorless Homing on a Fly-E3-v2
tags: []
keywords: 
last_updated: 22/01/2023
summary: "Using and Configuring Sensorless Homing on a Fly-E3-v2"
sidebar: mydoc_sidebar
permalink: fly_e3_v2_sensorless.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-E3-v2
stepperSPI: 2
TMC:
example: "stepper.TmcDiagPins = { PE_7, PE_8, PE_9 }"
example2: "stepper.TmcDiagPins = { NoPin, PE_8 }"
board: fly_e3_v2
onboardDrivers: no
---

{% include important.html content="The Fly-E3-v2 only supports sensorless homing and stall detect on Driver0, Driver1 and Driver2" %}

{% include custom/sensorless.html %}

{% include custom/sensorless_2.html %}