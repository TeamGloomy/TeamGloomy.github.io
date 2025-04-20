---
title: Flashing RRF to the Fly-MMU V1.0 H723
tags: []
keywords: 
last_updated: 23/03/2025
summary: "How to flash RRF to the Fly-MMU V1.0 H723"
sidebar: mydoc_sidebar
permalink: fly_mmu_v1_0_h723_firmware_flash_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-MMU V1.0
booturl1: {{site.latestStableFirmware}}
booturl2: /bootloader/bootloader_mmu_h723.bin
bootloader_buttons: true
bootloader_button_name: "BOOT"
bootloader_img1: "fly_super5pro_dfu.png"
bootloader_cap1: "Fly-MMU V1.0 H723 DFU Mode"
bootloader_jumpers: false
bootloader_jumper_qty: 2

---

{% capture bootloaderURL %} {{booturl1}}{{booturl2}} {% endcapture %}

## Overview

This page covers how to reflash RRF on a {{page.boardname}}.  
There are two versions of the firmware available. One sets all the drivers to 2209 and the other sets the drivers to 5160. This means that you can't mix and match driver types. This is due to the {{page.boardname}} not having an onboard SD card socket.  

### Software

These instructions cover flashing with Windows using the [STM32CubeProgrammer](https://www.st.com/en/development-tools/stm32cubeprog.html) software. It is possible to use other software, such as DFU-Utils on linux, but they aren't covered here. You will have to register to be able to download the software.  

### Connection via DFU

While holding down the {{page.bootloader_button_name}}, plug in the USB cable into the board and PC.

### Process

Launch the STM32CubeProgrammer Software.  
Download either the Stable firmware file called `firmware_mmu_h723.bin` for 2209 drivers or `firmware_mmu5160_h723.bin` for 5160 drivers from [here]({{site.latestStableFirmware}}/mainboard/fly) or the latest beta/RC firmware file called `firmware_mmu_h723.bin` for 2209 drivers or `firmware_mmu5160_h723.bin` for 5160 drivers from [here]({{site.latestBetaFirmware}}/mainboard/fly).
{% include warning.html content="The firware version you choose to install should be the same version number as the mainboard you are connecting it to" %}
Select the correct connection method, in this instance its "USB". You may need to click the refesh button to find it. Then click connect.  
{% include image.html file="stm32_cube_stlink_1.png" url="https://teamgloomy.github.io/images/stm32_cube_usb_1.png" alt="STM32CubeProgrammer1" caption="Connect via USB" %}  
Then click on the "+" icon and find/open the bootloader file you downloaded earlier.  
{% include image.html file="stm32_cube_stlink_2.png" url="https://teamgloomy.github.io/images/stm32_cube_stlink_2.png" alt="STM32CubeProgrammer2" caption="Open File" %}  
Set the download address to 0x08020000 by clicking the downward pointing arrow next to the Download button.
{% include image.html file="stm32_cube_offset.png" url="https://teamgloomy.github.io/images/stm32_cube_offset.png" alt="STM32CubeProgrammer3" caption="change address" %}  
Click the "Download" button.  
{% include image.html file="stm32_cube_stlink_3.png" url="https://teamgloomy.github.io/images/stm32_cube_stlink_3.png" alt="STM32CubeProgrammer4" caption="Download Bootloader to the board" %}  
A "File Download Complete" popup will appear once complete.  
{% include image.html file="stm32_cube_stlink_4.png" url="https://teamgloomy.github.io/images/stm32_cube_stlink_4.png" alt="STM32CubeProgrammer5" caption="Download Complete" %}  

Disconnect the board.  

{% if {{page.bootloader_jumpers}} == true %}
Disconnect the board and remove the jumpers before continueing to flash the firmware as normal.
{% endif %}

The {{page.boardname}} can now be connected to an RRF mainboard. Please see the [CAN-FD Connection Page](fly_mmu_v1_0_h723_can_fd_3_5.html).

Subsequent firmware updates can be done over CAN-FD.
