---
title: Connecting an accelerometer to a GTR
tags: []
keywords: 
last_updated: 14/09/2021
summary: "How to connect an accelerometer to a GTR"
sidebar: mydoc_sidebar
permalink: gtr_accelerometer.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

From 3.4b1, input shaping can be used to reduce ghosting. The only type of accelerometers that are supported are LIS3DH and the LIS3DSH.   

### Wiring

One possible method of connecting the accelerometer to the GTR is described in the table below. The image can be used to aid in identification.  
Because the firmware is so flexible and we're using software SPI, most pins can be used for this.  
These connections are on the Extension header 0, 1 and 2 on the board.  

<div class="datatable-begin"></div>

|Accelerometer Image Wire Colour|Accelerometer Pin Name|Accelerometer Pin Type|GTR Pin|GTR Pin Name|
|:---|:---|:---|:---|:----|
|Red|VIN| +5v Input| +5v| -|
|Black|GND|Ground|GND|-|
|Yellow|SCL|SPI SCK|H.13||
|Green|SDA|SPI MOSI|I.9||
|Blue|SDO|SPI MISO|I.8||
|White|CS|Chip Select|H.8||
|Purple|Int|Interupt|H.7||

<div class="datatable-end"></div>

{% include image.html file="lis3dh.png" alt="LIS3DH Pinout" caption="LIS3DH Pinout" %}

### Mounting the LIS3DH

The accelerometer should be mounted firmly to the tool. For a bed slinger (such as an ender 3), it should also be possible to mount it to the bed to take readings for the Y axis.  

### Boart.txt Changes

Add the following to board.txt
```
SPI5.pins = { H.13, I.8, I.9 }
accelerometer.spiChannel = 5
```

### Config.g Changes

Your config.g should be modified as below.
```
M955 P0 C"H.8+H.7" I20
```  
The I (orientation) parameter tells the firmware which of the 24 possible orientations the accelerometer chip is in relative to the printer axes. It is expressed as a 2-digit number.  
The first digit specifies which machine direction the Z axis of the accelerometer chip (usually the top face of the chip) faces, as follows: 0 = +X, 1 = +Y, 2 = +Z, 4 = -X, 5 = -Y, 6 = -Z. The second digit expresses which direction the X axis of the accelerometer chip faces, using the same code. The direction of positive X is printed on the circuit board. If the board was mounted in the orientation shown in the above image, with +X of the machine being to the right, Y+ being behind and Z+ being up, the I value would be 54. This [document](https://www.dropbox.com/s/hu2w5mk57l4zqpg/Accelerometer%20Orientation.pdf?dl=0) gives information regarding the I value for the new Duet toolboard with accelerometer.  
20 is the default orientation if no orientation has been specified.

### DWC Plugin

There is a plugin to assist in gathering data and analysing it.
It is called input shaper plugin and can be found on the [Duet3D forum](https://forum.duet3d.com/topic/25861/inputshaping-plugin-0-2-0-pre7-released)

### Usage

The accelerometer can be activated using [M956](https://duet3d.dozuki.com/Wiki/Gcode#Section_M956_Collect_accelerometer_data_and_write_to_file)
