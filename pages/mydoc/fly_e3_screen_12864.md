---
title: Connecting a 12864 screen to a Fly-E3
tags: []
keywords: 
last_updated: 21/01/2021
summary: "Connecting a 12864 screen to a Fly-E3"
sidebar: mydoc_sidebar
permalink: fly_e3_screen_12864.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The information here is aimed at connecting a stock ender 3 12864 display but it can also be applied to other 12864 displays (as long as they are ST7567 or ST7920 based).

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
softwareSPI.pins={E.8, NoPin, B.1}
lcd.lcdBeepPin = E.12
```

## Config.g changes

Add the following line to the end of your config.g

```
M918 P1 E4 F1000000
```