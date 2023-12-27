---
title: Connecting an BTT Kraken via SBC
tags: []
keywords: 
last_updated: 27/12/2023
summary: "How to connect to an BTT Kraken via SBC"
sidebar: mydoc_sidebar
permalink: btt_kraken_h723_connected_sbc.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: BTT Kraken
mcu: STM32H723VGT6
firmware: firmware-stm32h723-sbc.bin
schematic: https://github.com/bigtreetech/BIGTREETECH-Kraken/blob/master/Hardware/BIGTREETECH%20Kraken%20V1.0-SCH.pdf
BCM11: PE_12
BCM9: PE_13
BCM10: PE_14
BCM8: PE_11
BCM25: PG_6
heat: "{ PB_0, PB_1, PC_5, PC_4, PA_7 }"
diagnostics: 
stepperSPI: 3
board: biqukraken_h723
onboardDrivers: yes
smartdrivers: 8
sensorless: "btt_kraken_h723_sensorless.html"
canWrite: PD_1
canRead: PD_0
---

{% include custom/sbc1.html %}

### Drivers

Add the following to your board.txt file.

```text
stepper.DriverType = {tmc5160, tmc5160, tmc5160, tmc5160, tmc5160, tmc5160, tmc5160, tmc5160 }
stepper.spiChannel = {{stepperSPI}}
```

### Sensorless Homing

Follow the instructions as found [here]({{sensorless}})

{% include custom/sbc2.html %}
