---
title: Connecting a GTR via SBC
tags: []
keywords: 
last_updated: 23/05/2021
summary: "Connecting a GTR via SBC"
sidebar: mydoc_sidebar
permalink: gtr_connected_sbc.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The GTR is an STM32F407ZGT6 based board.

{% include warning.html content="There have been a small number of users who have been suffering from random disconnects between the board and the SBC during printing. This has been due to the type of communication connection used by the DuetSoftwareFramework on the SBC to talk to the board being affected by electrical noise from either something on the printer or equipment near by. <br/> There are a number of steps that can be done to limit this issue.<br/>
1. Keep the wires between the controller and the Pi short <br/>
2. Use either a ribbon cable, or if using jumper wires then use ribbon-style jumper wire strips with the individual conductors separate only at the ends <br/>
3. Use multiple ground connections between the two<br/>
4. Beware of [ground loops](https://duet3d.dozuki.com/Wiki/USB_ground_loops). Problems are likely if more than one of the the PSU supplying the controller, the PSU supplying the Pi, and any other equipment that the Pi is connected to (other than via Ethernet) has its signal ground connected to the mains ground in the 3-pin plug that supplies the power. RPi PSUs are usually not grounded. ATX PSUs always are. Meanwell-style PSUs have a ground connection, but it is up to you whether you link mains ground to PSU negative output.<br/>
In short, these disconnects may happen to you or they may not. If they happen and you are unable to fix them, then the only remaining options are track down the noise by changing components one by one or switch to using WiFi rather than an SBC.<br/>
For STM32 based boards, there is little gain from using an SBC at this current time apart from an improvement in upload speed and WiFi signal strength." %}

## Firmware File

Choose the correct corresponding firmware (firmware-stm32f4-sbc.bin) from [here](https://github.com/gloomyandy/RepRapFirmware/releases). Remember to rename it to firmware.bin. Put it in the root of a FAT32 formatted SD card.   

## SBC

Connecting a Single Board Computer, such as a raspberry pi 3B/3B+/4

### Prepare the Raspberry Pi

Follow the instructions detailed [here](stm32_sbc.html).

{% include tip.html content="If you want to use a board other than a Raspberry Pi, please follow the guide [here](dsf_on_armbian.html)"%}

### BOM

* 5 x 100R resistor
* jumpers or other ways of connecting to the GTR

{% include tip.html content="If you would prefer a premade adapter to enable an SBC connection, TeamGloomy have created a plugin SBC adapter board for the GTR. It can be purchased on tindie [here](https://www.tindie.com/products/pcr/reprapfirmware-raspberry-pi-to-skr-1314progtr/) " %}

### Connecting the SBC to the SKR GTR v1.0

The pinout for the SKR can be found [here](https://github.com/bigtreetech/BIGTREETECH-GTR-V1.0/blob/master/BTT%20GTR%20V1.0/manual/GTR%20V1.0%20PIn.PDF) and the schematic for the Duet 3 for reference can be found [here](https://github.com/Duet3D/Duet3-Mainboard-6HC/blob/master/Duet3_Mainboard_v1.0/Duet3_MB_schematic_v1.0.pdf). The raspberry pi GPIO pinout can be found [here](https://www.google.com/search?q=raspberry+pi+gpio+pinout&rlz=1C1CHBD_en-GBGB889GB889&sxsrf=ALeKk01CVlA8N_CGAQqQGp-7_N3pXiV0LA:1586203613303&source=lnms&tbm=isch&sa=X&ved=2ahUKEwid56X3zNToAhXSURUIHX3IAnkQ_AUoAXoECA0QAw&biw=1920&bih=937). 

The table below shows the pins required on the SBC and what they are connected to on the GTR. Please ensure that your cables are no longer than 30cm although they should ideally be as short as possible.  

<div class="datatable-begin"></div>

| SBC Pin       | GTR Pin       | Resistor Value  |
| :-------------: |:-------------:| :---------------:|
| 23/BCM11/SPI0 Clk           | PB13 on EXP2          | 100R            |
| 21/BCM9/SPI0 Miso    | PB14 on EXP2          | 100R           |
| 19/BCM10/SPI0 Mosi   | PB15 on EXP2          | 100R             |
| 24/BCM8/SPIO CE0   | PB12 on EXP2          | 100R             |
| 22/BCM25  | PB10 on EXP2          | 100R             |
| 20/GND   | GND on EXP2          | None             |

<div class="datatable-end"></div>

Don't power the raspberry pi from the GTR. Either us a 12/24v to 5v step down transformer or power the pi from the micro usb or usb-c port.

### Prepare the SD Card

All the SD card on the SKR GTR needs is the board.txt file with the following contents.

```
//Config for SKR GTR v1.0
board = biqugtr_1.0
sbc.TfrReadyPin = B.10
heat.tempSensePins = { C.0, C.1, C.2, C.3, A.3, F.9, F.10, F.7, F.5 }
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

TMC5160 drivers are supported from 3.3 beta 1 onwards.
If using TMC5160 drivers, the following lines must also be added to the board.txt file.  
```
stepper.num5160Drivers = X
stepper.spiChannel = 5
SPI5.pins={B.3, B.6, G.15}
```
Where X is the number of 5160 drivers fitted. The drivers must be continuous and start at unit 0. So, if you have say 3 TMC5160s and 1 TMC22XX and 1 other driver, the 5160s must be in slots 0, 1, and 2, the TMC22XX in slot 3 and the remainiong driver in 4. You can use RRF to assign any of those slots to an axis/extruder.  

#### Sensorless Homing

**Supported by only the TMC2209, TMC2226 and TMC5160**
If using sensorless homing/stall detection with TMC2209 or TMC2226 the following line must be added to the board.txt file. It is not needed with TMC5160.
```
stepper.TmcDiagPins = {F.2, C.13, E.0, G.14, G.9, D.3, I.4, F.4, F.6, I.7, F.12}
```
Please only include the diag pin numbers where you intend to use sensorless homing on that axis.  
For example, if you only intend to use sensorless homing/stall detection on driver 0 and driver 1, only include F.2 and C.13 in your board.txt file.
For more information about setting up sensorless homing, please read [this](sensorless.html). 

#### Driver Diag Pin

{% include warning.html content="The GTR sensorless homing jumpers don't do anything so if you don't want to use sensorless homing and use normal endstops, you will have to remove the diag pin from your drivers - [Evidence](https://github.com/bigtreetech/BIGTREETECH-GTR-V1.0/issues/12)" %}

### Board.txt Location

Place the *board.txt* file in a directory called "sys" on the SD card and install the SD card in the GTR.   

### Finally...

Turn it all on and you should be good to go.

You can either navigate to duet3.local or find the IP address of the rasberry pi using your router. If you don't have access to that, use something like [Fing](https://www.fing.com/products/fing-desktop) to scan your network.

Once you've connected to the raspberry pi through your router, start to customise your config.g file etc or upload the outputted zip file from the [Configurator](https://teamgloomy.github.io/Configurator) to the pi using the system tab of DWC.

### Errors

Please report any  disconnects on either the forum or discord.

### Changing the SBC hostname

This is an optional step if you only have a single duet3 on your network. It is required if you have more than one SBC configured RRF setup (as each setup on a network needs a unique host name) or you just want to change the name from the default "duet3".

The name of the printer is its hostname on the network, you will need to connect to the SBC over SSH in order to run the Raspberry Pi configuration utility and change the hostname.

{% include note.html content="you cannot currently use the gcode command M550 to set your printer hostname, as you can when using a wifi setup" %}

1. Connect via ssh
2. At a command prompt type
```
sudo raspi-config
```
3. Select “System Options” -> Hostname-> “OK”-> and set the new printername/hostname.

4. Select “Finish” and reboot.

{% include note.html content="The hostname must confirm to certain limitations to be valid. Valid characters for hostnames are letters from a to z, the digits from 0 to 9, the hyphen (-)." %}

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