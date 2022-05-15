---
title: Connecting to a Fly-CDYv2 via WiFi
tags: []
keywords: 
last_updated: 28/03/2022
summary: "How to connect a Fly-CDYv2 via WiFi"
sidebar: mydoc_sidebar
permalink: fly_cdyv2_connected_wifi.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-CDYv2
mcu: STM32F407VGT6
firmware: firmware-stm32f4-wifi.bin
wifi: 
module: onboard
schematic: https://github.com/Mellow-3D/Fly-CDYv2/blob/main/Hardware/Schematic.pdf
DRP: E.10
TRP: E.12
ERP: E.11
CS: ""
ESPRXTX: "{ D.9, D.8 }"
SerialRXTX: ""
heat: "{ B.1, A.3, C.4, D.14 }"
diagnostics: ""
stepperSPI: 2
TMC: "{ C.7, C.6, D.11, D.10, B.10, B.11 }"
example: C7 and C.6
board: fly_cdyv2
onboardDrivers: no
---

{% include custom/wifi.html %}