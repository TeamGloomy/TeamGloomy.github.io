---
title: Release notes release_notes_3.5.0-rc.1+102
tags: [getting_started]
keywords: release notes, announcements, what's new, new features
last_updated: 15/06/2023
summary: "Release notes for the unstable release of 3.5.0-rc.1+102"
sidebar: mydoc_sidebar
permalink: release_notes_3.5.0-rc.1+102.html
folder: mydoc
toc: false
comments: false
---

## Duet3D Release Notes for 3.5.0-rc.1

Please see the Duet3D [release notes for 3.5b2](https://github.com/Duet3D/RepRapFirmware/wiki/Changelog-RRF-3.x-RC#reprapfirmware-350-rc1-changes-since-350-beta4) to see whats new and what has been fixed

## RepRapFirmware for STM32F4 and STM32H7 Release Notes for 3.5.0-rc.1+102 from 3.5.0-beta.4_101

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
