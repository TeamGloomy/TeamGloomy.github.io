---
title: MCU Types overview
tags: []
keywords: 
last_updated: 12/05/2022
summary: "An overview of the different MCU's supported"
sidebar: mydoc_sidebar
permalink: mcu_types.html
folder: mydoc
comments: false
toc: false
datatable: true
---

<div class="datatable-begin"></div>

|Processor Family|LPC|STM32F4|STM32H7|
| :------------- |:-------------|:-------------|:-------------|
|Tested Processors|LPC 1768 and LPC 1769|STM32F405, STM32F407, STM32F429|STM32H743|
|Processor Speed|LPC 1768 = 100MHz, LPC 1769 = 120MHz|168Mhz or 180MHz|480MHz|
|Flash requirements|512kb|1024kb|1024kb+|
|Networking|WiFi, Ethernet (supported up to 3.1.1-14) or via attached SBC|WiFi or via attached SBC|WiFi (or via attached SBC coming soon)|
|Support for attached Raspberry Pi or other Single Board Computer (SBC)|Yes|Yes|Yes|
|Stepper Drivers Supported in Smart Mode|TMC2225, TMC2226, TMC2208, TMC2209|TMC2225, TMC2226, TMC2208, TMC2209, TMC5160|TMC2225, TMC2226, TMC2208, TMC2209, TMC5160|
|Number of Stepper Drivers Supported|8|11|Almost Unlimited Expansion via CAN-FD|
|CAN-FD Expansion Support|No|No|Yes|

<div class="datatable-end"></div>