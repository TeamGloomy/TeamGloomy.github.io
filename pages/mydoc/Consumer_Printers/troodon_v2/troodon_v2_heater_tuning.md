---
title: Troodon V2 Printer Heater Tuning
tags: []
keywords: 
last_updated: 07/01/2023
summary: "Tuning the heaters on a Troodon V2 Printer before printing"
sidebar: mydoc_sidebar
permalink: troodon_v2_heater_tuning.html
folder: mydoc
comments: false
toc: true
datatable: true
---

## Overview

This page assumes you have successfully been able to connect your Troodon V2 Printer to your WiFi network and navigate to DWC (Duet Web Control). A manual that explains the different functions and interfaces of DWC can be found [here](https://docs.duet3d.com/en/User_manual/Reference/Duet_Web_Control_Manual) and is a beneficial read if you a new to RepRapFirmware.  
If you have been unable to do so, please follow the instructions [here](troodon_v2_connected_wifi_esp32.html).  

### Bed Tuning

Before tuning the bed, we recommend editing one of the lines in the config provided with the printer. Using DWC, click on "System" on the left hand sidebar. Then, on the central section of the web interface, click on config.g to bring up the editor. Scroll down to line 72, which should be the following  
```
M950 H0 C"PD12" T0
```
Edit it so it reads the following  
```
M950 H0 C"PD12" T0 Q10
```
Note that we have added `Q10`. This changes the PWM frequency to be more suitable for the SSR (Solid State Relay) used to control the bed. Click save at the top right of the editing box and when prompted, click restart mainboard.  

It is recommended to tune the heated bed for PID control. To do so, enter the following command in the "Send Gcode" text input box at the top of DWC.
```
M303 H0 S110
```
This process may take a while before it completes. 
Once completed, enter the following command in the "Send Gcode" text input box at the top of DWC.  
```
M500
```

### Hotend Tuning

First, home the Troodon V2 Printer by clicking on "Dashboard" on the left hand sidebar of DWC and then clicking the Home All button.  
{% include image.html file="homeall.png" alt="Home All Button" caption="Home All Button" %}
Then enter the following command in the "Send Gcode" text input box at the top of DWC.  
```
G1 X175 Y175 Z10 F6000
```
This will move the print head to roughly the centre of the bed ready to tune the hotend. Enter the following command in the "Send Gcode" text input box at the top of DWC. If you are going to be printing at a temperature higher than 300 degrees C, adjust the S value in the corresponding command to suit.  
```
M303 T0 S300
```
This process may take a while before it completes.  
Once completed, enter the following command in the "Send Gcode" text input box at the top of DWC.  
```
M500
```
It is also advised to add the following line to the end of config.g on its own line.  
```
T0
```
This will activate the tool from printer boot up and is a sensible addition as the Troodon V2 only has one tool.  