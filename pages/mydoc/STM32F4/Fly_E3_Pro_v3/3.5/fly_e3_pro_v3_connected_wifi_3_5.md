---
title: Connecting a Fly-E3-Pro-v3 via WiFi from 3.5-RC4
tags: []
keywords: 
last_updated: 21/03/2024
summary: "How to connect a Fly-E3-Pro-v3 via WiFi from 3.5-RC4"
sidebar: mydoc_sidebar
permalink: fly_e3_pro_v3_connected_wifi_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-E3-Pro-v3
mcu: STM32F407VGT6
firmware: firmware-fly_e3_pro_v3_f4-XXXX.bin
wifi: ESP32
module: onboard
rrfbootOverrides: false
schematic: https://github.com/Mellow-3D/Fly-E3-Pro/blob/main/Schematic/Schematic_E3-PRO.pdf

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
