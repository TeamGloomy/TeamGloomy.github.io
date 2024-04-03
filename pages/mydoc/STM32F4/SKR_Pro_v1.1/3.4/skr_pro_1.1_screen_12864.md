---
title: Connecting a 12864 screen to an SKR Pro v1.1
tags: []
keywords: 
last_updated: 03/04/2024
summary: "How to connect a 12864 screen to an SKR Pro v1.1"
sidebar: mydoc_sidebar
permalink: skr_pro_1.1_screen_12864.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The information here is aimed at connecting a Fysetc Mini v1.2 12864 display but it can also be applied to other 12864 displays (as long as they are ST7567 or ST7920 based).  

## Wiring

Connect the screen as shown below.  

{% include image.html file="skr_pro_mini.png" alt="SKR Pro v1.1 and Fysetc Mini v1.2" caption="SKR Pro v1.1 and Fysetc Mini v1.2" %}

## Board.txt modifications

Add the following lines to the board.txt file

```text
//Fysetc MINI 12864
lcd.encoderPinA=PG_11
lcd.encoderPinB=PC_4
lcd.encoderPinSw=PF_9
lcd.lcdCSPin=PD_3
lcd.lcdDCPin=PG_13
lcd.spiChannel=3
SPI3.pins={ PG_14, PC_1, PF_7 } //Set to GPIO pins to use as SCK, MISO, MOSI
//lcd.lcdBeepPin=NoPin
```

## Config.g

Add this line to config.g

```text
M950 P1 C"PC_5"
M42 P1 S0
G4 P500
M42 P1 S1
M918 P2 C30 F1000000 E4
```

{% include custom/3.4/12864/menu.html %}

{% include custom/3.4/12864/troubleshooting.html %}
