---
title: Connecting a GTR via an ESP8266 WiFi Adapter
tags: []
keywords: 
last_updated: 10/09/2023
summary: "How to connect to a GTR via an ESP8266 WiFi Adapter"
sidebar: mydoc_sidebar
permalink: gtr_connected_wifi_8266.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: GTR
mcu: STM32F407ZGT6
firmware: firmware-stm32f4-wifi.bin
wifi: ESP8266
module: large
schematic: https://github.com/bigtreetech/BIGTREETECH-GTR-V1.0/blob/master/BTT%20GTR%20V1.0/manual/GTR%20V1.0(SCH).PDF
DRP: PA_15
TRP: PC_11
ERP: PB_10
CS:
ESPRXTX: "{ PC_7, PC_6 }"
SerialRXTX: "{ PD_9, PD_8 }"
heat: "{ PC_0, PC_1, PC_2, PC_3, PA_3, PF_9, PF_10, PF_7, PF_5 }"
diagnostics: ""
smartdrivers: 5
stepperSPI: 5
spiInfo: "{ PB_3, PB_6, PG_15 }"
TMC: "{ PF_2, PC_13, PE_0, PG_14, PG_9, PD_3, PI_4, PF_4, PF_6, PI_7, PF_12 }"
example: PF_2 and PC_13
board: biqugtr_1.0
onboardDrivers: no
GPIO15: PB_12
GPIO13: PB_15
GPIO12: PB_14
GPIO14: PB_13
adapterRXTX: WiFi
sensorless: "gtr_sensorless.html"
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

<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a class="noCrossRef" href="#generate" data-toggle="tab">Using the Configurator</a></li>
    <li><a class="noCrossRef" href="#manual" data-toggle="tab">Manually Editing/Creating board.txt</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="generate" markdown="1">

{% include custom/3.4/wifi/generate_config.html %}

</div>

<div role="tabpanel" class="tab-pane" id="manual" markdown="1">

{% include custom/3.4/wifi/board_txt.html %}

</div>

</div>

{% include custom/3.4/wifi/sdcard_prep.html %}

{% include custom/3.4/wifi/sdcard_structure.html %}

{% include custom/3.4/wifi/wrapup.html %}
