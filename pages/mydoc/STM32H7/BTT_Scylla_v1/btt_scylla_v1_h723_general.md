---
title: BTT Scylla V1 General Information
tags: []
keywords: 
last_updated: 15/12/2024
summary: "General information regarding the BTT Scylla V1"
permalink: btt_scylla_v1_h723_general.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: BTT Scylla V1
---

{% include warning.html content="The BTT Scylla V1 is a CNC/laser/spindle controller board, **not** a 3D printer board. It does not have a heated bed output, standard thermistor inputs, or extruder connections. If you are looking for a 3D printer board, see the other boards listed in the sidebar." %}

## Overview

{% include note.html content="These instructions apply to RRF 3.5.0 and later, including RRF 3.6.x. Use the [TeamGloomy Config Tool](https://teamgloomy.github.io/configtool/) to generate a starter configuration for this board." %}

This page covers any general information for the {{page.boardname}} board, which is supported from 3.5.1.

### Board Voltage

The board and all drivers can be powered from 24V to 60V.  

### Driver Sense Resistor

The first drivers on the {{page.boardname}} use a different sense resistor than is set in the firmware. Please add the following lines to your config.g.  

```text
M569.9 P0.0 R0.05 S10
M569.9 P0.1 R0.05 S10
M569.9 P0.2 R0.05 S10
M569.9 P0.3 R0.05 S10
```

### Aux Voltage

The aux outputs are at whatever voltage the input is set at.

### Initial Installation

Follow the [WiFi instructions](btt_scylla_v1_h723_connected_wifi_32.html)
