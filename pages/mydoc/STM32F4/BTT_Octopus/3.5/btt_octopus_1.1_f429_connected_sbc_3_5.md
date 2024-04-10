---
title: Connecting an BTT Octopus v1.1 F429 Version via SBC in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 02/04/2024
summary: "How to connect to an BTT Octopus v1.1 F429 Version via SBC"
sidebar: mydoc_sidebar
permalink: btt_octopus_1.1_f429_connected_sbc_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: BTT Octopus v1.1 F429 Version
mcu: STM32F407VGT6
firmware: firmware_octopus1_1_f4.bin
schematic: https://github.com/bigtreetech/BIGTREETECH-OCTOPUS-V1.0/blob/master/Hardware/BIGTREETECH%20Octopus%20-%20PIN.pdf
BCM11: PB_13
BCM9: PC_2
BCM10: PC_3
BCM8: PB_12
BCM25: PG_7
heat: "{ PF_3, PF_4, PF_5, PF_6, PF_7 }"
diagnostics: PA_13
stepperSPI: 0
TMC: "{ PG_6, PG_9, PG_10, PG_11, PG_12, PG_13, PG_14, PG_15 }"
example: PG_6 and PG_9
board: biqoctopus_1.1
sensorless: "btt_octopus_1.1_f429_sensorless_3_5.html"
firmwareFlash: "firmware.cur"
rrfboot: custom/3.5/rrfboot/rrfboot_btt_octopus_1.1_f429.html
onboardDrivers: false
---

{% include custom/3.5/sbc1.html %}

{% include custom/3.5/sbc2.html %}
