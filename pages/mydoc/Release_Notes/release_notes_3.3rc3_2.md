---
title: Release notes 3.3 RC 3_2
tags: [getting_started]
keywords: release notes, announcements, what's new, new features
last_updated: 30/05/2021
summary: "Release notes for the beta release of 3.3 RC3_2"
sidebar: mydoc_sidebar
permalink: release_notes_3.3rc3_2.html
folder: mydoc
toc: false
comments: false
---

## Duet3D Release Notes for 3.3 RC 3

Please see the Duet3D [release notes for 3.3 RC 3](https://github.com/Duet3D/RepRapFirmware/wiki/Changelog-RRF-3.x-Beta-&-RC#reprapfirmware-33rc3) to see whats new and what has been fixed

## RepRapFirmware for LPC and STM32 Release Notes for 3.3 RC 3

* Fix firmware crash when using M574 with invalid S param
* STM32F4: Include board name in M122 output
* STM32F4: Fix null ptr reference when no Aux device
* STM32F4: Fix ensure Step Timer is running before first use
* STM32F4: Allow operation without bootloader
* STM32F4: Add support for external SD cards
* LPC: Fix drivers that used i2c current setting not set if the build had TMC drivers enabled
* LPC: Fix for board not booting with zero smart drivers