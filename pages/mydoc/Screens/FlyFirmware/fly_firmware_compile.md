---
title: Compiling the Fly Screen Firmware
tags: []
keywords: 
last_updated: 03/03/2022
summary: "How to compile the Fly Screen Firmware"
sidebar: mydoc_sidebar
permalink: fly_firmware_compile.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

Fly produce two screens which are suitable for RepRapFirmware. There is a 4.3" version and a 7" version.  
They are currently available through [AliExpress](https://s.click.aliexpress.com/e/_DFFjDVR).  

Recently, the firmware was made open source, and this page details how to compile the firmware.  

### Required Software

To be able to compile the firmware, the Flythings IDE is required.  
The application is Windows only and can be downloaded from [here](https://developer.flythings.cn/en/download.html).

### Preparation of sources

Download the following github repository. 

{% include tip.html content="The preferred method for doing so is by using a git client (terminal or GUI). This allows for changes made to be tracked. My client of choice (jay_s_uk) is [gitkracken](https://www.gitkraken.com/)." %}

* (Fly-Screen-Reprap)[https://github.com/Mellow-3D/FLY-Screen-RepRap] - This contains both the 4.3" and 7" source

### Importing the files

1. Open the Flythings IDE.  
2. Click on File -> Switch Workplace -> Other.
3. On the window that opens, using the browse button, navigate to the folder where you downloaded the source to and click ok.
4. Click Launch.
5. Click on File -> Import.
6. On the window that opens, expand Flythings and click on Flythings, highlighted below. Click Next.   
{% include image.html file="fly_screen_firmware_1.png" alt="Flythings Firmware Import" caption="Flythings Firmware Import" %}  
7. On the window that opens, using the browse button, navigate to the folder where you downloaded the source to and click ok.
8. Click on Select All and then Finish

### Compiling the firmware

1. In the Flythings IDE, on the project explorer window, click on the folder of the firmware you want to compile.
{% include image.html file="fly_screen_firmware_2.png" alt="Flythings Firmware Selection" caption="Flythings Firmware Selection" %}  
2. Click on the blue icon highlighted below.
{% include image.html file="fly_screen_firmware_3.png" alt="Flythings Firmware Compiling" caption="Flythings Firmware Compiling" %} 
3. Select a folder where you want the firmware to be output to. Click ok.
4. The compiling process is now complete.

### Uploading the firmware

1. Make sure the file is called update.img
2. Place the relevant update into the root of a FAT32 formatted SD card.
3. Put the SD card in the screen
4. Power on the screen.
5. Apply the update.
6. Once complete, power down the screen and remove the SD Card