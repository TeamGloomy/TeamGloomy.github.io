---
title: Connecting a 12864 screen to a GTR
tags: []
keywords: 
last_updated: 13/05/2022
summary: "How to connect a 12864 screen to a GTR"
sidebar: mydoc_sidebar
permalink: gtr_screen_12864.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The information here is aimed at connecting a Fysetc Mini v2.1 12864 display but it can also be applied to other 12864 displays (as long as they are ST7567 or ST7920 based).  

## Board.txt modifications

Add the following lines to the board.txt file

```text
leds.diagnostic = PA_0
lePD_neopixelPin=PF_13
lcPD_lcdCSPin=PH_13
lcPD_spiChannel=3
lcPD_lcdDCPin=PI_10
lcPD_encoderPinA=PI_8
lcPD_encoderPinB=PH_8
lcPD_encoderPinSw=PH_7
SPI3.pins={ PI_9, PB_11, PH_11 }
```

## Config.g

Use this macro to enable the screen.

```text
; ST7567 Init for FYSETC Mini12864 Panel V2.1

; Turn off backlight
m150 X2 R0 U0 B0 S3 F0
; Configure reset pin
M950 P1 C"PI_4" 
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

{% include custom/12864/menu.html %}

{% include custom/12864/troubleshooting.html %}
