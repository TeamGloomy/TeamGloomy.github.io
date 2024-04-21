---
title: Release notes release_notes_3.5.1
tags: [getting_started]
keywords: release notes, announcements, what's new, new features
last_updated: 21/04/2024
summary: "Release notes for the unstable release of 3.5.1"
sidebar: mydoc_sidebar
permalink: release_notes_3.5.1.html
folder: mydoc
toc: false
comments: false
---

## Duet3D Release Notes for 3.5.1

Please see the Duet3D [release notes for 3.5.1](https://github.com/Duet3D/RepRapFirmware/wiki/Changelog-RRF-3.x#reprapfirmware-351-stable-changes-since-346) to see whats new and what has been fixed in this release since 3.4.6.  

## RepRapFirmware for STM32F4 and STM32H7 Release Notes for 3.5.16 from 3.4.6

* Duet3d 3.5.1
* Enable MQTT support (requires ESP firmware >= V2.1b3)
* STM32F4: Add support for MCP2518FD SP CAN-FD interfaces
* STM32F4: Improved SPI1 support (allow interrupt operation)
* Increase open files to 20
* Ensure ESP32 modules are fully disabled by M552 s-1
* Removed LPC17xx support from source
* Updated pins Fly E3 V2
* Fixed crash when using laser mode
* Fixed H723 based boards not showing input voltage correctly
* Fixed display not beeping
* Adjusted default hardware Neopixel timing to match Duet boards
* Apply cold extrusion fix
* Add code to display extended WiFi info from 2.1beta4
* Add Expansion board to build
* Improve timeout handling - possibly fix DMA neopixel bug
* Fly Super5 fixed pin
* BTT added board "biquskr_3_ez_h723"
* RP2040 Expansion Added support for MCP251XFD (CAN-FD via SPI)
* RP2040 Expansion Store reset data in flash
* RP2040 Expansion Store CAN-FD address in flash
* RP2040 Expansion Allow firmware update via CAN-FD
* Added Neopixel support on RP2040 boards
* Fix bug: SD card not detected on boards using SPI based SD cards
* Refactored per board configuration
* Added support for Fly Gemini V3
* Added support for TMC5160 drivers for RP2040 boards
* Fixed fail to flash new code in SBC mode
* Updated version no format to be compatible with DWC
* Added support for TMC2240 drivers in SPI mode
* Return actual driver temperature if available (experimental)
* Allow access to individual driver temperatures (experimental)
* Add DriverType to board.txt to allow arbitrary driver order
* STM32H7 allow CAN read/write pins to be changed.
* STM32H7 allow use of all available pins for SPI5 and SPI6
* Add new SD Card SPI configuration
* Add preliminary Kraken and Octopus pro support
* Change name/version of Stridemax to match release
* Added preliminary SHT36V3 board
* Added PITB V2.0 board
* Made RRF36 i2c pins available
* Use DMA for SPI1 on SMT32H7 based builds
* Added SBC support for STM32H723 based boards
* Added SBC support for STM32H743 based boards
* Fixed bug when using SBC based board.txt file
* Added Fysetc Stridemax
* Updated Kraken signature
* New configuration system, board pins and default config held in embedded file system
* Include WiFi and SBC configuration data in board configs
* Single binary for both SBC and standalone versions
* Detect type of WiFi module in use and set the WiFi firmware filename based on this
* Added new boards
* Improved parsing of board.txt and other config files
* Fix upgrade of firmware over CAN-FD when mainboard is in expansion mode
