---
title: Connecting an accelerometer to an SKR Pro v1.1 and v1.2
tags: []
keywords: 
last_updated: 15/07/2021
summary: "How to connect an accelerometer to an SKR Pro v1.1 and v1.2"
sidebar: mydoc_sidebar
permalink: skr_pro_accelerometer.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

From 3.3b3_2, an accelerometer can be connected to collect resonance data. Nothing can yet be done with this information but input shaping is expected to be implemented in 3.4. The only type of accelerometers that are supported are LIS3DH (but not LIS3DSH).  

### Wiring

One possible method of connecting the accelerometer to the an SKR Pro v1.1 and v1.2 is described in the table below. This wiring method uses the hardware SPI2. The image can be used to aid in identification.  
We are going to use Hardware SPI in this guide but if 5160 drivers are being used, software SPI will have to be used instead and most pins can be used for this.  
These connections are on the SPI and I2C header on the board.  

<div class="datatable-begin"></div>

|Accelerometer Image Wire Colour|Accelerometer Pin Name|Accelerometer Pin Type|SKR Pro Pin|SKR Pro Pin Name|
|:---|:---|:---|:---|:----|
|Red|VIN| +5v Input| +5v| -|
|Black|GND|Ground|GND|-|
|Yellow|SCL|SPI SCK|C.10||
|Green|SDA|SPI MOSI|C.12||
|Blue|SDO|SPI MISO|C.11||
|White|CS|Chip Select|A.15||
|Purple|Int|Interupt|B.7||

<div class="datatable-end"></div>

{% include image.html file="lis3dh.png" alt="LIS3DH Pinout" caption="LIS3DH Pinout" %}

### Mounting the LIS3DH

The accelerometer should be mounted firmly to the tool. For a bed slinger (such as an ender 3), it should also be possible to mount it to the bed to take readings for the Y axis.  

### Boart.txt Changes

Add the following to board.txt
```
accelerometer.spiChannel = 2
```

### Config.g Changes

Your config.g should be modified as below.
```
M955 P0 C"A.15+B.7" I20
```  
The I (orientation) parameter tells the firmware which of the 24 possible orientations the accelerometer chip is in relative to the printer axes. It is expressed as a 2-digit number.  
The first digit specifies which machine direction the Z axis of the accelerometer chip (usually the top face of the chip) faces, as follows: 0 = +X, 1 = +Y, 2 = +Z, 4 = -X, 5 = -Y, 6 = -Z. The second digit expresses which direction the X axis of the accelerometer chip faces, using the same code. The direction of positive X is printed on the circuit board. If the board was mounted in the orientation shown in the above image, with +X of the machine being to the right, Y+ being behind and Z+ being up, the I value would be 54. This [document](https://www.dropbox.com/s/hu2w5mk57l4zqpg/Accelerometer%20Orientation.pdf?dl=0) gives information regarding the I value for the new Duet toolboard with accelerometer.  
20 is the default orientation if no orientation has been specified.

### DWC Plugin

There is a plugin to view the accelerometer information. It can be activated under Settings -> General -> Built-in Plugins.  
It can then be found under Settings -> Machine Specific -> Accelerometer

### Usage

The accelerometer can be activated using [M956](https://duet3d.dozuki.com/Wiki/Gcode#Section_M956_Collect_accelerometer_data_and_write_to_file)