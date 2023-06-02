---
title: Updating the firmware in Standalone Mode
tags: []
keywords: 
last_updated: 28/05/2023
summary: "Updating your printer"
sidebar: mydoc_sidebar
permalink: updating.html
folder: mydoc
comments: false
toc: false
---

## Overview

This page details how to check what firmware version you are currently running and how to update to the latest version when running Standalone Mode.  
If running with an SBC, [this page](./stm32_sbc.html) should be followed.  

### Identifying your current version

Using DWC (Duet Web Control - The web interface), on the sidebar, click on General under settings.  
{% include image.html file="dwc_sidebar.png" alt="DWC Sidebar" caption="DWC Sidebar" %} 

This page displays the current version of DWC installed.  
{% include image.html file="dwc_settings_general.png" alt="DWC Version" caption="DWC Version" %}  

Using DWC, on the sidebar, click on Machine Specific under settings.  
This page displays the board name and board type, the current release number of the firmware installed and the release version of the WiFi firmware installed.  
{% include image.html file="dwc_settings_machine_specific.png" alt="Firmware Version" caption="Firmware Version" %}  

From DWC 3.5b3, a new panel has been added to the machine specific page that collects all the above information in one place, as shown below.  
{% include image.html file="dwc_settings_machine_specific_3.5.png" alt="All Version Information" caption="All Version Information" %}  

### Method 1 - Using ReleaseMgr

