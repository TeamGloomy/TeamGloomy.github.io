---
title: Firmware Configuration Limits
tags: []
keywords: 
last_updated: 06/01/2025
summary: "This describes the limits within the firmware for each"
permalink: firmware_limits_stm32h7.html
folder: mydoc
comments: false
toc: false
---

This page covers the configuration limits applied within the firmware.  

* The total system limits are set by the mainboard.
* Expansion boards can be configured within the full capabilities of their hardware, subject to the overall system limits.
* There are also some firmware configuration limitations related to CAN expansion on Duet 3.
* You can check the configuration limits of the firmware version you are running by opening the 'Object Model' plugin in DWC, and checking the 'limits' section.
* The limits depend on firmware version, see relevant tab below.

<ul id="profileTabs" class="nav nav-tabs">
  <li class="active"><a class="noCrossRef" href="#rrf36" data-toggle="tab">Firmware 3.6</a></li>  
    <li><a class="noCrossRef" href="#rrf35" data-toggle="tab">Firmware 3.5</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="rrf36" markdown="1">

<div class="datatable-begin"></div>

|Item| STM32H7 | Description |
| :------------- |:-------------|:-------------|
|MaxSensors|56|The maximum number of sensors|
|MaxHeaters|32|The maximum number of heaters|
|MaxPortsPerHeater|2|The maximum number of output ports per heater|
|MaxMonitorsPerHeater|3|The maximum number of monitors per heater|
|MaxBedHeaters|12|The maximum number of bed heaters|
|MaxChamberHeaters|4|The maximum number of chamber heaters|
|MaxZProbes|8|The maximum number of probes|
|MaxGridProbePoints|961|The maximum number of mesh bed compensation points|
|MaxGpInPorts|64|The maximum number of general purpose input ports|
|MaxGpOutPorts|56|The maximum number of general purpose output ports|
|MaxAxes|30|The maximum number of movement axes|
|MaxDriversPerAxis|8|The maximum number of stepper drivers assigned to one axis|
|MaxExtruders|20|The maximum number of extruders|
|MaxAxesPlusExtruders|32|The maximum number of axes + extruders|
|MaxHeatersPerTool|20|The maximum number of heaters per tool|
|MaxExtrudersPerTool|12|The maximum number of extruders per tool|
|MaxFans|32|The maximum number of fans|
|MaxTriggers|32|The maximum number of triggers|
|MaxSpindles|4|Maximum number of configurable spindles|
|MaxZProbeProgramBytes|8|Maximum number of bytes in a Z probe program|
|MaxCanDrivers|20|The maximum number of CAN connected stepper drivers|
|MaxCanBoards|20|The maximum number of CAN connected boards|
|MaxLedStrips|5|The maximum number of LED strips|

<div class="datatable-end"></div>

</div>

<div role="tabpanel" class="tab-pane" id="rrf35" markdown="1">

<div class="datatable-begin"></div>

|Item| STM32H7 | Description |
| :------------- |:-------------|:-------------|
|MaxSensors|56|The maximum number of sensors|
|MaxHeaters|32|The maximum number of heaters|
|MaxPortsPerHeater|2|The maximum number of output ports per heater|
|MaxMonitorsPerHeater|3|The maximum number of monitors per heater|
|MaxBedHeaters|12|The maximum number of bed heaters|
|MaxChamberHeaters|4|The maximum number of chamber heaters|
|MaxZProbes|4|The maximum number of probes|
|MaxGridProbePoints|961|The maximum number of mesh bed compensation points|
|MaxGpInPorts|64|The maximum number of general purpose input ports|
|MaxGpOutPorts|56|The maximum number of general purpose output ports|
|MaxAxes|30|The maximum number of movement axes|
|MaxDriversPerAxis|8|The maximum number of stepper drivers assigned to one axis|
|MaxExtruders|20|The maximum number of extruders|
|MaxAxesPlusExtruders|32|The maximum number of axes + extruders|
|MaxHeatersPerTool|20|The maximum number of heaters per tool|
|MaxExtrudersPerTool|12|The maximum number of extruders per tool|
|MaxFans|32|The maximum number of fans|
|MaxTriggers|32|The maximum number of triggers|
|MaxSpindles|4|Maximum number of configurable spindles|
|MaxZProbeProgramBytes|8|Maximum number of bytes in a Z probe program|
|MaxCanDrivers|20|The maximum number of CAN connected stepper drivers|
|MaxCanBoards|20|The maximum number of CAN connected boards|
|MaxLedStrips|5|The maximum number of LED strips|

<div class="datatable-end"></div>

</div>

</div>
