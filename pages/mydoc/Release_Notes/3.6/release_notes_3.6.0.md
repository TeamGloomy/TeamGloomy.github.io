---
title: Release notes release_notes_3.6.0
tags: [getting_started]
keywords: release notes, announcements, what's new, new features
last_updated: 11/06/2025
summary: "Release notes for the unstable release of 3.6.0"
sidebar: mydoc_sidebar
permalink: release_notes_3.6.0.html
folder: mydoc
toc: false
comments: false
---

## Duet3D Release Notes for 3.6.0

Please see the Duet3D [release notes for 3.6.0](https://github.com/Duet3D/RepRapFirmware/wiki/Changelog-RRF-3.x#reprapfirmware-360) to see whats new and what has been fixed

## RepRapFirmware for STM32F4 and STM32H7 Release Notes for 3.6.0 from 3.5.4

* Duet3d 3.6.0
* Added support for Fly E3 Ultra and Fly C5
* Added support for tmcauto driver mode to allow identification of spi/uart drivers
* Added Fly M2 expansion board
* Added support for RP2040 based expansion boards with multiple TMC22xx drivers
* Fix afclite pins
* Report bootloader details in M122 output if it is ours
* New Can capable bootloaders for H7 boards
* Allow update of expansion mode boards over can without an SD card
* Allow CAN address of a board in expansion mode to be changed
* Allow board to be set into expansion mode using board.txt setting
* Improve speed of expansion mode firmware updates over CAN
* Various fixes to board configs
* Use diag LED during firmware updates
* Fix bug with initial reading from probes on expansion boards
* Added bootloader support for H723 based boards
* Fix wrong pin on Afc Lite and tidy up pin files
* Added support for AFC lite board
* Fixed UART data overrun in some situations
* Reduced overhead on gpio interrupt on change
* Added support for FYSETCSB2040V2
* WiFi Firmware v2.2.1
* Fix TMC22xx driver default standstill current (now 100% was 75%).
* Reduce memory usage
* Improved UART driver
* Improved hardware SPI driver
