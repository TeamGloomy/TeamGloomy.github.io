---
title: Troodon V2 Printer General Information
tags: []
keywords: 
last_updated: 28/06/2023
summary: "General information regarding the Troodon V2 Printer"
sidebar: mydoc_sidebar
permalink: troodon_v2_general.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The Troodon V2 Printer is a 95% assembled 3D printer, produced by [Formbot](https://www.formbot3d.com/products/troodon-20-pre-assembled-fully-enclosed-corexy-3d-printer) and is based on the design of the Voron V2.4r2.  
It has a print size of 350x350x320mm. All panels etc are provided for it to be fully enclosed.  
The hotend has a PT1000 fitted to allow higher temperature printing. It has a hardened nozzle and extruder gears to support printing of abrasive filament.
It has some upgrades fitted, such as nozzle wiping brush, aluminium parts rather than plastic and supports the stealthburner as a drop in replacement.
It comes running this port of RRF on a custom made BTT Octopus X7 out of the box.

### Board.txt Name

The version of the firmware that is shipped with the printer uses the BTT Octopus Pro as the base board configuration and then overrides the stepper pins to be suitable for the Octopus X7. Going forwards, you can choose to either continue to use this configuration or, **from RRF3.4.5**, you can use our built in configuration for the board.  

The board name in board.txt is **troodon_v2**.

### Driver Jumpers

The jumpers should be installed as below. "SPI mode Interpolation" is supported for TMC5160 drivers. "UART mode Interpolation" should be used when using smart drivers (i.e. TMC2208, TMC2209, TMC2225 and TMC2226)

{% include image.html file="btt_octopus_1.1_uart.png" alt="Troodon V2 UART" caption="Troodon V2 UART Driver Jumper Locations" %}  
{% include image.html file="btt_octopus_1.1_spi.png" alt="Troodon V2 SPI" caption="Troodon V2 SPI Driver Jumper Locations" %}  

### Driver Diag Pin

If you want to use sensorless homing, a jumper needs adding next to each appropriate endstop as shown below.

{% include image.html file="octopus_x7_diag.png" alt="Troodon V2 Diag" caption="Troodon V2 Sensorless Homing Jumper Locations" %}

## Maximum Hotend Wattage

After carrying out some research into the maximum heater cartridge wattage that can be installed on a stock Troodon V2, it has been concluded that the limit is 50 watts.  
There are two reasons why this is the case and they are as follows:

* There is a 40 pin cable between the mainboard and the breakout board. This uses LDZY A2544 connectors which are rated to 3A (which equates to 72 watts at 24v).  
* The traces on the breakout board and toolhead PCB have been designed for a maximum of 2.5A (which equates to 60 watts at 24v).  
Armed with this information, I spoke to Formbot who's engineer advised that 50 watts is the limit. This means you can't use hotends such as a rapido without heavy modification of the stock setup.  
This can however be remidied by installing a toolboard. Currently, only the Duet3D 1LC is supported.  

## Configurations Files

### Stock

A backup of the stock configuration files can be found [here](https://github.com/TeamGloomy/Troodon-V2/tree/stock).  

### Improved Config

TeamGloomy offer an "improved" version of the configuration files, which can be found [here](https://github.com/TeamGloomy/Troodon-V2/tree/improved).  
They contain a number of improved, including flippering the X and Y axis so they are in the correct orientation. Please read the changelog at the above link to find out about all the changes that have been implemented.  

### Initial Installation

To get your Troodon V2 Printer connected to your WiFi, please follow the [WiFi instructions](troodon_v2_connected_wifi_esp32.html).  
To find out how to tune the heaters of your Troodon V2 Printer, follow the [Heater Tuning Instructions](troodon_v2_heater_tuning.html).  
To find out how to setup your Z Offsets correctly for the probe and AutoZ, follow the [Instructions Here](troodon_v2_zoffsets.html).  
To improve your bed.g gantry levelling so it automatically iterates until the gantry is level, follow the [Improved Levelling Instructions](troodon_v2_improved_bed.html).  
