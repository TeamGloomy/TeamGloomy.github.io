---
title: Flashing a bootloader to the Fly-Super8Pro H743
tags: []
keywords: 
last_updated: 29/11/2022
summary: "How to flash an RRF compatible bootloader to the Fly-Super8Pro H743"
sidebar: mydoc_sidebar
permalink: fly_super8pro_h743_bootloader.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The Fly-Super8Pro H743 does not come with an RRF compatible bootloader, so this page covers how to flash one.

### Prerequisits

You need to download the following items to be able to update the bootloader.  
* [STM32CubeProg](https://www.st.com/en/development-tools/stm32cubeprog.html)
* [RRF Bootloader](https://github.com/gloomyandy/IAP/releases)

Once you have downloaded STM32CubeProg, install it using the default options.

### Flashing the bootloader

Install a jumper in the position shown below. This places the board in DFU mode to allow the bootloader to be flashed.  
{% include image.html file="super8pro_jumper.png" alt="Super8Pro DFU Jumper" caption="Super8Pro DFU Jumper" %}

Open the STM32CubeProg software.  

Click on the box highlighted below and select USB.
{% include image.html file="super8pro_bootloader_1.png" alt="Super8Pro STM32CubeProg" caption="Super8Pro STM32CubeProg" %}

Plug the Fly Super8Pro into your computer and press the refresh button highlighted below.
{% include image.html file="super8pro_bootloader_2.png" alt="Super8Pro STM32CubeProg" caption="Super8Pro STM32CubeProg" %}

The STM32CubeProg software should show USB1, as highlighted below in green. Proceed to pressing the button highlighted in red below and select the bootloader file you downloaded earlier.  
{% include image.html file="super8pro_bootloader_3.png" alt="Super8Pro STM32CubeProg" caption="Super8Pro STM32CubeProg" %}

Finally press the download button highlighted below.  
{% include image.html file="super8pro_bootloader_4.png" alt="Super8Pro STM32CubeProg" caption="Super8Pro STM32CubeProg" %}

The process is quick. Once the bootloader has been loaded to the Fly Super8Pro H743, unplug the board from your computer an remove the DFU jumper.