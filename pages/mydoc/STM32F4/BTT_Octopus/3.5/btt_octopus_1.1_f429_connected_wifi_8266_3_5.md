---
title: Connecting an BTT Octopus v1.1 F429 Version via an ESP8266 or ESP32 WiFi Adapter in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 02/04/2024
summary: "How to connect to an BTT Octopus v1.1 F429 Version via an ESP8266 or ESP32 WiFi Adapter"
sidebar: mydoc_sidebar
permalink: btt_octopus_1.1_f429_connected_wifi_8266_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: BTT Octopus v1.1 F429 Version
mcu: STM32F407VGT6
firmware: firmware_octopus1_1_f4.bin
wifi: both
module: small
schematic: https://github.com/bigtreetech/BIGTREETECH-OCTOPUS-V1.0/blob/master/Hardware/BIGTREETECH%20Octopus%20-%20PIN.pdf
stepperSPI: 0
onboardDrivers: no
rrfbootOverrides: true
rrfboot: custom/3.5/rrfboot/rrfboot_btt_octopus_1.1_f429.html
sensorless: "btt_octopus_1.1_f429_sensorless_3_5.html"
---

{% include custom/3.5/wifi/overview.html %}

{% include custom/3.5/wifi/removeable.html %}

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

{% include custom/3.5/wifi/wifi_type.html %}

{% include custom/3.5/wifi/drivers_post35.html %}

</div>

</div>

{% include custom/3.5/wifi/sdcard_prep.html %}

{% include custom/3.5/wifi/sdcard_structure.html %}

{% include custom/3.5/wifi/wrapup.html %}
