---
title: Connecting an BTT Octopus Pro v1.1 via an ESP32 WiFi Adapter
tags: []
keywords: 
last_updated: 27/12/2023
summary: "How to connect to an BTT Octopus Pro v1.1 via an ESP32 WiFi Adapter"
permalink: btt_octopus_pro_1.1_h723_connected_wifi.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: BTT Octopus Pro v1.1
mcu: STM32H723VGT6
firmware: firmware-stm32h723-wifi.bin
wifi: ESP32
DRP: PD_7
TRP: PD_10
ERP: PG_7
CS: PB_12
ESPRXTX: "{ PD_9, PD_8 }"
SerialRXTX: "{ PA_10, PA_9 }"
heat: "{ PF_3, PF_4, PF_5, PF_6, PF_7 }"
diagnostics: PA_13
board: biquoctopuspro_V1.1_h723
sensorless: "btt_octopus_pro_1.1_h723_sensorless.html"
---

{% include custom/H7/wifi/overview.html %}
{% include custom/H7/wifi/removeable.html %}

{% include custom/H7/wifi/board_firmware.html %}

{% include custom/H7/wifi/wifi_prep.html %}

{% include custom/H7/wifi/dwc.html %}

<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a class="noCrossRef" href="#generate" data-toggle="tab">Using the Configurator</a></li>
    <li><a class="noCrossRef" href="#manualpost35" data-toggle="tab">Manually Editing/Creating board.txt</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="generate" markdown="1">

{% include custom/H7/wifi/generate_config.html %}

</div>

<div role="tabpanel" class="tab-pane" id="manualpost35" markdown="1">

{% include custom/H7/wifi/board_txt_legacy.html %}

{% include custom/H7/wifi/wifi_type.html %}

{% include custom/H7/wifi/drivers_post35.html %}

</div>

</div>

{% include custom/H7/wifi/sdcard_prep.html %}

{% include custom/H7/wifi/sdcard_structure.html %}

{% include custom/H7/wifi/wrapup.html %}
