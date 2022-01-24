---
title: Release notes 3.2_4
tags: [getting_started]
keywords: release notes, announcements, what's new, new features
last_updated: 21/01/2021
summary: "Release notes for the beta release of 3.2_4"
sidebar: mydoc_sidebar
permalink: release_notes_3.2_4.html
folder: mydoc
toc: false
comments: false
---

## Duet3D Release Notes for 3.2

Please see the Duet3D [release notes for 3.2](https://github.com/Duet3D/RepRapFirmware/blob/v3-dev/WHATS_NEW_RRF3.md#reprapfirmware-32) to see whats new and what has been fixed

## RepRapFirmware for LPC and STM32 Release Notes for 3.2_4

- Added aliases for config names that contain "lpc"
    - "board" = "lpc.board"
    - "8266wifi.TfrReadyPin" = "8266wifi.lpcTfrReadyPin"
    - "sbc.TfrReadyPin" = "sbc.lpcTfrReadyPin"
- M122 P200 reports all available pin names
- Names defined with mixed case now work correctly
- Add support for MAX6675
- USB serial no longer waits for DTR (to match Duet)
- LPC Increase max gcode line length to 256
- LPC Increase number of open files to 6
- STM32F4 add support for LCD displays (ST7567 and ST7920)
- STM32F4 increse number of software SPI devices from 1 to 3
- STM32F4 improved software SPI performance
- STM32F4 add support for SPI modes 1, 2, 3 to Software SPI device
- STM32F4 improved UART driver
- STM32F4 report SDIO errors
- STM32F4 fix hardware PWM bug, PWM not disabled correctly
- STM32F4 Correct mcu temperature for VRef changes
- Add preliminary support for Fly CDYV2 board