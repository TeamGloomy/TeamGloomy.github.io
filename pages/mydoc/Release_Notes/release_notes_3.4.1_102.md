---
title: Release notes release_notes_3.4.1_102
tags: [getting_started]
keywords: release notes, announcements, what's new, new features
last_updated: 08/06/2022
summary: "Release notes for the stable release of 3.4.1_102"
sidebar: mydoc_sidebar
permalink: release_notes_3.4.1_102.html
folder: mydoc
toc: false
comments: false
---

## Duet3D Release Notes for 3.4.1

Please see the Duet3D [release notes for 3.4.1](https://github.com/Duet3D/RepRapFirmware/wiki/Changelog-RRF-3.x#reprapfirmware-341) to see whats new and what has been fixed

## RepRapFirmware for STM32F4 and STM32H7 Release Notes for 3.4.1_102 from 3.4.0

* Duet3d 3.4.1
* Fixed bug when freeing attached I/O pin
* Fix pins for Fly e3_prov3
* Firmware filenames are now mcu specific (firmware.bin -> firmware-stm32h7.bin/firmware-stm32f4.bin)
* A firmware update (via M997) now performs an emergency stop (shutdown heaters/additional boards)
* Reset WiFi SPI device after setting new clock speed (avoids spurious error report)
* Allow default thermistor series resistor value to be configured (heat.thermistorSeriesResistor)
* Allow default esp WiFi clock registor to be configured (8266wifi.clockReg)
* Don't reset accumulated pixel state unless pixel string changes
* Cleanup pin names to allow usage of "_" and "-" as in Duet3D version
* STM32F4: Allow pin D.13 to use hardware PWM
* Updated build system to support multiple STM32 builds
* STM32H7 support
* STM32H7 Bootloader
* SBC RAM based IAP
* FD-CAN support
* Hardware (DMA) Neopixel support
* Support multiple Neopixel strings (via enhanced M950 commnd)
* DHT22 Support
* New USB CDC driver (Removes ST code)
* Allow configuration of sense resistor and max driver current (M569.8)
* Experimental diskless SBC mode (board.txt on SBC)
* Added Fly Super5
* Added Fly Gemini V2 board
* Added BTT SKR 3
* Removed old board.txt keys
* Increased various system limits
* Fixed BTT Octopus naming