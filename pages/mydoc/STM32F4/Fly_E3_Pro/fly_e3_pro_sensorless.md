---
title: Sensorless Homing on a Fly-E3-Pro
tags: []
keywords: 
last_updated: 05/10/2022
summary: "Using and Configuring Sensorless Homing on a Fly-E3-Pro"
sidebar: mydoc_sidebar
permalink: fly_e3_pro_sensorless.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-E3-Pro
smartdrivers: 5
stepperSPI: 2
TMC: "{ A.2, A.1, C.5 }"
example: A.2 and A.1
board: fly_e3_pro
onboardDrivers: yes
driverType: TMC2209
diagPinInfo: fly_e3_pro_general.html
---

{% include custom/sensorless.html %}

### Driver Diag Pin

To use sensorless homing, a jumper must be installed on the diag header.

{% include image.html file="fly_e3_pro_diag.png" alt="Fly-E3-Pro Diag Jumpers" caption="Fly-E3-Pro Diag Jumper Locations" %}

{% include custom/sensorless_2.html %}