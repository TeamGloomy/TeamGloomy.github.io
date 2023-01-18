---
title: Connecting to a Fly-CDYv2 via WiFi
tags: []
keywords: 
last_updated: 18/01/2023
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
CS:
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