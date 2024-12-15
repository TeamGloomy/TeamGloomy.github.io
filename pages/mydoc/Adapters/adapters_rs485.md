---
title: Available UART to RS485 Modules
tags: []
keywords: 
last_updated: 15/12/2024
summary: "A description of the different UART to RS485 modules"
sidebar: mydoc_sidebar
permalink: adapters_rs485.html
folder: mydoc
comments: false
toc: false
---

## Overview

From RRF 3.6, it is possible to connect a UART to RS485 module to a mainboard and control a modbus/RS485 device (We will stick to calling it RS485 here, Duet3D call it modbus).
This is especially useful for CNC machines which have VFD's to control the spindles as most of them support modbus control.  

### Which Module?

We have tested four different types of modules which are available from places such as AliExpress and Amazon and it was found that three of them worked and one of them didn't.  

#### Modules to avoid

Do not buy this module....

{% include image.html file="rs485_not_to_buy.png" alt="Do Not Buy!!!" caption="Do Not Buy!!!" %}

#### Modules to buy

Now you know which one to avoid, any of the following three modules worked fine when tested by us.  

{% include image.html file="rs485_module_1.png" alt="UART to RS485 Module 1" caption="UART to RS485 Module 1" %}

{% include image.html file="rs485_module_2.png" alt="UART to RS485 Module 2" caption="UART to RS485 Module 2" %}

{% include image.html file="rs485_module_3.png" alt="UART to RS485 Module 3" caption="UART to RS485 Module 3" %}

You can buy the above from Aliexpress or [module 1](https://www.amazon.co.uk/DollaTek-Adapter-Serial-Converter-Module/dp/B07DJ4TGY3) and [module 3](https://www.amazon.co.uk/Youmile-Adapter-Module-Converter-Arduino/dp/B08BZ8274M) are available on Amazon.

### Board.txt and Config.g changes

As this uses a UART (serial) connection, you need to have one defined in board.txt. Usually you would use the header designed to attach a screen to the board. If you are using this port, depending on your board, it may be possible to use another set of pins as a second UART connection. The UART pins on an STM32F4 board are listed [here](https://teamgloomy.github.io/board_txt_stm32.html#uart-useable-pins---stm32f4-based-boards) and the UART pins on an STM32H7 board are listed [here](https://teamgloomy.github.io/board_txt_stm32.html#uart-useable-pins---stm32h7-based-boards). You would add them as `serial.aux2.rxTxPins`.  

For config.g, you need to add a single line `M575 P1 B9600 S7` where B is the UART speed of the device you are communicating with. If you use the second UART connection, you will need to change P1 to P2.

### RS485 usage

You can use RS485 in a number of ways.  

#### RS485 Write

There are two gcodes which can be used to send data to an RS485 device, [M260.1](https://docs.duet3d.com/en/User_manual/Reference/Gcodes#m2601-modbus-write-registers-or-coils) and [M260.4](https://docs.duet3d.com/en/User_manual/Reference/Gcodes#m2604-raw-modbus-transaction)

#### RS485 Read

There is a single gcode to read RS485 data, which is [M261.1](https://docs.duet3d.com/en/User_manual/Reference/Gcodes#m2611-modbus-read-registers-coils-or-inputs)
