---
title: Fly-E3-v2 Bootloader Recovery
tags: []
keywords: 
last_updated: 03/04/2024
summary: "How to reflash the bootloader on a Fly-E3-v2"
sidebar: mydoc_sidebar
permalink: fly_e3_v2_bootloader_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-E3-v2
bootloaderURL: https://github.com/TeamGloomy/Board-Bootloaders/blob/master/STM32F4/Fly-E3-V2-Bootloader.bin
bootloader_buttons: true
bootloader_button_name: "reset2"
bootloader_img1: "fly_e3_v2_bootloader_dfu.png"
bootloader_cap1: "Fly-E3-v2 DFU Bootloader Button"

---

{% capture bootloaderURL %} {{page.bootloaderURL}} {% endcapture %}

{% include custom/3.5/bootloader/bootloader_usb.html %}
