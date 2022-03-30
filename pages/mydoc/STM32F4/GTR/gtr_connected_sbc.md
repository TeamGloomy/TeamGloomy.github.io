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
BCM11: B.13
BCM9: B.14
BCM10: B.15
BCM8: B.12
BCM25: B.10
heat: "{ C.0, C.1, C.2, C.3, A.3, F.9, F.10, F.7, F.5 }"
diagnostics: 
stepperSPI: 5
spiInfo: "{ B.3, B.6, G.15 }"
TMC: "{ F.2, C.13, E.0, G.14, G.9, D.3, I.4, F.4, F.6, I.7, F.12 }"
example: F.2 and C.13
board: biqugtr_1.0
---

{% include custom/sbc.html %}