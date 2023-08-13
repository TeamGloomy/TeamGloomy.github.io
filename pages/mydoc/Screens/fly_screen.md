---
title: Fly Screens General Information
tags: []
keywords: 
last_updated: 11/03/2021
summary: "Fly Screens General Information"
sidebar: mydoc_sidebar
permalink: fly_screen.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

Fly produce two screens which are suitable for RepRapFirmware. There is a 4.3" version and a 7" version.  
They are currently available through [AliExpress](https://s.click.aliexpress.com/e/_DFFjDVR)

### Config.g

The following line should be added to your config.g

```text
M575 P1 S0 B57600
```  

<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a class="noCrossRef" href="#43" data-toggle="tab">4.3" Screen</a></li>
    <li><a class="noCrossRef" href="#7" data-toggle="tab">7" Screen</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="43" markdown="1">

The hardware information for the 4.3" screen can be found [here](https://github.com/FLYmaker/FLY-Screen/tree/master/Size%20drawing)

{% include image.html file="fly_43.png" alt="Fly 4.3 inch Screen" caption="Fly 4.3 inch Screen" %}

If you have purchased the Marlin version it is easy to convert it to a Duet version, just follow the update instructions below.

### Updating a 4.3 inch screen

To update the firmware on your screen, download the update.img file from [here](https://github.com/FLYmaker/FLY-Screen-RepRap/releases).  
Put the file into the root of a FAT32 formatted card and install it in the screen. You should then be prompted to install the update.  
Once finished, remove the SD card and power cycle the screen.  

</div>

<div role="tabpanel" class="tab-pane" id="7" markdown="1">

The hardware information for the 7" screen can be found [here](https://github.com/FLYmaker/FLY-Screen/tree/master/Size%20drawing)

{% include image.html file="fly_7.png" alt="Fly 7 inch Screen" caption="Fly 7 inch Screen" %}

If you have purchased the Marlin version it is easy to convert it to a Duet version, just follow the update instructions below.

### Updating a 7 inch screen

To update the firmware on your screen, download the update.img file from [here](https://github.com/FLYmaker/FLY-Screen-RepRap/releases).  
Put the file into the root of a FAT32 formatted card and install it in the screen. You should then be prompted to install the update.  
Once finished, remove the SD card and power cycle the screen.  

</div>

</div>
