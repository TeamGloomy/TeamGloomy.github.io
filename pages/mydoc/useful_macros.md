---
title: Useful Macros
tags: []
keywords: 
last_updated: 25/01/2021
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

Here is a sample bed levelling file to be used with G32. Both of these files are to be placed in the sys folder.

bed_screws.g should be edited with the probe locations you want to use. The probing order should match the order of the screw locations mapped in M671 and the order the Z motors are declared in M584.  

```
; call this bed_screws.g
G30 P0 X0 Y130 Z-99999         	; Probe near front left leadscrew - comment out this line is using 3 screws on the z axis
G30 P1 X230 Y130 Z-99999 S2     ; Probe near front right leadscrew - comment out this line is using 3 screws on the z axis
; G30 P0 X10 Y10 Z-99999        ; Probe near front left leadscrew - uncomment this lines for 3 screws on the Z axis
; G30 P1 X190 Y10 Z-99999       ; Probe near front right leadscrew - uncomment this lines for 3 screws on the Z axis
; G30 P2 X100 Y190 Z-99999 S3   ; Probe near front centre leadscrew - uncomment this lines for 3 screws on the Z axis
```
bed.g should be editted with the centre location of each Z axis screw. These locations should be the location in gcode and can be outside the maxima and minima declared in M208 (in config.g). If you have 3 Z axis screws, make sure you declare 3 points in X and Y in M671.  
```
M671 X-130:400 Y150:150 S10                             ; The location of the two Z axis screws

if !move.axes[0].homed || !move.axes[1].homed	        ; If the printer hasn't been homed, home it
	G28 XY	; home y and x
;
G28 Z			                                        ; home z
;
M561							                        ; clear any bed transform
M98 P"bed_screws.g"		                                ; perform bed tramming
echo "BTC: 1 - Difference was " ^ move.calibration.initial.deviation ^ "mm"
;
while move.calibration.initial.deviation >= 0.01		; perform additional tramming if previous deviation was over 0.01mm
  if iterations = 5
    abort "Too many auto tramming attempts"
  M98 P"bed_screws.g"		; perform bed tramming
  echo "BTC: " ^ iterations + 2 ^ " - Difference was " ^ move.calibration.initial.deviation ^ "mm"
  continue
;
G28 Z							                        ; home z
```

</div>

<div role="tabpanel" class="tab-pane" id="bedmanual" markdown="1">

This macro is for levelling a bed that is secured to the printer using 4 screws. It should be placed in the macros folder.  
The location of the screws should be updated in M671 as required as well as the probe locations. The probe locations should be as close to the screw locations as possible. The order of the probe points should match the order of the screw locations declared in M671.  
The P0.5 in M671 is the thread pitch for M3 screws. If your bed is secured by larger screws, also adjust this value to suit.  

```
M671 x15:250:15:250 y25:25:260:260 P0.5                             ; The location of the four bed securing screws

G28 Z                                                               ; Home Z

G30 P0 X15 Y25 Z-99999 ; probe near an adjusting screw              ; Front left screw
G30 P1 X240 Y25 Z-99999 ; probe near an adjusting screw             ; Front right screw
G30 P2 X15 Y255 Z-99999 ; probe near an adjusting screw             ; Rear left screw
G30 P3 X240 Y255 Z-99999 S4 ; probe near an adjusting screw         ; Rear right screw

G28 Z                                                               ; Home Z
```

</div>

<div role="tabpanel" class="tab-pane" id="stop" markdown="1">

This is an example of stop.g.
Essentially the only thing in my slicer end code is M0 to call stop.g
Some of the popups aren't necessary, but provide feedback.

```
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
		G1 Z+5 F9000 ; move Z up a bit
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

A macro to calibrate a BLTouch

```
;Calibrate BL Touch trigger height
; When we get variables we can define one here
; Uncomment when ready to use
; var RunningTotal=0
; var average=0
  
; If the printer hasn't been homed, home it
if !move.axes[0].homed || !move.axes[1].homed || !move.axes[2].homed
  G28
  
M564 S0 H0 ; Allow movement beyond limits
 
if move.axes[2].machinePosition < 6 ; make sure we have probe clearance
	G1 Z6
M280 P0 S160 I1 ; reset BL Touch
G4 S0.5
M98 P"0:/sys/retractprobe.g" ; Ensure probe is retracted & reset
G4 S0.5
M290 R0 S0 ; clear any baby stepping
M561 ; clear any bed transform
; Jog head to position
M291 P"Jog nozzle to touch bed" R"Set nozzle to zero" S3 Z1
G92 Z0
M291 P"Press OK to begin" R"Ready?" S3; 
; carry out 10 probes
while iterations <= 9
	G1 Z6
	M400
	if sensors.probes[0].value[0]=1000 ; if probe is in error state
		echo "Probe in error state- resetting"
		M280 P0 S160 I1 ; reset BL Touch
		G4 S0.5
		M98 P"0:/sys/retractprobe.g" ; Ensure probe is retracted & reset
		G4 S0.5
	G30 S-1
	M400
	; Uncomment when variables allowed
	; RunningTotal=RunningTotal + move.axes[2].machinePosition
	;average=RunningTotal/(iterations+1)
	G4 S0.5
 
; Until variables come use this
M291 P"Check console for results and enter average value in G31 Z parameter of config.g"  R"Finished" S3 
 
;When variables come uncomment this
;G31 Z{average}
;M291 P"Trigger height set to : " ^ sensors.probes[0].triggerHeight ^ " Press OK to save to config, cancel to use until restart" R"Finished" S2 
;M500
 
 
M564 S0 H1 ; Reset limits	                                                            ; Home Z
```

</div>

<div role="tabpanel" class="tab-pane" id="fysetc" markdown="1">

A macro to enable the fysetc mini v2.1 and fade up the display/set Button colours

```
; ST7567 Init for FYSETC Mini12864 Panel V2.1

; Turn off backlight
m150 X2 R0 U0 B0 S3 F0
; Configure reset pin
M950 P1 C"PI.4" 						; Modify this pin to suit installation (or comment out for Duet boards)
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
