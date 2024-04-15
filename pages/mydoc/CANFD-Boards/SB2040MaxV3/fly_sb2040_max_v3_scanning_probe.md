---
title: Fly-SB2040 Max V3 Scanning Probe
tags: []
keywords: 
last_updated: 26/06/2023
summary: "Configuring the Scanning Probe on a Fly-SB2040 Max V3"
sidebar: mydoc_sidebar
permalink: fly_sb2040_max_v3_scanning_probe.html
folder: mydoc
comments: false
toc: false
datatable: true
board: Fly-SB2040 Max V3
---

## Overview

The {{page.board}} has an onboard LDC1612 and Scanning Probe PCB/coil that can be used with RRF.  

### Installation

The bottom of the Scanning Probe PCB/coil should be around 1 to 2mm above the tip of the nozzle, so that when scanning the bed the G31 trigger height can be set to around 2mm to avoid the nozzle contacting the bed, while keeping the PCB/coil fairly close to the bed.

### Firmware Configuration

{% include important.html content="The changes shown below that are to be made to config.g assume that the toolboard uses the default CAN address of 124. If you have changed the default CAN address, make sure you change the 124 to the correct address." %}

To use the scanning Z probe as a secondary Z probe, assuming you already have a primary Z probe used for Z homing, add the following to your config.g:

```text
; Scanning Z probe
M558 K1 P11 C"124.i2c.ldc1612" F36000 T36000
M308 A"SZP coil" S10 Y"thermistor" P"124.temp1" ; thermistor on PCB/coil
```

* The K1 parameter configures it as Z probe 1 so as to leave your primary probe as Z probe 0
* If you change the CAN address, the CAN address in M558 C parameter and M308 P parameter will need to change

### Scanning Probe Calibration

Calibrate the scanning probe using the instrucions [here](https://docs.duet3d.com/User_manual/Tuning/scanning_z_probe_calibration)
