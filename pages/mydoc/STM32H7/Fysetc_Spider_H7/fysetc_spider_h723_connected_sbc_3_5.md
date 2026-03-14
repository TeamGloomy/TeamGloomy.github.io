---
title: Connecting an Fysetc Spider H723 via SBC in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 12/03/2026
summary: "How to connect to an Fysetc Spider H723 via SBC"
sidebar: mydoc_sidebar
permalink: fysetc_spider_h723_connected_sbc_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fysetc Spider H723
mcu: STM32H723
firmware: firmware_spiderv3_h723.bin
schematic: https://github.com/FYSETC/FYSETC-SPIDER-H7/blob/main/Schematic/SPIDER_H7_SCH.pdf
BCM11: PC_10
BCM9: PC_11
BCM10: PC_12
BCM8: PD_2
BCM25: PC_9
heat: "{ bedtemp, e0temp, e1temp, e2temp, e3temp, e4temp }"
diagnostics: ""
stepperSPI: 6
spiInfo: "{ PE_15, PA_14, PE_14 }"
TMC: "{ PC_1, PC_3, PC_0, PC_2, PA_0 }"
example: PC_1 and PC_3
board: biquskr_2
sensorless: "fysetc_spider_h723_sensorless_3_5.html"
firmwareFlash: "firmware.cur"
rrfboot: custom/3.5/rrfboot/rrfboot_fysetc_spider_h723.html
onboardDrivers: false
rrfbootOverrides: true
---

{% include custom/3.5/sbc1.html %}

{% include custom/3.5/sbc2.html %}
