---
title: Connecting an SKR3EZ H743 via an ESP32 WiFi Adapter
tags: []
keywords: 
last_updated: 20/11/2024
summary: "How to connect to an SKR3EZ H743 via an ESP32 WiFi Adapter"
permalink: skr_3_ez_h743_connected_wifi.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: SKR3EZ H743
mcu: STM32H743
firmware: firmware_skr3ez_h743.bin
wifi: ESP32
wifiEth: true
sensorless: "skr_3_ez_h743_sensorless.html"
rrfboot: custom/H7/rrfboot/rrfboot_skr_3_ez_h743.html
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

{% include custom/H7/wifi/wifi_type.html %}

{% include custom/H7/wifi/drivers_post35.html %}

</div>

</div>

{% include custom/H7/wifi/sdcard_prep.html %}

{% include custom/H7/wifi/sdcard_structure.html %}

{% include custom/H7/wifi/wrapup.html %}
