---
title: Flashing a bootloader to the AFC-Lite V1.0 H723
tags: []
keywords: 
last_updated: 23/05/2025
summary: "How to flash an RRF compatible bootloader to the AFC-Lite V1.0 H723"
sidebar: mydoc_sidebar
permalink: afc_lite_v1_0_h723_bootloader_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: AFC-Lite V1.0
bootloaderURL: {{site.latestStableFirmware}}/bootloader/bootloader_afclite1_h723.bin
bootloader_buttons: true
bootloader_button_name: "BOOT"
bootloader_img1: "afc_lite_v1_DFU.png"
bootloader_cap1: "AFC-Lite V1.0 H723 DFU Mode"
bootloader_jumpers: false
bootloader_jumper_qty: 2

---

Make sure you slide the switch for the 5V power source to USB.

{% include custom/3.5/bootloader/bootloader_usb.html %}

As the board does not have an SD card socket, DFU will have to be used to initially flash the firmware. Subsequent updates can be done over CAN-FD. Following the [Firmware Flashing Instructions](afc_lite_v1_0_h723_flash_firmware_3_5.html).
