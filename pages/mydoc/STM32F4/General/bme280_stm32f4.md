---
title: How to connect a BME280
tags: []
keywords: 
last_updated: 28/06/2023
summary: "How to connect a BME280"
permalink: bme280_stm32f4.html
folder: mydoc
comments: false
toc: false
---

{% include important.html content="This page is only applicable to STM32 based boards running 3.5 beta 2 or later." %}

## Overview

From 3.5 beta 2, BME280 sensors can now be connected to RRF.
The Duet docs page for BME280 sensors can be found [here](https://docs.duet3d.com/en/User_manual/Connecting_hardware/Temperature_connecting_DHT)

### What pins to choose?

A BME280 sensor requires 6 pins to be connected: 3 for SPI, 1 CS pin, +3.3V (not 5V) and ground.  
The pre-configured SPI pins for each board are listed on the pins page of each board. You can also use software SPI and set the pins using [board.txt](./board_txt_stm32_stm32f4.html).  

You also need to set the following lines in board.txt.  

```text
heat.spiTempSensorChannel = 0
heat.spiTempSensorCSPins = { PB_6 }
```

`heat.spiTempSensorChannel` should be equal to the SPI channel used by the BME280. `heat.spiTempSensorCSPins` should be equal to the CS pin used by the BME280.  
You can then configure the BME280 in config.g as described [here](https://docs.duet3d.com/en/User_manual/Connecting_hardware/Temperature_connecting_DHT#configuring-a-dht-sensor).  
