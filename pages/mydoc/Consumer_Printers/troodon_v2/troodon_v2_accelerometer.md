---
title: Connecting an accelerometer to a Troodon V2 Printer
tags: []
keywords: 
last_updated: 06/01/2023
summary: "How to connect an accelerometer to a Troodon V2 Printer"
sidebar: mydoc_sidebar
permalink: troodon_v2_accelerometer.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Troodon V2 Printer
SCL: PB_13
SDA: PB_15
SDO: PB_14
CS: PB_12
int: PD_10
spiChannel: 1
location: EXP2 header
---

{% include warning.html content="The accelerometer can't be used in conjunction with the 12864 screen. Before connection the accelerometer, remove the 12864 screen from the EXP1 and EXP2 headers and comment out the associated lines in board.txt using //" %}

{% include warning.html content="If you haven't followed the instructions to change board.txt so the board is using the natively supported pin assigmed as detailed [here](troodon_v2_firmware_adjustment.html) then please use accelerometer.spiChannel = 5 instead" %}

{% include custom/accelerometer.html %}