---
title: Connecting a Re-Arm via SBC
tags: []
keywords: 
last_updated: 22/02/2021
summary: "Connecting a Re-Arm via SBC"
sidebar: mydoc_sidebar
permalink: re_arm_connected_sbc.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The Re-Arm is an LPC1768 based board.

{% include warning.html content="There have been a small number of users who have been suffering from random disconnects between the board and the SBC during printing. This has been due to the type of communication connection used by the DuetSoftwareFramework on the SBC to talk to the board being affected by electrical noise from either something on the printer or equipment near by. <br/> There are a number of steps that can be done to limit this issue.<br/>
1. Keep the wires between the controller and the Pi short <br/>
2. Use either a ribbon cable, or if using jumper wires then use ribbon-style jumper wire strips with the individual conductors separate only at the ends <br/>
3. Use multiple ground connections between the two<br/>
4. Beware of [ground loops](https://duet3d.dozuki.com/Wiki/USB_ground_loops). Problems are likely if more than one of the the PSU supplying the controller, the PSU supplying the Pi, and any other equipment that the Pi is connected to (other than via Ethernet) has its signal ground connected to the mains ground in the 3-pin plug that supplies the power. RPi PSUs are usually not grounded. ATX PSUs always are. Meanwell-style PSUs have a ground connection, but it is up to you whether you link mains ground to PSU negative output.<br/>
In short, these disconnects may happen to you or they may not. If they happen and you are unable to fix them, then the only remaining options are track down the noise by changing components one by one or switch to using WiFi rather than an SBC." %}

## Firmware File

Choose the correct corresponding firmware (firmware-lpc-sbc.bin) from [here](https://github.com/gloomyandy/RepRapFirmware/releases). Remember to rename it to firmware.bin. Put it in the root of a FAT32 formatted SD card.      

## SBC

Connecting a Single Board Computer, such as a raspberry pi 3B/3B+/4. 

### Prepare the Raspberry Pi

Follow the instructions detailed [here](lpc_sbc.html).

{% include tip.html content="If you want to use a board other than a Raspberry Pi, please follow the guide [here](dsf_on_armbian.html)"%}

### BOM

* 5 x 100R resistor
* jumpers or other ways of connecting to the Re-Arm

### Connecting the SBC to the Re-Arm

The pinout for the Re-Arm can be found [here](https://github.com/gloomyandy/RepRapFirmware/wiki/Re-Arm-Pins) and the schematic for the Duet 3 for reference can be found [here](https://github.com/Duet3D/Duet3-Mainboard-6HC/blob/master/Duet3_Mainboard_v1.0/Duet3_MB_schematic_v1.0.pdf). The raspberry pi GPIO pinout can be found [here](https://www.google.com/search?q=raspberry+pi+gpio+pinout&rlz=1C1CHBD_en-GBGB889GB889&sxsrf=ALeKk01CVlA8N_CGAQqQGp-7_N3pXiV0LA:1586203613303&source=lnms&tbm=isch&sa=X&ved=2ahUKEwid56X3zNToAhXSURUIHX3IAnkQ_AUoAXoECA0QAw&biw=1920&bih=937). 

The table below shows the pins required on the SBC and what they are connected to on the Re-Arm. Please ensure that your cables are no longer than 30cm although they should ideally be as short as possible.   

<div class="datatable-begin"></div>

| SBC Pin       | Re-Arm Pin       | Resistor Value  |
| :-------------: |:-------------:| :---------------:|
| 23/BCM11/SPI0 Clk | 0.15 on J3         | 100R            |
| 21/BCM9/SPI0 Miso  | 0.17 on J3         | 100R           |
| 19/BCM10/SPI0 Mosi | 0.18 on J3         | 100R             |
| 24/BCM8/SPIO CE0 | 0.16 on J3         | 100R             |
| 22/BCM25 | 1.31 on J3         | 100R             |
| 20/GND | GND on J3          | None             |

<div class="datatable-end"></div>

Don't power the raspberry pi from the Re-Arm. Either us a 12/24v to 5v step down transformer or power the pi from the micro usb or usb-c port.

### Prepare the SD Card

All the SD card on the Re-Arm needs is the board.txt file with the following contents.

```
//Config for RE-Arm
lpc.board = rearm
sbc.lpcTfrReadyPin = 1.31
heat.tempSensePins = { 0.24, 0.23, 0.25 }
```

Place the *board.txt* file in a directory called "sys" on the SD card and install the SD card in the Re-Arm.   

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