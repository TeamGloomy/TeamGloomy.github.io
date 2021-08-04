---
title: Connecting a Fly-407ZG via an ESP32 WiFi Adapter
tags: []
keywords: 
last_updated: 04/08/2021
summary: "How to connect to a Fly-407ZG via an ESP32 WiFi Adapter"
sidebar: mydoc_sidebar
permalink: fly_407zg_connected_wifi_32.html
folder: mydoc
comments: false
toc: false
datatable: true 
---

## Overview

The Fly-407ZG is an STM32F407ZGT6 based board.

## Firmware File

Choose the correct corresponding firmware (firmware-stm32f4-wifi-XXX.bin) from [here](https://github.com/gloomyandy/RepRapFirmware/releases). Remember to rename it to firmware.bin. Put it in the root of a FAT32 formatted SD card.

<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a class="noCrossRef" href="#TG" data-toggle="tab">TeamGloomy/Mellow</a></li>
    <li><a class="noCrossRef" href="#homemade" data-toggle="tab">Homemade</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="TG" markdown="1">

## TeamGloomy/Mellow Adapters

TeamGloomy and Mellow have teamed up to produce ESP32 adapters.   
They can be purchased through [aliexpress](https://www.aliexpress.com/item/1005003077964768.html).  

Connect the ESP32 Adapter to the board as shown below.  
{% include image.html file="fly_407zg_esp32_connection.png" alt="Fly-407ZG ESP32" caption="Fly-407ZG ESP32 Adapter Connection" %}
If not connecting the 4-pin serial cable, then add a small amount of solder in the area highlighted below. 
{% include image.html file="fly_esp32_power.png" alt="Fly ESP32 Power" caption="Fly ESP32 Power Solder" %}

</div>

<div role="tabpanel" class="tab-pane" id="homemade" markdown="1">

## Homemade ESP32

Use an ESP32 with USB programming as it already 5v tolerant and it allows for updating via USB. They also need to be the 36 pin variety so they have GPIO0 broken out.

### BOM

* 1 x 36 pin ESP32
* 1 x 330R resistor
* jumpers or other ways of connecting to the Fly-407ZG

### Preparing the ESP32

Follow the instructions [here](stm32_esp32.html).

### Connecting the ESP32

The pinout for the Fly-407ZG can be found [here](https://github.com/FLYmaker/FLYF407ZG/blob/master/picture/Pin%20diagram.png) and the schematic for the Duet 2 WiFI for reference can be found [here](https://github.com/T3P3/Duet/blob/master/Duet2/Duet2v1.04/DuetWifiv1.04a_Schematic.pdf). 

The table below shows the pins required on the ESP32 and what they are connected to on the Fly-407ZG. Please ensure that your cables are no longer than 30cm although they should ideally be as short as possible.  

<div class="datatable-begin"></div>

| ESP32 Pin       | Fly-407ZG Pin       | Resistor Value  |
| :-------------: |:-------------:| :---------------:|
| RST           | B.2 on EXP2         | 330R           |
| CS/GPIO15     | F.11 on EXP2         | None           |
| MOSI/GPIO13   | B.15 on EXP2         | None             |
| MISO/GPIO12   | B.14 on EXP2         | None             |
| SCLK/GPIO14  | B.13 on EXP2         | None             |
| ESP_DATA_Ready/GPIO0   | C.5 on EXP2         | None             |
| LPC_DATA_Ready/GPIO4   | C.4 on EXP2         | None            |
| VIN(5v)   | 5v on EXP2          | None             |
| GND   | GND on EXP2          | None             |

<div class="datatable-end"></div>

{% include image.html file="esp32_pinmap.png" alt="ESP32 Pinout" caption="ESP32 Pinout" %}

{% include warning.html content="The cables used need to be very very short. Even 10cm ones don't work so they must be shorter than that" %}

</div>

</div>

### Prepare the SD Card

Follow the instructions on [Getting Started with RRF3](getting_started.html)

### Board.txt file

You will also need a board.txt file in the sys folder. Below are the contents that should be used.

```
//Config for Fly-407ZG
board = fly_f407zg
8266wifi.espDataReadyPin = C.5
8266wifi.TfrReadyPin = C.4
8266wifi.espResetPin = B.2
8266wifi.csPin = F.11
heat.tempSensePins = { F.3, A.0, C.1, C.0, F.10, F.5, F.4 }
```

### Updating the ESP32 by RRF

If you have an ESP32 WiFi adapter that supports updating via RRF, you need to add the following information to the board.txt file.  
```
8266wifi.serialRxTxPins = { A.10, A.9 }
serial.aux.rxTxPins = { nopin, nopin }
```

### Smart Drivers

If using TMC5160 or TMC22XX drivers (where 22XX is either the TMC2208, TMC2209, TMC2225 or TMC2226), the following line must also be added to the board.txt file
```
stepper.numSmartDrivers = X
```
Where X is the number of drivers fitted in total.

#### TMC22XX UART Drivers

The drivers must be continuous and start at unit 0 (unless TMC5160 are also used, which case they must be installed after them). So, for the SKR board, if you have say 3 TMC2208s and 1 other driver, the 2208s must be in slots 0, 1, 2 and the remainiong driver in slot 3 or 4. You can use RRF to assign any of those slots to an axis/extruder. 

#### TMC5160 SPI Drivers

The Fly-407ZG is the only STM32 board that can't be used with 5160 drivers when using an ESP8266 WiFi adapter using the standard connection method. This is due to them sharing the SPI pins used to also gain SBC support. You need to connect the ESP8266 via the [alternative method](./fly_407zg_alternative_esp.html).  

#### Sensorless Homing

To be able to use sensorless homing on this board, a jumper cable needs to be installed between the diag pin of the driver and an endstop input.  
For more information about setting up sensorless homing, please read [this](sensorless.html).   

### Board.txt Location

Place the *board.txt* file in a directory called "sys" on the SD card and install the SD card in the Fly-407ZG.   

### Final Setup

Once connected, power up the board using 12-24v and connect to the USB port on the board. Using a program such as putty. Follow the instructions [here](putty.html) to set it up for RRF. 

{% include callout.html content="If updating the ESP32 using RRF, type the following.  

```
M997 S1
```<br/>
Wait for the uploading of the WiFi firmware to finish. Then send the following<br/>
```
M552 S-1
```<br/>
Continue with the instructions below." type="info" %} 

```
M552 S0
M587 S"your SSID" P"your password"
M552 S1
```

{% include warning.html content="**DO NOT USE PRONTERFACE** it will convert all text to upper case. If you really must, please do the following. <br/>  If you wanted to use “PassWord”, you would write P”P’a’s’sW’o’r’d” with the ‘ indicating the following letter should be lower case. Explanation [here](https://duet3d.dozuki.com/Wiki/Gcode#Section_M587_Add_WiFi_host_network_to_remembered_list_or_list_remembered_networks)." %}

{% include important.html content="Both the SSID and Password used to connect to your WiFi are case sensitive."%}

The blue light on the WiFi chip shoould then flash blue and will go solid when a connection has been established. The ip address will be shown on the serial connection. It is also possible to type just M552 to get the current ip address reported back.

The final thing to do is add the line “M552 S1” to your config file. This can be done through the web interface. This just ensures that the WiFi connection is started at start up. There is no need to add the M587 command as this is written permanently to the flash of the ESP8266 chip.

### Once up and running

You will need to PID tune your tools and your bed. Please be aware that bed tuning may take up to an hour and tool tuning normally takes around 15 minutes. If it takes longer, that is also fine as up to 30 cycles may be ran.  

To tune the bed, run the following command, changing the temperature (the S value) if a different tuning temperature is required.  
```
M303 H0 S60
```  

To tune each tool, run the following command, changing the temperature (the S value) if a different tuning temperature is required. This proceedure will activate the part cooling fans during the final phase of the tuning process so their effect is taken into account. If your printer has more than one tool, make sure each one of them is tuned.  
```
M303 T0 S220
```

Once the tuning is complete, either copy the M307 command into the heater definitions or send M500, ensuring you have M501 at the end of your config.g.  
If the tuning fails at the end, carry on saving the values as in most cases the outputted values still work correctly.  
If the values still result in a heater fault, please refer to [this](https://duet3d.dozuki.com/Wiki/Tuning_the_heater_temperature_control#Section_Setting_the_model_parameters_manually) wiki page for information about how to adjust the values manually.  