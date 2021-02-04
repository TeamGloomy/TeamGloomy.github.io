---
title: Connecting a 12864 screen to a GTR
tags: []
keywords: 
last_updated: 15/01/2021
summary: "Connecting a 12864 screen to a GTR"
sidebar: mydoc_sidebar
permalink: gtr_screen_12864.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

## Overview

The information here is aimed at connecting a Fysetc Mini v2.1 12864 display but it can also be applied to other 12864 displays (as long as they are ST7567 or ST7920 based).  This is only applicable from 3.2_7.  

## Board.txt modifications

Add the following lines to the board.txt file

```
leds.diagnostic = A.0
led.neopixelPin=F.13
lcd.lcdCSPin=H.13
lcd.spiChannel=3
lcd.lcdDCPin=I.10
lcd.encoderPinA=I.8
lcd.encoderPinB=H.8
lcd.encoderPinSw=H.7
SPI3.pins={I.9, B.11, H.11}
```

## Config.g

Use this macro to enable the screen.

```
; ST7567 Init for FYSETC Mini12864 Panel V2.1

; Turn off backlight
m150 X2 R0 U0 B0 S3 F0
; Configure reset pin
M950 P1 C"PI.4" 
; hardware reset of LCD
M42 P1 S0
G4 P500
M42 P1 S1
; Turn display on
M918 P2 C30 F1000000 E4
; Fade in backlight
while iterations < 256
    m150 X2 R255 U255 B255 P{iterations} S1 F0
    G4 P20
; flash Button 3 times
while iterations < 3
    m150 X2 R255 U255 B255 P255 S1 F1
    m150 X2 R0 U255 B0 P255 S2 F0
    G4 P250
    m150 X2 R255 U255 B255 P255 S1 F1
    m150 X2 R0 U255 B0 P0 S2 F0
    G4 P250
; Display "ready" button state  
m150 X2 R255 U255 B255 P255 S1 F1
m150 X2 R255 U0 B0 P255 S2 F0
```

## Menu Files

Menu files must be uploaded to allow the display to generate the correct information. This can be done in two ways.
First, obtain the recommended menu files from [here](https://github.com/jadonmmiller/UltimateDuetMenuSystem/releases/)

### Method 1 - Wifi Mode only

Extract the contents of the zip file you downloaded above and place them in a folder called "Menu" on the SD card of the GTR. 

### Method 2

Activate the display using the config.g changes above.  
A side menu called "Display" should appear in DWC. Navigate to it and upload the zip file.  