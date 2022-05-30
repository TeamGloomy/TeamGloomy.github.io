---
title: Connecting a Fly-E3-Pro-v3 via WiFi
tags: []
keywords: 
last_updated: 12/05/2022
summary: "How to connect a Fly-E3-Pro-v3 via WiFi"
sidebar: mydoc_sidebar
permalink: fly_e3_pro_v3_connected_wifi.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-E3-Pro-v3
mcu: STM32F407ZGT6
firmware: firmware-stm32f4-wifi.bin
wifi: ESP32
module: onboard
schematic: https://github.com/Mellow-3D/Fly-E3-Pro/blob/main/Schematic/Schematic_E3-PRO.pdf
DRP: E.13
TRP: E.14
ERP: E.15
CS: ""
ESPRXTX: "{ D.9, D.8 }"
SerialRXTX: ""
heat: "{ A.3, A.4, A.1 }"
diagnostics: ""
smartdrivers: 5
stepperSPI: 2
TMC: "{ A.2, B.10, C.4 }"
example: A.2 and B.10
board: fly_e3_prov3
onboardDrivers: yes
---

{% include custom/wifi/overview.html %}

{% include custom/wifi/board_firmware.html %}

{% include custom/wifi/wifi_prep.html %}

{% include custom/wifi/dwc.html %}

<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a class="noCrossRef" href="#generate" data-toggle="tab">Using the Configurator</a></li>
    <li><a class="noCrossRef" href="#manual" data-toggle="tab">Manually Editing/Creating board.txt</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="generate" markdown="1">

{% include custom/wifi/generate_config.html %}

</div>

<div role="tabpanel" class="tab-pane" id="manual" markdown="1">

{% include custom/wifi/board_txt.html %}

</div>

</div>

{% include custom/wifi/sdcard_prep.html %}

{% include custom/wifi/sdcard_structure.html %}

{% include custom/wifi/sensorless.html %}

{% include custom/wifi/wrapup.html %}