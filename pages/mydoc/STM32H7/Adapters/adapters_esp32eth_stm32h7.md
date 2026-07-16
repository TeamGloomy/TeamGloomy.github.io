---
title: Available ESP32 WiFi/Ethernet Adapters
tags: []
keywords: 
last_updated: 27/11/2024
summary: "A description of the different ESP32 WiFi/Ethernet Adapters available"
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

- Fly-E3-Ultra
- Fly-ProX10
- Fly-Super5Pro
- Fly-Super8Pro H723
- Fly-Super8Pro H743

{% include note.html content="An ESP32-C5 based WiFi adapter is also planned for the Fly range. Details will be added here once it is available." %}

### BTT/SKR Version

The following boards are supported:

- BTT Scylla V1
- SKR3 H723
- SKR3EZ H723
- SKR3 H743
- SKR3EZ H743

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
