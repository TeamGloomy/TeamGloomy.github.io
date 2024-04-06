---
title: SKR Pro v1.2 Pin Names in Firmware in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 03/04/2024
summary: "The pin names of the SKR Pro v1.2 in the firmware"
sidebar: mydoc_sidebar
permalink: skr_pro_1.2_pins_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
---

{% include warning.html content="The SKR Pro v1.2 sensorless homing jumpers don't do anything so if you don't want to use sensorless homing and use normal endstops, you will have to remove the diag pin from your drivers - [Evidence](https://github.com/bigtreetech/BIGTREETECH-GTR-V1.0/issues/12)" %}

## SKR Pro v1.2 Pinout Diagram

{% include image.html file="skr_pro_1.2.png" url="https://teamgloomy.github.io/images/skr_pro_1.2.png" alt="SKR Pro v1.2" caption="SKR Pro v1.2 Pinout" %}

### Known Errors

* On the UART connector 3.3V is actually 5V
* On th I2C connector 3.3V is actually 5V

## SKR Pro v1.2 Driver Pins in Firmware

Driver pin numbers. They are separated into driver number.

<div class="datatable-begin"></div>

|Pin Type|0|1|2|3|4|5|
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|:-----|
|Enable Pins|PF_2|PD_7|PC_0|PC_3|PA_3|PF_0|
|Step Pins|PE_9|PE_11|PE_13|PE_14|PD_15|PD_13|
|Direction Pins|PF_1|PE_8|PC_2|PA_0|PE_7|PG_9|
|UART Pins|PC_13|PE_3|PE_1|PD_4|PD_1|PD_6|

<div class="datatable-end"></div>

## SKR Pro v1.1 and v1.2 Other Pins in Firmware

If more than one pin name is availble, either name can be used in the firmware (config.g).  
If the pins aren't in the table (due to not having a special name), then the pin itself can be used in the form of PA0, PA.0, PA_0, A0, A.0 or A_0.  

<div class="datatable-begin"></div>

|Pin Number|Pin Name 1|Pin Name 2|PWM Hardware Timer|
| :------------- |:-------------|:-------------|:-------------|
|PA_1| servo0||Timer 2|
|PA_2| probe||Timer 2|
|PA_8|BTNENC|||
|PA_15| X-CS||Timer 2|
|PB_0| e2heat|he2|Timer 3|
|PB_1| e0heat|he0|Timer 3|
|PB_10| xstop|x-stop|Timer 2|
|PB_12|LCD_SS||Timer 2|
|PB_13|LCD_SCK|||
|PB_14|LCD_MISO||Timer 12|
|PB_15|LCD_MOSI||Timer 8|
|PB_3| E0-CS||Timer 2|
|PB_8| Y-CS||Timer 10|
|PB_9| Z-CS||Timer 11|
|PC_6| wifi4||Timer 8|
|PC_7| wifi3||Timer 3|
|PC_8| fan0|fan|Timer 8|
|PD_10|LCD_RS|||
|PD_11|LCD_EN|||
|PD_12| bed|hbed|Timer 4|
|PD_14| e1heat|he1|Timer 4|
|PE_10| e1stop|e1det||
|PE_12| ystop|y-stop||
|PE_15| e0stop|e0det||
|PE_5| fan1||Timer 9|
|PE_6| fan2||Timer 9|
|PF_11|BTN_EN2|||
|PF_12|LCD_CD|||
|PF_13|KILL|||
|PF_14| wifi5|||
|PF_15| wifi6|||
|PF_3| e0temp|t0||
|PF_4| e1temp|t1||
|PF_5| e2temp|t2||
|PF_6| bedtemp|t3|Timer 10|
|PG_0| wifi1|||
|PG_1| wifi2|||
|PG_10|BTN_EN1|||
|PG_12| E2-CS|||
|PG_15| E1-CS|||
|PG_2|LCD_D4|||
|PG_3|LCD_D5|||
|PG_4| BEEP|||
|PG_5| e2stop|e2det||
|PG_6|LCD_D6|||
|PG_7|LCD_D7|||
|PG_8| zstop|z-stop||

<div class="datatable-end"></div>

## Configured SPI connections

The below SPI channels are preconfigured in the firmware.  
Where NoPin is present, then that pin is not configured by default.  

<div class="datatable-begin"></div>

|SPI Channel| CLK | MISO | MOSI | Hardware or Software | Use |
| :------------- |:-------------|:-------------|:-------------|:-------------|:-------------|
|0|PA_5|PA_6|PA_7|Hardware| SD Card |
|1|PB_13|PB_14|PB_15|Hardware| WiFi |
|2|PC_10|PC_11|PC_12|Hardware| Drivers and Accelerometer |
|3|PG_14|PC_1|PF_7|Software| Screen |
|4|NoPin|NoPin|NoPin|Software||
|5|NoPin|NoPin|NoPin|Software||

<div class="datatable-end"></div>
