---
title: Useful Macros
tags: []
keywords: 
last_updated: 04/01/2023
summary: "Useful Macros for RRF"
sidebar: mydoc_sidebar
permalink: useful_macros.html
folder: mydoc
comments: false
toc: false
---

Here are some example macros

<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a class="noCrossRef" href="#g32" data-toggle="tab">bed.g file for G32</a></li>
    <li><a class="noCrossRef" href="#bedmanual" data-toggle="tab">Manual Bed Levelling</a></li>
    <li><a class="noCrossRef" href="#stop" data-toggle="tab">Example stop.g</a></li>
    <li><a class="noCrossRef" href="#bltouch" data-toggle="tab">Calibrating a BLTouch Trigger Height</a></li>
	<li><a class="noCrossRef" href="#fysetc" data-toggle="tab">Fysetc Mini Neopixels</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="g32" markdown="1">

## Bed.g file for G32

Here is a sample bed levelling file to be used with G32. Both of these files are to be placed in the sys folder.

M671 declares the centre of the attachment point for the bed or gantry being levelled. This could be a leadscrew if the gantry or bed is rigidly attached or it could be the pivot point or kinematic mounting point if movement is allowed.

bed_points.g should be edited with the probe locations you want to use. The probing order should match the order of the pivot point locations mapped in M671 and the order the Z motors are declared in M584.  

```text
; call this bed_points.g
G30 P0 X0 Y130 Z-99999         	; Probe near front left pivot point - comment out this line if using 3 pivot points on the z axis
G30 P1 X230 Y130 Z-99999 S2     ; Probe near front right pivot point - comment out this line if using 3 pivot points on the z axis
; G30 P0 X10 Y10 Z-99999        ; Probe near front left pivot point - uncomment this lines for 3 pivot points on the Z axis
; G30 P1 X190 Y10 Z-99999       ; Probe near front right pivot point - uncomment this lines for 3 pivot points on the Z axis
; G30 P2 X100 Y190 Z-99999 S3   ; Probe near front centre pivot point - uncomment this lines for 3 pivot points on the Z axis
```

M671 in bed.g should be edited with the centre location of each Z axis pivot point. These locations should be the location in gcode and can be outside the maxima and minima declared in M208 (in config.g). If you have 3 Z axis pivot point, make sure you declare 3 points in X and Y in M671.  

```text
M671 X-130:400 Y150:150 S10                             ; The location of the two Z axis pivot points

if !move.axes[0].homed || !move.axes[1].homed	        ; If the printer hasn't been homed, home it
	G28 XY	; home y and x
;
G28 Z			                                        ; home z
;
M561							                        ; clear any bed transform
M98 P"bed_points.g"		                                ; perform bed tramming
echo "BTC: 1 - Difference was " ^ move.calibration.initial.deviation ^ "mm"
;
while move.calibration.initial.deviation >= 0.01		; perform additional tramming if previous deviation was over 0.01mm
  if iterations = 5
    abort "Too many auto tramming attempts"
  M98 P"bed_points.g"		; perform bed tramming
  echo "BTC: " ^ iterations + 2 ^ " - Difference was " ^ move.calibration.initial.deviation ^ "mm"
  continue
;
G28 Z							                        ; home z
```

</div>

<div role="tabpanel" class="tab-pane" id="bedmanual" markdown="1">

## Manual Bed Levelling

This macro is for levelling a bed that is secured to the printer using 4 screws. It should be placed in the macros folder.  
The location of the screws should be updated in M671 as required as well as the probe locations. The probe locations should be as close to the screw locations as possible. The order of the probe points should match the order of the screw locations declared in M671.  
The P0.5 in M671 is the thread pitch for M3 screws. If your bed is secured by larger screws, also adjust this value to suit.  

```text
M671 x15:250:15:250 y25:25:260:260 P0.5                             ; The location of the four bed securing screws

; M558 P0												; Uncomment this if you don't have a Z Probe

G28 Z                                                               ; Home Z

G30 P0 X15 Y25 Z-99999 ; probe near an adjusting screw              ; Front left screw
G30 P1 X240 Y25 Z-99999 ; probe near an adjusting screw             ; Front right screw
G30 P2 X15 Y255 Z-99999 ; probe near an adjusting screw             ; Rear left screw
G30 P3 X240 Y255 Z-99999 S4 ; probe near an adjusting screw         ; Rear right screw

G28 Z                                                               ; Home Z
```

</div>

<div role="tabpanel" class="tab-pane" id="stop" markdown="1">

## Example stop.g

This is an example of stop.g.
Essentially the only thing in my slicer end code is M0 to call stop.g
Some of the popups aren't necessary, but provide feedback.

```text
; stop.g
; called when M0 (Stop) is run (e.g. when a print from SD card is cancelled)
; 
if {state.currentTool!=-1} ; check if any tools are active
	G91 ; relative positioning
;check if any tools have heaters which are above cold extrude value
	if #tools[state.currentTool].heaters > 0 & heat.heaters[tools[state.currentTool].heaters[0]].current > heat.coldRetractTemperature
		G1 E-2 F300 ; retract the filament a bit before lifting the nozzle to release some of the pressure
		M291 P"Retracted 2mm" R"Retracting" S0 T5
		G4 S5 ; wait for popup
	else
		M291 P{"Not retracted...  Heater off or below extrude temp  " ^ heat.heaters[1].current ^ " : " ^ heat.coldRetractTemperature ^ "."} R"Retract" S0 T5
		G4 S5 ; wait for popup
else
	M291 P"No active tool" R"Check tools" S0 T2
 
if {!move.axes[0].homed || !move.axes[1].homed || !move.axes[2].homed} ; check if the machine is homed
	M291 P"Insufficient axis homed.  Cannot raise or park" R"Parking" S0 T5
else
	G90 ; absolute positioning
	if {(move.axes[2].machinePosition) < (move.axes[2].max - 10)} ; check if there's sufficient space to raise head
		M291 P{"Raising head to...  " ^ move.axes[2].machinePosition+5}  R"Raising head" S0 T5
		G1 Z{move.axes[2].machinePosition+5} F9000 ; move Z up a bit
	else
		M291 P{"Cannot raise head- insufficient space  " ^ move.axes[2].machinePosition ^ " : " ^ (move.axes[2].max - 10) ^ "."} R"Raising head" S0 T5
		G4 S5 ; wait for popup to display
	G1 X10 Y150 ; parks X head pushes bed out to front so you can pull part
	M400 ; wait for current moves to finish
 
if {state.currentTool!=-1}
	G10 S0 R0 ; Set active and standby temps to zero
	T-1 P0 ; if any tools selected, deselect all
else
	T0 ; Select a tool
	G10 S0 R0 ; Set active and standby temps to zero to ensure nothing is on standby
	T-1 P0; deselect all tools
M140 S0 ; heated bed heater off 
M106 P0 S0 ; part fan off
M84 ; steppers off
G90 ; absolute positioning
                                                             ; Home Z
```

</div>

<div role="tabpanel" class="tab-pane" id="bltouch" markdown="1">

## Calibrating a BLTouch Trigger Height

A macro to calibrate a BLTouch

```text
;Calibrate BL Touch
; Reprap firmware version 3.3b2 or later required!
 
; if two speed probing is configured in M558,we probably want to reduce the speed for this test
var ProbeSpeedHigh = sensors.probes[0].speeds[0]*60 ; Speeds are saved in mm/sec in the object model but M558 uses mm/min
var ProbeSpeedLow = sensors.probes[0].speeds[1]*60
 
 
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
G1 X{(move.axes[0].min + move.axes[0].max)/2} Y{(move.axes[1].min + move.axes[1].max)/2}
 
M564 S0 H0 ; Allow movement beyond limits
 
;ensure you have room for the probe
if move.axes[2].machinePosition < sensors.probes[0].diveHeight
	G1 Z{sensors.probes[0].diveHeight}
M280 P0 S160 I1 ; reset BL Touch
G4 S0.5
M98 P"0:/sys/retractprobe.g" ; Ensure probe is retracted & reset
G4 S0.5
M561 ; clear any bed transform
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
	if sensors.probes[0].value[0]=1000 ; if probe is in error state
		echo "Probe in error state- resetting"
		M280 P0 S160 I1 ; reset BL Touch
		G4 S0.5
		M98 P"0:/sys/retractprobe.g" ; Ensure probe is retracted & reset
		G4 S0.5
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
 
G31 P500 Z{var.Average} ; set Z probe offset to the average reading
M564 S0 H1 ; Reset limits
M558 F{var.ProbeSpeedHigh}:{var.ProbeSpeedLow} ; reset probe speed to original
G1 Z{sensors.probes[0].diveHeight} F360 ; move head back to dive height
M291 P{"Trigger height set to : " ^ sensors.probes[0].triggerHeight  ^ " OK to save to config-overide.g, cancel to use until next restart"} R"Finished" S3
M500 P31 ; optionally save result to config-overide.g
```

</div>

<div role="tabpanel" class="tab-pane" id="fysetc" markdown="1">

## Fysetc Mini Neopixels

A macro to enable the fysetc mini v2.1 and fade up the display/set Button colours

```text
; ST7567 Init for FYSETC Mini12864 Panel V2.1

; Turn off backlight
m150 X2 R0 U0 B0 S3 F0
; Configure reset pin
M950 P1 C"PI_4" 						; Modify this pin to suit installation (or comment out for Duet boards)
; hardware reset of LCD
M42 P1 S0
G4 P500
M42 P1 S1
; Turn display on
M918 P2 C30 F1000000 E4
; Fade in backlight
while iterations < 256
    m150 X2 R255 U255 B255 P{iterations} S1 F0
    G4 P20
; flash Button 3 times
while iterations < 3
    m150 X2 R255 U255 B255 P255 S1 F1
    m150 X2 R0 U255 B0 P255 S2 F0
    G4 P250
    m150 X2 R255 U255 B255 P255 S1 F1
    m150 X2 R0 U255 B0 P0 S2 F0
    G4 P250
; Display "ready" button state  
m150 X2 R255 U255 B255 P255 S1 F1
m150 X2 R255 U0 B0 P255 S2 F0
```

</div>

</div>
