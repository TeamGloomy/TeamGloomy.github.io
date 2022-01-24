---
title: Connecting a 12864 screen to an BTT Octopus Pro v1.0 F429 Version
tags: []
keywords: 
last_updated: 21/11/2021
summary: "How to connect a 12864 screen to an BTT Octopus Pro v1.0 F429 Version"
sidebar: mydoc_sidebar
permalink: btt_octopus_pro_1.0_f429_screen_12864.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The information here is aimed at connecting a Fysetc Mini v1.2 12864 display but it can also be applied to other 12864 displays (as long as they are ST7567 or ST7920 based).  

## Wiring

Connect EXP1 to EXP1 and EXP2 to EXP2.  

## Board.txt modifications

Add the following lines to the board.txt file

```
//Fysetc MINI 12864
lcd.encoderPinA=B.1
lcd.encoderPinB=B.2
lcd.encoderPinSw=E.7
lcd.lcdCSPin=A.5
lcd.lcdDCPin=E.10
lcd.spiChannel=0
//lcd.lcdBeepPin=NoPin
```

## Config.g

Add this line to config.g
```
M950 P1 C"E.12"
M42 P1 S0
G4 P500
M42 P1 S1
M918 P2 C30 F1000000 E4
```

## Menu Files

Menu files must be uploaded to allow the display to generate the correct information. This can be done in two ways.
First, obtain the recommended menu files from [here](https://github.com/jadonmmiller/UltimateDuetMenuSystem/releases/)

### Method 1 - WiFi Mode only

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

## Using the SD card slot on the screen

It is possible to use the external SD card.  
To do so, add the following lines to your board.txt

```
sdCard.external.spiChannel=0
sdCard.external.csPin=A.4
sdCard.external.cardDetectPin=C.15
```