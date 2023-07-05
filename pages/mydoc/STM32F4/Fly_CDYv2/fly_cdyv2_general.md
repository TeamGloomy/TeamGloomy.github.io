---
title: Fly-CDYv2 General Information
tags: []
keywords: 
last_updated: 15/06/2022
summary: "General information regarding the Fly-CDYv2"
sidebar: mydoc_sidebar
permalink: fly_cdyv2_general.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

This page covers any general information for the Fly-CDYv2 board.  
It can no longer be purchased and has been superseded by the Fly-CDYv3

### Board.txt Name

The board name in board.txt is **fly_cdyv2**.

### Driver Jumpers

The jumpers should be installed as below. "Common Interpolation" should be used for standalone drivers. "SPI mode Interpolation" is supported for TMC5160 drivers. "UART mode Interpolation" should be used when using smart drivers (i.e. TMC2208, TMC2209, TMC2225 and TMC2226)

{% include image.html file="fly_e3_jumpers.png" alt="Fly-CDYv2 Jumpers" caption="Fly-CDYv2 Driver Jumper Locations" %}

### Z Driver Jumpers

If only one Z output is being used, jumpers should be installed on the other Z output as shown below.

{% include image.html file="fly_407zg_Z_Jumpers.PNG" alt="Fly-CDYv2 Z Jumpers" caption="Fly-CDYv2 Driver Z Jumper Locations" %}

### Driver Diag Pin

The driver diag pin is used for sensorless homing and stall detection.  
The Fly-CDYv2 **does not** have a way of disabling the diag pin as it is designed to be used with [Fly-2209 drivers](https://s.click.aliexpress.com/e/_DdtxZo5) which have a switch on the underside of them for disabling the diag pin.  
If you plan on using endstops rather than sensorless homing and do not have the Fly-2209 drivers, you need to bend or remove the diag pin.  

### Input voltage

The board can handle an input voltage up to 32v.

### Initial Installation

The board that you will receive doesn't have any firmware installed so when plugged into a computer, the board will show as an unidentified device.
Follow the [WiFi instructions](fly_cdyv2_connected_wifi.html).