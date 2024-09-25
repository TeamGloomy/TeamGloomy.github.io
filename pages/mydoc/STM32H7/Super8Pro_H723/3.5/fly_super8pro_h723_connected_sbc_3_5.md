---
title: Connecting an Fly-Super8Pro H723 via SBC in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 07/04/2024
summary: "How to connect to an Fly-Super8Pro H723 via SBC"
sidebar: mydoc_sidebar
permalink: fly_super8pro_h723_connected_sbc_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-Super8Pro H723
mcu: STM32H723
firmware: firmware_super8pro_h723.bin
schematic: https://github.com/Mellow-3D/Fly-Super8Pro/blob/main/Hardware/Super8Pro_Schematic.pdf
BCM11: PB_13
BCM9: PB_14
BCM10: PB_15
BCM8: PA_4
BCM25: PG_15
heat: "{ adc0, adc1, adc2 }"
diagnostics: ""
stepperSPI: 0
spiInfo: "{ PE_15, PA_14, PE_14 }"
TMC: "{ PC_1, PC_3, PC_0, PC_2, PA_0 }"
example: PC_1 and PC_3
board: biquskr_2
sensorless: "fly_super8pro_h723_sensorless_3_5.html"
firmwareFlash: "fly.cur"
rrfboot: custom/3.5/rrfboot/rrfboot_fly_super8pro_h723.html
onboardDrivers: false
rrfbootOverrides: true
---

{% include custom/3.5/sbc1.html %}

{% include custom/3.5/sbc2.html %}
