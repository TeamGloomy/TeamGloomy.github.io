---
title: Connecting a 12864 screen to a Fly-E3-Ultra H723 in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 23/04/2025
summary: "How to connect a 12864 screen to a Fly-E3-Ultra H723"
sidebar: mydoc_sidebar
permalink: fly_e3_ultra_screen_12864_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-E3-Ultra H723
enderSpiChannel: 4
spiChannel: 2
reprapCustomSPI: true
reprapSPIChannel : 5
reprapSPIPins: "{PE_9, NoPin, PA_14}"
---

<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a class="noCrossRef" href="#e3stock" data-toggle="tab">Ender 3 Stock Screen Directly to EXP</a></li>
    <li><a class="noCrossRef" href="#reprap" data-toggle="tab">RepRapDiscount Full Graphic Smart Controller</a></li>
    <li><a class="noCrossRef" href="#fysetc" data-toggle="tab">Fysetc Mini12864 RGB Panel v2.1</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="e3stock" markdown="1">

## Wiring

The ender 3 stock display can be connected directly to the EXP1 header of the Fly-E3-Pro-v3. No modifications are required.

{% include custom/3.5/12864/ender3_1header.html %}

</div>

<div role="tabpanel" class="tab-pane" id="reprap" markdown="1">

{% include custom/3.5/12864/reprap.html %}

</div>

<div role="tabpanel" class="tab-pane" id="fysetc" markdown="1">

{% include custom/3.5/12864/fysetc_mini_21.html %}

</div>

</div>

{% include custom/3.5/12864/menu.html %}

{% include custom/3.5/12864/troubleshooting.html %}

{% include custom/3.5/12864/sdcard.html %}
