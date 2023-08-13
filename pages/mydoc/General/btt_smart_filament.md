---
title: Configuring a BTT Smart Filament Monitor
tags: []
keywords: 
last_updated: 14/07/2021
summary: "How to configuring a BTT Smart Filament Monitor"
sidebar: mydoc_sidebar
permalink: btt_smart_filament.html
folder: mydoc
comments: false
toc: false
---

Yes, a BTT Smart Filament Monitor can be used with the RepRapFirmware.

Connect it to an endstop pin. Configure it as below in config.g, changing the endstop pin name as required.  

```text
M591 D0 P7 C"zstopmax" L7 R75:125 E22 S1
```
