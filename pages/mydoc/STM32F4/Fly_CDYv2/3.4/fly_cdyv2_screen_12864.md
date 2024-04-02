---
title: Connecting a 12864 screen to a Fly-CDYv2
tags: []
keywords: 
last_updated: 04/06/2023
summary: "How to connect a 12864 screen to a Fly-CDYv2"
sidebar: mydoc_sidebar
permalink: fly_cdyv2_screen_12864.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-CDYv2
spiChannel: 0
reprapSPIChannel : 3
---

## Overview

{% include important.html content="When using a 12864 screen, if the encoder is in a certain position (not clicked fully in to place), then the WiFi module does not start. It does not even flash the blue light on board reset. This is because the encoder pins are shared with the ESP8266 TX/RX pins and if the BTN_EN1 pin (which is the ESP8266 TX pin) is shorted to ground when you try and reset the ESP8266 then it will not boot. Normally the encoder will have neither of the pins shorted to ground. But if you happen to have it positioned between two of the indent positions then the switches will be closed and the ESP8266 will not boot." %}

{% include important.html content="Using a 12864 screen removes the option to update the WiFi firmware using RRF and also removes the use of the TFT header." %}

<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a class="noCrossRef" href="#reprap" data-toggle="tab">RepRapDiscount Full Graphic Smart Controller</a></li>
    <li><a class="noCrossRef" href="#fysetc" data-toggle="tab">Fysetc Mini12864 RGB Panel v2.1</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="reprap" markdown="1">

{% include custom/3.4/12864/reprap.html %}

</div>

<div role="tabpanel" class="tab-pane" id="fysetc" markdown="1">

{% include custom/3.4/12864/fysetc_mini_21.html %}

</div>

</div>

{% include custom/3.4/12864/menu.html %}

{% include custom/3.4/12864/troubleshooting.html %}

{% include custom/3.4/12864/sdcard.html %}
