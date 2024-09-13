---
title: Connecting an Fly-Super8Pro H743 via SBC in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 13/09/2024
summary: "How to connect to an Fly-Super8Pro H743 via SBC"
sidebar: mydoc_sidebar
permalink: fly_super8pro_h743_connected_sbc_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-Super8Pro H743
mcu: STM32H743
firmware: firmware_super8pro_h743.bin
schematic: https://github.com/Mellow-3D/Fly-Super8Pro/blob/main/Hardware/Schematic.pdf
BCM11: PA_5
BCM9: PA_6
BCM10: PA_7
BCM8: PA_4
BCM25: PG_15
heat: "{ adc0, adc1, adc2 }"
diagnostics: ""
stepperSPI: 0
spiInfo: "{ PE_15, PA_14, PE_14 }"
TMC: "{ PC_1, PC_3, PC_0, PC_2, PA_0 }"
example: PC_1 and PC_3
board: biquskr_2
sensorless: "fly_super8pro_h743_sensorless_3_5.html"
firmwareFlash: "fly.cur"
rrfboot: custom/3.5/rrfboot/rrfboot_fly_super8pro_h743.html
onboardDrivers: false
rrfbootOverrides: true
---

{% include custom/3.5/sbc1.html %}

{% include custom/3.5/sbc2.html %}
