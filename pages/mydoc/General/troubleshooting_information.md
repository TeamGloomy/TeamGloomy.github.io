---
title: Obtaining the correct information for troubleshooting
tags: []
keywords: 
last_updated: 27/06/2023
summary: "Obtaining information to help when troubleshooting"
sidebar: mydoc_sidebar
permalink: troubleshooting_information.html
folder: mydoc
comments: false
toc: false
---

## Overview

There are two outputs from the firmware that are useful when troubleshooting issues, which are `M122` and `M122 P200`. `M122` is a native command to RRF and works with all versions of the firmware (TeamGloomy and Duet3D) where as `M122 P200` only applies to Teamgloomy firmware versions (this **does not** include toolboard firmwares).  

### How to obtain these outputs

The "Console" tab within DWC should be used to obtain the outputs from `M122` and `M122 P200`. Either the input box at the top of DWC or the input box on the "Console" tab (both highlighted) can be used to send the command. The output should be copied and pasted **as text** when the outputs are requested on Discord.  

{% include image.html file="dwc_console.png" alt="DWC Console" caption="DWC Console" %}  

This is a typical `M122` output.  

```
=== Diagnostics ===
RepRapFirmware for STM32F4 based Boards (troodon_v2) version 3.5.0-beta.4_101 (2023-06-10 19:03:47) running on STM32F4 (standalone mode)
Board ID: X10J3-0427A-D6MUJ-6Q1FD-G62SS-70000
Used output buffers: 1 of 40 (31 max)
=== RTOS ===
Static ram: 19636
Dynamic ram: 94392 of which 32 recycled
Never used RAM 15984, free system stack 90 words
CCMRam static ram: 24276 dynamic ram: 38236 free ram 3020
Tasks: NETWORK(1,ready,158.7%,176) HEAT(3,nWait,3.8%,286) Move(4,nWait,41.9%,272) CanReceiv(4,delaying,224.7%,272) CanSender(4,nWait,12.5%,363) CanClock(4,delaying,12.8%,357) TMC22xx(4,nWait,126.9%,105) TMC51xx(4,delaying,248.2%,148) FSWRITE(2,nWait,0.0%,496) MAIN(1,running,649.5%,538) IDLE(0,ready,7.9%,29), total 1486.9%
Owned mutexes: WiFi(NETWORK) BITIO(TMC22xx)
=== Platform ===
Last reset 16:08:12 ago, cause: power on/off
Last software reset at 2023-06-23 14:14, reason: User, Gcodes spinning, available RAM 18232, slot 0
Software reset code 0x0003 HFSR 0x00000000 CFSR 0x00000000 ICSR 0x00400000 BFAR 0xe000ed38 SP 0x00000000 Task MAIN Freestk 0 n/a
Error status: 0x00
MCU temperature: min 31.6, current 42.3, max 57.7
Supply voltage: min 24.0, current 24.0, max 24.0, under voltage events: 0, over voltage events: 0, power good: yes
Heap OK, handles allocated/used 99/15, heap memory allocated/used/recyclable 2048/600/296, gc cycles 10
Events: 2 queued, 2 completed
Driver 0: standstill 5160, SG min n/a, mspos 8, reads 47009, writes 13
Driver 1: standstill 5160, SG min n/a, mspos 8, reads 47009, writes 13
Driver 2: standstill 2209, SG min 0, reads 54610, writes 9
Driver 3: standstill 2209, SG min 0, reads 54593, writes 26
Driver 4: standstill 2209, SG min 0, reads 54593, writes 26
Driver 5: standstill 2209, SG min 0, reads 54593, writes 26
Driver 6: standstill 2209, SG min 0, reads 54594, writes 25
Driver 7: 
Driver 8: 
Driver 9: 
Driver 10: 
Driver 11: 
Driver 12: 
Driver 13: 
Date/time: 2023-06-27 11:50:42
Slowest loop: 234.08ms; fastest: 0.06ms
=== Storage ===
Free file entries: 20
SD card 0 detected
SD card longest read time 19.5ms, write time 66.7ms, max retries 0
=== Move ===
DMs created 83, segments created 28, maxWait 1144196ms, bed compensation in use: none, height map offset 0.000, ebfmin 0.00, ebfmax 0.00
no step interrupt scheduled
=== DDARing 0 ===
Scheduled moves 447937, completed 447937, hiccups 0, stepErrors 0, LaErrors 0, Underruns [0, 0, 37], CDDA state -1
=== DDARing 1 ===
Scheduled moves 0, completed 0, hiccups 0, stepErrors 0, LaErrors 0, Underruns [0, 0, 0], CDDA state -1
=== Heat ===
Bed heaters 0 -1 -1 -1, chamber heaters -1 -1 -1 -1, ordering errs 0
=== GCodes ===
Movement locks held by null, null
HTTP is idle in state(s) 0
File is idle in state(s) 0
USB is idle in state(s) 0
Aux is idle in state(s) 0
Trigger is idle in state(s) 0
Queue is idle in state(s) 0
LCD is idle in state(s) 0
Daemon is idle in state(s) 0
Autopause is idle in state(s) 0
File2 is idle in state(s) 0, sync state 2
Queue2 is idle in state(s) 0
Q0 segments left 0, axes/extruders owned 0x0004007
Code queue 0 is empty
Q1 segments left 0, axes/extruders owned 0x0000000
Code queue 1 is empty
=== CAN ===
Messages queued 1770052, received 2091711, lost 0, boc 0
Longest wait 57ms for reply type 6041, peak Tx sync delay 1588 free buffers 50 (min 17), ts 290458/290457/0
Tx timeouts 0,0,0,0,0,0
=== Network ===
Slowest loop: 219.59ms; fastest: 0.00ms
Responder states: MQTT(0) HTTP(0) HTTP(0) HTTP(0) HTTP(0) FTP(0)
HTTP sessions: 2 of 8
Uploads/Errors: 2/0
= WiFi =
Interface state: active
Module is connected to access point 
Failed messages: pending 0, notready 0, noresp 0
Bad header: 0/0
Firmware version 2.1beta4-02
MAC address 30:c6:f7:ec:5d:9c
Module reset reason: Power up, Vcc 0.00, flash size 4194304, free heap 187560
WiFi IP address 192.168.1.35
Signal strength -54dBm, channel 6, mode 802.11n, reconnections 0
Clock register 00003043
Socket states: 0 0 0 0 0 0 0 0
```

And this is a typical `M122 P200` output.  
```
=== Diagnostics ===
RepRapFirmware for STM32F4 based Boards (troodon_v2) version 3.5.0-beta.4_101 running on STM32F4 at 168Mhz
Bootloader: Unknown

== Supported boards ==
Board 0.0: generic iomode 254 Signatures:
Board 1.0: biquskrpro_1.1 iomode 0 Signatures: 0x768a39d6 0x50da391 0xa79a1917
Board 2.0: biqugtr_1.0 iomode 1 Signatures: 0x94a2cc03
Board 3.0: fly_e3_pro iomode 2 Signatures: 0xd0c680ae
Board 4.0: fly_e3_prov3 iomode 2 Signatures: 0xd0c680ae
Board 5.0: fly_f407zg iomode 2 Signatures: 0x8a5f5551 0xd0c680ae
Board 6.0: fly_e3 iomode 2 Signatures: 0xd0c680ae 0xfd2146b0
Board 7.0: fly_e3_v2 iomode 2 Signatures: 0xd0c680ae
Board 8.0: fly_cdyv2 iomode 2 Signatures: 0x8a5f5551 0xd0c680ae
Board 8.1: fly_cdyv3 iomode 2 Signatures: 0x8a5f5551 0xd0c680ae
Board 9.0: fly_super8 iomode 2 Signatures: 0x8a5f5551 0xd0c680ae
Board 10.0: fly_gemini iomode 2 Signatures: 0xbfecc997
Board 11.0: fly_geminiv1.1 iomode 1 Signatures: 0x318f4fbe
Board 12.0: fly_geminiv2.0 iomode 1 Signatures: 0x318f4fbe
Board 13.0: biquskr_rrf_e3_1.1 iomode 2 Signatures: 0x94a2cc03 0xb173b733
Board 14.0: biquskr_2 iomode 2 Signatures: 0xb75b00a7 0x35f4602c
Board 15.0: biqoctopus_1.1 iomode 2 Signatures: 0x5e29d842
Board 15.1: biquoctopus_1.1 iomode 2 Signatures: 0x5e29d842
Board 16.0: biqoctopuspro_1.0 iomode 2 Signatures: 0x5e29d842
Board 16.1: biquoctopuspro_1.0 iomode 2 Signatures: 0x5e29d842
Board 17.0: biquoctopus_x7 iomode 2 Signatures: 0x5e29d842
Board 17.1: troodon_v2 iomode 2 Signatures: 0x5e29d842
Board 18.0: fysetc_spider iomode 1 Signatures: 0x8479e19e
Board 19.0: fysetc_spider_king407 iomode 1 Signatures: 0xb86f16db

== Configurable Board.txt Settings ==
board = troodon_v2  Signature 0xe826121b

leds.diagnostic = C.7
leds.diagnosticOn = true
leds.activity = NoPin
leds.activityOn = true
pins.SetHigh = {NoPin, NoPin, NoPin, NoPin, NoPin, NoPin, NoPin, NoPin}
pins.SetLow = {NoPin, NoPin, NoPin, NoPin, NoPin, NoPin, NoPin, NoPin}
stepper.powerEnablePin = NoPin
stepper.enablePins = {A.1, C.1, C.5, E.10, E.15, F.12, G.1, NoPin, NoPin, NoPin, NoPin, NoPin, NoPin, NoPin}
stepper.stepPins = {A.3, C.2, B.0, E.11, B.10, F.13, E.7, NoPin, NoPin, NoPin, NoPin, NoPin, NoPin, NoPin}
stepper.directionPins = {A.4, C.3, B.1, E.12, B.11, F.14, E.8, NoPin, NoPin, NoPin, NoPin, NoPin, NoPin, NoPin}
stepper.digipotFactor = 0.00
stepper.TmcUartPins = {A.2, C.0, C.4, E.9, E.14, F.11, G.0, NoPin, NoPin, NoPin, NoPin, NoPin, NoPin, NoPin}
stepper.numSmartDrivers = 7
stepper.num5160Drivers = 2
stepper.spiChannel = 0
stepper.csDelay = 0
stepper.TmcDiagPins = {NoPin, NoPin, NoPin, NoPin, NoPin, NoPin, NoPin, NoPin, NoPin, NoPin, NoPin, NoPin, NoPin, NoPin}
heat.tempSensePins = {A.0, F.3, NoPin, NoPin, NoPin, NoPin, NoPin, NoPin, NoPin}
heat.spiTempSensorCSPins = {NoPin, NoPin, NoPin, NoPin, NoPin, NoPin, NoPin, NoPin}
heat.spiTempSensorChannel = 255
heat.thermistorSeriesResistor = 4700.00
atx.powerPin = NoPin
atx.powerPinInverted = false
atx.initialPowerOn = true
sdCard.internal.spiFrequencyHz = 25000000
sdCard.external.csPin = NoPin
sdCard.external.cardDetectPin = NoPin
sdCard.external.spiFrequencyHz = 4000000
sdCard.external.spiChannel = 255
lcd.lcdCSPin = NoPin
lcd.lcdBeepPin = NoPin
lcd.encoderPinA = NoPin
lcd.encoderPinB = NoPin
lcd.encoderPinSw = NoPin
lcd.lcdDCPin = NoPin
lcd.panelButtonPin = NoPin
lcd.spiChannel = 255
SPI0.pins = {A.5, A.6, A.7}
SPI1.pins = {B.13, B.14, B.15}
SPI2.pins = {B.3, B.4, B.5}
SPI3.pins = {NoPin, NoPin, NoPin}
SPI4.pins = {NoPin, NoPin, NoPin}
SPI5.pins = {NoPin, NoPin, NoPin}
8266wifi.espDataReadyPin = D.0
8266wifi.lpcTfrReadyPin = D.3
8266wifi.TfrReadyPin = D.3
8266wifi.espResetPin = G.14
8266wifi.csPin = A.15
8266wifi.serialRxTxPins = {D.6, D.5}
8266wifi.spiChannel = 2
8266wifi.clockReg = 0
serial.aux.rxTxPins = {NoPin, NoPin}
led.neopixelPin = NoPin
power.VInDetectPin = NoPin
power.voltage = 24
accelerometer.spiChannel = 255
can.spiChannel = 1
can.csPin = B.12
can.spiFrequencyHz = 15000000

== Defined Pins ==
e0temp,th0 = F.3
bedtemp,tb = A.0
xstop = F.2
ystop = C.15
zstop = C.13
e0stop,e0det = C.14
probe,PS1 = F.4
pro_sw,PS = G.7
bed = D.12
e0heat = B.9
fan0,fan = B.8
fan1 = B.7
fan2 = E.5
fan3 = C.6
fan4 = E.6
BEEP = G.5
BTNENC = G.4
LCDEN = G.3
LCDRS = G.2
LCDD4 = D.15
LCDD5 = D.14
LCDD6 = D.13
LCDD7 = D.11
LCDMISO = B.14
LCDSCK = B.13
BTNEN1 = D.10
LCDSS = B.12
BTNEN2 = D.9
LCDMOSI = B.15
LCDCD = D.8
LED,STATUS = C.7
diag4 = E.13
diag5 = F.9
diag6 = F.15
SCL1 = F.1
SDA1 = F.0

== Hardware Serial ==
AUX Serial: Disabled 
WIFI Serial: UART 2

== PWM ==
0:  Pin D.12 freq 10 value 0.000000 Tim 4 chan 1
1:  Pin E.5 freq 40 value 0.000000 Tim 9 chan 1
2:  Pin C.6 freq 0 value 0.000000
3:  Pin E.6 freq 0 value 0.000000
4: 
5: 
6: 
7: 
8: 
9: 
10: 
11: 
12: 
13: 
14: 
15: 

== Attached interrupt pins ==
0: D.0
1: 
2: 
3: 
4: 
5: 
6: 
7: 
8: 
9: 
10: 
11: 
12: 
13: 
14: 
15: A.15

== MCU ==
AdcBits = 14
TS_CAL1 (30C) = 925
TS_CAL2 (110C) = 1207
V_REFINCAL (30C 3.3V) = 1489

V_REFINT raw 6010
V_REF  3.271438

T_MCU raw 3906
T_MCU cal 44.609928
T_MCU calc 35.711597

T_MCU raw (corrected) 3872
T_MCU cal (corrected) 42.212261
T_MCU calc (corrected) 32.987713
Device Id 413 Revison Id 100f CPUId r0p1 

== RAM ==
RAM start 0x20000000 end 0x2001fffc
CCMRAM start 0x10000000 end 0x1000fffc

== USB ==
Read overrun 0
```