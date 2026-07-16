---
title: BTT Scylla V1 CAN-FD Information
tags: []
keywords: 
last_updated: 15/12/2024
summary: "How to connect the BTT Scylla V1 to a CAN-FD Expansion board"
permalink: btt_scylla_v1_h723_canfd.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: BTT Scylla V1
canWireExample: "Duet 3 1LC toolboard"
canWireHColor: red
canWireLColor: black
canConnectorLocation: "the two connections on the CAN-FD screw connector"
canExtraNote: "Although the BTT Scylla V1 also provides ground on the same screw terminals, we recommend wiring the toolboard directly to the PSU."
canImage: toolboard_canfd.png
canTerminationText: "Please ensure that you have the jumper installed as shown below if you are using this board as a mainboard or if it is the last expansion board on the CANbus."
canTerminationImage: btt_scylla_v1_can_resistor.png
---

{% include custom/H7/canfd_mainboard.html %}
