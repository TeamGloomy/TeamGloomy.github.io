---
title: TFT Screen Configuration
tags: []
keywords: 
last_updated: 11/03/2021
summary: "TFT Screen Configuration"
sidebar: mydoc_sidebar
permalink: tft.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The most recent version of the [standard bigtreetech TFT firmware](https://github.com/bigtreetech/BIGTREETECH-TouchScreenFirmware/tree/master/Copy%20to%20SD%20Card%20root%20directory%20to%20update) has built in support for RepRapFirmware. The pre-built images have this enabled by default.

## Loading the firmware

There is now an RRF config.ini  
It needs to be renamed from config_rrf.ini to config.ini for flashing of the firmware.  

## Config.g Changes

Add the following line to your config.g to enable the screen

```M575 P1 S2 B57600```

## Start.g Changes

Add the following line in your start.g file to allow the screen to know when a job has started.  

```M409 K"job.file.fileName"```

## Stop.g Changes

Add the following line in your stop.g file to allow the screen to know when a job has stopped.  

```M118 P2 S"//action:cancel"```

```M0``` also need to be added to your stop gcode in your slicer to allow stop.g to be ran.  

## Pause.g Changes

Add the following line in your pause.g file to allow the screen to know when a job has been aused.  

```M118 P2 S"//action::paused"```

## Cancel.g Changes

Add the following line in your cancel.g file to allow the screen to know when a job has been cancelled.  

```M118 P2 S"//action::prompt_begin Resuming"```