---
title: Connecting a BLTouch to an SKR-RRF-E3
tags: []
keywords: 
last_updated: 22/04/2021
summary: "Connecting a BLTouch to an SKR-RRF-E3"
sidebar: mydoc_sidebar
permalink: skr_rrf_e3_bltouch.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Physical Connections

Connect the BLTouch to the SKR-RRF-E3 as described in the table below.  

<div class="datatable-begin"></div>

|BLTouch Wire Colour|SKR-RRF-E3 Pin|SKR-RRF-E3 Pin Name| 
|:---|:---|:---|
|Brown|GND||
|Red|5v||
|Yellow|PB0|Servo0|
|Black|GND||
|White|PC5|Probe|

<div class="datatable-end"></div>

{% include image.html file="skr_rrf_e3_bltouch.PNG" alt="SKR-RRF-E3 BLTouch" caption="SKR-RRF-E3 BLTouch Wiring" %}

### Config.g Changes

Your config.g should be modified as below.
```
M558 P9 H6 F120 T8000 C"^probe"       ; set Z probe type to bltouch and the dive height + speeds
M950 S0 C"servo0"                     ; Setup servo 0 as servo port on SKR
```

You will also need to set up your probe offset using [G31](https://duet3d.dozuki.com/Wiki/Gcode#Section_G31_Set_or_Report_Current_Probe_status) and your [mesh probing grid](https://duet3d.dozuki.com/Wiki/Gcode#Section_M557_Set_Z_probe_point_or_define_probing_grid)

## Files to Create

Create the following files. 

{% include tip.html content="If you select the BLTouch while setting up your config.g files using the Configurator, these files should be created for you. We still advise checking them tho ensure the content is correct." %}

<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a class="noCrossRef" href="#deploy" data-toggle="tab">deployprobe.g</a></li>
    <li><a class="noCrossRef" href="#retract" data-toggle="tab">retractprobe.g</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="deploy" markdown="1">

Create a file in your sys folder called
```
deployprobe.g
```
In it, paste the following code
```
M280 P0 S10
```

</div>

<div role="tabpanel" class="tab-pane" id="retract" markdown="1">

Create a file in your sys folder called
```
retractprobe.g
```
In it, paste the following code
```
M280 P0 S90
```

</div>

</div>

## Files to Modify

{% include tip.html content="If you select the BLTouch while setting up your config.g files using the Configurator, these files should be modified for you. We still advise checking them tho ensure the content is correct." %}

If you you want to use your probe as your z endstop, you need to modify your homeall.g/homedelta.g and homez.g

<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a class="noCrossRef" href="#homez" data-toggle="tab">homez.g</a></li>
    <li><a class="noCrossRef" href="#homeall" data-toggle="tab">homeall.g</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="homez" markdown="1">

For homez.g, you will have need to have something similar to this. Please modify the co-ordinates required for the centre of your bed accordingly.
```
; ################# Home Z Preparation ################

G91 															; Relative mode
G1 H2 Z5 F5000													; Lower the bed
G90																; Back to absolute positioning
G1 X0 Y0 F10000 		 										; Move to the center of the bed. Adjust to the co-ordinates required for the centre of your bed

; ################# Home Z Preparation ################

M558 F250 				 										; Set the probing speed
G30					 											; Probe a single point
M558 F30 				 										; Set a slower probing speed
G30					 											; Probe a single point
```

</div>

<div role="tabpanel" class="tab-pane" id="homeall" markdown="1">

The homeall.g should have something similar to the above or should call the homez.g file using
```
M98 P"homez.g"
```

</div>

</div>

## Testing Macros

It is suggested that you create a number of macros to allow testing of your BLTouch. These should each be created in the macros folder.  

<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a class="noCrossRef" href="#alarm" data-toggle="tab">alarm release + pin</a></li>
    <li><a class="noCrossRef" href="#pinup" data-toggle="tab">pin up</a></li>
    <li><a class="noCrossRef" href="#pindown" data-toggle="tab">pin down</a></li>
    <li><a class="noCrossRef" href="#selftest" data-toggle="tab">self-test</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="alarm" markdown="1">

Create a file in your macros folder called
```
alarm release + pin
```
In it, paste the following code
```
M280 P0 S160 ; Alarm Release and Push-Pin UP
```

</div>

<div role="tabpanel" class="tab-pane" id="pinup" markdown="1">

Create a file in your macros folder called
```
pin up
```
In it, paste the following code
```
M280 P0 S90 ; Send PWM channel 0 the s90 (angle) command
```

</div>

<div role="tabpanel" class="tab-pane" id="pindown" markdown="1">

Create a file in your macros folder called
```
pin down
```
In it, paste the following code
```
M280 P0 S10 ; Send PWM channel 0 the S10 (angle) command
```

</div>

<div role="tabpanel" class="tab-pane" id="selftest" markdown="1">

Create a file in your macros folder called
```
self-test
```
In it, paste the following code
```
M280 P0 S120 ; Send PWM channel 7 the S10 (angle) command
```
</div>

</div>

## Links to Relevant Duet3D Documentation

[Connecting a BLTouch](https://duet3d.dozuki.com/Wiki/Connecting_a_Z_probe#Section_BLTouch)  
[Troubleshooting a BLTouch](https://duet3d.dozuki.com/Wiki/BLTouch_Troubleshooting)


## Marlin Fast Probe

There is a guide to replicating Marlins Fast Probe feature [here](https://forum.duet3d.com/topic/14544/guide-to-marlin-s-fast-bltouch-probing-feature-on-duet).