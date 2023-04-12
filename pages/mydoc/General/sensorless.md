---
title:  Sensorless Homing and Stall Detection
tags: 
keywords: 
last_updated: 12/04/2023
summary: "Sensorless Homing and Stall Detection"
sidebar: mydoc_sidebar
permalink: sensorless.html
folder: mydoc
toc: false
comments: false
---

Sensorless homing and stall detection is functional for the TMC2209's and TMC2226's. This is supported on the following boards.
* Fly-CDY
* Fly-CDYv2
* Fly-E3
* Fly-E3-Pro
* Fly-E3-Pro-v3
* Fly-Gemini-v1
* Fly-Gemini-v1.1
* Fly-Gemini-v2
* Fly-Super8
* Fysetc Spider 407 version
* MKS SGen L v1
* MKS SGen L v2
* Octopus (F429)
* Octopus Pro
* SKR 1.3
* SKR 1.4
* SKR 2.0
* SKR3
* SKR3 EZ
* SKR E3 Turbo
* SKR GTR
* SKR Pro
* SKR RRF E3

Getting stall detection working can be tricky and sensorless homing will almost certainly require some tuning.  
 
As always the Duet help pages provide a lot of information that may also be of [help](https://docs.duet3d.com/en/User_manual/Connecting_hardware/Sensors_stall_detection){:target="_blank"}.

### board.txt Changes

To use the new TMC2209 and TMC2226 features, an addition to the board.txt file is required (to specify the pins used for the DIAG signals from the drivers) and obviously requires that the DIAG pins are routed to those pins (either directly by the board or via jumper wires).  

`stepper.TmcDiagPins = {pin 0, pin 1, ...}`
where "pin 0" is the DIAG pin for drive 0. By default no pins are defined and if you do not want to use stall detection for a drive set the pin to NoPin.  

The correct pins in the correct order have been included in the board.txt section on each of the supported boards wiki pages for both WiFi and SBC configurations.  

### Config.g Changes

{% include warning.html content="TMC2209 and TMC2226 only support stall detection when using Stealthchop mode so take care to make sure that is enabled and that the stealthchop/spreadcycle threshold is not set to too low a speed." %}

The only modification required in config.g is to add the following to each M569 command where sensorless homing is to be used.
`D3 V40`
D3 sets the driver into stealthchop mode. V40 sets the speed at which the driver switches over to spreadcycle. 

### Homing file changes

This is where the main setup of sensorless homing takes place.  

Before using the examples below to config the sensorless homing, it is suggested to test each axis with the following homing code. Ensure that you comment out your current homing code using ;  
The code would go in the homex.g or homey.g (adjusting any X moves to Y)

```
M915 P0 S-127 H10 R1 ; Set very sensitive stall detect
M574 X1 S3 ; configure endstop for stall detection
G1 X200 H1 ; Should stall pretty much immediately
```

Once you have confirmed that your motors are stalling, adapt the example cartesian homing files below. Copies are also included at the below google drive links. Examples of corexy sensorless homing files can also be found below.    

The S, H and R values will probably need tweaking for your system.  
H is typically 200 for 1.8 degree motors and 400 for 0.9 degree motors.
S is the stall detection threshold which should be between -127 and +127.
{% include tip.html content="This port has a wider sensitivity range than the duet version of RRF (which is -64 to +64)." %}
R is the action to take on detecting a stall. 0 = no action (default), 1 = just report it, 2 = pause print, 3 = pause print, execute /sys/rehome/.g, and resume print

{% include tip.html content="RRF 3.4.x and above includes M201.1 - Set reduced acceleration for special move types, lowering the acceleration of your homing moves with M201.1 might increase sensorless-homing reliability. Prior versions can decrease and restore their accel values inside homex/y.g" %}

<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a class="noCrossRef" href="#homex" data-toggle="tab">homex.g</a></li>
    <li><a class="noCrossRef" href="#homey" data-toggle="tab">homey.g</a></li>
    <li><a class="noCrossRef" href="#homeall" data-toggle="tab">homeall.g</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="homex" markdown="1">

```
; homex.g
; called to home the X axis
;
M400					          ; Wait for all moves to stop
G91						          ; Use relative moves
G1 H2 X0.01	Z0.01		    ; Move X a small amount to enable
M400					          ; Wait for all moves to stop
G4 P200					        ; Delay to allow TMC to detect stopped state
M915 P0 S-10 H200 R0	  ; Configure stall detect
M574 X1 S3				      ; Configure X endstop
M913 X50 Z50			      ; Lower X and Z power
G4 P200					        ; Delay to ensure settings are made
G1 H2 Z5 F2500			    ; Lift Z relative to current position
G1 H1 X20 F2000			    ; Back away from endstop
M400					          ; Wait for all moves to stop
M915 P0 S-30 H200 R0	  ; Configure stall detect
G4 P200					        ; Delay to ensure settings are made
G1 H1 X-230 F2000		    ; Move towards endstop until it stalls
M400					          ; Wait for all moves to stop
M915 P0 S-10 H200 R0	  ; Configure stall detect
G4 P200					        ; Delay to ensure settings are made
G1 H1 X10 F2000			    ; Back away from endstop
M400					          ; Wait for all moves to stop
M915 P0 S-30 H200 R0	  ; Configure stall detect
G4 P200                 ; Delay to ensure settings are made
G1 H1 X-230 F2000		    ; Move towards endstop until it stalls
M915 P0 S-10 H200 R0	  ; Configure stall detect to be less sensitive
G1 X1 F1000				      ; Move away from stop and clear stall
G1 H2 Z-5 F2500			    ; Return Z to original position
M400					          ; Wait for all moves to stop
G90						          ; Absolute positioning
M913 X100 Z100			    ; Back to full power
M915 P0 S20 H200 R1		  ; Report any stalls
```

</div>

<div role="tabpanel" class="tab-pane" id="homey" markdown="1">

```
; homey.g
; called to home the X axis
;
M400					          ; Wait for all moves to stop
G91						          ; Use relative moves
G1 H2 Y0.01	Z0.01		    ; Move Y a small amount to enable
M400					          ; Wait for all moves to stop
G4 P200					        ; Delay to allow TMC to detect stopped state
M915 P1 S-10 H200 R0	  ; Configure stall detect
M574 Y1 S3				      ; Configure Y endstop
M913 Y50 Z50			      ; Lower Y and Z power
G4 P200					        ; Delay to ensure settings are made
G1 H2 Z5 F2500			    ; lift Z relative to current position
G1 H1 Y20 F2000			    ; back away from endstop
M400					          ; Wait for all moves to stop
M915 P1 S-30 H200 R0	  ; Configure stall detect
G4 P200					        ; Delay to ensure settings are made
G1 H1 Y-300 F2000		    ; Move towards endstop until it stalls
M400					          ; Wait for all moves to stop
M915 P1 S-10 H200 R0	  ; Configure stall detect
G4 P200					        ; Delay to ensure settings are made
g1 H1 Y10 F2000			    ; Back away from endstop
M400                    ; Wait for all moves to stop
M915 P1 S-30 H200 R0	  ; Configure stall detect
G4 P200                 ; Delay to ensure settings are made
G1 H1 Y-300 F2000		    ; Move towards endstop until it stalls
M915 P1 S-10 H200 R0	  ; Configure stall detect to be less sensitive
G1 Y1 F1000				      ; Move away from stop and cancel stall
G1 H2 Z-5 F2500			    ; Return Z to original position
M400					          ; Wait for all moves to stop
G90						          ; Absolute positioning
M913 Y100 Z100			    ; back to full power
M915 P1 S20 H200 R1		  ; Report any stalls
```

</div>

<div role="tabpanel" class="tab-pane" id="homeall" markdown="1">

```
; homeall.g
; called to home all axes
;
; This makes use of stall detection to perform sensorless homing.
; The initial position is unknown so we may be up against either end
; of the machine. We need to take care to handle hitting either min or max
; endstops and to try and ensure that stall detect operates correctly. To
; do this and to minimise and damage if we hit the machine we operate at a
; reduced current during these moves.
M400					            ; Wait for all moves to stop
G91						            ; Use relative moves
G1 H2 X0.01 Y0.01 Z0.01	  ; Move X, Y and Z a small amount to force enable
G4 P200					          ; Wait to ensure TMC sees this as stopped state
M915 P0 S-10 H200 R0	    ; Configure stall detect in case we hit max endstops
M915 P1 S-10 H200 R0	    ; Configure stall detect
M574 X1 S3				        ; Configure X endstop
M574 Y1 S3				        ; Configure Y endstop
M913 X50 Y50 Z50		      ; Lower X, Y and Z power
G4 P200					          ; Delay to ensure settings are made
G1 H2 Z5 F2500			      ; Lift Z relative to current position
G1 H1 X20 Y20 F2800		    ; Back away from endstop
M400                      ; Wait for all moves to stop
M915 P0 S-30 H200 R0	    ; Configure stall detect for home, use more sensitive setting
M915 P1 S-30 H200 R0	    ; Configure stall detect
G4 P200                   ; Delay to ensure settings are made
G1 H1 X-300 Y-300 F2800	  ; Move towards endstop until it stalls
M400					            ; Wait for motion to stop, we should now be home
; There is a small chance that the above sequence did not work
; sometimes the inital movements after the printer has been powered
; on trigger stall detection. To avoid having the home position set
; incorrectly, we repeat the home operation again to be safe.
M915 P0 S-10 H200 R0	    ; Configure stall detect
M915 P1 S-10 H200 R0	    ; Configure stall detect
G1 H1 X10 Y10 F2800		    ; Back away from endstop
M400                      ; Wait for all moves to stop
M915 P0 S-30 H200 R0	    ; Configure stall detect for home detect
M915 P1 S-30 H200 R0	    ; Configure stall detect
G4 P200                   ; Delay to ensure settings are made
G1 H1 X-300 Y-300 F2800	  ; Move towards endstop until it stalls
M400					            ; Wait for all moves to stop
M915 P0 S-10 H200 R0	    ; Configure stall detect to be less sensitive
M915 P1 S-10 H200 R0	    ; Configure stall detect
G4 P200                   ; Delay to ensure settings are made
G1 X1 Y1 F1000			      ; Move away from stop and cancel stall
M400					            ; Wait for all moves to stop
G90						            ; Absolute positioning
G1 X117 Y128 F5000        ; Go to first bed probe point and home Z
G30                       ; Home Z by probing the bed
M913 X100 Y100 Z100		    ; Back to full power
M915 P0 S20 H200 R1		    ; Configure stall detect to report stalls
M915 P1 S20 H200 R1		    ; on both X and Y
```

</div>

</div>

## Troubleshooting

If your drivers aren't stalling at all with the test code, check the output of M122 P200 and make sure the pins are being listed correctly.  
If your drivers work with the test code but don't stall with the example homing files, lower the value of S.  
If your drives stall straight away with the example homing files, increase the S value.  
