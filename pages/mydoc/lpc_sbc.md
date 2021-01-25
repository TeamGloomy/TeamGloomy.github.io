---
title:  Configuring an SBC for LPC Boards
tags: 
keywords: 
last_updated: 25/01/2021
summary: "Configuring an SBC for LPC Boards"
sidebar: mydoc_sidebar
permalink: lpc_sbc.html
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

## Installing/Updating to the latest stable version

Regardless of whether you are installing the LPC specific DSF changes for the first time or are updating to the latest stable version, the procedure is the same. We suggest using the automatic mode.

<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a class="noCrossRef" href="#automatic" data-toggle="tab">Automatic Mode</a></li>
    <li><a class="noCrossRef" href="#manual" data-toggle="tab">Manual Mode</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="automatic" markdown="1">

To use the automatic updater, send the following:

```
wget https://raw.githubusercontent.com/TeamGloomy/LPC-STM32-DSF-Install_Script/master/RRF_LPC_3_2.sh
sudo chmod 755 RRF_LPC_3_2.sh
./RRF_LPC_3_2.sh
```

This does everything from the manual section.  
Thats the SBC prepared and ready.

</div>

<div role="tabpanel" class="tab-pane" id="manual" markdown="1">

As soon as your Raspberry Pi has established an internet connection, it is recommended to install the latest updates. To do so, connect via SSH (e.g. via PuTTY) to your Raspberry Pi or open a terminal and run

```
sudo apt update
sudo apt upgrade
```

This will install the latest software components and the latest RepRapFirmware version on your Duet 3.

#### Prepare the LPC version of DSF 

Stop the duetcontrolserver and duetwebserver.  
```
sudo systemctl stop duetcontrolserver
sudo systemctl stop duetwebserver
```
Then edit the config.json  
```
sudo nano /opt/dsf/conf/config.json
```
Now change the following lines.
  - SpiBufferSize from 8192 to 3072
  - SpiTransferMode from 0 to 3
  - MaxCodeBufferSize from 356 to 200
  - MaxMessageLength from 4096 to 2560  
  
Now restart duetcontrolserver and duetwebserver   
```
sudo systemctl start duetcontrolserver
sudo systemctl start duetwebserver
```

</div>

</div>
