---
title: Sensorless Homing on a Troodon V2 Printer
tags: []
keywords: 
last_updated: 18/01/2023
summary: "Using and Configuring Sensorless Homing on a Troodon V2 Printer"
sidebar: mydoc_sidebar
permalink: troodon_v2_sensorless.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Troodon V2 Printer
stepperSPI: 0
TMC: "{ PF_2, PC_15, PC_14, PC_13, PE_13, PF_9, PF_15 }"
example: "stepper.TmcDiagPins = { PF_2, PC_15 }"
example2: "stepper.TmcDiagPins = { NoPin, PC_15 }"
board: troodon_v2
onboardDrivers: false
---

{% include custom/3.4/sensorless.html %}

### Driver Diag Pin

If you want to use sensorless homing, a jumper needs adding next to each appropriate endstop as shown below.

{% include image.html file="octopus_x7_diag.png" alt="Troodon V2 Printer Diag" caption="Troodon V2 Printer Sensorless Homing Jumper Locations" %}

{% include custom/3.4/sensorless_2.html %}
