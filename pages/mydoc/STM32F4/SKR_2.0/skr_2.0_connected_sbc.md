---
title: Connecting an SKR v2.0 via SBC
tags: []
keywords: 
last_updated: 10/09/2023
summary: "How to connect to an SKR v2.0 via SBC"
sidebar: mydoc_sidebar
permalink: skr_2.0_connected_sbc.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: SKR v2.0
mcu: STM32F407VGT6
firmware: firmware-stm32f4-sbc.bin
schematic: https://github.com/bigtreetech/SKR-2/blob/master/Hardware/BIGTREETECH%20SKR%202-Pin.pdf
BCM11: PB_13
BCM9: PB_14
BCM10: PB_15
BCM8: PB_12
BCM25: PC_14
heat: "{ PD_7, PB_3, PB_4 }"
diagnostics: PA_13
stepperSPI: 3
spiInfo: "{ PE_15, PA_14, PE_14 }"
TMC: "{ PC_1, PC_3, PC_0, PC_2, PA_0 }"
example: PC_1 and PC_3
board: biquskr_2
sensorless: "skr_2.0_sensorless.html"
---

{% include custom/3.4/sbc1.html %}

<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a class="manualpost35" href="#generate" data-toggle="tab">Drivers Post 3.5RC1</a></li>
    <li><a class="noCrossRef" href="#manualpre35" data-toggle="tab">Drivers Pre 3.5RC1</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="generate" markdown="1">

{% include custom/3.4/wifi/drivers_post35.html %}

</div>

<div role="tabpanel" class="tab-pane" id="manualpre35" markdown="1">

{% include custom/3.4/wifi/drivers_pre35.html %}

</div>

</div>

{% include custom/3.4/sbc2.html %}
