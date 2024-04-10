---
title: Connecting a SKR-RRF-E3 via Wifi in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 03/04/2024
summary: "Connecting a SKR-RRF-E3 via Wifi"
sidebar: mydoc_sidebar
permalink: skr_rrf_e3_connected_wifi_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: SKR-RRF-E3
mcu: STM32F407ZGT6
firmware: firmware_skrrrfe3_1_1_f4.bin
wifi: ESP8266
module: onboard
schematic: https://github.com/bigtreetech/BTT-E3-RRF/blob/master/BTT%20E3%20RRF%20V1.1/Hardware/BTT%20E3%20RRF%20V1.1-SCH.pdf
DRP: PA_6
TRP: PA_7
ERP: PA_4
CS:
ESPRXTX: "{ PD_9, PD_8 }"
SerialRXTX: ""
heat: "{ PA_0, PA_1, PA_2, PA_3 }"
diagnostics: ""
smartdrivers: 4
stepperSPI: 2
TMC: "{ PC_0, PC_1, PC_2, PC_3, PB_11, PB_10 }"
example: PC_0 and PC_1
board: biquskr_rrf_e3_1.1
onboardDrivers: true
rrfbootOverrides: false
rrfboot: custom/3.5/rrfboot/rrfboot_skr_rrf_e3.html
sensorless: "skr_rrf_e3_sensorless_3_5.html"
---

{% include custom/3.5/wifi/overview.html %}

{% include custom/3.5/wifi/board_firmware.html %}

{% include custom/3.5/wifi/wifi_prep.html %}

{% include custom/3.5/wifi/dwc.html %}

<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a class="noCrossRef" href="#generate" data-toggle="tab">Using the Configurator</a></li>
    <li><a class="noCrossRef" href="#manual" data-toggle="tab">Manually Editing/Creating board.txt</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="generate" markdown="1">

{% include custom/3.5/wifi/generate_config.html %}

</div>

<div role="tabpanel" class="tab-pane" id="manual" markdown="1">

{% include custom/3.5/wifi/board_txt.html %}

</div>

</div>

{% include custom/3.5/wifi/sdcard_prep.html %}

{% include custom/3.5/wifi/sdcard_structure.html %}

{% include custom/3.5/wifi/wrapup.html %}
