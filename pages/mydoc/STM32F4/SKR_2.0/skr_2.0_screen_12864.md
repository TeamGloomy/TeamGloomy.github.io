---
title: Connecting a 12864 screen to an SKR v2.0
tags: []
keywords: 
last_updated: 18/01/2022
summary: "How to connect a 12864 screen to an SKR v2.0"
sidebar: mydoc_sidebar
permalink: skr_2.0_screen_12864.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Wiring

Connect EXP1 to EXP1 and EXP2 to EXP2.  

<ul id="profileTabs" class="nav nav-tabs">
  <li class="active"><a class="noCrossRef" href="#fysetc" data-toggle="tab">Fysetc Mini v1.2 12864</a></li>  
	<li><a class="noCrossRef" href="#reprap" data-toggle="tab">RepRapDiscount Full Graphic Smart Controller</a></li>
  <li><a class="noCrossRef" href="#fysetc21" data-toggle="tab">Fysetc Mini v2.1 12864</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="fysetc" markdown="1">

## Overview

The information here is aimed at connecting a Fysetc Mini v1.2 12864 display but it can also be applied to other 12864 displays (as long as they are ST7567 or ST7920 based).  

## Board.txt modifications

Add the following lines to the board.txt file

```
//Fysetc MINI 12864 v2.1
lcd.encoderPinA=B.2
lcd.encoderPinB=E.7
lcd.encoderPinSw=B.0
lcd.lcdCSPin=B.1
lcd.spiChannel=0
lcd.lcdDCPin=E.9
lcd.lcdBeepPin=C.5
//sd
sdCard.external.spiChannel=0
sdCard.external.csPin=A.4
sdCard.external.cardDetectPin=C.4
```

## Config.g

Add this line to config.g
```
M950 P1 C"E.10"
M42 P1 S0
G4 P500
M42 P1 S1
M918 P2 C30 F1000000 E4
```

</div>

<div role="tabpanel" class="tab-pane" id="reprap" markdown="1">

## Board.txt modifications

Add the following lines to the board.txt file

```
//RepRap Discount Full Graphic Smart Controller
lcd.encoderPinA=LCDENCA
lcd.encoderPinB=LCDENCB
lcd.encoderPinSw=LCDBTN
lcd.lcdBeepPin=LCDBEEP
lcd.lcdCSPin=LCDCS
lcd.spiChannel=3
SPI3.pins={LCDD4, NoPin, LCDEN}
```

## Config.g

Add this line to config.g
```
M918 P1 E4
```

</div>

<div role="tabpanel" class="tab-pane" id="fysetc21" markdown="1">

## Board.txt modifications

Add the following lines to the board.txt file

```
//Fysetc MINI 12864 v2.1
lcd.encoderPinA=B.2
lcd.encoderPinB=E.7
lcd.encoderPinSw=B.0
lcd.lcdCSPin=B.1
lcd.spiChannel=0
lcd.lcdDCPin=E.9
led.neopixelPin=E.11
lcd.lcdBeepPin=C.5
//sd
sdCard.external.spiChannel=0
sdCard.external.csPin=A.4
sdCard.external.cardDetectPin=C.4
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
M950 P1 C"E.10" 
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

From 3.3RC3, it is possible to use the external SD card.  
To do so, add the following lines to your board.txt

```
sdCard.external.spiChannel=0
sdCard.external.csPin=A.4
sdCard.external.cardDetectPin=C.4
```
