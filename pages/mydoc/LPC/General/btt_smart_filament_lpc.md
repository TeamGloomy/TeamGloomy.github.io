---
title: Configuring a BTT Smart Filament Monitor
tags: []
keywords: 
last_updated: 14/07/2021
summary: "How to configure a BTT Smart Filament Monitor"
permalink: btt_smart_filament_lpc.html
folder: mydoc
comments: false
toc: false
---

A BTT Smart Filament Monitor can be used with RepRapFirmware.

Connect it to an endstop pin. Configure it as below in config.g, changing the endstop pin name as required.  

```text
M591 D0 P7 C"zstopmax" L7 R75:125 E22 S1
```
