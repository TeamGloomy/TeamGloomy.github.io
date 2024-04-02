---
title: Release notes release_notes_3.4.0_1
tags: [getting_started]
keywords: release notes, announcements, what's new, new features
last_updated: 29/03/2022
summary: "Release notes for the stable release of 3.4.0_1"
sidebar: mydoc_sidebar
permalink: release_notes_3.4.0_1.html
folder: mydoc
toc: false
comments: false
---

## Duet3D Release Notes for 3.4.0

Please see the Duet3D [release notes for 3.4.0](https://github.com/Duet3D/RepRapFirmware/wiki/Changelog-RRF-3.x#reprapfirmware-340) to see whats new and what has been fixed

## RepRapFirmware for STM32 Release Notes for 3.4.0_1 from 3.3.0_16

* Duet3d 3.4.0
* Updated pins files
* Retry SDIO initialization if switch to wide mode fails
* Fix number of drivers in gemini config
* Fix bug pin A.0 set to input mode during board init
* Report supported boards as part of M122 p200 output
* Include CCMRam usage in M122 output
* STM32F4 Allow multiple names for same board configuration
* SBC Increase stack space to allow more complex expressions
* Filter WiFi module debug output to remove garbage characters
* STM32F4 Fix occasional bad memory access when using software PWM
* Disable support for LPC build
* Allow use of named objects when using SBC build
* STM32F4: Improved writer task interface (handle multiple buffers/tasks)
* STM32F4: Fix print sometimes stalls
* STM32F$: Fix deleting sys files when mass storage is not enabled, but linux is
* STM32F4: Fix occassional deadlock when writing accelerometer data to file
* STM32F4: Fix crash when TMC5160 SPI channel not configured
