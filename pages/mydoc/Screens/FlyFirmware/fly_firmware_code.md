---
title: Editing the Fly Screen Firmware Code
tags: []
keywords: 
last_updated: 03/03/2022
summary: "How to edit the code of the Fly Screen Firmware"
sidebar: mydoc_sidebar
permalink: fly_firmware_code.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

A brief description of how to edit the code for the Fly Screen Firmware.  

{% include tip.html content="This assumes the Flythings IDE has been setup as detailed in the [Compiling instructions](fly_firmware_compile.html)" %}

### Code File Location

The main code file can be found in jni/logic/gcodeLogic.cc. Double clicking the file in the IDE will open it up.  
{% include image.html file="fly_screen_firmware_7.png" alt="Flythings Code" caption="Flythings Code" %} 

### General Information

There are different timers available to denote how often something is queried. Each one is in milliseconds.  
{% include image.html file="fly_screen_firmware_8.png" alt="Flythings Code Timers" caption="Flythings Code Timers" %} 

On the below example, the ID is set to 0. ID 0, as shown above, is ran every 1000ms or 1s. The serial port is used every second to send M408 to the firmware.  
{% include image.html file="fly_screen_firmware_9.png" alt="Flythings Code Timers Example" caption="Flythings Code Timers Example" %} 