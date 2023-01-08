---
title: Sensorless Homing on a GTR
keywords: 
last_updated: 06/01/2023
summary: "Using and Configuring Sensorless Homing on a GTR"
sidebar: mydoc_sidebar
permalink: gtr_sensorless.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: GTR
stepperSPI: 5
spiInfo: "{ B.3, B.6, G.15 }"
TMC: "{ F.2, C.13, E.0, G.14, G.9, D.3, I.4, F.4, F.6, I.7, F.12 }"
example: "stepper.TmcDiagPins = { F.2, C.13 }"
example2: "stepper.TmcDiagPins = { NoPin, C.13 }"
board: biqugtr_1.0
onboardDrivers: no
GPIO15: B.12
GPIO13: B.15
GPIO12: B.14
GPIO14: B.13
adapterRXTX: WiFi
---

{% include custom/sensorless.html %}

{% include warning.html content="The GTR sensorless homing jumpers don't do anything so if you don't want to use sensorless homing and use normal endstops, you will have to remove the diag pin from your drivers - [Evidence](https://github.com/bigtreetech/BIGTREETECH-GTR-V1.0/issues/12)" %}

{% include custom/sensorless_2.html %}