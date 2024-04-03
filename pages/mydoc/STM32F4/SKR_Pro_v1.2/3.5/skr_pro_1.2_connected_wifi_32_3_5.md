---
title: Connecting an SKR Pro v1.2 via an ESP32 WiFi Adapter in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 03/04/2024
summary: "Connecting an SKR Pro v1.2 via an ESP32 WiFi Adapter"
sidebar: mydoc_sidebar
permalink: skr_pro_1.2_connected_wifi_32_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: SKR Pro v1.2
mcu: STM32F407ZGT6
firmware: firmware_skrpro1_2_f4.bin
wifi: ESP32
module: large
schematic: https://github.com/bigtreetech/BIGTREETECH-SKR-PRO-V1.1/blob/master/SKR-PRO-V1.2/Schematic/SKR-PRO-V1.2.PDF
DRP: PG_10
TRP: PF_11
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
onboardDrivers: no
GPIO15: PB_12
GPIO13: PB_15
GPIO12: PB_14
GPIO14: PB_13
adapterRXTX: WiFi
image: skr_pro_esp32_connection.jpg
EXP: EXP2
sensorless: "skr_pro_1.2_sensorless_3_5.html"
rrfboot: custom/3.5/rrfboot/rrfboot_skr_pro_1.2.html
onboardDrivers: no
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
{% include custom/3.5/SKR_Pro_UART.html %}
{% include custom/3.5/wifi/drivers_post35.html %}

</div>

</div>

{% include custom/3.5/wifi/sdcard_prep.html %}

{% include custom/3.5/wifi/sdcard_structure.html %}

{% include custom/3.5/wifi/wrapup.html %}
