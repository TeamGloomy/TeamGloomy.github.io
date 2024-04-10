---
title: Connecting an BTT Kraken via an ESP32 WiFi Adapter
tags: []
keywords: 
last_updated: 27/12/2023
summary: "How to connect to an BTT Kraken via an ESP32 WiFi Adapter"
sidebar: mydoc_sidebar
permalink: btt_kraken_h723_connected_wifi_32.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: BTT Kraken
mcu: STM32H723VGT6
firmware: firmware-stm32h723-wifi.bin
wifi: ESP32
module: large
schematic: https://github.com/bigtreetech/BIGTREETECH-Kraken/blob/master/Hardware/BIGTREETECH%20Kraken%20V1.0-SCH.pdf
DRP: PG_8
TRP: PG_7
ERP: PG_6
CS: PE_11
wifiSPI: 6
ESPRXTX: "{ PB_11, PB_10 }"
SerialRXTX: "{ PD_9, PD_8 }"
heat: "{ PB_0, PB_1, PC_5, PC_4, PA_7 }"
diagnostics: 
stepperSPI: 3
adapterRXTX: WiFi
image: btt_kraken_esp32.jpg
EXP: EXP2
board: biqukraken_h723
onboardDrivers: true
smartdrivers: 8
sensorless: "btt_kraken_h723_sensorless.html"
canWrite: PD_1
canRead: PD_0
---

{% include custom/3.4/wifi/overview.html %}

{% include custom/3.4/wifi/board_firmware.html %}

{% include custom/3.4/wifi/wifi_prep.html %}

{% include custom/3.4/wifi/dwc.html %}

{% include custom/3.4/wifi/removeable_large.html %}

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
