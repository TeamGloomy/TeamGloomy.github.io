---
title: Connecting a 12864 screen to a Fly-E3
tags: []
keywords: 
last_updated: 04/02/2021
summary: "Connecting a 12864 screen to a Fly-E3"
sidebar: mydoc_sidebar
permalink: fly_e3_screen_12864.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The information here is aimed at connecting a stock ender 3 12864 display but it can also be applied to other 12864 displays (as long as they are ST7567 or ST7920 based). This is only applicable from 3.2_7.  

## Wiring

The ender 3 stock display can be connected directly to the EXP header of the Fly-E3. No modifications are required.

## Board.txt modifications

The following lines should be added to the board.txt file.

```
lcd.encoderPinA=E.9
lcd.encoderPinB=E.10
lcd.encoderPinSw=E.11
lcd.lcdCSPin=E.7
lcd.spiChannel=4
SPI4.pins={E.8, NoPin, B.1}
lcd.lcdBeepPin = E.12
```

## Config.g changes

Add the following line to the end of your config.g

```
M918 P1 E4 F1000000
```

## Menu Files

Menu files must be uploaded to allow the display to generate the correct information. This can be done in two ways.
First, obtain the recommended menu files from [here](https://github.com/jadonmmiller/UltimateDuetMenuSystem/releases/)

### Method 1

Extract the contents of the zip file you downloaded above and place them in a folder called "menu" on the SD card of the Fly-E3. 

### Method 2

Activate the display using the config.g changes above.  
A side menu called "Display" should appear in DWC. Navigate to it and upload the zip file.  