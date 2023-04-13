---
title: Connecting a Troodon V2 Printer to WiFi 
tags: []
keywords: 
last_updated: 13/04/2023
summary: "How to connect a Troodon V2 Printer to WiFi"
sidebar: mydoc_sidebar
permalink: troodon_v2_connected_wifi_esp32.html
folder: mydoc
comments: false
toc: true
datatable: true
boardname: Troodon V2 Printer
mcu: STM32F407VGT6
firmware: firmware-stm32f4-wifi.bin
wifi: both
module: small
schematic: 
DRP: PD_0
TRP: PD_3
ERP: PG_14
CS: PA_15
ESPRXTX: "{ PD_6, PD_5 }"
SerialRXTX: "{ PA_10, PA_9 }"
heat: "{ PA_0, PF_3 }"
diagnostics: PC_7
stepperSPI: 0
TMC: "{ PF_2, PC_15, PC_14, PC_13, PE_13, PF_9, PF_15 }"
example: "stepper.TmcDiagPins = { PF_2, PC_15 }"
board: troodon_v2
onboardDrivers: no
---

## Overview

The Troodon V2 Printer comes with RRF already preinstalled to the stock board as well the WiFi module being flashed with the relevant firmware. This page will guide you through connecting the Troodon V2 Printer to your WiFi by the method suggested in the getting started manual and by the standard method used by other RRF boards.  

{% include warning.html content="The WiFi modules used by RRF can only connect to 2.4GHz WiFi networks, so please make sure the WiFi network you are connecting to is 2.4GHz and NOT 5GHz" %}

### Formbot Method

The printer gets supplied with a file called "Configure Wifi.gcode" that has the following contents.
```
M552 S0
G4 P10000
M587 S"FORMBOT" P"zxcv5678" ; S is your Wifi name, P is your Wifi password
M552 S1
M552
M500


; put this gcode file into SD card, then choose it to print.
; you'll see the IP address under "About" menu after one minutes.
; input the IP address on your browser, then it'll show web console.
```
We suggest that you make adjustments to the contents of this file to match the following
```
M552 S0
G4 S1
M587 S"FORMBOT" P"zxcv5678" ; S is your Wifi name, P is your Wifi password
M552 S1
G4 S20
M552
```
The adjustments have done the following.
* Removed the `M500` as nothing is being saved
* Changed `G4 P10000` to `G4 S1` which reduces the time to wait from 10 seconds to 1 second before moving on to the next command
* Added a 20 second wait to allow the WiFi to connect before querying what the printers IP address is.

Edit the M587 command to match your WiFi settings.  
{% include important.html content="Both the SSID and Password used to connect to your WiFi are case sensitive."%}   
Save the file and copy it onto a FAT32 formatted SD card.  
Turn on the printer and insert the SD card into the SD Socket on the 12864 display.  
Using the screen, launch the file as you would a print job and wait 30 seconds.  
If the IP address isn't displayed after 30 seconds, wait 30 seconds more and then navigate to the "About" menu on the display and look for the IP address.  
Use this IP address on your web browser to navigate to Duet Web Control (DWC) and move onto this page.
If the IP address still isn't displayed, move on to the standard method for connecting to your WiFi network.

### Standard WiFi Connection Method

Follow the instructions [here](putty.html) to set it up for RRF.
{% include warning.html content="**DO NOT IGNORE THE RECOMMENDATION TO NOT USE PRONTERFACE** it will convert all text to upper case. If you really must, please do the following. <br/>  If you wanted to use “PassWord”, you would write P”P’a’s’sW’o’r’d” with the ‘ indicating the following letter should be lower case. Explanation [here](https://docs.duet3d.com/en/User_manual/Reference/Gcodes#m587-add-wifi-host-network-to-remembered-list-or-list-remembered-networks). **USE PUTTY!**" %}
Power up the Troodon V2 and connect to the USB port on the printer from your PC or laptop. 
Change the Com port to match the Troodon V2 and connect. The baudrate doesn't matter.  
{% include tip.html content="I (jay_s_uk) have a very handy little tool installed on my main laptop thats monitoring for any serial devices as they are plugged in and you get a popup with the Com port number. If you’re interested, it can be found [here](https://helmpcb.com/software/serial-port-monitor)" %}

If you're carrying this out after the Formbot Method didn't wory correctly for you, send the following gcode throught putty
```
M552 S0
M588 S"*"
```
Then send the following gcode
```
M552 S0
M587 S"your SSID" P"your password"
M552 S1
```
{% include important.html content="Both the SSID and Password used to connect to your WiFi are case sensitive."%}
The IP address will be shown on the serial connection. It is also possible to type just `M552` to get the current IP address reported back.
Use this IP address on your web browser to navigate to Duet Web Control (DWC) and move onto [heater tuning](troodon_v2_heater_tuning.html).