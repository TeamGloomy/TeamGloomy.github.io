---
title: Connecting a 12864 screen to a Fly-Super5Pro H723 in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 10/04/2024
summary: "How to connect a 12864 screen to a Fly-Super5Pro H723"
sidebar: mydoc_sidebar
permalink: fly_super5pro_h723_screen_12864_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-Super5Pro H723
spiChannel: 2
reprapCustomSPI: true
reprapSPIChannel : 5
reprapSPIPins: "{PD_0, NoPin, PA_15}"
---

<ul id="profileTabs" class="nav nav-tabs">
  <li class="active"><a class="noCrossRef" href="#fysetc" data-toggle="tab">Fysetc Mini v1.2 12864</a></li>  
	<li><a class="noCrossRef" href="#reprap" data-toggle="tab">RepRapDiscount Full Graphic Smart Controller</a></li>
  <li><a class="noCrossRef" href="#fysetc21" data-toggle="tab">Fysetc Mini v2.1 12864</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="fysetc" markdown="1">

{% include custom/3.5/12864/fysetc_mini_12.html %}

</div>

<div role="tabpanel" class="tab-pane" id="reprap" markdown="1">

{% include custom/3.5/12864/reprap.html %}

</div>

<div role="tabpanel" class="tab-pane" id="fysetc21" markdown="1">

{% include custom/3.5/12864/fysetc_mini_21.html %}

</div>

</div>

{% include custom/3.5/12864/menu.html %}

{% include custom/3.5/12864/troubleshooting.html %}

{% include custom/3.5/12864/sdcard.html %}
