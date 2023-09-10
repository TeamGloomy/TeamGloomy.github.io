---
title: Connecting an BTT Octopus Pro v1.0 F429 Version via SBC
tags: []
keywords: 
last_updated: 10/09/2023
summary: "How to connect to an BTT Octopus Pro v1.0 F429 Version via SBC"
sidebar: mydoc_sidebar
permalink: btt_octopus_pro_1.0_f429_connected_sbc.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: BTT Octopus Pro v1.0 F429 Version
mcu: STM32F407VGT6
firmware: firmware-stm32f4-sbc.bin
schematic: https://github.com/bigtreetech/BIGTREETECH-OCTOPUS-Pro/blob/master/Hardware/BIGTREETECH%20Octopus%20Pro_SCH.pdf
BCM11: PB_13
BCM9: PC_2
BCM10: PC_3
BCM8: PB_12
BCM25: PG_7
heat: "{ PF_3, PF_4, PF_5, PF_6, PF_7 }"
diagnostics: PA_13
stepperSPI: 0
TMC: "{ PG_6, PG_9, PG_10, PG_11, PG_12, PG_13, PG_14, PG_15 }"
example: PG_6 and PG_9
board: biqoctopuspro_1.0
---

{% include custom/sbc1.html %}

<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a class="manualpost35" href="#generate" data-toggle="tab">Drivers Post 3.5RC1</a></li>
    <li><a class="noCrossRef" href="#manualpre35" data-toggle="tab">Drivers Pre 3.5RC1</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="generate" markdown="1">

{% include custom/wifi/drivers_post35.html %}

</div>

<div role="tabpanel" class="tab-pane" id="manualpre35" markdown="1">

{% include custom/wifi/drivers_pre35.html %}

</div>

</div>

{% include custom/sbc2.html %}
