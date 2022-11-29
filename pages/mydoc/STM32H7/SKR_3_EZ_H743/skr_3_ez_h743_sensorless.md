---
title: Sensorless Homing on an SKR3EZ H743
tags: []
keywords: 
last_updated: 29/11/2022
summary: "Using and Configuring Sensorless Homing on an SKR3EZ H743"
sidebar: mydoc_sidebar
permalink: skr_3_ez_h743_sensorless.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: SKR3EZ H743
stepperSPI: 3
spiInfo: "{ E.14, E.15, E.13 }"
TMC: "{ C.1, C.3, C.0, C.2, A.0 }"
example: C.1 and C.3
board: biquskr_3_ez
onboardDrivers: no
---

{% include custom/sensorless.html %}

### Driver Diag Pin

If you want to use sensorless homing, a jumper needs adding under each driver you want to use it for as shown below.

{% include image.html file="skr3_diag.png" alt="SKR3 Diag" caption="SKR3 Sensorless Homing Jumper Locations" %}

{% include custom/sensorless_2.html %}