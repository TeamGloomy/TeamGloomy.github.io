---
title: Connecting a Fly-ProX10 H723 via WiFi in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 13/09/2024
summary: "How to connect a Fly-ProX10 H723 via WiFi"
sidebar: mydoc_sidebar
permalink: fly_prox10_h723_connected_wifi_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-ProX10 H723
mcu: STM32H723
firmware: firmware_prox10_h723.bin
wifi: ESP32
module: onboard
schematic: https://github.com/Mellow-3D/Fly-Super8Pro/blob/main/Hardware/Schematic.pdf
DRP: PD_13
TRP: PD_11
ERP: PD_10
CS:
ESPRXTX: "{ PD_9, PD_8 }"
SerialRXTX: "{ PA_10, PA_9 }"
heat: "{ adc0, adc1, adc2, adc3, adc4, adc5 }"
diagnostics: ""
smartdrivers: 
stepperSPI: 1
TMC: "{ PG_12, PG_11, PG_10, PG_9, PD_7, PD_6, PA_8, PF_3 }"
example: PG_12 and PG_11
board: fly_prox10_h723
onboardDrivers: false
sensorless: "fly_prox10_h723_sensorless.html"
rrfboot: custom/3.5/rrfboot/rrfboot_fly_prox10_h723.html
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

{% include custom/3.5/wifi/drivers_post35.html %}

</div>

</div>

{% include custom/3.5/wifi/sdcard_prep.html %}

{% include custom/3.5/wifi/sdcard_structure.html %}

{% include custom/3.5/wifi/wrapup.html %}
