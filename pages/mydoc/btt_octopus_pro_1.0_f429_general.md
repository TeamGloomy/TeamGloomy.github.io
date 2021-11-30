---
title: BTT Octopus Pro v1.0 F429 Version General Information
tags: []
keywords: 
last_updated: 29/11/2021
summary: "General information regarding the BTT Octopus Pro v1.0 F429 Version"
sidebar: mydoc_sidebar
permalink: btt_octopus_pro_1.0_f429_general.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

This page covers any general information for the BTT Octopus Pro v1.0 F429 Version board, which is supported from 3.3.0_11.

{% include callout.html content="There are two types of BTT Octopus Pro v1.0. One uses an STM32F446ZET6 and the other uses an STM32F429ZGT6. TeamGloomy and this port only support the STM32F429ZGT6 based boards." type="danger" %} 

### Driver Jumpers

The jumpers should be installed as below. "SPI mode Interpolation" is supported for TMC5160 drivers. "UART mode Interpolation" should be used when using smart drivers (i.e. TMC2208, TMC2209, TMC2225 and TMC2226)

{% include image.html file="btt_octopus_1.1_uart.png" alt="BTT Octopus Pro v1.0 UART" caption="BTT Octopus Pro v1.0 UART Driver Jumper Locations" %}  
{% include image.html file="btt_octopus_1.1_spi.png" alt="BTT Octopus Pro v1.0 SPI" caption="BTT Octopus Pro v1.0 SPI Driver Jumper Locations" %}  

### Driver Voltage

If using the drivers with 12/24v, then the jumpers for each driver should be configured as below.  

{% include image.html file="btt_octopus_pro_1.0_driver_24.png" alt="BTT Octopus Pro v1.0 12/24v Drivers" caption="BTT Octopus Pro v1.0 12/24v Driver Jumper Locations" %}  

If using the drivers with 60v, then the jumpers for drivers that support up to 60v should be configured as below.  

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

Follow the [WiFi instructions](btt_octopus_1.1_f429_connected_wifi_8266.html) or [SBC instructions](btt_octopus_1.1_f429_connected_sbc.html)