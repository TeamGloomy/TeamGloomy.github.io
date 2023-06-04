---
title: SKR3EZ H723 General Information
tags: []
keywords: 
last_updated: 04/06/2023
summary: "General information regarding the SKR3EZ H723"
sidebar: mydoc_sidebar
permalink: skr_3_ez_h723_general.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

This page covers any general information for the SKR3EZ H723 board. 

### Board.txt Name

The board name in board.txt is **biquskr_3_ez_h723**.

### Driver Jumpers

{% include warning.html content="The SKR3EZ H723 can't be used with SPI and UART controlled drivers at the same time. This means you can't mix TMC 22XX and TMC 5160 drivers." %}

### Driver Diag Pin

If you want to use sensorless homing, a jumper needs adding under each driver you want to use it for as shown below.

{% include image.html file="skr3_diag.png" alt="SKR3EZ H723 Diag" caption="SKR3EZ H723 Sensorless Homing Jumper Locations" %}

### PT1000 Support

Both hotend temperature sensor inputs support PT1000. When using one, make sure the jumper identified below is installed. Make sure it is removed when using a standard thermistor.  

{% include image.html file="skr3_pt1000.png" alt="SKR3 PT1000 Jumper" caption="SKR3 PT1000 Jumper Locations" %}

Also make sure you define the resistor value as R2200 in your M308 command.

### Initial Installation

Follow the [WiFi instructions](skr_3_ez_h723_connected_wifi.html){:target="_blank"}.