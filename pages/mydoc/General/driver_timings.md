---
title: Driver Timings
tags: []
keywords: 
last_updated: 14/07/2021
summary: "Driver timings required for certain drivers"
sidebar: mydoc_sidebar
permalink: driver_timings.html
folder: mydoc
comments: false
toc: false
datatable: true
---

Some drivers (such as the DRV8825) require specifying the timing information as they require longer pulse timings than the configured default that can result in missed steps. Timing information for stepper drivers can be added using [M569](https://docs.duet3d.com/en/User_manual/Reference/Gcodes#m569-set-motor-driver-direction-enable-polarity-mode-and-step-pulse-timing). Timing information can usually be found in the stepper driver data sheets. 

Timings for drivers can be found below. These are to be configured as part of the config.g file.

<div class="datatable-begin"></div>

| Driver Type      | Timing       | Example  |
| :------------- |:-------------| :---------------|
| A4982           | 1.0:1.0:0.2:0.2          | M569 P0 S0 T1.0:1.0:0.2:0.2            |
| A4988     | 1.0:1.0:0.2:0.2          | M569 P0 S0 T1.0:1.0:0.2:0.2           |
| A5984   | 1.0:1.0:0.4:0.4          | M569 P0 S0 T1.0:1.0:0.4:0.4             |
| DRV8825   | 1.9:1.9:0.65:0.65          | M569 P0 S0 T1.9:1.9:0.65:0.65             |
| LV8729| 0.5:0.5:0.5:0.5          | M569 P0 S0 T0.5:0.5:0.5:0.5             |
| THB6128  | 0.5:0.5:0.5:0.5          | M569 P0 S0 T0.5:0.5:0.5:0.5             |
| TMC220x   |           | M569 P0 S0              |
| TMC222x   |           | M569 P0 S0             |

<div class="datatable-end"></div>