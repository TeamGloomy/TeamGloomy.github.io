---
title: Connecting a 12864 screen to a SKR-RRF-E3
tags: []
keywords: 
last_updated: 13/05/2022
summary: "How to connect a 12864 screen to a SKR-RRF-E3"
sidebar: mydoc_sidebar
permalink: skr_rrf_e3_screen_12864.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: SKR-RRF-E3
spiChannel: 4
---

<ul id="profileTabs" class="nav nav-tabs">
  <li class="active"><a class="noCrossRef" href="#ender" data-toggle="tab">Stock Ender 3 Display</a></li>  
    <li><a class="noCrossRef" href="#fysetc21" data-toggle="tab">Fysetc Mini v2.1 12864</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="ender" markdown="1">

## Overview

The information here is aimed at connecting a stock ender 3 12864 display but it can also be applied to other 12864 displays (as long as they are ST7567 or ST7920 based). 

## Wiring

The ender 3 stock display can be connected directly to the EXP header of the SKR-RRF-E3. No modifications are required.

## Board.txt modifications

The following lines should be added to the board.txt file.

```
lcd.encoderPinA=PB_2
lcd.encoderPinB=PE_7
lcd.encoderPinSw=PE_9
lcd.lcdCSPin=PB_1
lcd.spiChannel=4
SPI4.pins={ PE_10, NoPin, PE_11 }
lcd.lcdBeepPin = PE_8
```

## Config.g changes

Add the following line to the end of your config.g

```
M918 P1 E4 F100000
```
</div>

<div role="tabpanel" class="tab-pane" id="fysetc21" markdown="1">

## Wiring

The Fysetc Mini12864 RGB Panel v2.1 can be connected directly to the EXP header of the Fly-E3-Pro using custom wiring.  
Use the table below as a guide.

<div class="datatable-begin"></div>

|Pin Name|BTT E3 RRF Pin location|Mini 12864 Pin Location|
|5V|EXP1 Pin 1 - 5V|EXP1 Pin 1 - VCC|
|GND|EXP1 Pin 2 - GND|EXP1 Pin 2 - GND|
|LCD Reset|TFT Pin 3 - TX1 (PA_9)|EXP1 Pin 6 - LCD RST|
|lcd.encoderPinA=PE_10|EXP1 Pin 5 - PE10|EXP2 Pin 8 - BTN EN1|
|lcd.encoderPinB=PE_11|EXP1 Pin 3 - PE11|EXP2 Pin 6 - BTN EN2|
|lcd.encoderPinSw=PE_9|EXP1 Pin 9 - PE9|EXP1 Pin 9 - BTN_ENC|
|lcd.lcdCSPin=PB_1|EXP1 Pin 4 - PB1|EXP1 Pin 8 - LCD CS|
|SPI4.pins={ PB_2, NoPin, PE_7 }|EXP1 Pin 6 - PB2, EXP1 Pin 8 - PE7|EXP2 Pin 8 - SCK , EXP2 Pin 5 - MOSI|
|lcd.lcdDCPin = PE_8|EXP1 Pin 10 - PE8|EXP1 Pin 7  - LCD A0|
|led.neopixelPin=PB_7|Neopixel Pin 2 - PB7|EXP1 Pin 5 - RED|
|Mainboard Reset|EXP1 Pin 7 - RST|EXP2 Pin 3 - RST (optional)|

<div class="datatable-end"></div>

## Board.txt modifications

Add the following lines to the board.txt file

```
lcd.encoderPinA=PE_10
lcd.encoderPinB=PE_11
lcd.encoderPinSw=PE_9
lcd.lcdCSPin=PB_1
lcd.spiChannel=4
SPI4.pins={ PB_2, NoPin, PE_7 }
lcd.lcdDCPin = PE_8
led.neopixelPin=PB_7
```

## Config.g

Add the following line to the end of your config.g

```
M98 P"screen.g"
```

Add a file in your sys folder called screen.g and add the following contents

```
; ST7567 Init for FYSETC Mini12864 Panel V2.1

; Turn off backlight
m150 X2 R0 U0 B0 S3 F0
; Configure reset pin
M950 P1 C"TX1" 
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

</div>

</div>

{% include custom/12864/menu.html %}

{% include custom/12864/troubleshooting.html %}