---
title: SKR3 and SKR3 EZ General Information
tags: []
keywords: 
last_updated: 17/08/2022
summary: "General information regarding the SKR3"
sidebar: mydoc_sidebar
permalink: skr_3_general.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

This page covers any general information for the SKR3 and SKR3 EZ board. 

### Board.txt Name

The board name in board.txt is **biquskr_3**.

### Driver Jumpers

#### SKR3

The jumpers should be installed as below. "Normal" should be used for standalone drivers. "UART mode Interpolation" should be used when using smart drivers (i.e. TMC2208, TMC2209, TMC2225 and TMC2226). 

{% include image.html file="skr_2.0_normal.PNG" alt="SKR3 Normal" caption="SKR3 Normal Driver Jumper Locations" %}

{% include image.html file="skr_2.0_UART.PNG" alt="SKR3 UART" caption="SKR3 UART Driver Jumper Locations" %}

{% include image.html file="skr_2.0_SPI.PNG" alt="SKR3 SPI" caption="SKR3 SPI Driver Jumper Locations" %}

#### SKR3 EZ

{% include warning.html content="The SKR3 EZ can't be used with SPI and UART controlled drivers at the same time. This means you can't mix TMC 22XX and TMC 5160 drivers." %}

### Driver Diag Pin

If you want to use sensorless homing, a jumper needs adding under each driver you want to use it for as shown below.

{% include image.html file="skr3_diag.png" alt="SKR3 Diag" caption="SKR3 Sensorless Homing Jumper Locations" %}

### PT1000 Support

#### SKR3

Both hotend temperature sensor inputs support PT1000. When using one, make sure the jumper identified below is installed. Make sure it is removed when using a standard thermistor.  

{% include image.html file="skr3_pt1000.png" alt="SKR3 PT1000 Jumper" caption="SKR3 PT1000 Jumper Locations" %}

Also make sure you define the resistor value as R1000 in your M308 command.

#### SKR3 EZ

Both hotend temperature sensor inputs support PT1000. When using one, make sure the jumper identified below is installed. Make sure it is removed when using a standard thermistor.  

{% include image.html file="skr3_pt1000.png" alt="SKR3 PT1000 Jumper" caption="SKR3 PT1000 Jumper Locations" %}

Also make sure you define the resistor value as R2200 in your M308 command.

### Initial Installation

Follow the [WiFi instructions](skr_3_connected_wifi.html){:target="_blank"}.