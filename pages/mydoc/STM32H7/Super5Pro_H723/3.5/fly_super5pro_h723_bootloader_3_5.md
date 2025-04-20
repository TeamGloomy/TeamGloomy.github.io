---
title: Flashing a bootloader to the Fly-Super5Pro H723
tags: []
keywords: 
last_updated: 10/04/2024
summary: "How to flash an RRF compatible bootloader to the Fly-Super5Pro H723"
sidebar: mydoc_sidebar
permalink: fly_super5pro_h723_bootloader_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-Super5Pro
bootloaderURL: https://github.com/TeamGloomy/Board-Bootloaders/blob/master/STM32H723/Fly-Super5Pro-H723-Bootloader.bin
bootloader_buttons: false
bootloader_button_name: "reset1"
bootloader_img1: "fly_super5pro_dfu.png"
bootloader_cap1: "Fly-Super5Pro H723 DFU Mode"
bootloader_jumpers: true
bootloader_jumper_qty: 2

---

{% capture bootloaderURL %} {{page.bootloaderURL}} {% endcapture %}

{% include custom/3.5/bootloader/bootloader_usb.html %}
