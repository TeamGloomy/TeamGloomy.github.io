---
title: Fysetc Spider King 407 General Information
tags: []
keywords: 
last_updated: 07/09/2022
summary: "General information regarding the Fysetc Spider King 407"
sidebar: mydoc_sidebar
permalink: fysetc_spider_king_407_general.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

This page covers any general information for the Fysetc Spider King 407 board.  
It is currently available through [AliExpress](https://s.click.aliexpress.com/e/_DElhit3).  

### Board.txt Name

The board name in board.txt is **fysetc_spider_king407**.

### Driver Jumpers

The Fysetc Spider King 407 board has a unique feature in that (assuming you are using compatible drivers), you don't need to set the correct jumpers and the board auto configures this for you.
The compatible drivers are:

<div class="datatable-begin"></div>

|Driver Type|Version|Manufacturer|
| :------------- |:-------------|:-------------|
|Big5160|All|Fysetc|
|2209|v4|Fysetc|

<div class="datatable-end"></div>

But what do you do if you don't want to use those drivers but some you already have on hand?
You need to solder some pads on the underside of the board as shown below. Make sure you add solder in the correct position for the type of drivers you have (UART for TMC22XX and SPI for TMC5160).  

{% include image.html file="fysetc_spider_king_drivers.png" alt="Fysetc Spider King 407 SPI/UART" caption="Fysetc Spider King 407 SPI/UART" %}

### Fan Voltage

The fan voltage can be set using jumpers to either 5v, 12v and Vin.  
Set them as shown below.  

{% include image.html file="fysetc_spider_king_fans.png" alt="Fysetc Spider King 407 Fan Voltage" caption="Fysetc Spider King 407 Fan Voltage" %}

### IO Output Voltage

The IO output voltage can be set to either 3.3v or 24v for IO0, IO1 or IO2 and 3.3v or 5v for IO3, IO4 and IO5.
You need to cut some traces and solder some pads on the underside of the board as shown below.  
{% include image.html file="fysetc_spider_king_407_endstops.jpg" alt="Fysetc Spider King 407 Endstop Voltage" caption="Fysetc Spider King 407 Endstop Voltage" %}

### Maximum HV Input voltage

Driver sockets 0 to 3 can accept a maximum voltage of 55v. Driver sockets 4 to 9 can accept a maximum voltage of 35v.  

### Initial Installation

The board that you will receive doesn't have any firmware installed so when plugged into a computer, the board will show as an unidentified device.
Follow the [WiFi instructions](fysetc_spider_king_407_connected_wifi.html).
