---
title: Connecting a BLTouch or BTT MicroProbe to a Fysetc Spider H723
tags: []
keywords: 
last_updated: 12/03/2026
summary: "How to connect a BLTouch or BTT MicroProbe to a Fysetc Spider H723"
permalink: fysetc_spider_h723_bltouch.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fysetc Spider H723
image: ""
yellowPin: PA_2
yellowName: ymax
whitePin: PA_0
whiteName: zmin
---

{% include warning.html content="The pins used for the bltouch/microprobe are shared with ymax and zmin so make sure you aren't using those ports." %}

<ul id="profileTabs" class="nav nav-tabs">
  <li class="active"><a class="noCrossRef" href="#bltouch" data-toggle="tab">BLTouch</a></li>  
	<li><a class="noCrossRef" href="#micro" data-toggle="tab">BTT MicroProbe</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="bltouch" markdown="1">

{% include custom/H7/bltouch.html %}

</div>

<div role="tabpanel" class="tab-pane" id="micro" markdown="1">

{% include custom/H7/microprobe.html %}

</div>

</div>
