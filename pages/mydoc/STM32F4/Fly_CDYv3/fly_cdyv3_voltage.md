---
title: Fly-CDYv3 Voltage Monitoring
tags: []
keywords: 
last_updated: 21/11/2021
summary: "Monitoring the input voltage with the Fly-CDYv3"
sidebar: mydoc_sidebar
permalink: fly_cdyv3_voltage.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

The Fly-CDYv3 natively supports input voltage monitoring.  
This allows for resume on power loss to be used. See [here](https://docs.duet3d.com/en/User_manual/Tuning/Resume) for more information.  
On testing, running 24v, we've found that there is enough power to write the resume information to the SD card but there isn't enough power to lift the head away from the bed. Therefore, it would be beneficial to add a large capacitor across the input voltage.

### Setting up

We suggest running a print and monitoring the input voltage, periodically checking M122 for the lowest value (with everything running e.g. fans).  
Then use the minimum voltage - 1v in your M911 command. E.g. if your minimum voltage seen during printing was 23.8v, set the S value to 22.8.  