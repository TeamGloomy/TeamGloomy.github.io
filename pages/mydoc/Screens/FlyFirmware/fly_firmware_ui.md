---
title: Editing the Fly Screen Firmware UI
tags: []
keywords: 
last_updated: 03/03/2022
summary: "How to edit the UI of the Fly Screen Firmware"
sidebar: mydoc_sidebar
permalink: fly_firmware_ui.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

A brief description of how to edit the UI for the Fly Screen Firmware.  

{% include tip.html content="This assumes the Flythings IDE has been setup as detailed in the [Compiling instructions](fly_firmware_compile.html)" %}

### UI File Location

The UI file can be found in UI/gcode.ftu. Double clicking the file in the IDE will open it up.  
{% include image.html file="fly_screen_firmware_4.png" alt="Flythings UI" caption="Flythings UI" %}  

### Editing an item

Each page of the display and be hidden/revealed by using the outline window in the bottom left of the Flythings IDE.  
{% include image.html file="fly_screen_firmware_5.png" alt="Flythings UI Outline" caption="Flythings UI Outline" %}  
Right clicking on an item in the GUI view will allow you to jump to the relative section of code.  
{% include image.html file="fly_screen_firmware_6.png" alt="Flythings UI Code" caption="Flythings UI Code" %}  

A manual for the Flythings IDE is available [here](https://developer.flythings.cn/en/)
