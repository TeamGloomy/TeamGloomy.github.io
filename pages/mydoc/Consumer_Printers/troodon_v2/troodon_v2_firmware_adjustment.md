---
title: Moving the Troodon V2 Printer from board.txt defined pins to firmware defined pins
tags: []
keywords: 
last_updated: 29/06/2023
summary: "Moving the Troodon V2 Printer from board.txt defined pins to firmware defined pins"
sidebar: mydoc_sidebar
permalink: troodon_v2_firmware_adjustment.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

{% include important.html content="This has been included as part of the [improved](https://github.com/TeamGloomy/Troodon-V2) TeamGloomy config files" %}

The Troodon V2 Printer is supplied with a firmware and firmware files that, rather than having the supplied mainboard natively configured, use a different firmware profile and override the pins configured using board.txt. There is nothing wrong with the approach Formbot have taken and the firmware can be updated without issue. However, in the future, changes may be made to the firmware profile its using that may cause issues. TeamGloomy therefore recommend making some changes to your board.txt to prevent any issues going forwards.

{% include warning.html content="These changes can only be made with the release of RRF 3.4.5. onwards" %}

{% include tip.html content="The Troodon V2 uses an Octopus X7 as the mainboard. This board uses an STM32F4 processor. The correct firmware file would start with firmware-stm32f4-wifi" %}

### Default board.txt file

The default board.txt file can be found [here](https://github.com/TeamGloomy/Troodon-V2/blob/stock/sys/board.txt) in case you need to go back to it.  

### Modified board.txt file

Below is the modified board.txt file which uses native firmware pin assignments
```
// This board.txt file has come from the teamgloomy wiki
// version: 1.1
board = troodon_v2

//LED blinks to indicate Platform is spinning or other diagnostic 
leds.diagnostic = LED

heat.tempSensePins = {PA_0, PF_3}

//ESP Settings
8266wifi.espDataReadyPin = PD_0
8266wifi.TfrReadyPin = PD_3
8266wifi.espResetPin = PG_14
8266wifi.csPin = PA_15
//ESP RX/TX Settings
8266wifi.serialRxTxPins = { PD_6, PD_5 }
8266wifi.spiChannel = 2

// External Display settings
serial.aux.rxTxPins = {NoPin, NoPin};

//MINI 12864
lcd.encoderPinA = BTNEN1
lcd.encoderPinB = BTNEN2
lcd.encoderPinSw = BTNENC
lcd.lcdCSPin = LCDEN
lcd.lcdDCPin = LCDRS
lcd.spiChannel = 1
lcd.lcdBeepPin = BEEP
sdCard.external.spiChannel = 1
sdCard.external.csPin = LCDSS
sdCard.external.cardDetectPin = LCDCD
led.neopixelPin = LCDD5
```

## Config.g Changes

Switching to native firmware support also allows you adjust the pin assignments used in config.g from using a pin number to using an alias. For example
```
M574 X1 S1 P"PF_2"   
```
would become
```
M574 X1 S1 P"xstop"   
```
This is not a critical change, it just makes config.g easier to read.  
To find the alias names for each pin, look [here](troodon_v2_pins.html)