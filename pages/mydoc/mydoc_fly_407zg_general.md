---
title: Fly-407ZG General Information
tags: []
keywords: 
last_updated: 20/01/2021
summary: "General information regarding the Fly-407ZG"
sidebar: mydoc_sidebar
permalink: mydoc_fly_407zg_general.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

This page covers any general information for the Fly-407ZG board.

### Heatsinks

The Fly-407ZG is supplied with 2 heatsinks. They should be installed as per the image below.

{% include image.html file="fly_407zg_heatsinks.jpg" alt="Fly-407ZG heatsink" caption="Fly-407ZG Heatsink Installation Location" %}

### Driver Jumpers

The jumpers should be installed as below. "Common Interpolation" should be used for standalone drivers. "SPI mode Interpolation" is not a currently supported configuration as this port does not support SPI communication to drivers. "UART mode Interpolation" should be used when using smart drivers (i.e. TMC2208, TMC2209, TMC2225 and TMC2226)

{% include image.html file="fly_407zg_jumpers.jpg" alt="Fly-407ZG Jumpers" caption="Fly-407ZG Driver Jumper Locations" %}