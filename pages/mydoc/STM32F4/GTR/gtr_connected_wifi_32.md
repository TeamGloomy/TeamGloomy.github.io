---
title: Connecting a GTR via an ESP32 WiFi Adapter
tags: []
keywords: 
last_updated: 02/06/2022
summary: "How to connect to a GTR via an ESP32 WiFi Adapter"
sidebar: mydoc_sidebar
permalink: gtr_connected_wifi_32.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: GTR
mcu: STM32F407ZGT6
firmware: firmware-stm32f4-wifi.bin
wifi: ESP32
module: large
schematic: https://github.com/bigtreetech/BIGTREETECH-GTR-V1.0/blob/master/BTT%20GTR%20V1.0/manual/GTR%20V1.0(SCH).PDF
DRP: D.10
TRP: H.10
ERP: B.10
CS: ""
ESPRXTX: "{ D.9, D.8 }"
SerialRXTX: "{ C.7, C.6 }"
heat: "{ C.0, C.1, C.2, C.3, A.3, F.9, F.10, F.7, F.5 }"
diagnostics: ""
smartdrivers: 5
stepperSPI: 5
spiInfo: "{ B.3, B.6, G.15 }"
TMC: "{ F.2, C.13, E.0, G.14, G.9, D.3, I.4, F.4, F.6, I.7, F.12 }"
example: F.2 and C.13
board: biqugtr_1.0
onboardDrivers: no
GPIO15: B.12
GPIO13: B.15
GPIO12: B.14
GPIO14: B.13
adapterRXTX: WiFi
image: gtr_esp32_connection.png

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

</div>

</div>

{% include custom/wifi/sdcard_prep.html %}

{% include custom/wifi/sdcard_structure.html %}

{% include custom/wifi/wrapup.html %} 