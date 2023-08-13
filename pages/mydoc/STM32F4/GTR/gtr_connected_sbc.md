---
title: Connecting a GTR via SBC
tags: []
keywords: 
last_updated: 28/03/2022
summary: "How to connect to a GTR via an SBC"
sidebar: mydoc_sidebar
permalink: gtr_connected_sbc.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: GTR
mcu: STM32F407VGT6
firmware: firmware-stm32f4-sbc.bin
schematic: https://github.com/bigtreetech/BIGTREETECH-GTR-V1.0/blob/master/BTT%20GTR%20V1.0/manual/GTR%20V1.0%20PIn.PDF
BCM11: PB_13
BCM9: PB_14
BCM10: PB_15
BCM8: PB_12
BCM25: PB_10
heat: "{ PC_0, PC_1, PC_2, PC_3, PA_3, PF_9, PF_10, PF_7, PF_5 }"
diagnostics: 
stepperSPI: 5
spiInfo: "{ PB_3, PB_6, PG_15 }"
TMC: "{ PF_2, PC_13, PE_0, PG_14, PG_9, PD_3, PI_4, PF_4, PF_6, PI_7, PF_12 }"
example: PF_2 and PC_13
board: biqugtr_1.0
---

{% include custom/sbc.html %}
