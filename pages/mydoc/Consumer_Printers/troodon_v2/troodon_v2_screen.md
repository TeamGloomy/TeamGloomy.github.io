---
title: Connecting a screen to a Troodon V2 Printer
tags: []
keywords: 
last_updated: 06/01/2023
summary: "How to connect a serial screen to a Troodon V2 Printer"
sidebar: mydoc_sidebar
permalink: troodon_v2_screen.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Troodon V2 Printer
RXTX: "{ D.9, D.8 }"
12864url: "/troodon_v2_screen_12864.html"
screenType: both
---

{% include warning.html content="The accelerometer can't be used in conjunction with the 12864 screen. Before connection the accelerometer, remove the 12864 screen from the EXP1 and EXP2 headers and comment out the associated lines in board.txt using //" %}

The serial connections can be found on the EXP2 Header.  

{% include custom/screens.html %}