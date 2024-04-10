---
title: Connecting a Fly-E3 via WiFi
tags: []
keywords: 
last_updated: 10/09/2023
summary: "How to connect a Fly-E3 via WiFi"
sidebar: mydoc_sidebar
permalink: fly_e3_connected_wifi.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-E3
mcu: STM32F407VGT6
firmware: firmware-stm32f4-wifi.bin
wifi: 
module: onboard
schematic: https://github.com/Mellow-3D/FLY-RRF-E3/blob/master/Hardware/Schematic.pdf
DRP: PE_13
TRP: PE_14
ERP: PE_15
CS:
ESPRXTX: "{ PD_9, PD_8 }"
SerialRXTX: ""
heat: "{ PA_3, PA_4 }"
diagnostics: ""
stepperSPI: 5
TMC: "{ PA_2, PA_1, PC_5 }"
example: PA_2 and PA_1
board: fly_e3
onboardDrivers: false
sensorless: "fly_e3_sensorless.html"
---

{% include custom/3.4/wifi/overview.html %}

{% include custom/3.4/wifi/board_firmware.html %}

{% include custom/3.4/wifi/wifi_prep.html %}

{% include custom/3.4/wifi/dwc.html %}

<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a class="noCrossRef" href="#generate" data-toggle="tab">Using the Configurator</a></li>
    <li><a class="noCrossRef" href="#manualpre35" data-toggle="tab">Manually Editing/Creating board.txt Pre 3.5RC1</a></li>
    <li><a class="noCrossRef" href="#manualpost35" data-toggle="tab">Manually Editing/Creating board.txt Post 3.5RC1</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="generate" markdown="1">

{% include custom/3.4/wifi/generate_config.html %}

</div>

<div role="tabpanel" class="tab-pane" id="manualpre35" markdown="1">

{% include custom/3.4/wifi/board_txt.html %}
{% include custom/3.4/wifi/drivers_pre35.html %}

</div>

<div role="tabpanel" class="tab-pane" id="manualpost35" markdown="1">

{% include custom/3.4/wifi/board_txt.html %}
{% include custom/3.4/wifi/drivers_post35.html %}

</div>

</div>

{% include custom/3.4/wifi/sdcard_prep.html %}

{% include custom/3.4/wifi/sdcard_structure.html %}

{% include custom/3.4/wifi/wrapup.html %}
