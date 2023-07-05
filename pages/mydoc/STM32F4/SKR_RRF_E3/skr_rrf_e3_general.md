---
title: SKR-RRF-E3 General Information
tags: []
keywords: 
last_updated: 15/06/2022
summary: "General information regarding the SKR-RRF-E3"
sidebar: mydoc_sidebar
permalink: skr_rrf_e3_general.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

This page covers any general information for the SKR-RRF-E3 board and its IDEX addon.  
It is officially supported by TeamGloomy from release 3.3b1_5.  

The SKR-RRF-E3 can be purchased from [AliExpress](https://s.click.aliexpress.com/e/_DmY2r2D)

### Board.txt Name

The board name in board.txt is **biquskr_rrf_e3_1.1**.

### Driver Diag Pin

To use sensorless homing, a jumper must be installed on the diag header.

{% include image.html file="skr_rrf_e3_diag.png" alt="SKR-RRF-E3 Diag Jumpers" caption="SKR-RRF-E3 Diag Jumper Locations" %}

### Initial Installation

The SKR-RRF-E3 board that you will receive does have firmware installed but its from a BTT build of RRF and not officially supported by TeamGloomy. Please install one of our build.  
Follow the [WiFi instructions](skr_rrf_e3_connected_wifi.html).