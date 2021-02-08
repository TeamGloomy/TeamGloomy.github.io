---
title: TFT Screen Configuration
tags: []
keywords: 
last_updated: 25/01/2021
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

## Config.ini changes

There are some changes that should be made when loading the TFT firmware on to the screen.
They are as follows:
```

<div class="datatable-begin"></div>

|Attribute Name|Default Value|New Value|
| :------------- |:-------------|:-------------|
|baudrate|5|4|
|onboard_sd_support|2|1|
|serial_always_on|0|1|

<div class="datatable-end"></div>

## Config Changes

Add the following line to your config.g to enable the screen

```M575 P1 S3 B57600```