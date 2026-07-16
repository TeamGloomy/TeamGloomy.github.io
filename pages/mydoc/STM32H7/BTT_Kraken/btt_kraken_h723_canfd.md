---
title: BTT Kraken CAN-FD Information
tags: []
keywords: 
last_updated: 06/04/2024
summary: "How to connect the BTT Kraken to a CAN-FD Expansion board"
permalink: btt_kraken_h723_canfd.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: BTT Kraken
canWireExample: "Duet 3 1LC toolboard"
canWireHColor: red
canWireLColor: black
canConnectorLocation: "the middle two connections on the CAN-FD connector"
canExtraNote: "Although the BTT Kraken also provides ground and 24v on that same 6 pin JST connector, we recommend wiring the toolboard directly to the PSU."
canImage: toolboard_canfd.png
canTerminationText: "Please ensure that you have the jumper installed as shown below if you are using this board as a mainboard or if it is the last expansion board on the CANbus."
canTerminationImage: btt_kraken_can_resistor.png
---

{% include custom/H7/canfd_mainboard.html %}
