---
title: Connecting a Fly-Gemini-V1.1 via SBC
tags: []
keywords: 
last_updated: 10/09/2023
summary: "How to connect to a Fly-Gemini-V1.1 via SBC"
sidebar: mydoc_sidebar
permalink: fly_gemini_v1.1_connected_sbc.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-Gemini-V1.1
mcu: STM32F405VGT6
SBCchip: Allwinner H5
image: fly_gemini_highlighted.png
image1: fly_gemini_dip_1.png
image2: fly_gemini_dip_2.png
board: fly_geminiv1.1
sbcTfrReadyPin: PC_9
driverSPI: 2
---

{% include custom/3.4/integrated_sbc1.html %}

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

{% include custom/3.4/integrated_sbc2.html %}
