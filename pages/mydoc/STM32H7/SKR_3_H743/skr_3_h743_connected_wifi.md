---
title: Connecting an SKR3 H743 via an ESP8266 or ESP32 WiFi Adapter
tags: []
keywords: 
last_updated: 29/11/2022
summary: "How to connect to an SKR3 H743 via an ESP8266 or ESP32 WiFi Adapter"
sidebar: mydoc_sidebar
permalink: skr_3_h743_connected_wifi.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: SKR3 H743
mcu: STM32H743
firmware: firmware-stm32h7-wifi.bin
wifi: both
module: small
schematic: 
DRP: B.10
TRP: B.11
ERP: C.14
CS: 
ESPRXTX: "{ D.9, D.8 }"
SerialRXTX: "{ A.10, A.9 }"
heat: "{ A.1, A.2, A.3 }"
diagnostics: A.13
stepperSPI: 3
spiInfo: "{ E.14, E.15, E.13 }"
TMC: "{ C.1, C.3, C.0, C.2, A.0 }"
example: C.1 and C.3
board: biquskr_3
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