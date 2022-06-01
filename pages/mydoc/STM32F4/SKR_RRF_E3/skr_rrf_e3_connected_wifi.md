---
title: Connecting a SKR-RRF-E3 via Wifi
tags: []
keywords: 
last_updated: 01/06/2022
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