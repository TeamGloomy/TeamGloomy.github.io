---
title: Connecting an MKS SGen L v2.0 via SBC
tags: []
keywords: 
last_updated: 20/01/2021
summary: "Connecting an MKS SGen L v2.0 via SBC"
sidebar: mydoc_sidebar
permalink: mks_sgen_l_2_connected_sbc.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The MKS SGen L v2.0 is an LPC1769 based board.

## Firmware File

Choose the correct corresponding firmware (firmware-lpc-sbc.bin) from [here](https://github.com/gloomyandy/RepRapFirmware/releases). Remember to rename it to firmware.bin. Put it in the root of a FAT32 formatted SD card.   

## SBC

Connecting a Single Board Computer, such as a raspberry pi 3B/3B+/4. 

### Prepare the Raspberry Pi

Follow the instructions detailed [here](lpc_sbc.html).

### BOM

* 5 x 100R resistor
* jumpers or other ways of connecting to the MKS SGen L v2.0

### Connecting the SBC to the MKS SGen L v2.0

The pinout for the MKS SGen L can be found [here](https://github.com/makerbase-mks/MKS-SGEN_L-V2/blob/master/Hardware/MKS%20SGEN_L%20V2.0_003/MKS%20SGEN_L%20V2.0_003%20PIN.pdf) and the schematic for the Duet 3 for reference can be found [here](https://github.com/Duet3D/Duet3-Mainboard-6HC/blob/master/Duet3_Mainboard_v1.0/Duet3_MB_schematic_v1.0.pdf). The raspberry pi GPIO pinout can be found [here](https://www.google.com/search?q=raspberry+pi+gpio+pinout&rlz=1C1CHBD_en-GBGB889GB889&sxsrf=ALeKk01CVlA8N_CGAQqQGp-7_N3pXiV0LA:1586203613303&source=lnms&tbm=isch&sa=X&ved=2ahUKEwid56X3zNToAhXSURUIHX3IAnkQ_AUoAXoECA0QAw&biw=1920&bih=937). 

The table below shows the pins required on the SBC and what they are connected to on the MKS SGen L. Please ensure that your cables are no longer than 30cm although they should ideally be as short as possible.  
 

<div class="datatable-begin"></div>

| SBC Pin       | MKS SGen L Pin       | Resistor Value  |
| :-------------: |:-------------:| :---------------:|
| 23/BCM11/SPI0 Clk           | 0.15 on EXP1 | 100R            |
| 21/BCM9/SPI0 Miso    | 0.17 on EXP1 | 100R           |
| 19/BCM10/SPI0 Mosi   | 0.18 on EXP1 | 100R             |
| 24/BCM8/SPIO CE0   | 0.16 on EXP1  | 100R             |
| 22/BCM25  | 1.31 on EXP1 | 100R             |
| 20/GND   | GND on EXP1 | None             |

<div class="datatable-end"></div>

Don't power the raspberry pi from the MKS SGen L v2.0. Either us a 12/24v to 5v step down transformer or power the pi from the micro usb or usb-c port.

### Prepare the SD Card

All the SD card on the MKS SGen L needs is the board.txt file with the following contents. 

```
//Config for MKS SGen L
lpc.board = mkssgenl_2.0
sbc.lpcTfrReadyPin = 1.31
```

#### Smart Drivers

If using TMC22XX drivers (thats either the TMC2208, TMC2209, TMC2225 or TMC2226), the following line must also be added to the board.txt file
```
stepper.numSmartDrivers = X
```
Where X is the number of drivers fitted. The drivers must be continuous and start at unit 0. So, for the MKS SGen L board, if you have say 3 TMC2208s and 1 other driver, the 2208s must be in slots 0, 1, 2 and the remainiong driver in slot 3 or 4. You can use RRF to assign any of those slots to an axis/extruder.  

#### Sensorless Homing

If using sensorless homing/stall detection (supported by only the TMC2209 or TMC2226), the following line must be added to the board.txt file.
```
stepper.TmcDiagPins = {1.29, 1.27, 1.25, 1.28, 1.26}
```
Please only include the diag pin numbers where you intend to use sensorless homing on that axis. For example, if you only intend to use sensorless homing/stall detection on driver 0 and driver 1, only include 1.29 and 1.27 in your board.txt file.

#### Driver Diag Pin

The driver diag pin is used for sensorless homing and stall detection.  
The MKS-SGen L v2.0 **does not** have a way of disabling the diag pin.
If you plan on using endstops rather than sensorless homing, you need to bend or remove the diag pin.  

### Board.txt Location

Place the *board.txt* file in a directory called "sys" on the SD card and install the SD card in the MKS SGen L v2.0.   

### Finally...

Turn it all on and you should be good to go.

You can either navigate to duet3.local or find the IP address of the rasberry pi using your router. If you don't have access to that, use something like [Fing](https://www.fing.com/products/fing-desktop) to scan your network.

Once you've connected to the raspberry pi through your router, start to customise your config.g file etc or upload the outputted zip file from the [Configurator](https://teamgloomy.github.io/LPCConfigurator) to the pi using the system tab of DWC.

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