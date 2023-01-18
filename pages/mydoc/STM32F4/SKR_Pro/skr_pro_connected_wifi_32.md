---
title: Connecting an SKR Pro v1.1 and v1.2 via an ESP32 WiFi Adapter
tags: []
keywords: 
last_updated: 18/01/2023
summary: "Connecting an SKR Pro v1.1 and v1.2 via an ESP32 WiFi Adapter"
sidebar: mydoc_sidebar
permalink: skr_pro_connected_wifi_32.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: SKR Pro v1.1 or v1.2
mcu: STM32F407ZGT6
firmware: firmware-stm32f4-wifi.bin
wifi: ESP32
module: large
schematic: https://github.com/bigtreetech/BIGTREETECH-SKR-PRO-V1.1/blob/master/manual/SKR-PRO-V1.1-Pin.pdf
DRP: G.10
TRP: F.11
ERP: F.12
CS:
ESPRXTX: "{ D.9, D.8 }"
SerialRXTX: "{ A.10, A.9 }"
heat: "{ F.6, F.3, F.4, F.5 }"
diagnostics: ""
smartdrivers: 5
stepperSPI: 2
spiInfo: ""
TMC: "{ B.10, E.12, G.8, E.15, E.10, G.5 }"
example: B.10 and E.12
board: biquskrpro_1.1
onboardDrivers: no
GPIO15: B.12
GPIO13: B.15
GPIO12: B.14
GPIO14: B.13
adapterRXTX: WiFi
image: skr_pro_esp32_connection.jpg
---

{% include custom/wifi/overview.html %}

{% include custom/wifi/board_firmware.html %}

{% include custom/wifi/wifi_prep.html %}

{% include custom/wifi/dwc.html %}

<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a class="noCrossRef" href="#purchased" data-toggle="tab">Using a Purchased WiFi Adapter</a></li>
    <li><a class="noCrossRef" href="#homemade" data-toggle="tab">Using a Homemade WiFi Adapter</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="purchased" markdown="1">

{% include custom/wifi/removeable_large.html %}

</div>

<div role="tabpanel" class="tab-pane" id="homemade" markdown="1">

{% include custom/wifi/homemade_ESP32.html %}

</div>

</div>

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
{% include custom/SKR_Pro_UART.html %}

</div>

</div>

{% include custom/wifi/sdcard_prep.html %}

{% include custom/wifi/sdcard_structure.html %}

{% include custom/wifi/wrapup.html %} 