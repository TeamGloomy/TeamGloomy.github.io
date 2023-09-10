---
title: Connecting a Fly-Super5Pro H723 via WiFi
tags: []
keywords: 
last_updated: 10/09/2023
summary: "How to connect a Fly-Super5Pro H723 via WiFi"
sidebar: mydoc_sidebar
permalink: fly_super5pro_h723_connected_wifi.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-Super5Pro H723
mcu: STM32H743
firmware: firmware-stm32h723-wifi.bin
wifi: ESP32
module: onboard
schematic: https://github.com/Mellow-3D/Fly-Super8Pro/blob/main/Hardware/Schematic.pdf
DRP: PD_10
TRP: PD_11
ERP: PD_14
CS:
ESPRXTX: "{ PD_9, PD_8 }"
SerialRXTX: "{ PA_10, PA_9 }"
heat: "{ adc0, adc1, adc2 }"
diagnostics: ""
smartdrivers: 
stepperSPI: 0
TMC: "{ PB_7, PC_7, PC_6, PC_13, PC_14, PC_15 }"
example: PB_7 and PC_7
board: fly_super5_h723
onboardDrivers: no
sensorless: "fly_super5pro_h723_sensorless.html"
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
