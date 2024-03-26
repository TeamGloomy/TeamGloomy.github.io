---
title: Connecting to a Fly-CDYv2 via WiFi
tags: []
keywords: 
last_updated: 10/09/2023
summary: "How to connect a Fly-CDYv2 via WiFi"
sidebar: mydoc_sidebar
permalink: fly_cdyv2_connected_wifi.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-CDYv2
mcu: STM32F407VGT6
firmware: firmware-stm32f4-wifi.bin
wifi: 
module: onboard
schematic: https://github.com/Mellow-3D/Fly-CDYv2/blob/main/Hardware/Schematic.pdf
DRP: PE_10
TRP: PE_12
ERP: PE_11
CS:
ESPRXTX: "{ PD_9, PD_8 }"
SerialRXTX: ""
heat: "{ PB_1, PA_3, PC_4, PD_14 }"
diagnostics: ""
stepperSPI: 2
TMC: "{ PC_7, PC_6, PD_11, PD_10, PB_10, PB_11 }"
example: PC_7 and PC_6
board: fly_cdyv2
onboardDrivers: no
sensorless: "fly_cdyv2_sensorless.html"
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
