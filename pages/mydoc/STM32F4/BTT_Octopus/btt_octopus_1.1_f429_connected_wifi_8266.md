---
title: Connecting an BTT Octopus v1.1 F429 Version via an ESP8266 or ESP32 WiFi Adapter
tags: []
keywords: 
last_updated: 06/01/2023
summary: "How to connect to an BTT Octopus v1.1 F429 Version via an ESP8266 or ESP32 WiFi Adapter"
sidebar: mydoc_sidebar
permalink: btt_octopus_1.1_f429_connected_wifi_8266.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: BTT Octopus v1.1 F429 Version
mcu: STM32F407VGT6
firmware: firmware-stm32f4-wifi.bin
wifi: both
module: small
schematic: https://github.com/bigtreetech/BIGTREETECH-OCTOPUS-V1.0/blob/master/Hardware/BIGTREETECH%20Octopus%20-%20PIN.pdf
DRP: D.7
TRP: D.10
ERP: G.7
CS: B.12
ESPRXTX: "{ D.9, D.8 }"
SerialRXTX: "{ A.10, A.9 }"
heat: "{ F.3, F.4, F.5, F.6, F.7 }"
diagnostics: A.13
stepperSPI: 0
TMC: "{ G.6, G.9, G.10, G.11, G.12, G.13, G.14, G.15 }"
example: G.6 and G.9
board: biqoctopus_1.1
onboardDrivers: no
---

{% include custom/wifi/overview.html %}
{% include custom/wifi/removeable.html %}

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