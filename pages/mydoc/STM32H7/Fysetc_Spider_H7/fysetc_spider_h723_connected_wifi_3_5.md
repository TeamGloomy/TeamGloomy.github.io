---
title: Connecting a Fysetc Spider H723 via WiFi in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 12/03/2026
summary: "How to connect a Fysetc Spider H723 via WiFi"
sidebar: mydoc_sidebar
permalink: fysetc_spider_h723_connected_wifi_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fysetc Spider H723
mcu: STM32H723
firmware: firmware_spiderv3_h723.bin
wifi: ESP32
module: large
schematic: https://github.com/FYSETC/FYSETC-SPIDER-H7/blob/main/Schematic/SPIDER_H7_SCH.pdf
DRP: PA_8
TRP: PC_9
ERP: PD_2
CS:
ESPRXTX: "{ PD_1, PD_0 }"
SerialRXTX: "{ PA_10, PA_9 }"
heat: "{ bedtemp, e0temp, e1temp, e2temp, e3temp, e4temp }"
diagnostics: ""
smartdrivers: 
stepperSPI: 6
TMC: "{ PG_12, PG_11, PG_10, PG_9, PD_7, PD_6, PA_8, PF_3 }"
example: PG_12 and PG_11
board: fysetc_spider_h723
onboardDrivers: false
sensorless: "fysetc_spider_h723_sensorless.html"
rrfboot: custom/3.5/rrfboot/rrfboot_fysetc_spider_h723.html
onboardDrivers: false
rrfbootOverrides: false
---

{% include custom/3.5/wifi/overview.html %}

{% include custom/3.5/wifi/removeable.html %}

{% include custom/3.5/wifi/board_firmware.html %}

{% include custom/3.5/wifi/wifi_prep.html %}

{% include custom/3.5/wifi/dwc.html %}

{% include custom/3.5/wifi/removeable_large.html %}

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

{% include custom/3.5/wifi/wifi_board.html %}

{% include custom/3.5/wifi/drivers_post35.html %}

</div>

</div>

{% include custom/3.5/wifi/sdcard_prep.html %}

{% include custom/3.5/wifi/sdcard_structure.html %}

{% include custom/3.5/wifi/wrapup.html %}
