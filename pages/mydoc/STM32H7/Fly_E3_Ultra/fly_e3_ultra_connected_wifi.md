---
title: Connecting a Fly-E3-Ultra H723 via WiFi
tags: []
keywords: 
last_updated: 23/04/2025
summary: "How to connect a Fly-E3-Ultra H723 via WiFi"
permalink: fly_e3_ultra_connected_wifi.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-E3-Ultra H723
mcu: STM32H723VIT6
firmware: firmware_e3ultra_h723.bin
wifi: ESP32
wifiEth: true
wifiFly: true
rrfbootOverrides: false
rrfboot: custom/H7/rrfboot/rrfboot_fly_e3_ultra.html
sensorless: "fly_e3_ultra_sensorless.html"

---

{% include custom/H7/wifi/overview.html %}

{% include custom/H7/wifi/removeable.html %}

{% include custom/H7/wifi/board_firmware.html %}

{% include custom/H7/wifi/wifi_prep.html %}

{% include custom/H7/wifi/dwc.html %}

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
