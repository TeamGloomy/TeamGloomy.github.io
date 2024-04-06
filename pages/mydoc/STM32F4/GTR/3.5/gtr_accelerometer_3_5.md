---
title: Connecting an accelerometer to a GTR in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 03/04/2024
summary: "How to connect an accelerometer to a GTR"
sidebar: mydoc_sidebar
permalink: gtr_accelerometer_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: GTR
SCL: PH_13
SDA: PI_9
SDO: PI_8
CS: PH_8
int: PH_7
spiChannel: 4
location:  Extension header 0, 1 and 2
---

{% include important.html content="The SPI channel used below assumes that you do not use the thermocouple connection. If you use the thermocouple, you will have to setup the accelerometer to use a different SPI channel." %}

{% include custom/3.5/accelerometer.html %}
