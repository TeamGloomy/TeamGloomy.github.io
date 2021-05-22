---
title: Connecting a 12864 screen to an SKR Pro
tags: []
keywords: 
last_updated: 09/05/2021
summary: "Connecting a 12864 screen to an SKR Pro"
sidebar: mydoc_sidebar
permalink: skr_pro_screen_12864.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The information here is aimed at connecting a Fysetc Mini v1.2 12864 display but it can also be applied to other 12864 displays (as long as they are ST7567 or ST7920 based).  

## Wiring

Connect the screen as shown below.  

{% include image.html file="skr_pro_mini.png" alt="SKR Pro and Fysetc Mini v1.2" caption="SKR Pro and Fysetc Mini v1.2" %}

## Board.txt modifications

Add the following lines to the board.txt file

```
//Fysetc MINI 12864
lcd.encoderPinA=G.11
lcd.encoderPinB=C.4
lcd.encoderPinSw=F.9
lcd.lcdCSPin=D.3
lcd.lcdDCPin=G.13
lcd.spiChannel=3
SPI3.pins={G.14, C.1, F.7} //Set to GPIO pins to use as SCK, MISO, MOSI
//lcd.lcdBeepPin=NoPin
```

## Config.g

Add this line to config.g
```
M950 P1 C"C.5"
M42 P1 S0
G4 P500
M42 P1 S1
M918 P2 C30 F1000000 E4
```

## Menu Files

Menu files must be uploaded to allow the display to generate the correct information. This can be done in two ways.
First, obtain the recommended menu files from [here](https://github.com/jadonmmiller/UltimateDuetMenuSystem/releases/)

### Method 1 - Wifi Mode only

Extract the contents of the zip file you downloaded above and place them in a folder called "Menu" on the SD card of the GTR. 

### Method 2

Activate the display using the config.g changes above.  
A side menu called "Display" should appear in DWC. Navigate to it and upload the zip file.  

### Troubleshooting

If the screen is showing artifacts/random characters on the screen, the following may improve/eliminate the issue

* Lower the SPI frequency by half. This is the F value in M918.  
* Reduce the length of the cable between the screen and the board.  
* Ensure that the cable between the screen and the board is routed away from other cables, especially motor cables.  
* Add a ferrite ring to the cable between the screen and the board.  