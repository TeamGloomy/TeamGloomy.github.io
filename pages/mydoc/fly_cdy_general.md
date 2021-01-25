---
title: Fly-CDY General Information
tags: []
keywords: 
last_updated: 25/01/2021
summary: "General information regarding the Fly-CDY"
sidebar: mydoc_sidebar
permalink: fly_cdy_general.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

This page covers any general information for the Fly-CDY board.  
It is currently available through [AliExpress](https://www.aliexpress.com/item/1005001701631493.html)

### Driver Jumpers

The jumpers should be installed as below. "Common Interpolation" should be used for standalone drivers. "SPI mode Interpolation" is not a currently supported configuration as this port does not support SPI communication to drivers. "UART mode Interpolation" should be used when using smart drivers (i.e. TMC2208, TMC2209, TMC2225 and TMC2226)

{% include image.html file="fly_e3_jumpers.png" alt="Fly-E3 Jumpers" caption="Fly-E3 Driver Jumper Locations" %}

### Initial Installation

The board that you will receive doesn't have any firmware installed so when plugged into a computer, the board will show as an unidentified device.
Follow the [WiFi instructions](fly_cdy_connected_wifi.html).