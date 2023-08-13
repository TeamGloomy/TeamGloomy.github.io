---
title: Connecting an SKR Pro v1.1 and v1.2 via SBC
tags: []
keywords: 
last_updated: 28/03/2022
summary: "How to connect to an SKR Pro v1.1 and v1.2 via SBC"
sidebar: mydoc_sidebar
permalink: skr_pro_connected_sbc.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: SKR Pro v1.1 and v1.2
mcu: STM32F407VGT6
firmware: firmware-stm32f4-sbc.bin
schematic: https://github.com/bigtreetech/BIGTREETECH-SKR-PRO-V1.1/blob/master/manual/SKR-PRO-V1.1-Pin.pdf
BCM11: PB_13
BCM9: PB_14
BCM10: PB_15
BCM8: PB_12
BCM25: PF_12
heat: "{ PF_6, PF_3, PF_4, PF_5 }"
diagnostics: 
stepperSPI: 2
spiInfo: "{ PE_15, PA_14, PE_14 }"
TMC: "{ PB_10, PE_12, PG_8, PE_15, PE_10, PG_5 }"
example: PB_10 and PE_12
board: biquskrpro_1.1
---

{% include custom/sbc.html %}
