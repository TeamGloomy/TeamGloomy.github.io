---
title: "Getting started with RepRapFirmware for LPC and STM32 based boards"
last_updated: 24/02/2024
sidebar: mydoc_sidebar
permalink: index.html
summary: These instructions will help you to get started running RepRapFirmware on your LPC or STM32 based 3D printer board
toc: false
comments: false
---

## Welcome

Welcome to the RepRapFirmware on LPC and STM32 boards.  
This software is a port of the open source RepRapFirmware produced by [Duet3D](http://www.duet3d.com) for their Duet range of boards.  
The LPC port was originally created by [sadvi](https://github.com/sdavi). Support for LPC boards was dropped after RRF 3.3.0_16.  

{% include warning.html content="If you are an STM32 user (all STM boards) and have already updated to the 3.5.0-RC4 release, please heed the following upgrade note:

Very important! If you use a M400 command in your deployprobe.g or retractprobe.g file (or the corresponding files with the probe number added e.g. deployprobe0.g) or in any macro files that are called by those files, and your main board supports multiple motion systems (e.g. any Duet 3 main board or STM32 board), you must add parameter S1 to that command. Failure to do so is likely to result in head movement outside the configured M208 limits.

Adding the S1 parameter to M400 commands has no effect if you are running older firmware versions, so you won't need to remove it if you subsequently revert to an earlier firmware version.

For the timebeing we have made the decision to withdraw the 3.5.0-RC4 release for mainboards. It can still be used for expansion boards such as the recently released SB2040 Max v3 with 3.5.0-RC3 on the mainboard" %}

## Latest Firmware Versions

### Latest Stable STM32F4 and STM32H7 Build

The latest stable version is [3.4.6_101](https://github.com/gloomyandy/RepRapFirmware/releases/tag/v3.4.6_101)

### Latest Unstable STM32F4, STM32H7 and STM32H723 Build

The latest unstable version is [3.5.0-rc.3+101](https://github.com/gloomyandy/RepRapFirmware/releases/tag/v3.5.0-rc.3%2B101)

### Latest Stable LPC Build

The latest stable version is [3.3.0_16](https://github.com/gloomyandy/RepRapFirmware/releases/tag/v3.3.0_16)

Please note that 3.3.X will be the last release for LPC boards.

## Latest WiFi Firmware Versions

### Latest Stable

The latest stable WiFi firmware version is [1.27-02](https://github.com/gloomyandy/DuetWiFiSocketServer/releases/tag/v1.27-02)

### Latest Unstable

The latest unstable WiFi firmware version is [2.1b6](https://github.com/gloomyandy/RepRapFirmware/releases/tag/v3.5.0-rc.3%2B101)

## Latest H7 bootloader

### Latest Stable H7 Bootloader

The latest stable bootloader version is [1.0.3](https://github.com/gloomyandy/IAP/releases/tag/IAP_1.0.3)

### Latest Unstable H7 Bootloader

There currently isn't an unstable build available

## Partnership

TeamGloomy are working in close partnership with Flymaker/Mellow to ensure that 100% compatibility is obtained with their boards and to cover all of your 3D printer electronics requirements.  

## Aliexpress

All links used on the site are affiliate links where possible. If you purchase via a link it will give a tiny percent of commission to the teamgloomy. This will not hurt your wallet and at the same time help us to maintain this project.
