---
title: Flashing a bootloader to the Fly-MMU V1.0 H723
tags: []
keywords: 
last_updated: 06/04/2025
summary: "How to flash an RRF compatible bootloader to the Fly-MMU V1.0 H723"
permalink: fly_mmu_v1_0_h723_bootloader.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-MMU V1.0
booturl2: /bootloader/bootloader_mmu_h723.bin
booturl3: /bootloader/bootloader_mmu5160_h723.bin
bootloader_buttons: true
bootloader_button_name: "BOOT"
bootloader_img1: "fly_mmu_v1_dfu.png"
bootloader_cap1: "Fly-MMU V1.0 H723 DFU Mode"
bootloader_jumpers: false

---

{% capture bootloaderURL %} {{site.latestBetaFirmwareSTM32H7}}{{page.booturl2}} {% endcapture %}
{% capture bootloaderURL1 %} {{site.latestBetaFirmwareSTM32H7}}{{page.booturl3}} {% endcapture %}

{% include custom/H7/bootloader/bootloader_usb.html %}

As the board does not have an SD card socket, DFU will have to be used to initially flash the firmware. Subsequent updates can be done over CAN-FD. Following the [Firmware Flashing Instructions](fly_mmu_v1_0_h723_firmware_flash.html).
