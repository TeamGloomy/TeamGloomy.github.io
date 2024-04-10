---
title: Fly-Super8Pro H723 General Information
tags: []
keywords: 
last_updated: 16/07/2023
summary: "General information regarding the Fly-Super8Pro H723"
sidebar: mydoc_sidebar
permalink: fly_super8pro_h723_general.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

This page covers any general information for the Fly-Super8Pro H723 board.  
It is currently available through [AliExpress](https://s.click.aliexpress.com/e/_DDiWwl3).  
The Fly-Super8Pro H723 board is based on hardware revision v1.3 of the Fly-Super8. Details of each Fly-Super8 hardware revision can be found [here](fly_super8_hardware_revisions.html)

### Board.txt Name

The board name in board.txt is **fly_super8_pro_h723**.

### Board Fuses

The board is supplied without the fuses installed.  
It is supplied with different fuses than the listing on AliExpress. The fuses should be installed as shown below.  

{% include image.html file="fly_super8_fuses.png" alt="Fly-Super8 Fuses" caption="Fly-Super8 Fuses" %}

### Board Power

The Fly-Super8 has 4 lots of power inputs. The first one powers drivers 0 to 2, the second one powers drivers 3 to 7, the third one powers the boards, heaters and fans and the last one powers the bed.  

{% include image.html file="fly_super8_power.png" alt="Fly-Super8 Power Connections" caption="Fly-Super8 Power Connections" %}

### Driver Jumpers

The jumpers should be installed as below. "Common Interpolation" should be used for standalone drivers. "SPI mode Interpolation" is supported for TMC5160 drivers. "UART mode Interpolation" should be used when using smart drivers (i.e. TMC2208, TMC2209, TMC2225 and TMC2226)

{% include image.html file="fly_e3_jumpers.png" alt="Fly-Super8 Jumpers" caption="Fly-Super Driver Jumper Locations" %}

### Driver Diag Pin

The driver diag pin is used for sensorless homing and stall detection.  
The Fly-Super8Pro H743 **does not** have a way of disabling the diag pin as it is designed to be used with [Fly-2209 drivers](https://s.click.aliexpress.com/e/_DnBFVNR) which have a switch on the underside of them for disabling the diag pin.  
If you plan on using endstops rather than sensorless homing and do not have the Fly-2209 drivers, you need to bend or remove the diag pin.  

### Driver Signal Voltage

The output voltage of each driver EN, STEP and DIR can be configured to either 3.3v, 5v or 12v. The default is 5v.  

{% include image.html file="fly_super8_driver_voltage.png" alt="Fly-Super8 Signal Voltage" caption="Fly-Super8Pro Driver Signal Voltage" %}

### Fan Mosfets

The Fly-Super8Pro H723 has a unique feature in that the fan mosfets are replaceable.
Each mosfet (VS3622e) controls two of the fan outputs.
The orientation that the fan mostfet is plugged into the board doesn't matter.

{% include image.html file="fly_super8_mosfets.png" alt="Fly-Super8 Fan Mosfets" caption="Fly-Super8 Fan Mosfets" %}

### Fan Voltage

The fan voltage can be set using jumpers to either 5v, 12v and Vin.  
Set them as shown below.  

{% include image.html file="fly_super8_fan_voltage.png" alt="Fly-Super8 Fan Voltage" caption="Fly-Super8 Fan Voltage" %}

### IO Output Voltage

The IO output voltage can be set to either 3.3v, 5v or 12v. The default is 5v.  
Set them as shown below.  

{% include image.html file="fly_super8_io_voltage.png" alt="Fly-Super8 IO Voltage" caption="Fly-Super8 IO Voltage" %}

### Maximum HV Input voltage

The driver sockets have been tested with 48v.  

### Thermistor Connection  

Thermistors should use the ADC inputs. The thermistors should be connected between ground and the signal pin.  

{% include image.html file="fly_super8_hotend_thermistors.png" alt="Fly-Super8 Hotend Thermistors" caption="Fly-Super8 Hotend Thermistors" %}

{% include image.html file="fly_super8_bed_thermistor.png" alt="Fly-Super8 Bed Thermistors" caption="Fly-Super8 Bed Thermistors" %}

### Initial Installation

The board that you will receive doesn't have any firmware installed so when plugged into a computer, the board will show as an unidentified device.
Follow the [WiFi instructions](fly_super8pro_h723_connected_wifi.html).
