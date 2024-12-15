---
title: Connecting an BTT Scylla V1 via an ESP32 WiFi Adapter in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 15/12/2024
summary: "How to connect to an BTT Scylla V1 via an ESP32 WiFi Adapter"
sidebar: mydoc_sidebar
permalink: btt_scylla_v1_h723_connected_wifi_32_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: BTT Scylla V1
mcu: STM32H723VGT6
firmware: firmware_scylla1_0_h723.bin
wifi: ESP32
module: small
schematic: 
DRP: PE_9
TRP: PE_8
ERP: PE_10
CS: PE_11
wifiSPI: 6
ESPRXTX: "{ PA_3, PA_2 }"
SerialRXTX: "{ PA_10, PA_9 }"
SerialRXTX2: "{ PD_9, PD_8 }"
heat: 
diagnostics: 
stepperSPI: 3
board: scylla1_0_h723
onboardDrivers: true
smartdrivers: 4
sensorless: "btt_scylla_v1_h723_sensorless_3_5.html"
canWrite: PD_1
canRead: PD_0
rrfboot: custom/3.5/rrfboot/rrfboot_btt_scylla_v1_h723.html
onboardDrivers: true
rrfbootOverrides: false
---

{% include custom/3.5/wifi/overview.html %}

{% include custom/3.5/wifi/board_firmware.html %}

{% include custom/3.5/wifi/wifi_prep.html %}

{% include custom/3.5/wifi/dwc.html %}

<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a class="noCrossRef" href="#generate" data-toggle="tab">Using the Configurator</a></li>
    <li><a class="noCrossRef" href="#manual" data-toggle="tab">Manually Editing/Creating board.txt</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="generate" markdown="1">

{% include custom/3.5/wifi/generate_config.html %}

</div>

<div role="tabpanel" class="tab-pane" id="manual" markdown="1">

{% include custom/3.5/wifi/board_txt.html %}

</div>

</div>
{% include custom/3.5/wifi/sdcard_prep.html %}

{% include custom/3.5/wifi/sdcard_structure.html %}

{% include custom/3.5/wifi/wrapup.html %}
