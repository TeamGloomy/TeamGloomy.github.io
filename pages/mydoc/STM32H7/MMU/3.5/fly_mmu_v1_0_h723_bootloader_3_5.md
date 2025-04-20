---
title: Flashing a bootloader to the Fly-MMU V1.0 H723
tags: []
keywords: 
last_updated: 06/04/2025
summary: "How to flash an RRF compatible bootloader to the Fly-MMU V1.0 H723"
sidebar: mydoc_sidebar
permalink: fly_mmu_v1_0_h723_bootloader_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-MMU V1.0
booturl1: {{site.latestStableFirmware}}
booturl2: /bootloader/bootloader_mmu_h723.bin
booturl3: /bootloader/bootloader_mmu5160_h723.bin
bootloader_buttons: true
bootloader_button_name: "BOOT"
bootloader_img1: "fly_mmu_v1_dfu.png"
bootloader_cap1: "Fly-MMU V1.0 H723 DFU Mode"
bootloader_jumpers: false
bootloader_jumper_qty: 2

---

{% capture bootloaderURL %} {{booturl1}}{{booturl2}} or {{booturl1}}{{booturl3}} {% endcapture %}

{% include custom/3.5/bootloader/bootloader_usb.html %}

As the board does not have an SD card socket, DFU will have to be used to initially flash the firmware. Subsequent updates can be done over CAN-FD. Following the [Firmware Flashing Instructions](fly_mmu_v1_0_h723_flash_firmware_3_5.html).
