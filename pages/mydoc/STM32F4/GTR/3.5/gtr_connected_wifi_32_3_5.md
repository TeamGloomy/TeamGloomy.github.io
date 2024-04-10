---
title: Connecting a GTR via an ESP32 WiFi Adapter in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 03/04/2024
summary: "How to connect to a GTR via an ESP32 WiFi Adapter"
sidebar: mydoc_sidebar
permalink: gtr_connected_wifi_32_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: GTR
mcu: STM32F407ZGT6
firmware: firmware_gtr1_0_f4.bin
wifi: ESP32
module: large
schematic: https://github.com/bigtreetech/BIGTREETECH-GTR-V1.0/blob/master/BTT%20GTR%20V1.0/manual/GTR%20V1.0(SCH).PDF
DRP: PD_10
TRP: PH_10
ERP: PB_10
CS:
ESPRXTX: "{ PD_9, PD_8 }"
SerialRXTX: "{ PC_7, PC_6 }"
heat: "{ PC_0, PC_1, PC_2, PC_3, PA_3, PF_9, PF_10, PF_7, PF_5 }"
diagnostics: ""
smartdrivers: 5
stepperSPI: 5
spiInfo: "{ PB_3, PB_6, PG_15 }"
TMC: "{ PF_2, PC_13, PE_0, PG_14, PG_9, PD_3, PI_4, PF_4, PF_6, PI_7, PF_12 }"
example: PF_2 and PC_13
board: biqugtr_1.0
onboardDrivers: false
GPIO15: PB_12
GPIO13: PB_15
GPIO12: PB_14
GPIO14: PB_13
adapterRXTX: WiFi
image: gtr_esp32_connection.png
EXP: EXP2
sensorless: "gtr_sensorless_3_5.html"
rrfboot: custom/3.5/rrfboot/rrfboot_gtr.html
rrfbootOverrides: true
---

{% include custom/3.5/wifi/overview.html %}

{% include custom/3.5/wifi/board_firmware.html %}

{% include custom/3.5/wifi/wifi_prep.html %}

{% include custom/3.5/wifi/dwc.html %}

<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a class="noCrossRef" href="#purchased" data-toggle="tab">Using a Purchased WiFi Adapter</a></li>
    <li><a class="noCrossRef" href="#homemade" data-toggle="tab">Using a Homemade WiFi Adapter</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="purchased" markdown="1">

{% include custom/3.5/wifi/removeable_large.html %}

</div>

<div role="tabpanel" class="tab-pane" id="homemade" markdown="1">

{% include custom/3.5/wifi/homemade_ESP32.html %}

</div>

</div>

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
