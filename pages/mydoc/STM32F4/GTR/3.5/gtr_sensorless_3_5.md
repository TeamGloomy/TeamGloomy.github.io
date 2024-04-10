---
title: Sensorless Homing on a GTR in RRF 3.5.0 Onwards
keywords: 
last_updated: 03/04/2024
summary: "Using and Configuring Sensorless Homing on a GTR"
sidebar: mydoc_sidebar
permalink: gtr_sensorless_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: GTR
stepperSPI: 5
spiInfo: "{ PB_3, PB_6, PG_15 }"
TMC: "{ PF_2, PC_13, PE_0, PG_14, PG_9, PD_3, PI_4, PF_4, PF_6, PI_7, PF_12 }"
example: "stepper.TmcDiagPins = { PF_2, PC_13 }"
example2: "stepper.TmcDiagPins = { NoPin, PC_13 }"
board: biqugtr_1.0
onboardDrivers: false
GPIO15: PB_12
GPIO13: PB_15
GPIO12: PB_14
GPIO14: PB_13
adapterRXTX: WiFi
---

{% include custom/3.5/sensorless.html %}

{% include warning.html content="The GTR sensorless homing jumpers don't do anything so if you don't want to use sensorless homing and use normal endstops, you will have to remove the diag pin from your drivers - [Evidence](https://github.com/bigtreetech/BIGTREETECH-GTR-V1.0/issues/12)" %}

{% include custom/3.5/sensorless_2.html %}
