---
title: Troodon V2 Printer Setting Z Offsets
tags: []
keywords: 
last_updated: 07/01/2023
summary: "Setting the Z Offsets for the Probe and AutoZ on a Troodon V2 Printer before printing"
sidebar: mydoc_sidebar
permalink: troodon_v2_zoffsets.html
folder: mydoc
comments: false
toc: true
datatable: true
---

## Overview

This page assumes you have successfully been able to connect your Troodon V2 Printer to your WiFi network and navigate to DWC (Duet Web Control). A manual that explains the different functions and interfaces of DWC can be found [here](https://docs.duet3d.com/en/User_manual/Reference/Duet_Web_Control_Manual) and is a beneficial read if you a new to RepRapFirmware.  
If you have been unable to do so, please follow the instructions [here](troodon_v2_connected_wifi_esp32.html).  

### Adjusting the Z Probe Offset Troodon V2 Method

This is following the method described in the Troodon V2 "Start Guide" PDF.  

First home the printer, this can be done by either sending `G28` or by using the homeall button on the "Dashboard" tab or DWC.  
Then run gantry levelling. If you aren't running our [improved bed file](troodon_v2_improved_bed.html) then please run the gantry levelling 2 or 3 times. It can be ran by sending `G32` or by clicking on "Compensation & Calibration" and then "True Bed Levelling (G32)" on the "Dashboard" tab of DWC.  
{% include image.html file="g32.png" alt="Running G32" caption="Running G32" %}  
Now jog the nozzle towards the bed until it is gently gripping a piece of paper. Take note of the Z height being shown in DWC.  
{% include image.html file="troodon_v2_probe_height.png" alt="Noting the Z Height" caption="Noting the Z Height" %}  
Then subtract the displayed Z Height from a base value of `3`. For example, if the value displayed in DWC is `1.5`, then `3-1.5=1.5`. Click on the "Z offset" folder in the macros section of DWC.  
{% include image.html file="troodon_v2_zoffset_folder.png" alt="Z Offset Macros" caption="Z Offset Macros" %}  
Find the macro for the calculated value and execute it.  

### Adjusting the Z Probe Offset the Improved Way

This method is based on using a macro that duet forum member OwenD wrote for calibrating the BLTouch. Create a new macro, call it "probe trigger height" and paste the following lines into it.  
```
var ProbeSpeedHigh = sensors.probes[0].speeds[0] ; save currently configured speed for fast probe
var ProbeSpeedLow = sensors.probes[0].speeds[1] ; save currently configured speed for slow probe

M558 F60 ; reduce probe speed to 60mm/min for accuracy - adjust F parameter as required

;define some variables to store readings

var NumTests=10 ; modify this value to define number of tests

; Do not change below this line
var RunningTotal=0
var Average=0
var Lowest=0
var Highest=0

; If the printer hasn't been homed, home it
if !move.axes[0].homed || !move.axes[1].homed || !move.axes[2].homed
  G28
else
	G1 Z{sensors.probes[0].diveHeight} F360 ; if axes homed move to dive height

M561 ; clear any bed transform

M290 R0 S0 ; clear babystepping

; move nozzle to centre of bed
G1 X{(move.axes[0].min + move.axes[0].max)/2} Y{(move.axes[1].min + move.axes[1].max)/2} F3600

M564 S0 H0 ; Allow movement beyond limits

;ensure you have room for the probe
if move.axes[2].machinePosition < sensors.probes[0].diveHeight
	G1 Z{sensors.probes[0].diveHeight}

; Jog head to position
M291 P"Jog nozzle to touch bed" R"Set nozzle to zero" S3 Z1

G92 Z0 ; set Z position to zero
M291 P"Press OK to begin" R"Ready?" S3;

; Move probe over top of same point that nozzle was when zero was set
G1 Z{sensors.probes[0].diveHeight}; lift head
G1 X{move.axes[0].machinePosition - sensors.probes[0].offsets[0]} Y{move.axes[1].machinePosition - sensors.probes[0].offsets[1]} F1800

echo "Current probe offset = " ^ sensors.probes[0].triggerHeight ^ "mm"

; carry out 10 probes (or what is set in NumTests variable)

while iterations < var.NumTests
	G1 Z{sensors.probes[0].diveHeight} ; move to dive height
	G30 S-1
	M118 P2 S{"Test # " ^ (iterations+1) ^ " Triggered @ " ^ move.axes[2].machinePosition ^ "mm"} ; send trigger height to Paneldue console
	M118 P3 S{"Test # " ^ (iterations+1) ^ " Triggered @ " ^ move.axes[2].machinePosition ^ "mm"} ; send trigger height to DWC console

	if iterations == 0
		set var.Lowest={move.axes[2].machinePosition} ; set the new lowest reading to first probe height
		set var.Highest={move.axes[2].machinePosition} ; set the new highest reading to first probe height

	if move.axes[2].machinePosition < var.Lowest
		set var.Lowest={move.axes[2].machinePosition} ; set the new lowest reading
		;M118 P3 S{"new low reading = " ^ move.axes[2].machinePosition} ; send trigger height to DWC console
		G4 S0.3
	if move.axes[2].machinePosition > var.Highest
		set var.Highest={move.axes[2].machinePosition} ; set the new highest reading

		;M118 P3 S{"new high reading = " ^ move.axes[2].machinePosition} ; send trigger height to DWC console
		G4 S0.3
	set var.RunningTotal={var.RunningTotal + move.axes[2].machinePosition} ; set new running total
	;M118 P3 S{"running total = " ^ var.RunningTotal} ; send running total to DWC console
	G4 S0.5
set var.Average = {(var.RunningTotal - var.Highest - var.Lowest) / (var.NumTests - 2)} 	; calculate the average after discarding th ehigh & low reading

;M118 P3 S{"running total = " ^ var.RunningTotal} ; send running total to DWC console
;M118 P3 S{"low reading = " ^ var.Lowest} ; send low reading to DWC console
;M118 P3 S{"high reading = " ^ var.Highest} ; send high reading to DWC console
M118 P2 S{"Average excluding high and low reading = " ^ var.Average} ; send average to PanelDue console
M118 P3 S{"Average excluding high and low reading = " ^ var.Average} ; send average to DWC console

;suggest new G31 values
echo "suggested edit for G31 in config.g if not saved to config-overide.g"
echo "change G1 Z parameter from Z" ^ sensors.probes[0].triggerHeight 
echo "to Z" ^ var.Average

G31 P500 Z{var.Average} ; set Z probe offset to the average reading
M564 S1 H1 ; Reset limits
M558 F{var.ProbeSpeedHigh}:{var.ProbeSpeedLow} ; reset probe speed to original
G1 Z{sensors.probes[0].diveHeight} F360 ; move head back to dive height

M291 P{"Trigger height set to : " ^ sensors.probes[0].triggerHeight  ^ " OK to save to config-overide.g, cancel to use until next restart"} R"Finished" S3
M500 P31 ; optionally save result to config-overide.g
```
There is no need to edit any lines from this macro, just run it. It will ask you to jog the nozzle towards the bed until it touches (using paper like the Troodon Method) and when ready, it will probe the bed 10 times and take an average reading. Clicking ok will save the value to config-override.g (which is the same as the Troodon Method) or you can edit the value in config.g (check the "Console" tab in DWC for the value to change).  

### Adjusting the AutoZ Offset Troodon V2 Method

This is following the method described in the Troodon V2 "Start Guide" PDF.  

First execute the AutoZ macro.  
{% include image.html file="troodon_v2_autoz.png" alt="Running AutoZ" caption="Running AutoZ" %}  
Now jog the nozzle towards the bed until it is gently gripping a piece of paper. Take note of the Z height being shown in DWC.  
{% include image.html file="troodon_v2_probe_height.png" alt="Noting the Z Height" caption="Noting the Z Height" %}  
Then subtract the displayed Z Height from a base value of `0.45`. For example, if the value displayed in DWC is `0.05`, then `0.45-0.05=0.40`.  
Now open the file called "config.g" in the "System" tab of DWC and edit the Z value for `G31 K1` on line 68.
Save the config.g and when prompted, restart the mainboard.  

### Adjusting the AutoZ Offset the Improved Way

{% include warning.html content="The below macro may look the same as the macro used for the Z Offset, it has been changed to suit the AutoZ endstop position and its Probe number in the firmware. Please make sure you use the contents from below." %}

This method is based on using a macro that duet forum member OwenD wrote for calibrating the BLTouch. Create a new macro, call it "autoz trigger height" and paste the following lines into it.  
```
var ProbeSpeedHigh = sensors.probes[1].speeds[0] ; save currently configured speed for fast probe
var ProbeSpeedLow = sensors.probes[1].speeds[1] ; save currently configured speed for slow probe

M558 K1 F60 ; reduce probe speed to 60mm/min for accuracy - adjust F parameter as required

;define some variables to store readings

var NumTests=10 ; modify this value to define number of tests

; Do not change below this line
var RunningTotal=0
var Average=0
var Lowest=0
var Highest=0

; If the printer hasn't been homed, home it
if !move.axes[0].homed || !move.axes[1].homed || !move.axes[2].homed
  G28
else
	G1 Z{sensors.probes[1].diveHeight} F360 ; if axes homed move to dive height

M561 ; clear any bed transform

M290 R0 S0 ; clear babystepping

; move nozzle to centre of bed
G1 X{(move.axes[0].min + move.axes[0].max)/2} Y{(move.axes[1].min + move.axes[1].max)/2} F3600

M564 S0 H0 ; Allow movement beyond limits

;ensure you have room for the probe
if move.axes[2].machinePosition < sensors.probes[1].diveHeight
	G1 Z{sensors.probes[1].diveHeight}

; Jog head to position
M291 P"Jog nozzle to touch bed" R"Set nozzle to zero" S3 Z1

G92 Z0 ; set Z position to zero
M291 P"Press OK to begin" R"Ready?" S3;

; Move probe over top of same point that nozzle was when zero was set
G1 Z{sensors.probes[1].diveHeight}; lift head
G1 X120.5 Y2 F1800

echo "Current probe offset = " ^ sensors.probes[1].triggerHeight ^ "mm"

; carry out 10 probes (or what is set in NumTests variable)

while iterations < var.NumTests
	G1 Z{sensors.probes[1].diveHeight} ; move to dive height
	G30 S-1
	M118 P2 S{"Test # " ^ (iterations+1) ^ " Triggered @ " ^ move.axes[2].machinePosition ^ "mm"} ; send trigger height to Paneldue console
	M118 P3 S{"Test # " ^ (iterations+1) ^ " Triggered @ " ^ move.axes[2].machinePosition ^ "mm"} ; send trigger height to DWC console

	if iterations == 0
		set var.Lowest={move.axes[2].machinePosition} ; set the new lowest reading to first probe height
		set var.Highest={move.axes[2].machinePosition} ; set the new highest reading to first probe height

	if move.axes[2].machinePosition < var.Lowest
		set var.Lowest={move.axes[2].machinePosition} ; set the new lowest reading
		;M118 P3 S{"new low reading = " ^ move.axes[2].machinePosition} ; send trigger height to DWC console
		G4 S0.3
	if move.axes[2].machinePosition > var.Highest
		set var.Highest={move.axes[2].machinePosition} ; set the new highest reading

		;M118 P3 S{"new high reading = " ^ move.axes[2].machinePosition} ; send trigger height to DWC console
		G4 S0.3
	set var.RunningTotal={var.RunningTotal + move.axes[2].machinePosition} ; set new running total
	;M118 P3 S{"running total = " ^ var.RunningTotal} ; send running total to DWC console
	G4 S0.5
set var.Average = {(var.RunningTotal - var.Highest - var.Lowest) / (var.NumTests - 2)} 	; calculate the average after discarding th ehigh & low reading

;M118 P3 S{"running total = " ^ var.RunningTotal} ; send running total to DWC console
;M118 P3 S{"low reading = " ^ var.Lowest} ; send low reading to DWC console
;M118 P3 S{"high reading = " ^ var.Highest} ; send high reading to DWC console
M118 P2 S{"Average excluding high and low reading = " ^ var.Average} ; send average to PanelDue console
M118 P3 S{"Average excluding high and low reading = " ^ var.Average} ; send average to DWC console

;suggest new G31 values
echo "suggested edit for G31 K1 in config.g if not saved to config-overide.g"
echo "change G1 Z parameter from Z" ^ sensors.probes[1].triggerHeight 
echo "to Z" ^ var.Average

G31 K1 P500 Z{var.Average} ; set Z probe offset to the average reading
M564 S1 H1 ; Reset limits
M558 K1 F{var.ProbeSpeedHigh}:{var.ProbeSpeedLow} ; reset probe speed to original
G1 Z{sensors.probes[1].diveHeight} F360 ; move head back to dive height

M291 P{"Trigger height set to : " ^ sensors.probes[1].triggerHeight  ^ " OK to save to config-overide.g, cancel to use until next restart"} R"Finished" S3
M500 P31 ; optionally save result to config-overide.g
```
There is no need to edit any lines from this macro, just run it. It will ask you to jog the nozzle towards the bed until it touches (using paper like the Troodon Method) and when ready, it will probe the AutoZ 10 times and take an average reading. Clicking ok will save the value to config-override.g (which is different to the Troodon Method which requires editing config.g) or you can edit the value in config.g (check the "Console" tab in DWC for the value to change).  