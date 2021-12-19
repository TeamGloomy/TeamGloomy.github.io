---
title: Connecting a Fly-Gemini via SBC
tags: []
keywords: 
last_updated: 19/12/2021
summary: "How to connect to a Fly-Gemini via SBC"
sidebar: mydoc_sidebar
permalink: fly_gemini_connected_sbc.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The Fly-Gemini STM32F405VGT6 based board with an Allwinner H5 built in for SBC functionality. The Fly-Gemini is only supported from RRF 3.3.0_12 and 3.4b7 onwards.   
Two SD cards are required when using this board. One for the STM32 side and one for the SBC side.  

## Board Setup

{% include image.html file="fly_gemini_highlighted.png" alt="Fly-Gemini Overview" caption="Fly-Gemini Overview" %}  

### Jumper Setup

There are two rows of DIP switches that require setting correctly for RRF operation.  
#### Row 1
Row 1 is the row of DIP switches nearest the USB ports.  
If you want to be able to access the STM32 chip from the "Board USB" port, then ensure that switches 1 to 6 are in the off position and 7 to 8 are in the on position.  
{% include image.html file="fly_gemini_dip_1.png" alt="Fly-Gemini DIP Switches" caption="Fly-Gemini DIP Switches" %}  
If you want to be able to acces the STM32 chip from picocom (installed by default) ran from the SBC, then ensure that switches 1 and 2 are in the off position, 3 and 4 in the on position and 5 to 8 are in the off poition.
#### Row 2
On the row near the EXP headers, ensure that switches 1 to 4 are in the on position.  
{% include image.html file="fly_gemini_dip_2.png" alt="Fly-Gemini DIP Switches" caption="Fly-Gemini DIP Switches" %}  

### Additional Cable

An additional cable requires adding to allow the connection between the STM32 and the SBC to function correctly.  
It should be added as shown below between the 3rd from the right pin of the small 7 pin connector to the left of the Core-Fan header and the second pin from the left on the top row of EXP2 (PB.3).  
{% include image.html file="fly_gemini_cable.png" alt="Fly-Gemini Additional Cable" caption="Fly-Gemini Additional Cable" %}  

## STM32 Setup

### Firmware File

{% include tip.html content="The image file we offer for setting up the SBC side of the Fly-Gemini is based on Stable releases only. Please ensure that you use a stable image on the STM32 side and once up a running, if switching to a beta image, you can follow the instructions [here](armbian_upgrade.html). ." %}
Choose the correct corresponding firmware (firmware-stm32f4-sbc.bin) from [here](https://github.com/gloomyandy/RepRapFirmware/releases){:target="_blank"}. Remember to rename it to firmware.bin. Put it in the root of a small FAT32 formatted SD card. This will be placed in the STM32 side of the board. 

### Board.txt

The SD card on the Fly-Gemini also needs a board.txt file with the following contents.

```
//Config for Fly-Gemini
board = fly_gemini
sbc.TfrReadyPin = B.3
```

### Smart Drivers

If using TMC5160 or TMC22XX drivers (where 22XX is either the TMC2208, TMC2209, TMC2225 or TMC2226), the following line must also be added to the board.txt file
```
stepper.numSmartDrivers = X
```
Where X is the number of drivers fitted in total.

#### TMC22XX UART Drivers

The drivers must be continuous and start at unit 0 (unless TMC5160 are also used, which case they must be installed after them). So, for the SKR board, if you have say 3 TMC2208s and 1 other driver, the 2208s must be in slots 0, 1, 2 and the remaining driver in slot 3 or 4. You can use RRF to assign any of those slots to an axis/extruder. 

#### TMC5160 SPI Drivers

If using TMC5160 drivers, the following lines must also be added to the board.txt file.  
```
stepper.num5160Drivers = X
stepper.spiChannel = 0
```
Where X is the number of TMC5160 drivers fitted. The drivers must be continuous and start at unit 0. So, if you have say 3 TMC5160s and 1 TMC22XX and 1 other driver, the 5160s must be in slots 0, 1, and 2, the TMC22XX in slot 3 and the remaining driver in 4. You can use RRF to assign any of those slots to an axis/extruder.  

#### Sensorless Homing

**Supported by only the TMC2209, TMC2226 and TMC5160**
If using sensorless homing/stall detection with TMC2209 or TMC2226 the following line must be added to the board.txt file. It is not needed with TMC5160.
```
stepper.TmcDiagPins = {A.6, B.1, B.10}
```
Please only include the diag pin numbers where you intend to use sensorless homing on that axis.  
For example, if you only intend to use sensorless homing/stall detection on driver 0 and driver 1, only include A.6 and B.1 in your board.txt file.  
For more information about setting up sensorless homing, please read [this](sensorless.html){:target="_blank"}.  

### Board.txt Location

Place the *board.txt* file in a directory called "sys" on the SD card and install the SD card in the Fly-Gemini.

## SBC Preparation

Download the latest prepared image from [here](https://github.com/TeamGloomy/rrf_stm32_sbc/releases).  
The image has DSF installed and ready to go, with the correct transfer pin configured.  

### Flash the SD Card

Using [balenaEtcher](https://www.balena.io/etcher/), flash the downloaded image to an SD card 8Gb or larger.  

Place the SD Card into the Core-SD slot.

## Power Up the Board

The board and bed power supply should be 12/24v.  
The drivers power supply should be 12/24/48v. 48v should only be used with compatible 48v 5160 drivers.  

Turn it all on and you should be good to go.

If using Ethernet, you can either navigate to duet3.local or find the IP address of the rasberry pi using your router. If you don't have access to that, use something like [Fing](https://www.fing.com/products/fing-desktop){:target="_blank"} to scan your network.

## SSH into the board

Either via CORE UART USB connection or by using SSH via the network connection.
The default username is `root` and the default password is `1234`. Follow the onscreen instructions and change the root password and setup a new user. I reccomend using ZSH rather than bash.  

### How to connect to wireless

If your SBC has onboard wireless capability or if you use a 3rd party wireless adapter on USB supported by Armbian, you can use `nmtui-connect` to browse and connect to your WiFi AP.

### Finally...

Once you've connected to the raspberry pi through your router, start to customise your config.g file etc or upload the outputted zip file from the [Configurator](https://teamgloomy.github.io/Configurator){:target="_blank"} to the pi using the system tab of Duet Web Control (DWC).

### Remember to PID tune the bed and tool 

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
If the values still result in a heater fault, please refer to [this](https://duet3d.dozuki.com/Wiki/Tuning_the_heater_temperature_control#Section_Setting_the_model_parameters_manually){:target="_blank"} wiki page for information about how to adjust the values manually.  