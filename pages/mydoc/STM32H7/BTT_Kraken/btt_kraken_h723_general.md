---
title: BTT Kraken General Information
tags: []
keywords: 
last_updated: 27/12/2023
summary: "General information regarding the BTT Kraken"
sidebar: mydoc_sidebar
permalink: btt_kraken_h723_general.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: BTT Kraken
---

## Overview

This page covers any general information for the {{boardname}} board, which is supported from 3.5.0-rc.2.

### Board.txt Name

The board name in board.txt is **biqukraken_h723**.

### Driver Diag Pin

RRF doesn't use the Diag pin for sensorless homing or stall detection. Please ensure the jumpers on the diag pins identified below are removed.  

{% include image.html file="btt_kraken_diag.png" alt="BTT Kraken Diag" caption="BTT Kraken Diag Jumper Locations" %}

### Driver Voltage

All drivers are powered from the HV-IN and the input voltage can be 24V to 60V.  

### Fan Voltage

The fan outputs can each be set to 5v, 12v or VCC as shown below.  

{% include image.html file="btt_kraken_fan_voltage.png" alt="BTT Kraken Fan Voltage" caption="BTT Kraken Fan Voltage Jumper Locations" %}  

### Initial Installation

Follow the [WiFi instructions](btt_kraken_h723_connected_wifi_32.html) or [SBC instructions](btt_kraken_h723_connected_sbc.html)
