---
title: Sensorless Homing on a BTT Octopus v1.1 F429 Version
tags: []
keywords: 
last_updated: 05/10/2022
summary: "Using and Configuring Sensorless Homing on a BTT Octopus v1.1 F429 Version"
sidebar: mydoc_sidebar
permalink: btt_octopus_1.1_f429_sensorless.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: BTT Octopus v1.1 F429 Version
stepperSPI: 0
TMC: "{ G.6, G.9, G.10, G.11, G.12, G.13, G.14, G.15 }"
example: G.6 and G.9
board: biqoctopus_1.1
onboardDrivers: no
---

{% include custom/sensorless.html %}

### Driver Diag Pin

If you want to use sensorless homing, a jumper needs adding next to each appropriate endstop as shown below.

{% include image.html file="btt_octopus_1.1_sensorless.png" alt="BTT Octopus v1.1 Diag" caption="BTT Octopus v1.1 F429 Version Sensorless Homing Jumper Locations" %}

{% include custom/sensorless_2.html %}