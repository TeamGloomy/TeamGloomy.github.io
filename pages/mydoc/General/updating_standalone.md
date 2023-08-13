---
title: Updating the firmware in Standalone Mode
tags: []
keywords: 
last_updated: 15/07/2023
summary: "Updating your printer"
sidebar: mydoc_sidebar
permalink: updating_standalone.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

This page details how to check what firmware version you are currently running
and how to update to the latest version when running Standalone Mode.

If running with an SBC, [this page](./stm32_sbc.html) should be followed.  

### Before you update

#### Check for changes to configuration and behavior

Refer to the
[changelog](https://github.com/Duet3D/RepRapFirmware/wiki/Changelog-RRF-3.x) to
see if there are _Breaking Changes_ or _Upgrade Notes_ between the version you
update from and the version you update to (there are no upgrade notes between
RRF 3.4.0 and RRF 3.4.6 so far; there _are_ breaking changes between RRF 3.4
and RRF 3.5). Usually breaking changes are backwards-incompatible changes to
GCode commands; update notes may also point out behavioral changes.

**Note**: It is considered good practice to have a backup of your SD cards
`/sys` and `/macros` folders before modifying your configuration for a pending
update.

#### Prepare for troubleshooting

In case a step in updating goes awry, you may not be able to connect via WiFi
and/or use the DWC UI. In that case, you can fall back to a serial connection.
Its good practice to have a USB connection available and accessible for fast
and easy debugging and fixes via the terminal.

Alternately and additionally, make sure you have easy access to the SD card so
you can modify the configuration macros on a computer if the need arises.

In addition to preparing the printer for troubleshooting, prepare yourself (-:
Its best to be well rested and well fed. Consider joining the
[Forum](https://forum.duet3d.com) and/or [Discord
server](https://discord.gg/uS97Qs7) in case you need a hand.

### Components to update

There are three main components that you need to consider when updating:

 1. The board firmware itself (RepRapFirmware), for the control board and
    possibly toolboards.
 2. The WiFi server (DuetWifiServer)
 3. The web UI (DuetWebControl)

The firmware version and the web UI version usually need to match. So you
cannot update one without the other, or risk running into intractable issues
like broken plugins or broken display on DWC.

DuetWifiServer has its own versioning scheme and is more lenient in working
across multiple versions.

We still recommend you update all components on a new stable release.

For updating, you will need to follow a couple steps which we will explain in
more detail below:

 1. Identify current board firmware version
 2. Identify the current wifi version
 3. Update board firmware
 4. Update wifi version
 5. Update Duet Web control

### Identifying Your Firmware Versions in DuetWebControl 3.4.x and Earlier

Using DWC (Duet Web Control - the web interface), on the sidebar, click on
"General" under settings.  
{% include image.html file="dwc_sidebar.png" alt="DWC Sidebar" caption="DWC Sidebar" %}  

This page displays the current version of DWC installed.  
{% include image.html file="dwc_settings_general.png" alt="DWC Version" caption="DWC Version" %}  

Using DWC, on the sidebar, click on "Machine Specific" under settings.  

This page displays the board name and board type, the current release number of
the firmware installed and the release version of the WiFi firmware installed.  

{% include image.html file="dwc_settings_machine_specific.png" alt="Firmware Version" caption="Firmware Version" %}  

Make a note of the name in brackets
after the board type. It will be one of the following:

|Board Type|
| :------------- |
|stm32f4-wifi|
|stm32h723-wifi|
|stm32h7-wifi|

### Identifying Versions in DuetWebControl 3.5b3 and Later

From DWC 3.5b3, a new panel has been added to the machine specific page that
collects all the above information in one place, as shown below (You will still
need to identify your ESP model as described in the next section).  {%
include image.html file="dwc_settings_machine_specific_3.5.png" alt="All
Version Information" caption="All Version Information" %}

#### Identifying Your ESP Model on Older Wifi Firmware Releases

If the WiFi firmware you are running is version 1.27-02 or below and it has a
`32` in the version number, you are using an ESP32. If the version number does
not include a `32`, you are using an ESP8266.  

#### Identifying Your ESP Model on Newer Wifi Firmware Releases (2.1beta3 onwards)

If the WiFi firmware you are running is 2.1beta3 or greater, the type of ESP is
no longer included in the version number and further work is required to
identify the ESP type installed in your system. In the console tab of DWC, send
`M122`. Look at the free heap size for the WiFi firmware, which is typically
reported on the 5th from last line of the M122 output. If the value is around
40000, then you are using an ESP8266. If the value is greater than 100000, then
you are using an ESP32.  

**Note**: If you update an ESP32 WiFi module from 1.x to 2.x, the ESP WiFi
module _will lose_ its WiFi config. You will then need to either connect via
USB Serial to re-configure the WiFi config, or copy a
[runonce.g](https://docs.duet3d.com/en/User_manual/Tuning/Macros#runonceg)
macro to the `/sys` folder containing the GCode sequences for programming your
WiFi connection details again. Here is an example runonce.g for this purpose;
edit your connection details before using it.

```text
; runonce.g to reprogram your wifi chip.
; Runs once, then deletes itself.
M552 S0                               ; disable network
G4 P1000                              ; wait a second
M587 S"WiFi_SSID" P"WiFi_Password" ; configure WiFi
G4 P1000                              ; wait a second
M552 S1                               ; enable network
```

## Update methods

There are two update methods: Using the ReleaseMgr plugin which helps
streamline the experience, or manually updating which does not require
installing a plugin and works on stock installs (You can also update manually
after installing the ReleaseMgr plugin if the need exists for some reason).

### Method 1 - Using ReleaseMgr

#### Installation of the ReleaseMgr plugin

* Download ReleaseMgr from [here](https://plugins.duet3d.com/plugins/ReleaseMgr.html)  
  * ensure you've downloaded the correct version of the plugin for the version of DWC you are running.  
* Upload the zip file to DWC via the Settings => Plugins => External Plugins screen.
* Confirm the installation, and follow the steps on-screen.
* Start ReleaseMgr Plugin and it will appear in the left hand menu.  

#### Usage

Follow the instructions [here](https://github.com/MintyTrebor/ReleaseMgr/wiki/Navigation) for usage.  

### Method 2 - Manually updating

It is recommended to carry out updating of the firmwares in the following
order:

* Any toolboards or expansion boards first
* then the mainboard firmware,
* then the WiFi firmware
* and finally DWC.  

* STM32 FIRMWARE - When updating the firmware, you can decide to either install the [latest stable](https://github.com/gloomyandy/RepRapFirmware/releases/latest) firmware or install the [latest unstable](https://github.com/gloomyandy/RepRapFirmware/releases) version. Download the correct firmware file using the board type you noted down above.  
* Duet FIRMWARE - For all toolboards and expansion boards, the firmware can be found [here](https://github.com/Duet3D/RepRapFirmware/releases) and you **MUST** ensure that the version number matches the version of the firmware that you have chosen to install.  
* DWC - When downloading [DWC](https://github.com/Duet3D/DuetWebControl/releases), you **MUST** ensure that the version number matches the version of the firmware that you have chosen to install.  
* WiFi FIRMWARE - For versions 1.27-02 and below, it can be found [here](https://github.com/gloomyandy/DuetWiFiSocketServer/releases). Version 2.1b3 and above can be found [here](https://github.com/gloomyandy/RepRapFirmware/releases). If you are running a separate WiFi module and you have not connected the RX and TX connections, you will need to update the WiFi module using esptools. Please see [here for ESP8266](./stm32_esp8266.html) and [here for ESP32](./stm32_esp32.html).  

#### Installing

You can install updates from either "System" using the "Upload System Files"
button or "Machine Specific" by using the "Install Update" button.  Click the
button, select the file and then the open button. Once uploaded, DWC will ask
if you want to install the update where you should click "yes".  

* Do not unzip and zip files before hand, DWC will handle this.  
* Install the updates in the following order:
  * Any toolboards or expansion boards first
  * then the mainboard firmware
  * then the WiFi firmware
  * and finally DWC.

### Rolling back a release

Its really simple to roll back a release in standalone mode. In that case, you
run the same procedure as above, just with the previous versions of the
firmware(s) and DWC. If you had to adjust configurations or macros for a new
version, those changes also need to be undone (see the note about having
backups at the beginning of this page).

### Starting from scratch

See [https://teamgloomy.github.io/getting_started.html#firmware](Getting
Started) in case you need to install RRF from scratch. Since RRF usually does
updates from a running system, this should only be necessary in rare cases.
