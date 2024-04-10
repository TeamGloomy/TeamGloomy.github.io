---
title: Sensorless Homing on a Fly-E3-v2 in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 03/04/2024
summary: "Using and Configuring Sensorless Homing on a Fly-E3-v2"
sidebar: mydoc_sidebar
permalink: fly_e3_v2_sensorless_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-E3-v2
stepperSPI: 2
TMC: "{ PE_7, PE_8, PE_9 }"
example: "stepper.TmcDiagPins = { PE_7, PE_8 }"
example2: "stepper.TmcDiagPins = { NoPin, PE_8 }"
board: fly_e3_v2
onboardDrivers: false
---

{% include important.html content="The Fly-E3-v2 only supports sensorless homing and stall detect on Driver0, Driver1 and Driver2" %}

{% include custom/3.5/sensorless.html %}

{% include custom/3.5/sensorless_2.html %}
