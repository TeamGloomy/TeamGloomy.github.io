---
title: Moving the Troodon V2 Printer from board.txt defined pins to firmware defined pins
tags: []
keywords: 
last_updated: 13/01/2023
summary: "Moving the Troodon V2 Printer from board.txt defined pins to firmware defined pins"
sidebar: mydoc_sidebar
permalink: troodon_v2_firmware_adjustment.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The Troodon V2 Printer is supplied with a firmware and firmware files that, rather than have the supplied mainboard natively configured, use a different firmware profile and override the pins configured using board.txt. There is nothing wrong with the approach Formbot have taken and the firmware can be updated without issue. However, in the future, changes may be made to the firmware profile its using that may cause issues. TeamGloomy therefore recommend making some changes to your board.txt to prevent any issues going forwards.

{% include warning.html content="These changes can only be made with the release of RRF 3.4.5. onwards" %}

{% include tip.html content="The Troodon V2 uses an Octopus X7 as the mainboard. This board uses an STM32F4 processor. The correct firmware file would start with firmware-stm32f4-wifi" %}

### Default board.txt file

For reference, here is the default board.txt file that is supplied with the printer.  
```
//Note: Each line should be less than 120 characters.
//    : Unwanted options can be commented out or set to NoPin. Lines commented out will get default values
//    : for pins the default is NoPin.
//    : Values for Arrays need to be contained within { and }
//    : Comments can be defined with // or # (comments are not supported inside arrays)
//    : Each config entry must be all on a single line.

board = biqoctopuspro_1.0;

//LED blinks to indicate Platform is spinning or other diagnostic 
//Comment out or set to NoPin if not wanted.
led.neopixelPin = D.14

heat.tempSensePins = {bedtemp,e0temp}; //Max of 3 entries
//heat.spiTempSensorCSPins = { }; //Max of 2 entries


//ESP Settings
8266wifi.espDataReadyPin = D.0;
8266wifi.TfrReadyPin = D.3;
8266wifi.espResetPin = G.14;
		//ESP RX/TX Settings
8266wifi.serialRxTxPins = { PD_6, PD_5 } ;

8266wifi.csPin = A.15;
8266wifi.spiChannel = 2

//TMC Smart Drivers
stepper.numSmartDrivers = 7;
stepper.enablePins = {PA_1, PC_1, PC_5, PE_10, PE_15, PF_12, PG_1} // enablePins
stepper.stepPins = {PA_3, PC_2, PB_0, PE_11, PB_10, PF_13, PE_7} // stepPins
stepper.directionPins = {PA_4, PC_3, PB_1, PE_12, PB_11, PF_14, PE_8} // dirPins
stepper.TmcUartPins = {PA_2, PC_0, PC_4, PE_9, PE_14, PF_11, PG_0}  // uartpins

// External Display settings
serial.aux.rxTxPins = {PA_10, PA_9};

//MINI 12864
lcd.encoderPinA=D.10
lcd.encoderPinB=D.9
lcd.encoderPinSw=G.4
lcd.lcdCSPin=G.3
lcd.lcdDCPin=G.2
lcd.spiChannel=5
SPI5.pins = {PB_13, PB_14, PB_15}
lcd.lcdBeepPin=G.5
heat.spiTempSensorCSPins = {PF_8, NoPin, NoPin, NoPin, NoPin, NoPin, NoPin, NoPin}
sdCard.external.spiChannel=5
sdCard.external.csPin=B.12
sdCard.external.cardDetectPin=D.8
```

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
M574 X1 S1 P"PF2"   
```
would become
```
M574 X1 S1 P"xstop"   
```
This is not a critical change, it just makes config.g easier to read.  
To find the alias names for each pin, look [here](troodon_v2_pins.html)