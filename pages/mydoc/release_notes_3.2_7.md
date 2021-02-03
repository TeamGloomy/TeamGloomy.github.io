---
title: Release notes 3.2_7
tags: [getting_started]
keywords: release notes, announcements, what's new, new features
last_updated: 03/02/2021
summary: "Release notes for the beta release of 3.2_7"
sidebar: mydoc_sidebar
permalink: release_notes_3.2_7.html
folder: mydoc
toc: false
comments: false
---

## Duet3D Release Notes for 3.2

Please see the Duet3D [release notes for 3.2](https://github.com/Duet3D/RepRapFirmware/blob/v3-dev/WHATS_NEW_RRF3.md#reprapfirmware-32) to see whats new and what has been fixed

## RepRapFirmware for LPC and STM32 Release Notes for 3.2_7

- Fix Fly CDY pin definition
- Allow use of SPI.pins to configure SPI device pins in board.txt
- Preliminary support for the BTT RRF E3 (board name "biquskr_rrf_e3_1.0")
- Fix Fly CDYV2 board definitions
- Fix BTT E3-Turbo board definitions
- Add support for E3-Turbo driver sleep mode
- Allow use of "+" "-" "^" when defining pins for output high, output low, input pullup
- Fix bug with board.txt files that contain whitespace before key name
- Add version information to M122 P200 output