---
title: Connecting a 12864 screen to a Fly-CDYv2
tags: []
keywords: 
last_updated: 10/05/2021
summary: "Connecting a 12864 screen to a Fly-CDYv2"
sidebar: mydoc_sidebar
permalink: fly_cdyv2_screen_12864.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

## Overview

The information here is aimed at connecting a RepRap 12864 display but it can also be applied to other 12864 displays (as long as they are ST7567 or ST7920 based). This is only applicable from 3.2_7.  

{% include important.html content="When using a 12864 screen, if the encoder is in a certain position (not clicked fully in to place), then the WiFi module does not start. It does not even flash the blue light on board reset. This is because the encoder pins are shared with the ESP TX/RX pins and if the  BTN_EN1 pin (which is the ESP8266 TX pin) is shorted to ground when you try and reset the ESP8266 then it will not boot. Normally the encoder will have neither of the pins shorted to ground. But if you happen to have it positioned between two of the indent positions then the switches will be closed and the ESP8266 will not boot." %}

{% include important.html content="Using a 12864 screen removes the option to update the WiFi firmware using RRF and also removes the use of the TFT header." %}

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

## Menu Files

Menu files must be uploaded to allow the display to generate the correct information. This can be done in two ways.
First, obtain the recommended menu files from [here](https://github.com/jadonmmiller/UltimateDuetMenuSystem/releases/)

### Method 1 - Wifi Mode only

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