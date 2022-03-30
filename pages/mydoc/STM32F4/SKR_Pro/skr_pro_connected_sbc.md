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
BCM11: B.13
BCM9: B.14
BCM10: B.15
BCM8: B.12
BCM25: F.12
heat: "{ F.6, F.3, F.4, F.5 }"
diagnostics: 
stepperSPI: 2
spiInfo: "{ E.15, A.14, E.14 }"
TMC: "{ B.10, E.12, G.8, E.15, E.10, G.5 }"
example: B.10 and E.12
board: biquskrpro_1.1
---

{% include custom/sbc.html %}