---
title: Connecting a 12864 screen to a Fly-CDYv3
tags: []
keywords: 
last_updated: 01/02/2023
summary: "How to connect a 12864 screen to a Fly-CDYv3"
sidebar: mydoc_sidebar
permalink: fly_cdyv3_screen_12864.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-CDYv3
spiChannel: 3
---

## Overview

{% include important.html content="When using a 12864 screen, remove the two jumpers that were added to update the ESP32 firmware." %}

{% include important.html content="Using a 12864 screen removes the option to update the WiFi firmware using RRF and also removes the use of the TFT header." %}

{% include important.html content="The Fly-CDYv3 can't be used with a single wire screen such as the Ender 3, without a custom wiring harness, due to one of the encoder pins always being tied low" %}

<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a class="noCrossRef" href="#reprap" data-toggle="tab">RepRapDiscount Full Graphic Smart Controller</a></li>
    <li><a class="noCrossRef" href="#fysetc" data-toggle="tab">Fysetc Mini12864 RGB Panel v2.1</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="reprap" markdown="1">

{% include custom/12864/reprap.html %}

</div>

<div role="tabpanel" class="tab-pane" id="fysetc" markdown="1">

{% include custom/12864/fysetc_mini_21.html %}

</div>

</div>

{% include custom/12864/menu.html %}

{% include custom/12864/troubleshooting.html %}

{% include custom/12864/sdcard.html %}