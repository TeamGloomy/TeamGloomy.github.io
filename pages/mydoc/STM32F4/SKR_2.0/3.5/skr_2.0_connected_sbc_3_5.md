---
title: Connecting an SKR v2.0 via SBC in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 03/04/2024
summary: "How to connect to an SKR v2.0 via SBC"
sidebar: mydoc_sidebar
permalink: skr_2.0_connected_sbc_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: SKR v2.0
mcu: STM32F407VGT6
firmware: firmware_skr2_f4.bin
schematic: https://github.com/bigtreetech/SKR-2/blob/master/Hardware/BIGTREETECH%20SKR%202-Pin.pdf
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
board: biquskr_2
sensorless: "skr_2.0_sensorless_3_5.html"
firmwareFlash: "firmware.cur"
rrfboot: custom/3.5/rrfboot/rrfboot_skr_2.0.html
onboardDrivers: false
rrfbootOverrides: true
---

{% include custom/3.5/sbc1.html %}

{% include custom/3.5/sbc2.html %}
