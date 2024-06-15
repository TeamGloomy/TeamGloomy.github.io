---
title: Connecting a BLTouch or BTT MicroProbe to a Fly-SHT36 Max V3
tags: []
keywords: 
last_updated: 15/06/2024
summary: "How to connect a BLTouch or BTT MicroProbe to a Fly-SHT36 Max V3"
sidebar: mydoc_sidebar
permalink: fly_sht36_max_v3_bltouch.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-SHT36 Max V3
image: "fly_sht36_bltouch.png"
yellowPin: GPIO24
yellowName: io0.out
whitePin: GPIO22
whiteName: io0.in
---

{% include important.html content="The changes shown below that are to be made to config.g assume that the toolboard uses the default CAN address of 124. If you have changed the default CAN address, make sure you change the 124 to the correct address." %}

<ul id="profileTabs" class="nav nav-tabs">
  <li class="active"><a class="noCrossRef" href="#bltouch" data-toggle="tab">BLTouch</a></li>  
	<li><a class="noCrossRef" href="#micro" data-toggle="tab">BTT MicroProbe</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="bltouch" markdown="1">

{% include custom/3.5/bltouch_can.html %}

</div>

<div role="tabpanel" class="tab-pane" id="micro" markdown="1">

{% include custom/3.5/microprobe_can.html %}

</div>

</div>
