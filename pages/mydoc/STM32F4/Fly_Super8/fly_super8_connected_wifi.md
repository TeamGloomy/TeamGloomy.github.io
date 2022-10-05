---
title: Connecting a Fly-Super8 via WiFi
tags: []
keywords: 
last_updated: 01/06/2022
summary: "How to connect a Fly-Super8 via WiFi"
sidebar: mydoc_sidebar
permalink: fly_super8_connected_wifi.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-Super8
mcu: STM32F407VGT6
firmware: firmware-stm32-wifi.bin
wifi: ESP32
module: onboard
schematic: https://github.com/Mellow-3D/Fly-Super8/blob/main/Hardware/Schematic.pdf
DRP: D.13
TRP: D.11
ERP: D.10
CS: ""
ESPRXTX: "{ D.9, D.8 }"
SerialRXTX: "{ A.10, A.9 }"
heat: "{ adc0, adc1, adc2, adc3, adc4, adc5 }"
diagnostics: ""
smartdrivers: 
stepperSPI: 2
TMC: "{ G.12, G.11, G.10, G.9, D.7, D.6, A.8, F.3 }"
example: G.12 and G.11
board: fly_super8
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