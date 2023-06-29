---
title: Stealthburner with Clockwork2
tags: []
keywords: 
last_updated: 29/06/2023
summary: "Installing a Stealthburner with a Clockwork2"
sidebar: mydoc_sidebar
permalink: troodon_v2_stealthburner_with_cw2.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The part cooling capability of an afterburner isn't great. It is however simple to swap from an afterburner to a stealthburner without swapping the extruder.  
Please note there are no free pins to run the neopixels.  

{% include warning.html content="Formbot now sell a [Stealthburner Kit](https://www.formbot3d.com/collections/troodon-20) specifically for the Troodon V2 which includes everything required."%}  

{% include warning.html content="Please ensure that power has been removed from the printer, otherwise you risk damaging yourself and/or the printer"%}  

### Printed Parts Required

Here is a list of the printed parts required.  
* [Stealthburner main body](https://github.com/VoronDesign/Voron-Stealthburner/blob/main/STLs/Stealthburner/%5Ba%5D_stealthburner_main_body.stl)
* [Stealthburner printhead v6 front](https://github.com/VoronDesign/Voron-Stealthburner/blob/main/STLs/Stealthburner/Printheads/revo_six_and_v6/stealthburner_printhead_v6_r6_front.stl)
* [Stealthburner printhead v6 rear](https://github.com/VoronDesign/Voron-Stealthburner/blob/main/STLs/Stealthburner/Printheads/revo_six_and_v6/stealthburner_printhead_v6_r6_rear_cw2.stl)
* [All clockwork 2 parts except the [a]_pcb_spacer and cable_door_for_pcb](https://github.com/VoronDesign/Voron-Stealthburner/tree/main/STLs/Clockwork2) - Choose the chain_anchor_3hole.stl
* [probe_bracket.stl](https://github.com/VoronDesign/Voron-Stealthburner/blob/main/STLs/X_Carriage/probe_bracket.stl)
* [x_frame_V2TR_MGN12_left.stl](https://github.com/VoronDesign/Voron-Stealthburner/blob/main/STLs/X_Carriage/x_frame_V2TR_MGN12_left.stl)
* [x_frame_V2TR_MGN12_right.stl](https://github.com/VoronDesign/Voron-Stealthburner/blob/main/STLs/X_Carriage/x_frame_V2TR_MGN12_right.stl)
* [pcb_spacer.stl](https://github.com/TeamGloomy/Troodon-V2/blob/improved/STL_Files/Stealthburner/Clockwork2/%5Ba%5D_pcb_spacer.stl)
* [cable_door_for_pcb.stl](https://github.com/TeamGloomy/Troodon-V2/blob/improved/STL_Files/Stealthburner/Clockwork2/cable_door_for_pcb.stl)

### Purchased Parts Required

It is suggested that you purchase a hardware kit for the Stealthburner, such as [this one](https://www.aliexpress.com/item/1005003759688905.html).  

## Installation

{% include note.html content="Pictures are taken on the bench as I have already upgraded my machine. Some parts photographed may not be original."%}  

Remove the 2 x M3x8 Screws securing the PCB cover in place and put both the cover and the screws to one side.  
{% include image.html file="troodon_v2_bearing_1.jpg" alt="SB 1" caption="Stealthburner Installation 1" %}  
Remove the 2 x M3x12 Screws and 2 x M3x30 Screws securing the fan cover in place. Disconnect the fans.  
{% include image.html file="troodon_v2_bearing_2.jpg" alt="SB 2" caption="Stealthburner Installation 2" %}  
Remove and keep the 40mm hotend cooling fan (if not part of purchased parts) for installation in the Stealthburner.  
Disconnect everything else from the toolhead PCB. Disconnect the toolhead PCB from the cable chain and put to one side for reinstallation.  
Remove the 2 x M3x40 Screws securing the printhead to the carriage and remove the printhead. 
{% include image.html file="troodon_v2_fan_screws_2.jpg" alt="SB 3" caption="Stealthburner Installation 3" %}   
Remove the V6 from the printhead by removing the 2 x M3x20 Screws. Keep the screws as they will be needed during assembly.  
{% include image.html file="troodon_v2_fan_screws_3.jpg" alt="SB 4" caption="Stealthburner Installation 4" %}   
Remove the screws securing the cable chain to the rear of the motor. Also remove the cable tie securing the cable chain in place.  

Lift the cable chain out of the way and remove the 2 M3x20 screws securing the extruder in place. Lift the motor up to remove it.  
{% include image.html file="troodon_v2_extruder_screws.jpg" alt="SB 5" caption="Stealthburner Installation 5" %}  
Remove the M3x20 securing the latch in place. Remove the latch.  
{% include image.html file="troodon_v2_bearing_3.jpg" alt="SB 6" caption="Stealthburner Installation 6" %}
Remove the M3x30 securing the guider in place. Remove the guider.  
{% include image.html file="troodon_v2_bearing_4.jpg" alt="SB 7" caption="Stealthburner Installation 7" %}
Remove the 2 x M3x30 securing the main body in place. Remove the main body and the drive gear. The MR85 from the motor plate may come away with the drive shaft (which is fine).  
{% include image.html file="troodon_v2_bearing_5.jpg" alt="SB 8" caption="Stealthburner Installation 8" %}
Remove the BMG type gear from the guider by pushing out the pin. It is suggested that you use the drive shaft and gears from the Troodon V2 as they are hardened, rather than what you get in the kit.  
{% include image.html file="troodon_v2_guider_gear.jpg" alt="SB 9" caption="Stealthburner Installation 9" %}  
Remove the 2 x M3 screws securing the probe in place and remove the probe from the carriage.  
Remove the 2 x M3 screws holding the carriage together.  
{% include image.html file="troodon_v2_carriage_screws_1.jpg" alt="SB 10" caption="Stealthburner Installation 10" %}  
Remove the 4 x M3 screws securing the carriage to the rail and remove the 2 carriage pieces, separating them from the belts.  
{% include image.html file="troodon_v2_carriage_screws_2.jpg" alt="SB 11" caption="Stealthburner Installation 11" %}  
Slacken the belt tighteners so 1 thread is showing in preparation for assembly.  
{% include image.html file="troodon_v2_belts.jpg" alt="SB 12" caption="Stealthburner Installation 12" %}  

## Assembly

Follow the [Stealthburner Manual](https://github.com/VoronDesign/Voron-Stealthburner/blob/main/Manual/Assembly_Manual_SB.pdf) for assembly instructions.  
Tighten the belts as detailed [here](https://docs.vorondesign.com/tuning/secondary_printer_tuning.html#belt-tension)  