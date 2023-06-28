---
title: Updating the firmware in Standalone Mode
tags: []
keywords: 
last_updated: 28/05/2023
summary: "Updating your printer"
sidebar: mydoc_sidebar
permalink: updating_standalone.html
folder: mydoc
comments: false
toc: false
---

## Overview

This page details how to check what firmware version you are currently running and how to update to the latest version when running Standalone Mode.  
If running with an SBC, [this page](./stm32_sbc.html) should be followed.  

### Identifying your current firmware version

Using DWC (Duet Web Control - The web interface), on the sidebar, click on "General" under settings.  
{% include image.html file="dwc_sidebar.png" alt="DWC Sidebar" caption="DWC Sidebar" %} 

This page displays the current version of DWC installed.  
{% include image.html file="dwc_settings_general.png" alt="DWC Version" caption="DWC Version" %}  

Using DWC, on the sidebar, click on "Machine Specific" under settings.  
This page displays the board name and board type, the current release number of the firmware installed and the release version of the WiFi firmware installed. 
{% include image.html file="dwc_settings_machine_specific.png" alt="Firmware Version" caption="Firmware Version" %}  
Make a note of the name in brackets after the board type. It will be one of the following:
<div class="datatable-begin"></div>

|Board Type|
| :------------- |
|stm32f4-wifi|
|stm32h723-wifi|
|stm32h7-wifi|

<div class="datatable-end"></div>

If the WiFi firmware you are running is version 1.27-02 or below and it has a `32` in the version number, you are using an ESP32. If the version number does not include a `32`, you are using an ESP8266.  
If the WiFi firmware you are running is 2.1beta3 or greater, the type of ESP is no longer included in the version number and further work is required to identify the ESP type installed in your system. In the console tab of DWC, send `M122`. Look at the free heap size for the WiFi firmware, which is typically reported on the 5th from last line of the M122 output. If the value is around 40000, then you are using an ESP8266. If the value is greater than 100000, then you are using an ESP32.  

From DWC 3.5b3, a new panel has been added to the machine specific page that collects all the above information in one place, as shown below.  
{% include image.html file="dwc_settings_machine_specific_3.5.png" alt="All Version Information" caption="All Version Information" %}  

### Method 1 - Using ReleaseMgr

#### Installation

* Download ReleaseMgr from [here](https://plugins.duet3d.com/plugins/ReleaseMgr.html), ensuring you've downloaded the correct version of the plugin for the version of DWC you are running.  
* Upload the zip file to DWC via the Settings => Plugins => External Plugins screen.
* Confirm the installation, and follow the steps on-screen.
* Start ReleaseMgr Plugin and it will appear in the left hand menu.  

#### Usage

Follow the instructions [here](https://github.com/MintyTrebor/ReleaseMgr/wiki/Navigation) for usage.  

### Method 2 - Manually updating

It is recommended to carry out updating of the firmwares in the following order. Any toolboards or expansion boards first, then the mainboard firmware, then the WiFi firmware and finally DWC.  

* STM32 FIRMWARE - When updating the firmware, you can decide to either install the [latest stable](https://github.com/gloomyandy/RepRapFirmware/releases/latest) firmware or install the [latest unstable](https://github.com/gloomyandy/RepRapFirmware/releases) version. Download the correct firmware file using the board type you noted down above.  
* Duet FIRMWARE - For all toolboards and expansion boards, the firmware can be found [here](https://github.com/Duet3D/RepRapFirmware/releases) and you **MUST** ensure that the version number matches the version of the firmware that you have chosen to install.  
* DWC - When downloading [DWC](https://github.com/Duet3D/DuetWebControl/releases), you **MUST** ensure that the version number matches the version of the firmware that you have chosen to install.  
* WiFi FIRMWARE - For versions 1.27-02 and below, it can be found [here](https://github.com/gloomyandy/DuetWiFiSocketServer/releases). Version 2.1b3 and above can be found [here](https://github.com/gloomyandy/RepRapFirmware/releases). If you are running a separate WiFi module and you have not connected the RX and TX connections, you will need to update the WiFi module using esptools. Please see [here for ESP8266](./stm32_esp8266.html) and [here for ESP32](./stm32_esp32.html).  

#### Installing

You can install updates from either "System" using the "Upload System Files" button or "Machine Specific" by using the "Install Update" button.  
Click the button, select the file and then the open button. Once uploaded, DWC will ask if you want to install the update where you should click "yes".  
* Do not unzip and zip files before hand, DWC will handle this.  
* Install the updates in the following order: Any toolboards or expansion boards first, then the mainboard firmware, then the WiFi firmware and finally DWC.