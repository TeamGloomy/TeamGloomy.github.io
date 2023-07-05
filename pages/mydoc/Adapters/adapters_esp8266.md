---
title: Available ESP8266 WiFi and SBC Adapters
tags: []
keywords: 
last_updated: 14/07/2021
summary: "A description of the different ESP8266 WiFi and SBC Adapters available"
sidebar: mydoc_sidebar
permalink: adapters_esp8266.html
folder: mydoc
comments: false
toc: false
---

## Overview

There are three main suppliers of ESP8266 WiFi adapters used with the port.  
They are detailed below.  

<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a class="noCrossRef" href="#PCR" data-toggle="tab">PCR/TeamGloomy</a></li>
    <li><a class="noCrossRef" href="#Fly" data-toggle="tab">Fly/Mellow</a></li>
    <li><a class="noCrossRef" href="#BTT" data-toggle="tab">BigTreeTech (BTT)</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="PCR" markdown="1">

## TeamGloomy Adapters

PCR/TeamGloomy have been producing adapters for different boards for a long time now.  
They can be purchased through [tindie](https://www.tindie.com/stores/pcr/).  
We produce ESP8266 WiFi adapters that are for the following boards:

- GTR
- MKS SGen L v1.0
- MKS SGen L v2.0
- SKR v1.3
- SKR v1.4
- SKR E3 Turbo
- SKR Pro

As well as ESP8266 WiFi adapters, we also produce SBC adapters for the following boards:

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

## Fly Adapters

Fly produce a single ESP8266 WiFi module that has a pinout that is compatible with the following boards:

- Fly-407ZG
- GTR
- SKR v1.3
- SKR v1.4
- SKR Pro

{% include note.html content="It should be noted that they do not have a USB port. They should be updated using DWC or a USB Serial TTL adapter" %}

They can be purchased from [AliExpress](https://s.click.aliexpress.com/e/_DB4zjPF)

There are now two versions of this board. The blue one is the original version and had 2 sets of EXP1 and EXP 1 headers. The new version has a black PCB and passes 8 pins (10 pins including 5v and Gnd) through. This allows use of a 12864 display on an STM32 based board. Below is the pinout.  

{% include image.html file="fly_wifi_pinout.png" alt="Fly WiFi Pinout" caption="Fly WiFi Pinout" %}  
{% include image.html file="fly_wifi_sizes.png" alt="Fly WiFi Sizes" caption="Fly WiFi Sizes" %}

</div>

<div role="tabpanel" class="tab-pane" id="BTT" markdown="1">

## BTT Adapters

BigTreeTech (BTT) produce a single ESP8266 WiFi module that has a pinout that is compatible with the following boards:

- Fly-407ZG
- GTR
- SKR v1.3
- SKR v1.4
- SKR Pro

{% include note.html content="It should be noted that they do not support updating through RRF without carrying out the mod below." %}

They can be purchased from [AliExpress](https://s.click.aliexpress.com/e/_DlztXpf)

## Modification to allow updating through RRF

To be able to update the ESP8266 through RRF, some hardware modifications are required, which includes removing the functionality of using the USB port for updating. Credits go to @Fettpanda

Firstly, cut the two PCB traces shown in the image below.  
{% include image.html file="btt_rrf_wifi_mod.png" alt="BTT RRF WiFi Mod" caption="Traces to cut on BTT-RRF-WiFi" %}

Solder two cables at the two points shown below.  
{% include image.html file="btt_rrf_wifi_mod1.PNG" alt="BTT RRF WiFi Mod" caption="Cables to solder on BTT-RRF-WiFi" %}

Connect the TX cable from the adapter to the RX connection on the board. Connect the RX cable from the adapter to the TX connection on the board.  
Add the correct information for the board being used to the board.txt file. Thia can be found in the Updating the ESP8266 by RRF section on each connectiong via WiFi page.  
</div>

</div>