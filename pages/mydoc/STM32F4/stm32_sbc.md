---
title:  Configuring an SBC for STM32 Boards
tags: 
keywords: 
last_updated: 10/01/2022
summary: "Configuring an SBC for STM32 Boards"
sidebar: mydoc_sidebar
permalink: stm32_sbc.html
folder: mydoc
toc: false
comments: false
datatable: true
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

## Updating DSF

A script has been provided to make updating the version of DSF on your SBC a lot easier. Although we don't make any changes to DSF to make it compatible with the STM32 port of RRF, there are a couple of features we have added to make your experience better. They are as follows:
* As the STM32 port lags the official duet releases by a few days, we mark the DSF linux packages as being on hold. This allows you to continue to update the SBC without running the risk of updating DSF to a version which is incompatible with the firmware running on your board.
* For those of you running DSF on an SBC other than a raspberry pi, we backup the transfer ready pin, SPI device and GPIO chip you've set and restore it after upgrade.
* The script allows you to easily upgrade or downgrade to a specific version through the use of a version argument.
* The script is self updating so you only need to install it once.

To download the script onto your SBC, run the following code **only once**.  
```
sudo wget https://raw.githubusercontent.com/TeamGloomy/rrf_stm32_sbc/master/armbian/userpatches/overlay/rrf_upgrade.sh -O  /usr/local/bin/rrf_upgrade && sudo chmod a+x /usr/local/bin/rrf_upgrade
```  
To use it, as an example, send the following command over SSH or over a console connection.   

```
rrf_upgrade 3.4-b7
```  
An argument must always be added to the end of *rrf_upgrade* so it knows which version to install.  

A list of the available arguments for the script can be found below.  

<div class="datatable-begin"></div>

|Release Argument|Release Type|
| :------------- |:-------------|
|3.1.1|Stable|
|3.2.0-beta1+1|Unstable|
|3.2.0-beta1|Unstable|
|3.2.0-beta2|Unstable|
|3.2.0-beta3|Unstable|
|3.2.0-beta4|Unstable|
|3.2.0-rc1|Unstable|
|3.2.0-rc2|Unstable|
|3.2.0|Stable|
|3.2.2|Stable|
|3.3-b2|Unstable|
|3.3-b3|Unstable|
|3.3-rc1|Unstable|
|3.3-rc2|Unstable|
|3.3-rc3|Unstable|
|3.3.0|Stable|
|3.4-b1|Unstable|
|3.4-b2|Unstable|
|3.4-b3|Unstable|
|3.4-b4|Unstable|
|3.4-b5|Unstable|
|3.4-b6|Unstable|
|3.4-b7|Unstable|

<div class="datatable-end"></div>

For reference, the packages available and their names can be found [here](https://pkg.duet3d.com/dists/unstable/armv7/binary-armhf/)