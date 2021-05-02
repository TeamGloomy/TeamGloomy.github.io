---
title: SKR v2.0 General Information
tags: []
keywords: 
last_updated: 16/03/2021
summary: "General information regarding the SKR v2.0"
sidebar: mydoc_sidebar
permalink: skr_2.0_general.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

This page covers any general information for the SKR v2.0 board.  

### Driver Jumpers

The jumpers should be installed as below. "Normal" should be used for standalone drivers. "UART mode Interpolation" should be used when using smart drivers (i.e. TMC2208, TMC2209, TMC2225 and TMC2226). 

{% include image.html file="skr_2.0_normal.png" alt="SKR v2.0 Normal" caption="SKR v2.0 Normal Driver Jumper Locations" %}

{% include image.html file="skr_2.0_UART.png" alt="SKR v2.0 UART" caption="SKR v2.0 UART Driver Jumper Locations" %}

{% include image.html file="skr_2.0_SPI.png" alt="SKR v2.0 SPI" caption="SKR v2.0 SPI Driver Jumper Locations" %}

### Driver Diag Pin

If you want to use sensorless homing, a jumper needs adding under each driver you want to use it for as shown below.

{% include image.html file="skr_2.0_diag.png" alt="SKR v2.0 Diag" caption="SKR v2.0 Sensorless Homing Jumper Locations" %}

### Initial Installation

Follow the [WiFi instructions](skr_2.0_connected_wifi.html).