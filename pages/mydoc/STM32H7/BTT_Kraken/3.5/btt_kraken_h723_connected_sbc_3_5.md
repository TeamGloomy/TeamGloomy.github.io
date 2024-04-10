---
title: Connecting an BTT Kraken via SBC in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 06/04/2024
summary: "How to connect to an BTT Kraken via SBC"
sidebar: mydoc_sidebar
permalink: btt_kraken_h723_connected_sbc_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: BTT Kraken
mcu: STM32H723VGT6
firmware: firmware_kraken_h723.bin
schematic: https://github.com/bigtreetech/BIGTREETECH-Kraken/blob/master/Hardware/BIGTREETECH%20Kraken%20V1.0-SCH.pdf
BCM11: PE_12
BCM9: PE_13
BCM10: PE_14
BCM8: PE_11
BCM25: PG_6
heat: "{ PB_0, PB_1, PC_5, PC_4, PA_7 }"
diagnostics: 
stepperSPI: 3
board: biqukraken_h723
onboardDrivers: true
smartdrivers: 8
sensorless: "btt_kraken_h723_sensorless_3_5.html"
canWrite: PD_1
canRead: PD_0
rrfboot: custom/3.5/rrfboot/rrfboot_btt_kraken_h723.html
onboardDrivers: true
rrfbootOverrides: true
---

{% include custom/3.5/sbc1.html %}

{% include custom/3.5/sbc2.html %}
