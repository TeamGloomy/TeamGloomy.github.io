---
title: Connecting an SKR3EZ H743 via SBC in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 10/04/2024
summary: "How to connect to an SKR3EZ H743 via SBC"
sidebar: mydoc_sidebar
permalink: skr_3_ez_h743_connected_sbc_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: SKR3EZ H743
mcu: STM32H743
firmware: firmware_skr3ez_h743.bin
schematic: https://github.com/bigtreetech/SKR-3/blob/master/Hardware%20(SKR%203%20EZ)/BIGTREETECH%20SKR%203%20EZ%20V1.0-SCH.pdf
BCM11: PB_13
BCM9: PB_14
BCM10: PB_15
BCM8: PB_12
BCM25: PC_14
heat: "{ PD_7, PB_3, PB_4 }"
diagnostics: PA_13
stepperSPI: 3
spiInfo: "{ PE_15, PA_14, PE_14 }"
TMC: "{ PC_1, PC_3, PC_0, PC_2, PA_0 }"
example: PC_1 and PC_3
board: biquskr_3_ez
sensorless: "skr_3_ez_h743_sensorless_3_5.html"
firmwareFlash: "firmware.cur"
rrfboot: custom/3.5/rrfboot/rrfboot_skr_3_ez_h743.html
onboardDrivers: false
rrfbootOverrides: true
---

{% include custom/3.5/sbc1.html %}

{% include custom/3.5/sbc2.html %}
