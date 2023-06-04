---
title: Connecting an SKR3EZ H723 via an ESP8266 or ESP32 WiFi Adapter
tags: []
keywords: 
last_updated: 04/06/2023
summary: "How to connect to an SKR3EZ H723 via an ESP8266 or ESP32 WiFi Adapter"
sidebar: mydoc_sidebar
permalink: skr_3_ez_h723_connected_wifi.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: SKR3EZ H723
mcu: STM32H723
firmware: firmware-stm32h7-wifi.bin
wifi: both
module: small
schematic: 
DRP: PB_10
TRP: PB_11
ERP: PC_14
CS: 
ESPRXTX: "{ PD_9, PD_8 }"
SerialRXTX: "{ PA_10, PA_9 }"
heat: "{ PA_1, PA_2, PA_3 }"
diagnostics: PA_13
stepperSPI: 3
spiInfo: "{ PE_14, PE_15, PE_13 }"
TMC: "{ PC_1, PC_3, PC_0, PC_2, PA_0 }"
example: PC_1 and PC_3
board: biquskr_3_ez_h723
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