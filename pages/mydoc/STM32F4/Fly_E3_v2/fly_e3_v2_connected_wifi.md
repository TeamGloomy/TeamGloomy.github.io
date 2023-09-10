---
title: Connecting a Fly-E3-v2 via WiFi
tags: []
keywords: 
last_updated: 10/09/2023
summary: "How to connect a Fly-E3-v2 via WiFi"
sidebar: mydoc_sidebar
permalink: fly_e3_v2_connected_wifi.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-E3-v2
mcu: STM32F407VGT6
firmware: firmware-stm32f4-wifi.bin
wifi: ESP32
module: onboard
schematic: https://github.com/Mellow-3D/fly-e3-v2/blob/main/Hardware/Schematic_fly-e3-v2.pdf
DRP: PE_10
TRP: PE_12
ERP: PE_11
CS:
ESPRXTX: "{ PD_9, PD_8 }"
SerialRXTX: ""
heat: "{ PB_1, PC_4, PC_5 }"
diagnostics: ""
stepperSPI: 2
TMC: "{ PE_7, PE_8, PE_9 }"
example: PE_7 and PE_8
board: fly_e3_v2
onboardDrivers: no
sensorless: "fly_e3_v2_sensorless.html"
---

{% include custom/wifi/overview.html %}

{% include custom/wifi/board_firmware.html %}

{% include custom/wifi/wifi_prep.html %}

{% include custom/wifi/dwc.html %}

<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a class="noCrossRef" href="#generate" data-toggle="tab">Using the Configurator</a></li>
    <li><a class="noCrossRef" href="#manualpre35" data-toggle="tab">Manually Editing/Creating board.txt Pre 3.5RC1</a></li>
    <li><a class="noCrossRef" href="#manualpost35" data-toggle="tab">Manually Editing/Creating board.txt Post 3.5RC1</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="generate" markdown="1">

{% include custom/wifi/generate_config.html %}

</div>

<div role="tabpanel" class="tab-pane" id="manualpre35" markdown="1">

{% include custom/wifi/board_txt.html %}
{% include custom/wifi/drivers_pre35.html %}

</div>

<div role="tabpanel" class="tab-pane" id="manualpost35" markdown="1">

{% include custom/wifi/board_txt.html %}
{% include custom/wifi/drivers_post35.html %}

</div>

</div>

{% include custom/wifi/sdcard_prep.html %}

{% include custom/wifi/sdcard_structure.html %}

{% include custom/wifi/wrapup.html %}
