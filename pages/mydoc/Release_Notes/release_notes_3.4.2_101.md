---
title: Release notes release_notes_3.4.2_101
tags: [getting_started]
keywords: release notes, announcements, what's new, new features
last_updated: 05/10/2022
summary: "Release notes for the unstable release of 3.4.2_101"
sidebar: mydoc_sidebar
permalink: release_notes_3.4.2_101.html
folder: mydoc
toc: false
comments: false
---

## Duet3D Release Notes for 3.4.2

Please see the Duet3D [release notes for 3.4.2](https://github.com/Duet3D/RepRapFirmware/wiki/Changelog-RRF-3.x#reprapfirmware-342) to see whats new and what has been fixed

## RepRapFirmware for STM32F4 and STM32H7 Release Notes for 3.4.2_101 from 3.4.1_102

* Duet3d 3.4.2
* Fix bug with returning string name of pins
* Updated Fysetc Spider King pins
* STM32F4 Fix SDIO error during firmware update
* Added "biquskr_3_ez"
* Added configuration options "pins.SetHigh" and "pins.SetLow"
* Fix H7 bootloader to allow it to work with klipper
* Stop stack being trashed during some software reset calls
* Fix reporting of board reset reason
* Allow firmware update over CAN-FD for boards in expansion mode
* Adjust firmware filenames to allow CAN-FD updates
* Enable FTP
* Add Fysetc Spider King
* Report RAM addresses in M122 P200
* Fix timeouts with single TMC22xx driver
* Improved UART error detection for TMC22xx drivers
* Add new configuration options:
  * leds.diagnosticOn : boolean, sets polarity of diag LED
  * leds.activity : Pin, sets pin for CAN activity LED
  * leds.activityOn : boolean, sets polarity of CAN activity LED
* Added support for Reset and EmergencyReset when in CAN expansion board mode
* Changed M569.8 to M569.9 to avoid clash
* Added Fly super8_pro
* PWM hardware now only allocated first time it is needed (output != 0 && output != 1)
* STM32H7: Software PWM not working on H7 builds (either full on or off)
* STM32H7: M569.8/M569.9 not recognised