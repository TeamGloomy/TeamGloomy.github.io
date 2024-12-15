---
title: BTT Scylla V1 General Information in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 15/12/2024
summary: "General information regarding the BTT Scylla V1"
sidebar: mydoc_sidebar
permalink: btt_scylla_v1_h723_general_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: BTT Scylla V1
---

## Overview

This page covers any general information for the {{boardname}} board, which is supported from 3.5.1.

### Board Voltage

The board and all drivers can be powered from 24V to 60V.  

### Driver Sense Resistor

The first drivers on the {{boardname}} use a different sense resistor than is set in the firmware. Please add the following lines to your config.g.  

```text
M569.9 P0.0 R0.05 S10
M569.9 P0.1 R0.05 S10
M569.9 P0.2 R0.05 S10
M569.9 P0.3 R0.05 S10
```

### Aux Voltage

The aux outputs are at whatever voltage the input is set at.

### Initial Installation

Follow the [WiFi instructions](btt_scylla_v1_h723_connected_wifi_32_3_5.html) or [SBC instructions](btt_scylla_v1_h723_connected_sbc_3_5.html)
