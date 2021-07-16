---
title: Connecting a 12864 screen to a SKR-RRF-E3
tags: []
keywords: 
last_updated: 15/07/2021
summary: "How to connect a 12864 screen to a SKR-RRF-E3"
sidebar: mydoc_sidebar
permalink: skr_rrf_e3_screen_12864.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The information here is aimed at connecting a stock ender 3 12864 display but it can also be applied to other 12864 displays (as long as they are ST7567 or ST7920 based). 

## Wiring

The ender 3 stock display can be connected directly to the EXP header of the SKR-RRF-E3. No modifications are required.

## Board.txt modifications

The following lines should be added to the board.txt file.

```
lcd.encoderPinA=B.2
lcd.encoderPinB=E.7
lcd.encoderPinSw=E.9
lcd.lcdCSPin=B.1
lcd.spiChannel=4
SPI4.pins={ E.10, NoPin, E.11 }
lcd.lcdBeepPin = E.8
```

## Config.g changes

Add the following line to the end of your config.g

```
M918 P1 E4 F100000
```

## Menu Files

Menu files must be uploaded to allow the display to generate the correct information. This can be done in two ways.
First, obtain the recommended menu files from [here](https://github.com/jadonmmiller/UltimateDuetMenuSystem/releases/)

### Method 1

Extract the contents of the zip file you downloaded above and place them in a folder called "menu" on the SD card of the SKR-RRF-E3. 

### Method 2

Activate the display using the config.g changes above.  
A side menu called "Display" should appear in DWC. Navigate to it and upload the zip file.  

### Troubleshooting

If the screen is showing artifacts/random characters on the screen, the following may improve/eliminate the issue

* Lower the SPI frequency by half. This is the F value in M918.  
* Reduce the length of the cable between the screen and the board.  
* Ensure that the cable between the screen and the board is routed away from other cables, especially motor cables.  
* Add a ferrite ring to the cable between the screen and the board.  