---
title: Connecting an BTT Octopus v1.1 F429 Version via SBC
tags: []
keywords: 
last_updated: 28/03/2022
summary: "How to connect to an BTT Octopus v1.1 F429 Version via SBC"
sidebar: mydoc_sidebar
permalink: btt_octopus_1.1_f429_connected_sbc.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: BTT Octopus v1.1 F429 Version
mcu: STM32F407VGT6
firmware: firmware-stm32f4-sbc.bin
schematic: https://github.com/bigtreetech/BIGTREETECH-OCTOPUS-V1.0/blob/master/Hardware/BIGTREETECH%20Octopus%20-%20PIN.pdf
BCM11: B.13
BCM9: C.2
BCM10: C.3
BCM8: B.12
BCM25: D.10
heat: "{ F.3, F.4, F.5, F.6, F.7 }"
diagnostics: A.13
stepperSPI: 0
TMC: "{ G.6, G.9, G.10, G.11, G.12, G.13, G.14, G.15 }"
example: G.6 and G.9
board: biqoctopus_1.1

---

{% include custom/sbc.html %}