---
title: BTT Octopus Pro v1.1 General Information
tags: []
keywords: 
last_updated: 27/12/2023
summary: "General information regarding the BTT Octopus Pro v1.1"
sidebar: mydoc_sidebar
permalink: btt_octopus_pro_1.1_h723_general.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: BTT Octopus Pro v1.1
---

## Overview

This page covers any general information for the {{boardname}} board, which is supported from 3.5.0-rc.2.

{% include callout.html content="There are two types of BTT Octopus Pro v1.1. One uses an STM32H723ZE, and the other uses an STM32H723ZG. TeamGloomy and this port only support the STM32H723ZG based boards." type="danger" %}  

### Board.txt Name

The board name in board.txt is **biquoctopuspro_V1.1_h723**.

### Driver Jumpers

The jumpers should be installed as below. "SPI mode Interpolation" is supported for TMC5160 drivers. "UART mode Interpolation" should be used when using smart drivers (i.e. TMC2208, TMC2209, TMC2225 and TMC2226)

{% include image.html file="btt_octopus_1.1_uart.png" alt="BTT Octopus Pro v1.1 UART" caption="BTT Octopus Pro v1.1 UART Driver Jumper Locations" %}  
{% include image.html file="btt_octopus_1.1_spi.png" alt="BTT Octopus Pro v1.1 SPI" caption="BTT Octopus Pro v1.1 SPI Driver Jumper Locations" %}  

### Driver Diag Pin

If you want to use sensorless homing, a jumper needs adding next to each appropriate endstop as shown below.

{% include image.html file="btt_octopus_pro_1.0_sensorless.png" alt="BTT Octopus Pro v1.1 Diag" caption="BTT Octopus Pro v1.0 Pro v1.1 Sensorless Homing Jumper Locations" %}

### Driver Voltage

The jumpers for each driver should be configured as below if you want to power them from VIN (12/24v).  

{% include image.html file="btt_octopus_pro_1.0_driver_24.png" alt="BTT Octopus Pro v1.1 12/24v Drivers" caption="BTT Octopus Pro v1.1 12/24v Driver Jumper Locations" %}  

The jumpers for each driver should be configured as below if you want to power them from the MOT-PWR input (up to 60v).  

{% include image.html file="btt_octopus_pro_1.0_driver_60.png" alt="BTT Octopus Pro v1.1 60v Drivers" caption="BTT Octopus Pro v1.1 60v Driver Jumper Locations" %}  

### Fan Voltage

The fan outputs can each be set to 5v, 12v or VCC.  
To set them 5v, set the jumpers as below.  

{% include image.html file="btt_octopus_pro_1.0_fan_probe_5.png" alt="BTT Octopus Pro v1.1 5v Fans" caption="BTT Octopus Pro v1.1 5v Fans Jumper Locations" %}  

To set them 12v, set the jumpers as below.  

{% include image.html file="btt_octopus_pro_1.0_fan_probe_12.png" alt="BTT Octopus Pro v1.1 12v Fans" caption="BTT Octopus Pro v1.1 12v Fans Jumper Locations" %}  

To set them VCC, set the jumpers as below.  

{% include image.html file="btt_octopus_pro_1.0_fan_probe_vcc.png" alt="BTT Octopus Pro v1.1 VCC Fans" caption="BTT Octopus Pro v1.1 VCC Fans Jumper Locations" %}  

### Initial Installation

Follow the [WiFi instructions](btt_octopus_pro_1.1_h723_connected_wifi_8266.html) or [SBC instructions](btt_octopus_pro_1.1_h723_connected_sbc.html)
