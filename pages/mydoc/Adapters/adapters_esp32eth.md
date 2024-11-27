---
title: Available ESP32 WiFi/Ethernet Adapters
tags: []
keywords: 
last_updated: 27/11/2024
summary: "A description of the different ESP32 WiFi/Ethernet Adapters available"
sidebar: mydoc_sidebar
permalink: adapters_esp32eth.html
folder: mydoc
comments: false
toc: false
---

## Overview

Teamgloomy have teamed up with Mellow/Flymaker to produce ESP32 adapters that handle both WiFi and Ethernet on the same board.
They are available from [AliExpress](https://s.click.aliexpress.com/e/_DmqmxKN)

### Mellow/Fly Version

The following boards are supported:

- Fly-Super5
- Fly-Super8
- Fly-Super8Pro
- Fly-E3-V2
- Fly-Prox10

### BTT/SKR Version

The following boards are supported:

- SKR2
- SKR3 H723
- SKR3EZ H723
- SKR3 H743
- SKR3EZ H743
- BTT Octopus v1.1 F429 Version
- BTT Octopus Pro v1.0 F429 Version

## Board.txt changes

Add the following line to your board.txt file so the firmware knows which module you're using

```text
wifi.moduleType = esp32eth
```

## Usage

To activate the ethernet connection when connected to WiFi already, send as a macro

```text
M552 S-1
M552 S1 p"ethernet"
```

If you always want to use ethernet, replace the line `M552 S1` with `M552 S1 p"ethernet"`.  
