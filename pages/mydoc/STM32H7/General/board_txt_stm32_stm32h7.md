---
title: Board.txt Configurables Applicable to STM32
tags: []
keywords: 
last_updated: 06/03/2025
summary: "Details of each item that can be configured in Board.txt and which build they are applicable to"
permalink: board_txt_stm32.html
folder: mydoc
comments: false
toc: false
datatable: true
---

Below is a list of items that can be configured using the /sys/board.txt file.

Anything entered in the board.txt file takes precedence over what is set in the firmware.

For STM32 boards, pins can take the form of PA0, PA.0, PA_0, A0, A.0 or A_0 or the pin name.  

<div class="datatable-begin"></div>

|Item Name|Example|Description|STM32 Comments|
| :------------- | :---------------|:---|:---|:---|
|wifi.clockReg|wifi.clockReg = 8195|Sets the WiFi clock speed. ESP32 only. The default is 8195 (DMA 20MHz - Typical WiFi transfer speed of 1.56Mbytes/S for F4 and 1.63Mbytes/S for H7). H7 processors seem to work ok at 8193 (DMA 40MHz - Typical WiFi transfer speed of 2.43Mbytes/S for H7). 3.4.1 onwards and requires DuetWifiServer 1.26_09 onwards||
|wifi.csPin|wifi.csPin = PE_12|Allow use of non standard CS pin||
|wifi.espDataReadyPin|example wifi.espDataReadyPin = PE_13| used to indicate that data is available from the ESP||
|wifi.espResetPin|wifi.espResetPin = PE_15|This sets the reset pin to use when connecting an ESP||
|wifi.moduleType|wifi.moduleType = esp32| This sets the type of module installed so the correct firmware is installed. esp32 and esp32eth are valid options||
|wifi.TfrReadyPin|wifi.TfrReadyPin = PE_14|This sets the transfer ready pin when connecting an ESP||
|wifi.serialRxTxPins|wifi.serialRxTxPins = { PD_9, PD_8 }|This sets the pin numbers to use for RX and TX when connecting an ESP. See table below for allowable RX and TX pins||
|wifi.spiChannel|wifi.spiChannel=1|This allows the SPI channel to be set that is used for WiFi. The default is 1. It can only be set to channel 1 (SPI2) or channel 2 (SPI3). ||
|accelerometer.spiChannel| accelerometer.spiChannel = 4 | This sets the SPI channel to be used for the accelerometer.||
|atx.initialPowerOn|atx.initialPowerOn = 1|This sets the ATX power pin as on as soon as the board powers up rather than having to wait for M80 to be ran. The default is true||
|atx.powerPin|atx.powerPin = PB_12|This sets the pin to be used for controlling an ATX power supply||
|atx.powerPinInverted|atx.powerPinInverted = 0|Some ATX power supplies are active low for off and some are active high. This allows that to be set. Use either 0 or 1||
|board|board = fly_e3|This sets the board short name||
|board.longName|board.longName = BTT Kraken H723|This sets the long name of the board used by DWC||
|can.csPin|can.csPin = PD_1|Sets the CS pin when using an SPI2CANFD module||
|can.exp.address| can.exp.address = 119|Sets the CAN address to use when a mainboard is in expansion board mode|From 3.6.0-RC1 onwards|
|can.readPin|can.readPin = PD_1|This sets the CAN_TX pin||
|can.spiChannel|can.spiChannel = 1|This sets the SPI channel used for the SPI2CANFD module||
|can.spiFrequencyHz|can.spiFrequencyHz = PD_1|This sets SPI frequency for the SPI2CANFD module in Hz. The default is 15000000||
|can.writePin|can.writePin = PD_1|This sets the CAN_RX pin||
|heat.spiTempSensorChannel|heat.spiTempSensorChannel = 255|This selects which SPI channel is used to communicate with the temperature sensor board. Can be set to 255 to indicate no channel to be used|STM32H7 has nine SPI interfaces (0, 1, 2, 6, 7 and 8 are hardware and 3, 4 and 5 are software)|
|heat.spiTempSensorCSPins|heat.spiTempSensorCSPins = { PD_15, NoPin }|Sets the SPI temperature sensor chip select pin. Can be set to 255 to indicate no channel to be used|STM32 accepts a maximum of 2 sensors|
|heat.tempSensePins|heat.tempSensePins = { PA_3, PA_4, PA_1 }|Sets the temperature sensor pins starting with the bed|STM32 accepts a maximum of 9 entries|
|heat.thermistorSeriesResistor|heat.thermistorSeriesResistor = 4700|Sets the series resistor used for temperature sensors. The default is 4700.||
|lcd.encoderPinA|lcd.encoderPinA = BTN_EN1|Sets the pin for connection A of the encoder||
|lcd.encoderPinB|lcd.encoderPinB = BTN_EN2|Sets the pin for connection B of the encoder||
|lcd.encoderPinSw|lcd.encoderPinSw = BTN_ENC|Sets the pin to be used for the encoder click||
|lcd.lcdBeepPin|lcd.lcdBeepPin = BEEP|Sets the pin to be used to control the display beeper||
|lcd.lcdCSPin|lcd.lcdCSPin = LCD_EN|Sets the LCD chip select pin||
|lcd.lcdDCPin|lcd.lcdDCPin = LCD_RS|Sets the data control pin (A0)||
|lcd.panelButtonPin|lcd.panelButtonPin = PD_4|For use when a connected display has an extra button||
|lcd.spiChannel|lcd.spiChannel = 255|This selects which SPI channel is used to communicate with the LCD. Can be set to 255 to indicate no channel to be used|STM32H7 has nine SPI interfaces (0, 1, 2, 6, 7 and 8 are hardware and 3, 4 and 5 are software)
|led.neopixelPin|led.neopixelPin = PB_11|This sets the output pin for neopixel control|no longer needed with the new way of programming neopixels|
|leds.activity|leds.activity = PA_13 |This sets the pin for the CAN-FD activity LED||
|leds.activityOn|leds.activityOn = 1|This sets the polarity of the activity LED and is a boolean value||
|leds.diagnostic|leds.diagnostic = PA_13|This would set the correct pin for controlling a diagnostic LED||
|leds.diagnosticOn|leds.diagnosticOn = 1|This sets the polarity of the diagnostic LED and is a boolean value||
|pins.SetHigh|pins.SetHigh = { PA_3, PA_4, PA_1 }|This would set all the named pins as a high output on boot. It accepts up to 16 values||
|pins.SetLow|pins.SetLow = { PA_3, PA_4, PA_1 }|This would set all the named pins as a low output on boot. Can be used for making sure that CS pins are in a safe state. It accepts up to 16 values||
|power.VInDetectPin|power.VInDetectPin = PC_3|Sets the pin to use for voltage monitoring||
|power.voltage|power.voltage = 24|Sets a voltage when no voltage monitoring is present on the board||
|sbc.csPin|sbc.csPin = PE_12|Allow use of non standard CS pin||
|sbc.loadConfig|sbc.loadConfig = 1|Load the board.txt from the SBC if board.txt is present on an SD card in the STM32 board||
|sbc.sbcMode|sbc.sbcMode=1|Put the firmware into SBC mode.||
|sbc.spiChannel|sbc.spiChannel = 1|This allows the SPI channel to be set that is used for SBC. The default is 1. It can only be set to channel 1 (SPI2) or channel 2 (SPI3).||
|sbc.TfrReadyPin|sbc.TfrReadyPin = C.14|This sets the transfer ready pin when attaching an SBC||
|sdCard.external.cardDetectPin|sdCard.external.cardDetectPin = LCD_CD|Sets the external SD card detect pin||
|sdCard.external.csPin|sdCard.external.csPin = PA_0|Sets the external SD card chip select pin||
|sdCard.external.spiChannel|sdCard.external.spiChannel = 255|this selects which one is used for the external SD card, can also be set to 255 to indicate no channel is used||
|sdCard.external.spiFrequencyHz|sdCard.external.spiFrequencyHz = 4000000|Sets the SPI speed for an external SD card in Hz||
|sdCard.internal.spiFrequencyHz|sdCard.internal.spiFrequencyHz = 4000000|Sets the SPI speed for the internal SD card in Hz||
|sdCard.internal.type|sdCard.internal.type = 0|This sets the SD card type on the board. 0 = SD_SPI1_A, 1 = SD_SPI1_B, 2 = SD_SDIO, 3 = SD_SPI3_A, 4 = SD_SPI3_B, 5 = SD_SPI2_A, 254 = SD_UNKNOWN and 255 = SD_NONE||
|serial.aux.rxTxPins|serial.aux.rxTxPins = { PA_10, PA_9 }|This sets the pin numbers to use for RX and TX on AUX1. See table below for allowable RX and TX pins||
|serial.aux2.rxTxPins|serial.aux2.rxTxPins = { PC_7, PC_6 }|This sets the pin numbers to use for RX and TX on AUX2. See table below for allowable RX and TX pins||
|SPI0.pins|SPI0.pins = { PA_5, PA_6, PA_7 }|Sets the SPI pins in the order SCK, MISO, MOSI for Channel 0|Hardware|
|SPI1.pins|SPI1.pins = { PA_5, PA_6, PA_7 }|Sets the SPI pins in the order SCK, MISO, MOSI for Channel 1|Hardware|
|SPI2.pins|SPI2.pins = { PA_5, PA_6, PA_7 }|Sets the SPI pins in the order SCK, MISO, MOSI for Channel 2|Hardware|
|SPI3.pins|SPI3.pins = { PA_5, PA_6, PA_7 }|Sets the SPI pins in the order SCK, MISO, MOSI for Channel 3|Software|
|SPI4.pins|SPI4.pins = { PA_5, PA_6, PA_7 }|Sets the SPI pins in the order SCK, MISO, MOSI for Channel 4|Software|
|SPI5.pins|SPI5.pins = { PA_5, PA_6, PA_7 }|Sets the SPI pins in the order SCK, MISO, MOSI for Channel 5|Software|
|SPI6.pins|SPI6.pins = { PA_5, PA_6, PA_7 }|Sets the SPI pins in the order SCK, MISO, MOSI for Channel 6|Hardware|
|SPI7.pins|SPI7.pins = { PA_5, PA_6, PA_7 }|Sets the SPI pins in the order SCK, MISO, MOSI for Channel 7|Hardware|
|SPI8.pins|SPI8.pins = { PA_5, PA_6, PA_7 }|Sets the SPI pins in the order SCK, MISO, MOSI for Channel 8|Hardware|
|stepper.directionPins|stepper.directionPins = { PD_3, PA_8, PE_3, PD_14, PD_10 }|Sets the driver direction pins in the order 0, 1, 2, 3 and so on|STM32 supports a maximum of 11 drivers|
|stepper.DriverType|stepper.DriverType = {Tmc2208, Tmc2240, tmc2209, tmc5160, stepdir}|This sets of the type of driver in each slot and is an array||
|stepper.enablePins|stepper.enablePins = { PD_6, PD_1, PE_0, PC_7, PD_13 }|Sets the driver enable pins in the order 0, 1, 2, 3 and so on|STM32 supports a maximum of 11 drivers|
|stepper.numSmartDrivers|stepper.numSmartDrivers = 3|Sets the number of TMC22XX drivers installed between 1 and 11. Drivers must be installed from drive 0 after 5160 drivers||
|stepper.num5160Drivers|stepper.num5160Drivers = 3|Sets the number of TMC22XX drivers installed between 1 and 11. Drivers must be installed from drive 0 before 22XX drivers||
|stepper.spiChannel|stepper.spiChannel = 3|Sets the SPI channel to use for 5160 drivers||
|stepper.stepPins|stepper.stepPins = { PD_4, PA_15, PE_2, PD_15, PD_11 }|Sets the driver step pins in the order 0, 1, 2, 3 and so on|STM32 supports a maximum of 11 drivers|
|stepper.TmcDiagPins|stepper.TmcDiagPins = { PC_1, PC_3, PC_0, PC_2, PA_0 }|Sets the stall detection diag pins. Typically same pin as the endstop pin||
|stepper.TmcUartPins|stepper.TmcUartPins = { PD_5, PD_0, PE_1, PC_6, PD_12 }|Sets the pin numbers used for communications with TMC22XX drivers using a UART interface|STM32 supports a maximum of 11 drivers|

<div class="datatable-end"></div>

## SPI Useable Pins - STM32H7 Based Boards

STM32H7 has 6 hardware SPI peripherals. Each one has a choice of pins for SCK, MISO and MOSI. You can mix and match pins for the same SPI peripheral, e.g. SPI1 could use PA_5 for SCK, PB_4 for MISO and PD_7 for MOSI.  
This maps onto the SPI0 to SPI8 channels used by board.txt (see the SPIn.pins items above) as follows: hardware SPI1 to SPI3 correspond to SPI0 to SPI2 in board.txt, and hardware SPI4 to SPI6 correspond to SPI6 to SPI8 in board.txt. SPI3, SPI4 and SPI5 in board.txt are software (bit-banged) channels and are not tied to one of these hardware peripherals, so any pin can be used for them.  

<div class="datatable-begin"></div>

|SPI Peripheral|SCK|MISO|MOSI|
| :------------- |:-------------|:-------------|:-------------|
|SPI1|PA_5, PB_3, PG_11|PA_6, PB_4, PG_9|PA_7, PB_5, PD_7|
|SPI2|PA_9, PA_12, PB_10, PB_13, PD_3|PB_14, PC_2|PB_15, PC_1, PC_3|
|SPI3|PB_3, PC_10|PB_4, PC_11|PB_2, PB_5, PC_12, PD_6|
|SPI4|PE_2, PE_12|PE_5, PE_13|PE_6, PE_14|
|SPI5|PF_7|PF_8|PF_9, PF_11|
|SPI6|PA_5, PB_3, PG_13|PA_6, PB_4, PG_12|PA_7, PB_5, PG_14|

<div class="datatable-end"></div>

## UART Useable Pins - STM32H7 Based Boards

There are 8 UARTS and each can use a selection of pins. You can mix and match pins in the same UART number e.g. PD_2 and PC_12.  

<div class="datatable-begin"></div>

|Pin Number|UART Number|RX/TX|
| :------------- |:-------------|:-------------|
|PA_0| UART4|TX|
|PA_2| UART2|TX|
|PA_9| UART1|TX|
|PA_12| UART4|TX|
|PA_15| UART7|TX|
|PB_4| UART7|TX|
|PB_6| UART5|TX|
|PB_6| UART1|TX|
|PB_9| UART4|TX|
|PB_10| UART3|TX|
|PB_13| UART5|TX|
|PB_14| UART1|TX|
|PC_6| UART6|TX|
|PC_10| UART4|TX|
|PC_10| UART3|TX|
|PC_12| UART5|TX|
|PD_1| UART4|TX|
|PD_5| UART2|TX|
|PD_8| UART3|TX|
|PE_1| UART8|TX|
|PE_8| UART7|TX|
|PF_7| UART7|TX|
|PG_14| UART6|TX|
|PA_1| UART4|RX|
|PA_3| UART2|RX|
|PA_8| UART7|RX|
|PA_10| UART1|RX|
|PA_11| UART4|RX|
|PB_3| UART7|RX|
|PB_5| UART5|RX|
|PB_7| UART1|RX|
|PB_8| UART4|RX|
|PB_11| UART3|RX|
|PB_12| UART5|RX|
|PB_15| UART1|RX|
|PC_7| UART6|RX|
|PC_11| UART4|RX|
|PC_11| UART3|RX|
|PD_0| UART4|RX|
|PD_2| UART5|RX|
|PD_6| UART2|RX|
|PD_9| UART3|RX|
|PE_0| UART8|RX|
|PE_7| UART7|RX|
|PF_6| UART7|RX|
|PG_9| UART6|RX|

<div class="datatable-end"></div>
