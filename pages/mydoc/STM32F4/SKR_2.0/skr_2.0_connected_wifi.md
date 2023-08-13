---
title: Connecting an SKR v2.0 via an ESP8266 or ESP32 WiFi Adapter
tags: []
keywords: 
last_updated: 06/01/2023
summary: "How to connect to an SKR v2.0 via an ESP8266 or ESP32 WiFi Adapter"
sidebar: mydoc_sidebar
permalink: skr_2.0_connected_wifi.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: SKR v2.0
mcu: STM32F407VGT6
firmware: firmware-stm32f4-wifi.bin
wifi: both
module: small
schematic: https://github.com/bigtreetech/SKR-2/blob/master/Hardware/BIGTREETECH%20SKR%202-Pin.pdf
DRP: PB_10
TRP: PB_11
ERP: PC_14
CS:
ESPRXTX: "{ PD_9, PD_8 }"
SerialRXTX: "{ PA_10, PA_9 }"
heat: "{ PD_7, PB_3, PB_4 }"
diagnostics: PA_13
stepperSPI: 3
spiInfo: "{ PE_15, PA_14, PE_14 }"
TMC: "{ PC_1, PC_3, PC_0, PC_2, PA_0 }"
example: PC_1 and PC_3
board: biquskr_2
onboardDrivers: no
---

{% include custom/wifi/overview.html %}
{% include custom/wifi/removeable.html %}

{% include custom/wifi/board_firmware.html %}

{% include custom/wifi/wifi_prep.html %}

{% include custom/wifi/dwc.html %}

<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a class="noCrossRef" href="#generate" data-toggle="tab">Using the Configurator</a></li>
    <li><a class="noCrossRef" href="#manual" data-toggle="tab">Manually Editing/Creating board.txt</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="generate" markdown="1">

{% include custom/wifi/generate_config.html %}

</div>

<div role="tabpanel" class="tab-pane" id="manual" markdown="1">

{% include custom/wifi/board_txt.html %}

</div>

</div>

{% include custom/wifi/sdcard_prep.html %}

{% include custom/wifi/sdcard_structure.html %}

{% include custom/wifi/wrapup.html %}
