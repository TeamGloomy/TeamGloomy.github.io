---
title: Connecting a 12864 screen to an SKR Pro
tags: []
keywords: 
last_updated: 13/05/2022
summary: "How to connect a 12864 screen to an SKR Pro"
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
SPI3.pins={ G.14, C.1, F.7 } //Set to GPIO pins to use as SCK, MISO, MOSI
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

{% include custom/12864/menu.html %}

{% include custom/12864/troubleshooting.html %}