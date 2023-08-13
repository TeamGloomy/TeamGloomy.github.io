---
title: Connecting a 12864 screen to a Fly-E3
tags: []
keywords: 
last_updated: 13/05/2022
summary: "How to connect a 12864 screen to a Fly-E3"
sidebar: mydoc_sidebar
permalink: fly_e3_screen_12864.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-E3
spiChannel: 4
enderSpiChannel: 4
---

## Overview

The information here is aimed at connecting a stock ender 3 12864 display but it can also be applied to other 12864 displays (as long as they are ST7567 or ST7920 based).  

<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a class="noCrossRef" href="#e3stock" data-toggle="tab">Ender 3 Stock Screen</a></li>
    <li><a class="noCrossRef" href="#reprap" data-toggle="tab">RepRapDiscount Full Graphic Smart Controller</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="e3stock" markdown="1">

## Stock Ender 3 Display Wiring

The ender 3 stock display can be connected directly to the EXP header of the Fly-E3. No modifications are required.

{% include custom/12864/ender3_1header.html %}

</div>

<div role="tabpanel" class="tab-pane" id="reprap" markdown="1">

## RepRapDiscount Display Wiring

The RepRapDiscount Full Graphic Smart Controller can be connected directly to the EXP header of the Fly-E3 using custom wiring.  
Use the image below as a guide. Thanks @Samsan

{% include image.html file="reprap_fly_e3.png" alt="Reprap Discount to Fly-E3" caption="Connecting a RepRapDiscount Full Graphic Smart Controller to the Fly-E3" %}

{% include custom/12864/ender3_1header.html %}

</div>

</div>

{% include custom/12864/menu.html %}

{% include custom/12864/troubleshooting.html %}
