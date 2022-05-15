---
title: Connecting an SKR v2.0 via an ESP8266 or ESP32 WiFi Adapter
tags: []
keywords: 
last_updated: 25/03/2022
summary: "How to connect to an SKR v2.0 via an ESP8266 or ESP32 WiFi Adapter"
sidebar: mydoc_sidebar
permalink: skr_2.0_connected_wifi.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: SKR v2.0
mcu: STM32F407VGT6
firmware: firmware-stm32f4-wifi.bin
wifi: both
module: small
schematic: https://github.com/bigtreetech/SKR-2/blob/master/Hardware/BIGTREETECH%20SKR%202-Pin.pdf
DRP: B.10
TRP: B.11
ERP: C.14
CS: 
ESPRXTX: "{ D.9, D.8 }"
SerialRXTX: "{ A.10, A.9 }"
heat: "{ D.7, B.3, B.4 }"
diagnostics: A.13
stepperSPI: 3
spiInfo: "{ E.15, A.14, E.14 }"
TMC: "{ C.1, C.3, C.0, C.2, A.0 }"
example: C.1 and C.3
board: biquskr_2
onboardDrivers: no
---

{% include custom/wifi.html %}