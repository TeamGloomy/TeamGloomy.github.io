---
title: Connecting an SKR Pro v1.2 via an ESP8266 WiFi Adapter
tags: []
keywords: 
last_updated: 03/04/2024
summary: "Connecting an SKR Pro v1.2 via an ESP8266 WiFi Adapter"
sidebar: mydoc_sidebar
permalink: skr_pro_connected_wifi_8266.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: SKR Pro v1.2
mcu: STM32F407ZGT6
firmware: firmware-stm32f4-wifi.bin
wifi: ESP8266
module: large
schematic: https://github.com/bigtreetech/BIGTREETECH-SKR-PRO-V1.1/blob/master/SKR-PRO-V1.2/Schematic/SKR-PRO-V1.2.PDF
DRP: PA_8
TRP: PG_4
ERP: PF_12
CS:
ESPRXTX: "{ PD_9, PD_8 }"
SerialRXTX: "{ PA_10, PA_9 }"
heat: "{ PF_6, PF_3, PF_4, PF_5 }"
diagnostics: ""
smartdrivers: 5
stepperSPI: 2
spiInfo: ""
TMC: "{ PB_10, PE_12, PG_8, PE_15, PE_10, PG_5 }"
example: PB_10 and PE_12
board: biquskrpro_1.1
onboardDrivers: false
GPIO15: PB_12
GPIO13: PB_15
GPIO12: PB_14
GPIO14: PB_13
adapterRXTX: WiFi
sensorless: "skr_pro_1.2_sensorless.html"
---

{% include custom/3.4/wifi/overview.html %}

{% include custom/3.4/wifi/board_firmware.html %}

{% include custom/3.4/wifi/wifi_prep.html %}

{% include custom/3.4/wifi/dwc.html %}

<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a class="noCrossRef" href="#purchased" data-toggle="tab">Using a Purchased WiFi Adapter</a></li>
    <li><a class="noCrossRef" href="#homemade" data-toggle="tab">Using a Homemade WiFi Adapter</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="purchased" markdown="1">

{% include custom/3.4/wifi/removeable_large.html %}

</div>

<div role="tabpanel" class="tab-pane" id="homemade" markdown="1">

{% include custom/3.4/wifi/homemade_ESP8266.html %}

</div>

</div>

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
{% include custom/3.4/SKR_Pro_UART.html %}
{% include custom/3.4/wifi/drivers_pre35.html %}

</div>

<div role="tabpanel" class="tab-pane" id="manualpost35" markdown="1">

{% include custom/3.4/wifi/board_txt.html %}
{% include custom/3.4/SKR_Pro_UART.html %}
{% include custom/3.4/wifi/drivers_post35.html %}

</div>

</div>

{% include custom/3.4/wifi/sdcard_prep.html %}

{% include custom/3.4/wifi/sdcard_structure.html %}

{% include custom/3.4/wifi/wrapup.html %}
