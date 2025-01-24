---
title: Flashing a bootloader to the Fly-MMU V1.0 H723
tags: []
keywords: 
last_updated: 10/04/2024
summary: "How to flash an RRF compatible bootloader to the Fly-MMU V1.0 H723"
sidebar: mydoc_sidebar
permalink: fly_mmu_v1_0_h723_bootloader_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-MMU V1.0
bootloaderURL: https://github.com/TeamGloomy/Board-Bootloaders/blob/master/STM32H723/Fly-Super5Pro-H723-Bootloader.bin
bootloader_buttons: true
bootloader_button_name: "BOOT"
bootloader_img1: "fly_super5pro_dfu.png"
bootloader_cap1: "Fly-MMU V1.0 H723 DFU Mode"
bootloader_jumpers: false
bootloader_jumper_qty: 2

---

{% include custom/3.5/bootloader/bootloader_usb.html %}

As the board does not have an SD card socket, DFU will have to be used to flash the firmware (including any firmware updates). Following the [Firmware Flashing Instructions](fly_mmu_v1_0_h723_flash_firmware_3_5.html).
