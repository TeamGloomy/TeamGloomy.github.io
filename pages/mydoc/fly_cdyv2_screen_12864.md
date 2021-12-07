---
title: Connecting a 12864 screen to a Fly-CDYv2
tags: []
keywords: 
last_updated: 07/12/2021
summary: "How to connect a 12864 screen to a Fly-CDYv2"
sidebar: mydoc_sidebar
permalink: fly_cdyv2_screen_12864.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

{% include important.html content="When using a 12864 screen, if the encoder is in a certain position (not clicked fully in to place), then the WiFi module does not start. It does not even flash the blue light on board reset. This is because the encoder pins are shared with the ESP8266 TX/RX pins and if the BTN_EN1 pin (which is the ESP8266 TX pin) is shorted to ground when you try and reset the ESP8266 then it will not boot. Normally the encoder will have neither of the pins shorted to ground. But if you happen to have it positioned between two of the indent positions then the switches will be closed and the ESP8266 will not boot." %}

{% include important.html content="Using a 12864 screen removes the option to update the WiFi firmware using RRF and also removes the use of the TFT header." %}

<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a class="noCrossRef" href="#reprap" data-toggle="tab">RepRapDiscount Full Graphic Smart Controller</a></li>
    <li><a class="noCrossRef" href="#fysetc" data-toggle="tab">Fysetc Mini12864 RGB Panel v2.1</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="reprap" markdown="1">

The information here is aimed at connecting a RepRap 12864 display but it can also be applied to other 12864 displays (as long as they are ST7567 or ST7920 based).  

## Board.txt modifications

Add the following lines to the board.txt file

```
lcd.encoderPinA=D.9
lcd.encoderPinB=D.8
lcd.encoderPinSw=PA.9
lcd.lcdCSPin=A.10
lcd.spiChannel=4
SPI4.pins={E.15, NoPin, B.2}
lcd.lcdBeepPin = NoPin
8266wifi.serialRxTxPins = {NoPin, NoPin}
serial.aux.rxTxPins = {NoPin, NoPin}
```

## Config.g changes

Add the following line to the end of your config.g

```
M918 P1 E4 F100000
```
</div>

<div role="tabpanel" class="tab-pane" id="fysetc" markdown="1">

## Wiring

The Fysetc Mini12864 RGB Panel v2.1 can be connected directly to the EXP1 and 2 headers of the Fly-CDYv2.  

## Board.txt modifications

Add the following lines to the board.txt file

```
lcd.encoderPinA=D.9
lcd.encoderPinB=D.8
lcd.encoderPinSw=A.9
lcd.lcdCSPin=B.2
SPI4.pins={A.5, NoPin, A.7}
lcd.spiChannel=4
lcd.lcdDCPin = A.10
led.neopixelPin=E.14
8266wifi.serialRxTxPins = {NoPin, NoPin}
serial.aux.rxTxPins = {NoPin, NoPin}
```

## Config.g

Use this macro to enable the screen.

```
; ST7567 Init for FYSETC Mini12864 Panel V2.1

; Turn off backlight
m150 X2 R0 U0 B0 S3 F0
; Configure reset pin
M950 P1 C"PE.15" 
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

Extract the contents of the zip file you downloaded above and place them in a folder called "Menu" on the SD card of the Fly-407ZG. 

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
sdCard.external.cardDetectPin=E.13
```