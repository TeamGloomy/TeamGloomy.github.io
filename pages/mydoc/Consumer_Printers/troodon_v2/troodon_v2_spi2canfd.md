---
title: Adding CAN-FD to a Troodon V2 Printer
tags: []
keywords: 
last_updated: 08/02/2023
summary: "How to add CAN-FD to a Troodon V2 Printer and connect a CAN-FD Toolboard"
sidebar: mydoc_sidebar
permalink: troodon_v2_spi2canfd.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Troodon V2 Printer
spiModule: driver
moduleURL: 
moduleType: driver
spiJumpers: btt_octopus_1.1_spi.png
driverSPICSPin: PD_3
driverSPIChannel: 0
expSPICSPin: PA_4
expSPIChannel: 0
---

## Overview

From 3.5b2, it is now possible to use one or two toolboards with STM32F4 using the CAN-FD protocol. To do so, you must purchase a separate SPI to CAN-FD module. TeamGloomy have worked with Flymaker/Mellow to produce 3 designs of module to suit the board you are using.  

You must also be running the correct board.txt as detailed [here](troodon_v2_firmware_adjustment.html)

For the Troodon V2 Printer we recommend the driver module, which can be purchased from [Aliexpress](https://s.click.aliexpress.com/e/_DEb8k6V).  

### Connecting the driver module

We are going to use the extruder driver slot for this, which is marked motor 2 on the board.  
The driver slot you are going to use should be put in SPI mode. This is done using jumpers as shown below.  

{% include image.html file="btt_octopus_1.1_spi.png" alt="BTT Octopus v1.1 SPI" caption="BTT Octopus v1.1 SPI Driver Jumper Locations" %}  

Install the driver module. Ensure module is installed so the hole thats in the same position as the diag pin is closest to the driver socket.  
{% include image.html file="spi_canfd_driver_module.png" alt="Driver SPI to CAN-FD Module" caption="Driver SPI to CAN-FD Module" %}  

### Wiring for the driver module

CAN-FD only requires 2 wires to be connected between each board, CAN-H and CAN-L.  
We recommend using stranded twisted wire pairs, such as those found in ethernet patch cables.

Using the image below, the H connection is the CAN-H connection and should be connected to CAN-H on the toolboard. L is the CAN-L connection and should be connected to CAN-L. The two R connections are for the 120 ohm resistor and should be connected together.  
{% include image.html file="spi_canfd_driver_module_connections.png" alt="Driver SPI to CAN-FD Module Connections" caption="Driver SPI to CAN-FD Module Connections" %}  
Your wiring will need to be modified at the breakout board. I don't have a printer on hand so I am unable to confirm the correct wiring at this point in time.  

### Board.txt changes

The following two lines should be added to board.txt and assume the last driver slot is used. If another driver slot is used the appropriate CS pin must be chosen.  

```text
//CAN-FD Interface
can.csPin = PC_4
can.spiChannel = 0
stepper.TmcUartPins = { PA_2, PC_0, NoPin, PE_9, PE_14, PF_11, PG_0 }
```

### Config.g Changes

If successful, the toolboard should show in the object model.  
See this [page](https://docs.duet3d.com/en/User_manual/Machine_configuration/CAN_connection#setting-can-addresses) for more information about CAN addresses etc.
