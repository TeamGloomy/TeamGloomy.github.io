---
title: Board.txt Configurables Applicable to STM32
tags: []
keywords: 
last_updated: 13/02/2023
summary: "Details of each item that can be configured in Board.txt and which build they are applicable to"
sidebar: mydoc_sidebar
permalink: board_txt_stm32.html
folder: mydoc
comments: false
toc: false
datatable: true
---

Below is a list of items that can be configured using the /sys/board.txt file.

Anything entered in the board.txt file takes precidence over what is set in the firmware.

For STM32 boards, pins can take the form of PC.1, PC_1, C.1, C_1 or the pin name.  

<div class="datatable-begin"></div>

|Item Name|Example|Description|STM32 Comments|
| :------------- | :---------------|:---|:---|:---|
|8266wifi.clockReg|8266wifi.clockReg = 8195|Sets the WiFi clock speed.ESP32 only. The default is 8195 (DMA 20MHz - Typical WiFi transfer speed of 1.56Mbytes/S for F4 and 1.63Mbytes/S for H7). F4 processors seem to work ok at 8194 (DMA 27MHz - Typical WiFi transfer speed of 1.80Mbytes/S for F4 and 1.92Mbytes/S for H7) and H7 processors (but not F4) seem to work ok at 8193 (DMA 40MHz - Typical WiFi transfer speed of 2.43Mbytes/S for H7). 3.4.1 onwards and requires DuetWifiServer 1.26_09 onwards||
|8266wifi.csPin|8266wifi.csPin = E.12|Allow use of non standard CS pin||
|8266wifi.espDataReadyPin|example 8266wifi.espDataReadyPin = E.13| used to indicate that data is available from the ESP8266||
|8266wifi.espResetPin|8266wifi.espResetPin = E.15|This sets the reset pin to use when connecting an ESP8266||
|8266wifi.TfrReadyPin (8266wifi.lpcTfrReadyPin is no longer supported from 3.4.1_RC1)|8266wifi.TfrReadyPin = E.14|This sets the transfer ready pin when connecting an ESP8266||
|8266wifi.serialRxTxPins|8266wifi.serialRxTxPins = { D.9, D.8 }|This sets the pin numbers to use for RX and TX when connecting an ESP8266. See table below for allowable RX and TX pins||
|8266wifi.spiChannel|8266wifi.spiChannel=1|This allows the SPI channel to be set that is used for WiFi. The default is 1. It can only be set to channel 1 (SPI2) or channel 2 (SPI3). From 3.3rc2_2 only||
|accelerometer.spiChannel| accelerometer.spiChannel = 4 | This sets the SPI channel to be used for the accelerometer. From 3.3b3_2 onwards ||
|atx.initialPowerOn|atx.initialPowerOn = 1|This sets the ATX power pin as on as soon as the board powers up rather than having to wait for M80 to be ran. The default is true||
|atx.powerPin|atx.PowerPin = B.12|This sets the pin to be used for controlling an ATX power supply||
|atx.powerPinInverted|atx.powerPinInverted = 0|Some ATX power supplies are active low for off and some are active high. This allows that to be set. Use either 0 or 1||
|board ("lpc.board" is no longer supported from 3.4.1_RC1)|board = fly_e3|This sets the correct board pin mapping to load. See table below for current list||
|heat.spiTempSensorChannel|heat.spiTempSensorChannel = 255|this selects which SPI channel is used to communicate with the temperature sensor board. Can be set to 255 to indicate no channel to be used|STM32F4 has six SPI interfaces (three channels 0, 1, 2 are hardware based although only 0 and 1 are implemented, channels 3, 4 and 5 are software). STM32H7 has nine SPI interfaces (0, 1, 2, 6, 7 and 8 are hardware and 3, 4 and 5 are software)|
|heat.spiTempSensorCSPins|heat.spiTempSensorCSPins = { D.15, NoPin }|Sets the SPI temperature sensor chip select pin. Can be set to 255 to indicate no channel to be used|STM32 accepts a maximum of 2 sensors|
|heat.tempSensePins|heat.tempSensePins = { A.3, A.4, A.1 }|Sets the temperature sensor pins starting with the bed|STM32 accepts a maximum of 9 entries|
|heat.thermistorSeriesResistor|heat.thermistorSeriesResistor = 4700|Sets the series resistor used for temperature sensors. The default is 4700. From 3.4.1 onwards||
|lcd.encoderPinA|lcd.encoderPinA = BTN_EN1|Sets the pin for connection A of the encoder||
|lcd.encoderPinB|lcd.encoderPinB = BTN_EN2|Sets the pin for connection B of the encoder||
|lcd.encoderPinSw|lcd.encoderPinSw = BTN_ENC|Sets the pin to be used for the encoder click||
|lcd.lcdBeepPin|lcd.lcdBeepPin = BEEP|Sets the pin to be used to control the display beeper||
|lcd.lcdCSPin|lcd.lcdCSPin = LCD_EN|Sets the LCD chip select pin||
|lcd.lcdDCPin|lcd.lcdDCPin = LCD_RS|Sets the data control pin (A0)||
|lcd.panelButtonPin|lcd.panelButtonPin = 2.11|For use when a connected display has an extra button||
|lcd.spiChannel|lcd.spiChannel = 255|This selects which SPI channel is used to communicate with the LCD. Can be set to 255 to indicate no channel to be used|STM32F4 has six SPI interfaces (three channels 0, 1, 2 are hardware based although only 0 and 1 are implemented, channels 3, 4 and 5 are software). STM32H7 has nine SPI interfaces (0, 1, 2, 6, 7 and 8 are hardware and 3, 4 and 5 are software)
|led.neopixelPin|led.neopixelPin = B.11|This sets the output pin for neopixel control||
|leds.activity|leds.activity = A.13 |This sets the pin for the CAN-FD activity LED|3.4.2-RC2 Onwards|
|leds.activityOn|leds.activityOn = 1|This sets polarity of acivity LED and is a boolean value|3.4.2-RC2 Onwards|
|leds.diagnostic|leds.diagnostic = A.13|This would set the correct pin for controlling a diagnostic LED||
|leds.diagnosticOn|leds.diagnosticOn = 1|This sets polarity of diag LED and is a boolean value|3.4.2-RC2 Onwards|
|pins.SetHigh|pins.SetHigh = { A.3, A.4, A.1 }|This would set all the named pins as a high output on boot. It accepts up to 16 values|3.4.2-RC2 Onwards|
|pins.SetLow|pins.SetLow = { A.3, A.4, A.1 }|This would set all the named pins as a low output on boot. Can be used for making sure that CS pins are in a safe state. It accepts up to 16 values|3.4.2-RC2 Onwards|
|power.VInDetectPin|powerVInDetectPin = C.3|Sets the pin to use for voltage monitoring||
|power.voltage|power.voltage = 24|Sets a voltage when no voltage monitoring is present on the board||
|sbc.csPin|sbc.csPin = E.12|Allow use of non standard CS pin||
|sbc.loadConfig|sbc.loadConfig = 1|Load the board.txt from the SBC if board.txt is present on an SD card in the STM32 board||
|sbc.TfrReadyPin ("sbc.lpcTfrReadyPin" is no longer supported from 3.4.1_RC1)|sbc.TfrReadyPin = C.14|This sets the transfer ready pin when attaching an SBC||
|sbc.spiChannel|sbc.spiChannel = 1|This allows the SPI channel to be set that is used for SBC. The default is 1. It can only be set to channel 1 (SPI2) or channel 2 (SPI3). From 3.3rc2_2 only||
|sdCard.external.cardDetectPin|externalSDCard.cardDetectPin = LCD_CD|Sets the external SD card detect pin||
|sdCard.external.csPin|externalSDCard.csPin = A.0|Sets the external SD card chip select pin||
|sdCard.external.spiChannel|sdCard.external.spiChannel = 255|this selects which one is used for the external SD card, can also be set to 255 to indicate no channel is used||
|sdCard.external.spiFrequencyHz|sdCard.external.spiFrequencyHz = 4000000|Sets the SPI speed for an external SD card in Hz||
|sdCard.internal.spiFrequencyHz|sdCard.internal.spiFrequencyHz = 4000000|Sets the SPI speed for the internal SD card in Hz||
|serial.aux.rxTxPins|serial.aux.rxTxPins = { A.10, A.9 }|This sets the pin numbers to use for RX and TX on AUX1. Typically uses UART0. See table below for allowable RX and TX pins||
|serial.aux2.rxTxPins|serial.aux2.rxTxPins = { C.7, C.6 }|This sets the pin numbers to use for RX and TX on AUX2. Typically uses UART2. See table below for allowable RX and TX pins||
|SPI0.pins|SPI0.pins = { A.5, A.6, A.7 }|Sets the SPI pins in the order SCK, MISO, MOSI for Channel 0 - 3.2_7 Onwards|Hardware - Not Configurable|
|SPI1.pins|SPI1.pins = { A.5, A.6, A.7 }|Sets the SPI pins in the order SCK, MISO, MOSI for Channel 1 - 3.2_7 Onwards|Hardware - Not Configurable|
|SPI2.pins|SPI2.pins = { A.5, A.6, A.7 }|Sets the SPI pins in the order SCK, MISO, MOSI for Channel 2 - 3.2_7 Onwards|Hardware - Not Configurable|
|SPI3.pins|SPI3.pins = { A.5, A.6, A.7 }|Sets the SPI pins in the order SCK, MISO, MOSI for Channel 3 - 3.2_7 Onwards|Software|
|SPI4.pins|SPI4.pins = { A.5, A.6, A.7 }|Sets the SPI pins in the order SCK, MISO, MOSI for Channel 4 - 3.2_7 Onwards|Software|
|SPI5.pins|SPI5.pins = { A.5, A.6, A.7 }|Sets the SPI pins in the order SCK, MISO, MOSI for Channel 5 - 3.2_7 Onwards|Software|
|SPI6.pins|SPI6.pins = { A.5, A.6, A.7 }|Sets the SPI pins in the order SCK, MISO, MOSI for Channel 6 - 3.4.1-RC1 Onwards|STM32H7 Only - Hardware|
|SPI7.pins|SPI7.pins = { A.5, A.6, A.7 }|Sets the SPI pins in the order SCK, MISO, MOSI for Channel 7 - 3.4.1-RC1 Onwards|STM32H7 Only - Hardware|
|SPI8.pins|SPI8.pins = { A.5, A.6, A.7 }|Sets the SPI pins in the order SCK, MISO, MOSI for Channel 8 - 3.4.1-RC1 Onwards|STM32H7 Only - Hardware|
|stepper.directionPins|stepper.directionPins = { PD_3, PA_8, PE_3, PD_14, PD_10 }|Sets the driver direction pins in the order 0, 1, 2, 3 and so on|STM32 supports a maximum of 11 drivers|
|stepper.enablePins|stepper.enablePins = { PD_6, PD_1, PE_0, PC_7, PD_13 }|Sets the driver enable pins in the order 0, 1, 2, 3 and so on|STM32 supports a maximum of 11 drivers|
|stepper.numSmartDrivers|stepper.numSmartDrivers = 3|Sets the number of TMC22XX drivers installed between 1 and 11. Drivers must be installed from drive 0 after 5160 drivers||
|stepper.num5160Drivers|stepper.num5160Drivers = 3|Sets the number of TMC22XX drivers installed between 1 and 11. Drivers must be installed from drive 0 before 22XX drivers||
|stepper.spiChannel|stepper.spiChannel = 3|Sets the SPI channel to use for 5160 drivers||
|stepper.stepPins|stepper.stepPins = { PD_4, PA_15, PE_2, PD_15, PD_11 }|Sets the driver step pins in the order 0, 1, 2, 3 and so on|STM32 supports a maximum of 11 drivers|
|stepper.TmcDiagPins|stepper.TmcDiagPins = { C.1, C.3, C.0, C.2, A.0 }|Sets the stall detection diag pins. Typically same pin as the endstop pin||
|stepper.TmcUartPins|stepper.TmcUartPins = { PD_5, PD_0, PE_1, PC_6, PD_12 }|Sets the pin numbers used for communications with TMC22XX drivers using a UART interface|STM32 supports a maximum of 11 drivers|

<div class="datatable-end"></div>

## board Types

Current preprogrammed boards

<div class="datatable-begin"></div>

|Variable|Board|Type|
| :------------- |:-------------|:---|
|biqugtr_1.0|SKR GTR v1.0|STM32F4|
|biqoctopus_1.1|BTT Octopus v1.1 f439 Version|STM32F4|
|biqoctopuspro_1.0|BTT Octopus Pro v1.0 f439 Version|STM32F4|
|biquoctopus_x7|BTT Octopus X7|STM32F4|
|biquskr_2.0|SKR v2.0|STM32F4|
|biquskr_3|SKR3|STM32H7|
|biquskr_3_ez|SKR3 Ez|STM32H7|
|biquskr_rrf_e3_1.0|SKR RRF E3 v1.0|STM32F4|
|biquskrpro_1.1|SKR Pro v1.1 and 1.2|STM32F4|
|fly_407zg|Fly-407ZG|STM32F4|
|fly_cdyv2|Fly-CDYv2|STM32F4|
|fly_cdyv3|Fly-CDYv3|STM32F4|
|fly_E3|Fly-E3|STM32F4|
|fly_E3_pro|Fly-E3-Pro|STM32F4|
|fly_E3_prov3|Fly-E3-Pro-v3|STM32F4|
|fly_gemini|Fly-Gemini|STM32F4|
|fly_geminiv1.1|Fly-Gemini V1.1|STM32F4|
|fly_geminiv2.0|Fly-Gemini V2.0|STM32F4|
|fly_super5|Fly-Super8|STM32H7|
|fly_super8|Fly-Super8|STM32F4|
|fly_super8_pro|Fly-Super8-Pro|STM32H7|
|fysetc_spider|Fysetc Spider 407 Version|STM32F4|
|fysetc_spider_king407|Fysetc Spider King 407|STM32F4|
|generic|maps all pins as available by pin number. Not recommended for normal use||
|troodon_v2|Board used in the Troodon V2 Printer|STM32F4|

<div class="datatable-end"></div>

## UART Useable Pins - STM32F4 Based Boards

There are 6 UARTS and each can use a selection of pins. You can mix and match pins in the same UART number e.g. D.2 and C.12.  

<div class="datatable-begin"></div>

|Pin Number|UART Number|RX/TX|
| :------------- |:-------------|:-------------|
|A.9| UART1|TX|
|D.8| UART3|TX|
|C.6| UART6|TX|
|G.14| UART6|TX|
|B.6| UART1|TX|
|A.2| UART2|TX|
|D.5| UART2|TX|
|B.10| UART3|TX|
|C.10| UART3|TX|
|A.0| UART4|TX|
|C.10| UART4|TX|
|C.12| UART5|TX|
|A.10| UART1|RX|
|D.9| UART3|RX|
|C.7| UART6|RX|
|A.1| UART4|RX|
|A.3| UART2|RX|
|B.7| UART1|RX|
|B.11| UART3|RX|
|C.11| UART4|RX|
|C.11| UART3|RX|
|D.2| UART5|RX|
|D.6| UART2|RX|
|G.9| UART6|RX|

<div class="datatable-end"></div>

## UART Useable Pins - STM32H7 Based Boards

There are 8 UARTS and each can use a selection of pins. You can mix and match pins in the same UART number e.g. D.2 and C.12.  

<div class="datatable-begin"></div>

|Pin Number|UART Number|RX/TX|
| :------------- |:-------------|:-------------|
|A.0| UART4|TX|
|A.2| UART2|TX|
|A.9| UART1|TX|
|A.12| UART4|TX|
|A.15| UART7|TX|
|B.4| UART7|TX|
|B.6| UART5|TX|
|B.6| UART1|TX|
|B.9| UART4|TX|
|B.10| UART3|TX|
|B.13| UART5|TX|
|B.14| UART1|TX|
|C.6| UART6|TX|
|C.10| UART4|TX|
|C.10| UART3|TX|
|C.12| UART5|TX|
|D.1| UART4|TX|
|D.5| UART2|TX|
|D.8| UART3|TX|
|E.1| UART8|TX|
|E.8| UART7|TX|
|F.7| UART7|TX|
|G.14| UART6|TX|
|A.1| UART4|RX|
|A.3| UART2|RX|
|A.8| UART7|RX|
|A.10| UART1|RX|
|A.11| UART4|RX|
|B.3| UART7|RX|
|B.5| UART5|RX|
|B.7| UART1|RX|
|B.8| UART4|RX|
|B.11| UART3|RX|
|B.12| UART5|RX|
|B.15| UART1|RX|
|C.7| UART6|RX|
|C.11| UART4|RX|
|C.11| UART3|RX|
|D.0| UART4|RX|
|D.2| UART5|RX|
|D.6| UART2|RX|
|D.9| UART3|RX|
|E.0| UART8|RX|
|E.7| UART7|RX|
|F.6| UART7|RX|
|G.9| UART6|RX|

<div class="datatable-end"></div>

  