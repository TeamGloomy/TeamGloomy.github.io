---
title: SKR3 H723 Version General Information in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 10/04/2024
summary: "General information regarding the SKR3 H723 Version"
sidebar: mydoc_sidebar
permalink: skr_3_h723_general_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

This page covers any general information for the H723 Version of the SKR3 board.  

The SKR3 can be purchased from [AliExpress](https://s.click.aliexpress.com/e/_DCUWwWd)

### How to identify your SKR3 Version

Currently, the only way to identify which version of the board you have is to look at the markings on the MCU. In the below image, the left MCU is an STM32H723 and the right MCU is an STM32H743.  

{% include image.html file="H723vH743.png" alt="STM32H723 vs STM32H743" caption="STM32H723 vs STM32H743" %}

If you have an STM32H743 board, please follow the information [here](skr_3_h743_general_3_5.html){:target="_blank"}.

### Driver Jumpers

The jumpers should be installed as below. "Normal" should be used for standalone drivers. "UART mode Interpolation" should be used when using smart drivers (i.e. TMC2208, TMC2209, TMC2225 and TMC2226).  

{% include image.html file="skr_2.0_normal.PNG" alt="SKR3 Normal" caption="SKR3 Normal Driver Jumper Locations" %}

{% include image.html file="skr_2.0_UART.PNG" alt="SKR3 UART" caption="SKR3 UART Driver Jumper Locations" %}

{% include image.html file="skr_2.0_SPI.PNG" alt="SKR3 SPI" caption="SKR3 SPI Driver Jumper Locations" %}

### Driver Diag Pin

If you want to use sensorless homing, a jumper needs adding under each driver you want to use it for as shown below.

{% include image.html file="skr3_diag.png" alt="SKR3 Diag" caption="SKR3 Sensorless Homing Jumper Locations" %}

### PT1000 Support

Both hotend temperature sensor inputs support PT1000. When using one, make sure the jumper identified below is installed. Make sure it is removed when using a standard thermistor.  

{% include image.html file="skr3_pt1000.png" alt="SKR3 PT1000 Jumper" caption="SKR3 PT1000 Jumper Locations" %}

Also make sure you define the resistor value as R1000 in your M308 command.

### Initial Installation

Follow the [WiFi instructions](skr_3_h723_connected_wifi_3_5.html){:target="_blank"} or [SBC instructions](skr_3_h723_connected_sbc_3_5.html).
