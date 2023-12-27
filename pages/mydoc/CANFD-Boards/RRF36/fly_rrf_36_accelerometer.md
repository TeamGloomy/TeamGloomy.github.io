---
title: Fly-RRF-36 Accelerometer
tags: []
keywords: 
last_updated: 26/06/2023
summary: "Configuring the accelerometer on a Fly-RRF-36"
sidebar: mydoc_sidebar
permalink: fly_rrf_36_accelerometer.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The Fly-RRF-36 has an onboard accelerometer (LIS3DH) which is compatible with RRF.  

### Accelerometer orientation

Below is the orientation of accelerometer fitted to the Fly-RRF-36.  

{% include image.html file="fly_rrf_36_accelerometer_1.png" alt="Fly-RRF-36 Accelerometer Orientation" caption="Fly-RRF-36 Accelerometer Orientation" %}  

### Firmware Configuration

{% include important.html content="The changes shown below that are to be made to config.g assume that the toolboard uses the default CAN address of 124. If you have changed the default CAN address, make sure you change the 124 to the correct address." %}

See [M955](https://docs.duet3d.com/User_manual/Reference/Gcodes/M955) for how to setup and configure the accelerometer, including its orientation in relation to the printer XYZ axis.

An example command would be  

```text
M955 P124.0 I10
```

Duet Forum user [Nuramori](https://forum.duet3d.com/user/nuramori) has produced [a graphical guide](https://www.dropbox.com/s/hu2w5mk57l4zqpg/Accelerometer%20Orientation.pdf?dl=0) to help illustrate the orientation options.
