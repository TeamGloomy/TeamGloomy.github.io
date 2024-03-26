---
title: Connecting a SKR-RRF-E3 via Wifi
tags: []
keywords: 
last_updated: 18/01/2023
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
DRP: PA_6
TRP: PA_7
ERP: PA_4
CS:
ESPRXTX: "{ PD_9, PD_8 }"
SerialRXTX: ""
heat: "{ PA_0, PA_1, PA_2, PA_3 }"
diagnostics: ""
smartdrivers: 4
stepperSPI: 2
TMC: "{ PC_0, PC_1, PC_2, PC_3, PB_11, PB_10 }"
example: PC_0 and PC_1
board: biquskr_rrf_e3_1.1
onboardDrivers: yes
---

{% include custom/3.4/wifi/overview.html %}

{% include custom/3.4/wifi/board_firmware.html %}

{% include custom/3.4/wifi/wifi_prep.html %}

{% include custom/3.4/wifi/dwc.html %}

<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a class="noCrossRef" href="#generate" data-toggle="tab">Using the Configurator</a></li>
    <li><a class="noCrossRef" href="#manual" data-toggle="tab">Manually Editing/Creating board.txt</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="generate" markdown="1">

{% include custom/3.4/wifi/generate_config.html %}

</div>

<div role="tabpanel" class="tab-pane" id="manual" markdown="1">

{% include custom/3.4/wifi/board_txt.html %}

</div>

</div>

{% include custom/3.4/wifi/sdcard_prep.html %}

{% include custom/3.4/wifi/sdcard_structure.html %}

{% include custom/3.4/wifi/wrapup.html %}
