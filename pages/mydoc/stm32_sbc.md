---
title:  Configuring an SBC for STM32 Boards
tags: 
keywords: 
last_updated: 02/05/2021
summary: "Configuring an SBC for STM32 Boards"
sidebar: mydoc_sidebar
permalink: stm32_sbc.html
folder: mydoc
toc: false
comments: false
---

A Raspberry Pi 3/3+/4 is recommended (Raspberry Pi Zero and lower than a 3 (i.e. the original and 2b) are not supported)

## Prepare the Raspberry Pi

DuetPi is the official Debian image based on Raspbian that is customised for the Duet 3. If you are not very familiar with the Raspberry Pi, it is strongly recommended to use it instead of the stock Raspbian image.

There are two versions of DuetPi available, one with and another one without GUI:

* [DuetPi Lite](https://pkg.duet3d.com/DuetPi-lite.zip) without GUI
* [DuetPi](https://pkg.duet3d.com/DuetPi.zip) with GUI

These versions are targeted at ARMv7 processors like the Raspberry Pi 3 or 4.

Once downloaded, use a flashing application like Win32DiskImager or baleanaEtcher. You can follow the [official Raspberry Pi instructions](https://www.raspberrypi.org/documentation/installation/installing-images/) for further details.

When the image of your choice has been flashed, the Duet 3 can be connected to via the hostname "duet3". It comes preconfigured with mDNS enabled (via avahi), SSH activated (on the lite version only) and the standard credentials "pi" and "raspberry". To set up WiFi, you can edit "wpa_supplicant.conf" on the SD card (first partition), see [here](https://www.raspberrypi.org/documentation/configuration/wireless/headless.md) for instructions.  

{% include important.html content="The DuetPi with GUI image does not have a wpa_supplicant.conf file. This will have to be created manually" %}

If you want to enable SSH on the DuetPi with GUI image, SSH can be enabled by placing a file named ssh, without any extension, onto the boot partition of the SD card from another computer (this is only needed for the GUI version). When the Pi boots, it looks for the ssh file. If it is found, SSH is enabled and the file is deleted. The content of the file does not matter; it could contain text, or nothing at all.

## Updating to the latest stable version

Regardless of whether you are installing the LPC specific DSF changes for the first time or are updating to the latest stable version, the procedure is the same. We suggest using the automatic mode.

<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a class="noCrossRef" href="#automatic" data-toggle="tab">Automatic Mode Stable</a></li>
    <li><a class="noCrossRef" href="#autobeta" data-toggle="tab">Automatic Mode Unstable</a></li>
    <li><a class="noCrossRef" href="#manual" data-toggle="tab">Manual Mode</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="automatic" markdown="1">

## Automatic Mode Stable

To use the automatic updater, send the following:

```
wget https://raw.githubusercontent.com/TeamGloomy/LPC-STM32-DSF-Install_Script/master/RRF_STM_3_2_2.sh
sudo chmod 755 RRF_STM_3_2_2.sh
./RRF_STM_3_2_2.sh
```

This does everything from the manual section. 

If the updates fail with an error exit status 1, run the following and then rerun the script.  
```
sudo mv /var/lib/dpkg/info/duet* /tmp/
sudo mv /var/lib/dpkg/info/reprapfirmware.* /tmp/
sudo apt-get update
sudo dpkg --configure -a
sudo apt-get install --reinstall duetcontrolserver
```

</div>

<div role="tabpanel" class="tab-pane active" id="autobeta" markdown="1">

## Automatic Mode Unstable

To use the automatic updater, send the following:

```
wget https://raw.githubusercontent.com/TeamGloomy/LPC-STM32-DSF-Install_Script/master/RRF_STM_3_3_Beta_3.sh
sudo chmod 755 RRF_STM_3_3_Beta_3.sh
./RRF_STM_3_3_Beta_3.sh
```

This does everything from the manual section. 

If the updates fail with an error exit status 1, run the following and then rerun the script.  
```
sudo mv /var/lib/dpkg/info/duet* /tmp/
sudo mv /var/lib/dpkg/info/reprapfirmware.* /tmp/
sudo apt-get update
sudo dpkg --configure -a
sudo apt-get install --reinstall duetcontrolserver
```

</div>

<div role="tabpanel" class="tab-pane" id="manual" markdown="1">

## Manual Instructions

SSH into your SBC and follow the instructions below
If you've held the packages to prevent updating, run
```
sudo apt-mark unhold \
    duetsoftwareframework \
    duetcontrolserver \
    duetruntime \
    duetsd \
    duetsoftwareframework \
    duettools \
    duetwebcontrol \
    duetwebserver \
    reprapfirmware
```
Then run
```
sudo apt update
sudo apt upgrade
```
If you want to rehold the packages, run
```
sudo apt-mark hold \
    duetsoftwareframework \
    duetcontrolserver \
    duetruntime \
    duetsd \
    duetsoftwareframework \
    duettools \
    duetwebcontrol \
    duetwebserver \
    reprapfirmware
```

</div>

</div>
