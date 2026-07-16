---
title: AFC-Lite V1.0 H723 General Information
tags: []
keywords: 
last_updated: 23/03/2025
summary: "General information regarding the AFC-Lite H723"
permalink: afc_lite_v1_0_h723_general.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

{% include note.html content="These instructions apply to RRF 3.5.0 and later, including RRF 3.6.x. Use the [TeamGloomy Config Tool](https://teamgloomy.github.io/configtool/) to generate a starter configuration for this board." %}

This page covers any general information for the AFC-Lite V1.0 H723 board.  
It is currently available through many online shops and [AliExpress](https://s.click.aliexpress.com/e/_oCMjb1p). It is also supplied as part of the LDO AFC kits.  
The AFC-Lite V1.0 is compatible with both Duet 3 boards and STM32H723, STM32H743 and STM32F4 boards with spican modules running 3.6.0-RC1 and above.

### CAN Termination

If using a single toolboard/expansion board, make sure the CAN jumper is installed, as indicated on the pinout.  
If using multiple toolboards/expansion boards, only the last toolboard should have a CAN jumper installed.

### Drivers

The AFC-Lite board is only compatible with UART drivers.  
As the LDO kit is supplied with 2209 drivers, the firmware is permanently setup for 2209 driver support only.

### Initial Installation

The board that you will receive doesn't have any bootloader or firmware installed so when plugged into a computer, the board will show as an unidentified device.
Follow the [bootloader installation instructions](afc_lite_v1_0_h723_bootloader.html).
