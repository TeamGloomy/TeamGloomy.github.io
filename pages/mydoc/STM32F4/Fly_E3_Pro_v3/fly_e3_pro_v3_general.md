---
title: Fly-E3-Pro-v3 General Information
tags: []
keywords: 
last_updated: 12/05/2022
summary: "General information regarding the Fly-E3-Pro-v3"
sidebar: mydoc_sidebar
permalink: fly_e3_pro_v3_general.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

This page covers any general information for the Fly-E3-Pro-v3 board.  
It is currently available through [AliExpress](https://www.aliexpress.com/item/1005002372751834.html).  

### Z Driver Jumpers

If only one Z output is being used, jumpers should be installed on the other Z output as shown below.

{% include image.html file="fly_e3_pro_zdriver.png" alt="Fly-E3-Pro-v3 Z Jumpers" caption="Fly-E3-Pro-v3 Driver Z Jumper Locations" %}

### Driver Diag Pin

To use sensorless homing, a jumper must be installed on the diag header.

{% include image.html file="fly_e3_pro_diag.png" alt="Fly-E3-Pro-v3 Diag Jumpers" caption="Fly-E3-Pro-v3 Diag Jumper Locations" %}

### Power Configuration

The Fly-E3-Pro-v3 has two 24v inputs and one ground. The right 24v input powers the MCU and WiFi (as well as anything else that runs from 5v) and the left 24v input powers the motors, heaters and bed. This allows a relay to be used to turn off the motors, heaters and bed using a relay without having to use a separate 5v PSU to power the MCU. A diagragm can be found below.  

{% include image.html file="fly_e3_prov3_power.jpg" alt="Fly-E3-Pro-v3 Power Input" caption="Fly-E3-Pro-v3 Power Input" %}
### Maximum Input voltage

The board can handle an input voltage up to 32v.

### Initial Installation

The board that you will receive doesn't have any firmware installed so when plugged into a computer, the board will show as an unidentified device.
Follow the [WiFi instructions](fly_e3_pro_v3_connected_wifi.html).

## Ender 3 Conversion

There is an [Ender 3 Conversion guide](ender_3_conversion.html) that gives a full walkthrough from start to finish.