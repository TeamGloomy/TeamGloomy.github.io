---
title: Fysetc Spider H723 General Information in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 12/03/2026
summary: "General information regarding the Fysetc Spider H723"
sidebar: mydoc_sidebar
permalink: fysetc_spider_h723_general_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

This page covers any general information for the Fysetc Spider H723 board.  
It is currently available through [AliExpress](https://s.click.aliexpress.com/e/_c4MgtmRH).  

### Board Power

The Fysetc Spider has 3 lots of power inputs. The first one powers the 24v rail on all drivers, heaters and fans, the second one powers the 48v rail on all drivers and the third one powers the bed.  

### Driver Jumpers

The jumpers should be installed as below. "Common Interpolation" should be used for standalone drivers. "SPI mode Interpolation" is supported for TMC5160 drivers. "UART mode Interpolation" should be used when using smart drivers (i.e. TMC2208, TMC2209, TMC2225 and TMC2226)

{% include image.html file="fly_e3_jumpers.png" alt="Fly-Super8 Jumpers" caption="Fly-Super Driver Jumper Locations" %}

### Driver Diag Pin

If you want to use sensorless homing, a jumper needs adding under each driver you want to use it for. It is only supported on drivers 0 to 5 and the pins are shared with the endstop pins (and in the case of zmin and ymax, also shared with the bltouch header).

### Fan Voltage

The fan voltage can be set using jumpers to either 5v, 12v and Vin.  
Set them as on the pinout diagram.

### Initial Installation

The board that you will receive doesn't have any firmware installed so when plugged into a computer, the board will show as an unidentified device.
Follow the [WiFi instructions](fysetc_spider_h723_connected_wifi_3_5.html) or [SBC instructions](fysetc_spider_h723_connected_sbc_3_5.html).
