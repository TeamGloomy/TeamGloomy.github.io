---
title: Connecting a Fly-Super5Pro H723 via WiFi in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 10/04/2024
summary: "How to connect a Fly-Super5Pro H723 via WiFi"
sidebar: mydoc_sidebar
permalink: fly_super5pro_h723_connected_wifi_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-Super5Pro H723
mcu: STM32H723
firmware: firmware_super5_h723.bin
wifi: ESP32
module: onboard
schematic: https://github.com/Mellow-3D/Fly-Super5Pro/blob/main/Hardware/Super5Pro-Schematic.pdf
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
sensorless: "fly_super5pro_h723_sensorless_3_5.html"
rrfboot: custom/3.5/rrfboot/rrfboot_fly_super5pro_h723.html
onboardDrivers: false
rrfbootOverrides: false
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

{% include custom/3.5/wifi/wifi_board.html %}

{% include custom/3.5/wifi/wifi_type.html %}

{% include custom/3.5/wifi/drivers_post35.html %}

</div>

</div>

{% include custom/3.5/wifi/sdcard_prep.html %}

{% include custom/3.5/wifi/sdcard_structure.html %}

{% include custom/3.5/wifi/wrapup.html %}
