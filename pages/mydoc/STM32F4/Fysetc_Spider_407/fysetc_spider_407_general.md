---
title: Fysetc Spider 407 Version General Information
tags: []
keywords: 
last_updated: 15/06/2022
summary: "General information regarding the Fysetc Spider 407 Version"
sidebar: mydoc_sidebar
permalink: fysetc_spider_407_general.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

This page covers any general information for the Fysetc Spider 407 Version board, which is supported from 3.4beta2.

### Board.txt Name

The board name in board.txt is **fysetc_spider**.

### Driver Jumpers

The jumpers should be installed as below. "SPI mode Interpolation" is supported for TMC5160 drivers. "UART mode Interpolation" should be used when using smart drivers (i.e. TMC2208, TMC2209, TMC2225 and TMC2226). Standalone is for older drivers such as the A4988.  

{% include image.html file="fysetc_spider_407_uart.png" alt="Fysetc Spider 407 Version UART" caption="Fysetc Spider 407 Version UART Driver Jumper Locations" %}  
{% include image.html file="fysetc_spider_407_spi.png" alt="Fysetc Spider 407 Version SPI" caption="Fysetc Spider 407 Version SPI Driver Jumper Locations" %}  
{% include image.html file="fysetc_spider_407_standalone.png" alt="Fysetc Spider 407 Version Standalone" caption="Fysetc Spider 407 Version Standalone Driver Jumper Locations" %}  

### Z Driver Jumpers

If only one Z output is being used, jumpers should be installed on the other Z output as shown below.

{% include image.html file="fysetc_spider_407_z_jumper.jpg" alt="Fysetc Spider 407 Version Z Jumpers" caption="Fysetc Spider 407 Version Driver Z Jumper Locations" %}

### Initial Installation

Follow the [WiFi instructions](skr_2.0_connected_wifi.html) or [SBC instructions]()
