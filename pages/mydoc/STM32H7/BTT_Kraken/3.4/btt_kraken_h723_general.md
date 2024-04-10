---
title: BTT Kraken General Information
tags: []
keywords: 
last_updated: 06/04/2024
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

### Driver Sense Resistor

The first 4 drivers on the BTT Kraken use a different sense resistor than is set in the firmware. Please add the following lines to your config.g.  

```text
M569.9 P0.0 R0.022 S10
M569.9 P0.1 R0.022 S10
M569.9 P0.2 R0.022 S10
M569.9 P0.3 R0.022 S10
```

### Fan Voltage

The fan outputs can each be set to 5v, 12v or VCC as shown below.  

{% include image.html file="btt_kraken_fan_voltage.png" alt="BTT Kraken Fan Voltage" caption="BTT Kraken Fan Voltage Jumper Locations" %}  

### Initial Installation

Follow the [WiFi instructions](btt_kraken_h723_connected_wifi_32.html) or [SBC instructions](btt_kraken_h723_connected_sbc.html)
