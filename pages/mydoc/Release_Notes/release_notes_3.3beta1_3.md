---
title: Release notes 3.3 Beta 1_3
tags: [getting_started]
keywords: release notes, announcements, what's new, new features
last_updated: 11/03/2021
summary: "Release notes for the beta release of 3.3 Beta 1_3"
sidebar: mydoc_sidebar
permalink: release_notes_3.3beta1_3.html
folder: mydoc
toc: false
comments: false
---

## Duet3D Release Notes for 3.3 Beta 1

Please see the Duet3D [release notes for 3.3 Beta 1](https://github.com/Duet3D/RepRapFirmware/wiki/Changelog-RRF-3.x-Beta-&-RC#reprapfirmware-33beta1) to see whats new and what has been fixed

## RepRapFirmware for LPC and STM32 Release Notes for 3.3 Beta 1_3

- Duet3D V3.3-beta1 support
- Switched mcu interface to CoreN2G
- Switch PinTable to 1:1 mapping. Allows all pins to be accessed using pin notation
- Updated board definitions for Fly/BTT
- STM32F4: Support for TMC5160 drivers
- STM32F4: Support for mixed TMC22xx/TMC5160
- STM32F4: Allow alternate pins for hardware SPI devices (via SPI0.Pins, SPI1.Pins, SPI2.Pins)
- STM32F4: Allow use of SPI3
- STM32F4: Add support for voltage monitor
- STM32F4: Added "generic" board config
- STM32F4: Allow use of SPI3 for SD card access
- STM32F4: Do not make potentially damaging changes with unrecognised hardware (during attempts to mount the SD card)
