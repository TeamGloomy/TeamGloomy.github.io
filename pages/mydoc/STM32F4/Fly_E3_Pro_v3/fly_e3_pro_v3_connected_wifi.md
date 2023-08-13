---
title: Connecting a Fly-E3-Pro-v3 via WiFi
tags: []
keywords: 
last_updated: 18/01/2023
summary: "How to connect a Fly-E3-Pro-v3 via WiFi"
sidebar: mydoc_sidebar
permalink: fly_e3_pro_v3_connected_wifi.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-E3-Pro-v3
mcu: STM32F407VGT6
firmware: firmware-stm32f4-wifi.bin
wifi: ESP32
module: onboard
schematic: https://github.com/Mellow-3D/Fly-E3-Pro/blob/main/Schematic/Schematic_E3-PRO.pdf
DRP: PE_13
TRP: PE_14
ERP: PE_15
CS:
ESPRXTX: "{ PD_9, PD_8 }"
SerialRXTX: ""
heat: "{ PA_3, PA_4, PA_1 }"
diagnostics: ""
smartdrivers: 5
stepperSPI: 2
TMC: "{ PA_2, PB_10, PC_4 }"
example: PA_2 and PB_10
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

{% include custom/wifi/wrapup.html %}
