---
title: Fly-E3-Pro General Information
tags: []
keywords: 
last_updated: 16/03/2021
summary: "General information regarding the Fly-E3-Pro"
sidebar: mydoc_sidebar
permalink: fly_e3_pro_general.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

This page covers any general information for the Fly-E3-Pro board.  
It is currently available through [AliExpress](https://www.aliexpress.com/item/1005002372751834.html).  

### Z Driver Jumpers

If only one Z output is being used, jumpers should be installed on the other Z output as shown below.

{% include image.html file="fly_e3_z_jumpers.png" alt="Fly-E3 Z Jumpers" caption="Fly-E3 Driver Z Jumper Locations" %}

### Driver Diag Pin

To use sensorless homing, a jumper must be installed on the diag header.

{% include image.html file="fly_e3_pro_diag.png" alt="Fly-E3-Pro Diag Jumpers" caption="Fly-E3-Pro Diag Jumper Locations" %}

### 12v Input voltage Useage

If using the board with 12v, some extra jumpers are required to be installed.
Install a jumper on each of the locations highlighted.

{% include image.html file="fly_e3_pro_vol.png" alt="Fly-E3-Pro 12v Jumpers" caption="Fly-E3-Pro 12v Jumper Locations" %}

### Maximum Input voltage

The board can handle an input voltage up to 32v.

### Initial Installation

The board that you will receive doesn't have any firmware installed so when plugged into a computer, the board will show as an unidentified device.
Follow the [WiFi instructions](fly_e3_pro_connected_wifi.html).

## Ender 3 Conversion

There is an [Ender 3 Conversion guide](ender_3_conversion.html) that gives a full walkthrough from start to finish.