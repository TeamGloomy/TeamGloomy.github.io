---
title: Sensorless Homing on a Troodon V2 Printer
tags: []
keywords: 
last_updated: 06/01/2023
summary: "Using and Configuring Sensorless Homing on a Troodon V2 Printer"
sidebar: mydoc_sidebar
permalink: troodon_v2_sensorless.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Troodon V2 Printer
stepperSPI: 0
TMC: "{ PF.2, PC.15, PC.14, PC.13, PE.13, PF.9, PF.15 }"
example: "stepper.TmcDiagPins = { PF.2, PC.15 }"
example2: "stepper.TmcDiagPins = { NoPin, PC.15 }"
board: troodon_v2
onboardDrivers: no
---

{% include custom/sensorless.html %}

### Driver Diag Pin

If you want to use sensorless homing, a jumper needs adding next to each appropriate endstop as shown below.

{% include image.html file="octopus_x7_diag.png" alt="Troodon V2 Printer Diag" caption="Troodon V2 Printer Sensorless Homing Jumper Locations" %}

{% include custom/sensorless_2.html %}