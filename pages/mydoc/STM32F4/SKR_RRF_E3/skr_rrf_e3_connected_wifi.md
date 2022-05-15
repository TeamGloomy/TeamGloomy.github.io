---
title: Connecting a SKR-RRF-E3 via Wifi
tags: []
keywords: 
last_updated: 25/03/2022
summary: "Connecting a SKR-RRF-E3 via Wifi"
sidebar: mydoc_sidebar
permalink: skr_rrf_e3_connected_wifi.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: SKR-RRF-E3
mcu: STM32F407ZGT6
firmware: firmware-stm32f4-wifi.bin
wifi: 
module: onboard
schematic: https://github.com/Mellow-3D/Fly-E3-Pro/blob/main/Schematic/Schematic_E3-PRO.pdf
DRP: A.6
TRP: A.7
ERP: A.4
CS: ""
ESPRXTX: "{ D.9, D.8 }"
SerialRXTX: ""
heat: "{ A.0, A.1, A.2, A.3 }"
diagnostics: ""
smartdrivers: 4
stepperSPI: 2
TMC: "{ C.0, C.1, C.2, C.3, B.11, B.10 }"
example: C.0 and C.1
board: biquskr_rrf_e3_1.1
onboardDrivers: yes
---

{% include custom/wifi.html %}