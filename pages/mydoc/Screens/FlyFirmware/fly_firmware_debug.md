---
title: Debugging the Fly Screen Firmware
tags: []
keywords: 
last_updated: 03/03/2022
summary: "How to debug the Fly Screen Firmware"
sidebar: mydoc_sidebar
permalink: fly_firmware_debug.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

A brief description of how to edit the UI for the Fly Screen Firmware.  

{% include tip.html content="This assumes the Flythings IDE has been setup as detailed in the [Compiling instructions](fly_firmware_compile.html)" %}

### Debug

It is possible to debug the firmware changes you've made using a screen attached to your computer over USB.

1. From the menu at the top, click on Flythings -> ADB Configuration.
2. On the window that appears, click flythings on the left, then USB for ADB and apply and close.
3. Plug in the screen via USB.
4. Right click on the project folder and select Launch Flythings Application
{% include image.html file="fly_screen_firmware_10.png" alt="Launch Flythings Application" caption="Launch Flythings Application" %}  
5. Tick the box on the next window and click ok.
{% include image.html file="fly_screen_firmware_11.png" alt="Launch Flythings Application" caption="Launch Flythings Application" %} 
6. View the log messages by clicking Flythings -> Show Log Perspective
7. You can get items to log to the LogCat. Below is an example.
{% include image.html file="fly_screen_firmware_13.png" alt="Log code" caption="Log code" %}  
{% include image.html file="fly_screen_firmware_12.png" alt="LogCat" caption="LogCat" %}  