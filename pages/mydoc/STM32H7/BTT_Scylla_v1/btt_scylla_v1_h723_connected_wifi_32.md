---
title: Connecting an BTT Scylla V1 via an ESP32 WiFi Adapter
tags: []
keywords: 
last_updated: 15/12/2024
summary: "How to connect to an BTT Scylla V1 via an ESP32 WiFi Adapter"
permalink: btt_scylla_v1_h723_connected_wifi_32.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: BTT Scylla V1
mcu: STM32H723VGT6
firmware: firmware_scylla1_0_h723.bin
wifi: ESP32
wifiEth: true
sensorless: "btt_scylla_v1_h723_sensorless.html"
rrfboot: custom/H7/rrfboot/rrfboot_btt_scylla_v1_h723.html
rrfbootOverrides: false
---

{% include custom/H7/wifi/overview.html %}

{% include custom/H7/wifi/board_firmware.html %}

{% include custom/H7/wifi/wifi_prep.html %}

{% include custom/H7/wifi/dwc.html %}

{% include custom/H7/wifi/removeable.html %}

<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a class="noCrossRef" href="#generate" data-toggle="tab">Using the Configurator</a></li>
    <li><a class="noCrossRef" href="#manual" data-toggle="tab">Manually Editing/Creating board.txt</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="generate" markdown="1">

{% include custom/H7/wifi/generate_config.html %}

</div>

<div role="tabpanel" class="tab-pane" id="manual" markdown="1">

{% include custom/H7/wifi/board_txt.html %}

</div>

</div>
{% include custom/H7/wifi/sdcard_prep.html %}

{% include custom/H7/wifi/sdcard_structure.html %}

{% include custom/H7/wifi/wrapup.html %}
