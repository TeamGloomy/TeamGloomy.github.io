---
title: Connecting an SKR3EZ H743 via an ESP8266 or ESP32 WiFi Adapter
tags: []
keywords: 
last_updated: 10/09/2023
summary: "How to connect to an SKR3EZ H743 via an ESP8266 or ESP32 WiFi Adapter"
sidebar: mydoc_sidebar
permalink: skr_3_ez_h743_connected_wifi.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: SKR3EZ H743
mcu: STM32H743
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
board: biquskr_3_ez
onboardDrivers: false
sensorless: "skr_3_ez_h743_sensorless.html"
---

{% include custom/3.4/wifi/overview.html %}
{% include custom/3.4/wifi/removeable.html %}

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

{% include custom/3.4/wifi/sdcard_prep.html %}

{% include custom/3.4/wifi/sdcard_structure.html %}

{% include custom/3.4/wifi/wrapup.html %}
