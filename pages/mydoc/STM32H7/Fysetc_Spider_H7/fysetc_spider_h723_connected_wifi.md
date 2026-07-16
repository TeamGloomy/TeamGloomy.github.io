---
title: Connecting a Fysetc Spider H723 via WiFi
tags: []
keywords: 
last_updated: 12/03/2026
summary: "How to connect a Fysetc Spider H723 via WiFi"
permalink: fysetc_spider_h723_connected_wifi.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fysetc Spider H723
mcu: STM32H723
firmware: firmware_spiderv3_h723.bin
wifi: ESP32
DRP: PA_8
TRP: PC_9
ERP: PD_2
CS: 
ESPRXTX: "{ PD_1, PD_0 }"
SerialRXTX: "{ PA_10, PA_9 }"
sensorless: "fysetc_spider_h723_sensorless.html"
rrfboot: custom/H7/rrfboot/rrfboot_fysetc_spider_h723.html
rrfbootOverrides: false
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

{% include custom/H7/wifi/board_txt.html %}

{% include custom/H7/wifi/wifi_board.html %}

{% include custom/H7/wifi/drivers_post35.html %}

</div>

</div>

{% include custom/H7/wifi/sdcard_prep.html %}

{% include custom/H7/wifi/sdcard_structure.html %}

{% include custom/H7/wifi/wrapup.html %}
