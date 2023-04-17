---
title: Stealthburner with Stock Extruder
tags: []
keywords: 
last_updated: 06/01/2023
summary: "Installing a Stealthburner Without CW2"
sidebar: mydoc_sidebar
permalink: troodon_v2_stealthburner_no_cw2.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The part cooling capability of an afterburner isn't great. It is however simple to swap from an afterburner to a stealthburner without swapping the extruder.  
Please note there are no free pins to run the neopixels.  

### Printed Parts Required

Here is a list of the printed parts required.  
* [Stealthburner main body](https://github.com/VoronDesign/Voron-Stealthburner/blob/main/STLs/Stealthburner/%5Ba%5D_stealthburner_main_body.stl)
* [Stealthburner printhead v6 front](https://github.com/VoronDesign/Voron-Stealthburner/blob/main/STLs/Stealthburner/Printheads/revo_six_and_v6/stealthburner_printhead_v6_r6_front.stl)
* [Stealthburner printhead v6 rear](https://github.com/VoronDesign/Voron-Stealthburner/blob/main/STLs/Stealthburner/Printheads/revo_six_and_v6/stealthburner_printhead_v6_r6_rear_cw2.stl)

### Purchased Parts Required

Here is a list of purchased parts required. 
* 2 x M3x4x5 voron spec heat set inserts.  
* 2 x M3x50 Socket Head Cap Screws
* 1 x 5015 24v fan. Recommended brands are Delta (BFB0524HH), Mechatronics (B5015E24B) and GDSTime (GDB5015) in that order.  
* 2 x M3x6 Flat Head Countersunk Screw

## Installation

Remove the 2 x M3x8 Screws securing the PCB cover in place and put both the cover and the screws to one side.  
{% include image.html file="troodon_v2_bearing_1.jpg" alt="SB 1" caption="Stealthburner Only Installation 1" %}
Remove the 2 x M3x12 Screws and 2 x M3x30 Screws securing the fan cover in place. Disconnect the fans, making note of which fan goes where.  
{% include image.html file="troodon_v2_bearing_2.jpg" alt="SB 1" caption="Stealthburner Only Installation 1" %}
Remove the 2 x M3x16 Screws that secure the two halves of the part cooling housing together as these are required later on.
Disconnect the hotend heater and thermistor from the toolhead PCB.  
Remove the 2 x M3x40 Screws securing the printhead to the carriage and remove the printhead.  
Remove the V6 from the printhead by removing the 2 x M3x20 Screws. Keep the screws as they will be needed during assembly.  

Follow the [Stealthburner Manual](https://github.com/VoronDesign/Voron-Stealthburner/blob/main/Manual/Assembly_Manual_SB.pdf) from page 35 to page 56 and then again from page 65 to page 66. Remeber to plug the hotend, thermistor and 2 fans back in.
Install the PCB Cover using 2 x M3x8 Screws.  