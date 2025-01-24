---
title: Fly-MMU V1.0 H723 General Information in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 06/01/2025
summary: "General information regarding the Fly-MMU H723"
sidebar: mydoc_sidebar
permalink: fly_mmu_v1_0_h723_general_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

This page covers any general information for the Fly-MMU V1.0 H723 board.  
It is currently available through [AliExpress](https://s.click.aliexpress.com/e/_opNRa5H).  
The Fly-MMU V1.0 is compatible with both Duet 3 boards and STM32H723, STM32H743 and STM32F4 boards with spican modules running 3.5.1 and above.

### CAN Termination

If using a single toolboard/expansion board, make sure the CAN jumper is installed, as indicated on the pinout.  
If using multiple toolboards/expansion boards, only the last toolboard should have a CAN jumper installed.

### Driver Power Source Selection

The drivers can be set to either take power from the main CAN-FD cable or from the HV input. A jumper should be added next to each driver to select the correct power source.

{% include image.html file="fly_mmu_v1_driver_power.png" url="<https://teamgloomy.github.io/images/fly_mmu_v1_driver_power.png>" alt="Driver Power Source Selection" caption="Driver Power Source Selection" %}

### Maximum HV Input voltage

The driver sockets have been tested with 48v.

### Initial Installation

The board that you will receive doesn't have any bootloader or firmware installed so when plugged into a computer, the board will show as an unidentified device.
Follow the [bootloader installation instructions](fly_mmu_v1_0_h723_bootloader_3_5.html).
