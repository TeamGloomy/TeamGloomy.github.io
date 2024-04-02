---
title: BTT Octopus Pro v1.0 F429 Version General Information
tags: []
keywords: 
last_updated: 27/11/2023
summary: "General information regarding the BTT Octopus Pro v1.0 F429 Version"
sidebar: mydoc_sidebar
permalink: btt_octopus_pro_1.0_f429_general.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: BTT Octopus Pro v1.0 F429 Version
---

## Overview

This page covers any general information for the {{boardname}} board, which is supported from 3.3.0_11.

{% include callout.html content="There are three types of BTT Octopus Pro v1.0. One uses an STM32F446ZET6, one uses an STM32H723ZET6 and the other uses an STM32F429ZGT6. TeamGloomy and this port only support the STM32F429ZGT6 based boards." type="danger" %}  

The {{boardname}} is available from [AliExpress](https://s.click.aliexpress.com/e/_DChR9MN)

### Board.txt Name

The board name in board.txt is **biqoctopuspro_1.0**.

### Driver Jumpers

The jumpers should be installed as below. "SPI mode Interpolation" is supported for TMC5160 drivers. "UART mode Interpolation" should be used when using smart drivers (i.e. TMC2208, TMC2209, TMC2225 and TMC2226)

{% include image.html file="btt_octopus_1.1_uart.png" alt="BTT Octopus Pro v1.0 UART" caption="BTT Octopus Pro v1.0 UART Driver Jumper Locations" %}  
{% include image.html file="btt_octopus_1.1_spi.png" alt="BTT Octopus Pro v1.0 SPI" caption="BTT Octopus Pro v1.0 SPI Driver Jumper Locations" %}  

### Driver Diag Pin

If you want to use sensorless homing, a jumper needs adding next to each appropriate endstop as shown below.

{% include image.html file="btt_octopus_pro_1.0_sensorless.png" alt="BTT Octopus Pro v1.0 Diag" caption="BTT Octopus Pro v1.0 Pro v1.0 F429 Version Sensorless Homing Jumper Locations" %}

### Driver Voltage

The jumpers for each driver should be configured as below if you want to power them from VIN (12/24v).  

{% include image.html file="btt_octopus_pro_1.0_driver_24.png" alt="BTT Octopus Pro v1.0 12/24v Drivers" caption="BTT Octopus Pro v1.0 12/24v Driver Jumper Locations" %}  

The jumpers for each driver should be configured as below if you want to power them from the MOT-PWR input (up to 60v).  

{% include image.html file="btt_octopus_pro_1.0_driver_60.png" alt="BTT Octopus Pro v1.0 60v Drivers" caption="BTT Octopus Pro v1.0 60v Driver Jumper Locations" %}  

### Fan Voltage

The fan outputs can each be set to 5v, 12v or VCC.  
To set them 5v, set the jumpers as below.  

{% include image.html file="btt_octopus_pro_1.0_fan_probe_5.png" alt="BTT Octopus Pro v1.0 5v Fans" caption="BTT Octopus Pro v1.0 5v Fans Jumper Locations" %}  

To set them 12v, set the jumpers as below.  

{% include image.html file="btt_octopus_pro_1.0_fan_probe_12.png" alt="BTT Octopus Pro v1.0 12v Fans" caption="BTT Octopus Pro v1.0 12v Fans Jumper Locations" %}  

To set them VCC, set the jumpers as below.  

{% include image.html file="btt_octopus_pro_1.0_fan_probe_vcc.png" alt="BTT Octopus Pro v1.0 VCC Fans" caption="BTT Octopus Pro v1.0 VCC Fans Jumper Locations" %}  

### Initial Installation

Follow the [WiFi instructions](btt_octopus_pro_1.0_f429_connected_wifi_8266.html) or [SBC instructions](btt_octopus_pro_1.0_f429_connected_sbc.html)
