---
title: Available WiFi/SBC Adapters
tags: []
keywords: 
last_updated: 21/01/2021
summary: "Available WiFi Adapters"
sidebar: mydoc_sidebar
permalink: adapters.html
folder: mydoc
comments: false
toc: false
---

## Overview

There are three main suppliers of WiFi adapters used with the port.  
They are detailed below.  

<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a class="noCrossRef" href="#PCR" data-toggle="tab">PCR/TeamGloomy</a></li>
    <li><a class="noCrossRef" href="#Fly" data-toggle="tab">Fly</a></li>
    <li><a class="noCrossRef" href="#BTT" data-toggle="tab">BigTreeTech (BTT)</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="PCR" markdown="1">

PCR/TeamGloomy have been producing adapters for different boards for a long time now.  
They can be purchased through [tindie](https://www.tindie.com/stores/pcr/).  
We produce WiFi adapters that are for the following boards:

- GTR
- MKS SGen L v1.0
- MKS SGen L v2.0
- SKR v1.3
- SKR v1.4
- SKR E3 Turbo
- SKR Pro

As well as WiFi adapters, we also produce SBC adapters for the following boards:

- GTR
- SKR v1.3
- SKR v1.4
- SKR Pro

Finally, we also produce adapters to allow the BTT-MOT-EXP to be used on the following boards:

- SKR v1.3
- SKR v1.4
- SKR Pro

Information about each can be found on the relevant board pages.

</div>

<div role="tabpanel" class="tab-pane" id="Fly" markdown="1">

Fly produce a single WiFi module that has a pinout that is compatible with the following boards:

- Fly-407ZG
- GTR
- SKR v1.3
- SKR v1.4
- SKR Pro

{% include note.html content="It should be noted that they do not have a USB port. They should be updated using DWC or a USB Serial TTL adapter" %}

They can be purchased from [AliExpress](https://www.aliexpress.com/item/1005001370540066.html)

There are now two versions of this board. The blue one is the original version and had 2 sets of EXP1 and EXP 1 headers. The new version has a black PCB and passes 8 pins (10 pins including 5v and Gnd) through. This allows use of a 12864 display on an STM32 based board. Below is the pinout.  

{% include image.html file="fly_wifi_pinout.png" alt="Fly Wifi Pinout" caption="Fly Wifi Pinout" %}  
{% include image.html file="fly_wifi_sizes.png" alt="Fly Wifi Sizes" caption="Fly Wifi Sizes" %}

</div>

<div role="tabpanel" class="tab-pane" id="BTT" markdown="1">

BigTreeTech (BTT) produce a single WiFi module that has a pinout that is compatible with the following boards:

- Fly-407ZG
- GTR
- SKR v1.3
- SKR v1.4
- SKR Pro

{% include note.html content="It should be noted that they do not support updating through DWC." %}

They can be purchased from [AliExpress](https://www.aliexpress.com/item/4001315145042.html)

</div>

</div>