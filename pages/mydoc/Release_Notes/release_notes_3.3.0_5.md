---
title: Release notes 3.3.0_5
tags: [getting_started]
keywords: release notes, announcements, what's new, new features
last_updated: 23/07/2021
summary: "Release notes for the stable release of 3.3.0_5"
sidebar: mydoc_sidebar
permalink: release_notes_3.3.0_5.html
folder: mydoc
toc: false
comments: false
---

## Duet3D Release Notes for 3.3

Please see the Duet3D [release notes for 3.3](https://github.com/Duet3D/RepRapFirmware/wiki/Changelog-RRF-3.x#reprapfirmware-33) to see whats new and what has been fixed

## RepRapFirmware for LPC and STM32 Release Notes for 3.3.0_5 from 3.3_2

* Add new debug module for driver outputs
* Improve software PWM rounding at higher frequencies
* Improve revovery from SD card errors
* Allow setting of Neopixel timings with M150 X2 Tt0:t1:tc:tr
* Add support for RGBW Neopixels
* Fix board sometimes resets after WiFi firmware upload
* New firmware filenames
* LPC: Enabled support for object tracking names
* STM32F4: Add support for esp32 WiFi modules
* STM32F4: Fix Fly E3 SPI5 defaults
* STM32F4: Improve TMC5160 detection
* STM32F4: Retry TMC5160 SPI writes on error
* STM32F4: Fix spurious UART interrupts at boot
* STM32F4: Fix SDIO timeout problem
* STM32F4: Enable support for 2 probes
* STM32F4: Fix release of wrong external interrupt pin

## RepRapFirmware for LPC and STM32 Release Notes for 3.3.0_5 from 3.2.2_2

* Fix problem with Spider UART pin
* Fix firmware crash when using M574 with invalid S param
* Adjust parse stack to allow more complex operations (SBC)
* Fix Neopixel configuration check
* Switched mcu interface to CoreN2G
* Switch PinTable to 1:1 mapping. Allows all pins to be accessed using pin notation
* Updated board definitions for Fly/BTT
* Add new debug module for driver outputs
* Improve software PWM rounding at higher frequencies
* Improve revovery from SD card errors
* Allow setting of Neopixel timings with M150 X2 Tt0:t1:tc:tr
* Add support for RGBW Neopixels
* Fix board sometimes resets after WiFi firmware upload
* New firmware filenames
* LPC: Fix drivers that used i2c current setting not set if the build had TMC drivers enabled
* LPC: Fix for board not booting with zero smart drivers
* LPC: Adjust stack sizes
* LPC: Enabled support for object tracking names
* STM32F4: Add support for esp32 WiFi modules
* STM32F4: Fix Fly E3 SPI5 defaults
* STM32F4: Improve TMC5160 detection
* STM32F4: Retry TMC5160 SPI writes on error
* STM32F4: Fix spurious UART interrupts at boot
* STM32F4: Fix SDIO timeout problem
* STM32F4: Enable support for 2 probes
* STM32F4: Fix release of wrong external interrupt pin
* STM32F4: Fix problem with Spider UART pin
* STM32F4: Fix pin usage when using non default SPI device for WiFi
* STM32F4: Initial support for Fysetc Spider (with STM32F407 mcu)
* STM32F4: Remove duplicate set of board definitions
* STM32F4: Include board name in M122 output
* STM32F4: Fix null ptr reference when no Aux device
* STM32F4: Fix ensure Step Timer is running before first use
* STM32F4: Allow operation without bootloader
* STM32F4: Add support for external SD cards
* STM32F4: Make WiFi Firmware update I/O buffer available to DMA
* STM32F4: Disable BTT "anti-reverse protection" feature
* STM32F4: Fixed incorrect LCDCS pin for BTT SKR V2
* STM32F4: Allow configuration of WiFi/SBC SPI channels
* STM32F4: New build stats
* STM32F4: Adjust GPIO timing and SPI pullups 
* STM32F4 Enable accelerometer support
* STM32F4 New board.txt entry: accelerometer.spiChannel
* STM32F4: Add checks for change on interrupt pin being unused
* STM32F4: Ensure step timer is initialised before first use
* STM32F4: Make reverse driver checks more robust
* STM32F4: Allow RRF to use any available UART/Pin for WiFi/Aux
* STM32F4: Add pins for BTT RRF E3 IDX board
* STM32F4: Increase number of extruders per tool to 4
* STM32F4: Enable object tracking (M486)
* STM32F4: Add driver checking
* STM32F4: Initial support for BTT SKR V2
* STM32F4: Reduce SD card beffer size back to values used in Version 3.3-beta1_3
* STM32F4: Added additional signature for SKR pro boards
* STM32F4: Minor SDIO improvements and bug fixes
* STM32F4: Added board definition for FLY E3-Pro
* STM32F4: Allow VIn value to settle before first reading
* STM32F4: Fix for boards that ground MAX31855 T- pin (avoid short to ground error)
* STM32F4: Increase number of heat sensor SPI CS pins to 4
* STM32F4: Changed BTT RRF E3 board name to be "biquskr_rrf_e3_1.1"
* STM32F4: Support for TMC5160 drivers
* STM32F4: Support for mixed TMC22xx/TMC5160
* STM32F4: Allow alternate pins for hardware SPI devices (via SPI0.Pins, SPI1.Pins, SPI2.Pins)
* STM32F4: Allow use of SPI3
* STM32F4: Add support for voltage monitor
* STM32F4: Added "generic" board config
* STM32F4: Allow use of SPI3 for SD card access
* STM32F4: Do not make potentially damaging changes with unrecognised hardware (during attempts to mount the SD card)