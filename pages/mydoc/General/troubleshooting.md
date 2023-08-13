---
title: Troubleshooting
tags: []
keywords: 
last_updated: 30/10/2022
summary: "Troubleshooting"
sidebar: mydoc_sidebar
permalink: troubleshooting.html
folder: mydoc
comments: false
toc: false
---

Here you may find some instructions on how to troubleshoot the most common problems when setting up this port of RepRapFirmware for LPC and STM32.

## Board flashing issues

- Make sure the board is powered through 12V/24V.
- Make sure you downloaded the correct firmware version (WiFi or SBC) for your board.
- Make sure you are using a SD-card in FAT32 format. exFAT, NTFS or whatever aren't supported.
- Make sure your renamed the firmware file into `firmware.bin` and not `firmware.bin.bin`
- Make sure you are using a reliable SD-card. Try another one in any doubt.

## Wi-Fi flashing issues

- Make sure RX and TX lines are connected between the Wi-Fi module and the board
- Make sure RX and TX pins are defined in board.txt.  
This can be checked by sending `M122 P200` in a USB terminal, search for the lines `8266wifi.serialRxTxPins` and `serial.aux.rxTxPins` under *Configurable Board.txt Settings* section.  
Please refer to the *Connecting via WiFi* section for your board in the sidebar for the values to set there.

## Wi-Fi issues

- Make sure the board is powered through 12V/24V.
- Make sure you are using a proper USB cable and not a charging cable (which doesn't have any data wires).  
If you encounter issues to connect to your board through USB, first make sure the board is flashed and then try another USB cable.
- Make sure your Wi-Fi module has been flashed.
- Make sure the antenna is hooked to the Wi-Fi module and it is outside any metal box.
- Make sure you are trying to connect to a 2.4GHz Wi-Fi Access Point (5GHz isn't supported).
- The use of special characters in the SSID cannot be guaranteed to work. In general it's best to avoid most special characters. Spaces, periods, dashes, underscores, and other punctuation is likely ok, but special characters on the number keys likely are not safe: `@#$%^&*`.  
If you are having troubles adding your SSID, try a simplified version with only letters and numbers.
- Use two single quote characters to represent one actual single quote character in the password or in the SSID. For example, if your SSID is `Pete's network` then enter `Pete''s network`.
