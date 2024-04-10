---
title: Connecting to a Fly-CDYv3 via WiFi in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 02/04/2024
summary: "How to connect a Fly-CDYv3 via WiFi"
sidebar: mydoc_sidebar
permalink: fly_cdyv3_connected_wifi_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-CDYv3
mcu: STM32F407VGT6
firmware: firmware_cdy3_f4.bin
wifi: ESP32
module: onboard
schematic: https://github.com/Mellow-3D/Fly-CDYv3/blob/main/Hardware/Schematic.pdf
rrfboot: "custom/3.5/rrfboot/rrfboot_fly_cdyv3.html"
onboardDrivers: false
sensorless: "fly_cdyv3_sensorless_3_5.html"
rrfbootOverrides: true
page.stepperSPIUpdate: preset
---

{% include custom/3.5/wifi/overview.html %}

{% include custom/3.5/wifi/board_firmware.html %}

{% include custom/3.5/wifi/wifi_prep.html %}

{% include custom/3.5/wifi/dwc.html %}

<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a class="noCrossRef" href="#generate" data-toggle="tab">Using the Configurator</a></li>
    <li><a class="noCrossRef" href="#manualpost35" data-toggle="tab">Manually Editing/Creating board.txt</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="generate" markdown="1">

{% include custom/3.5/wifi/generate_config.html %}

</div>

<div role="tabpanel" class="tab-pane" id="manualpost35" markdown="1">

{% include custom/3.5/wifi/board_txt.html %}
{% include custom/3.5/wifi/drivers_post35.html %}

</div>

</div>

{% include custom/3.5/wifi/sdcard_prep.html %}

{% include custom/3.5/wifi/sdcard_structure.html %}

{% include custom/3.5/wifi/wrapup.html %}
