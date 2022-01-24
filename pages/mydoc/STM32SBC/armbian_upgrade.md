---
title: Upgrading Armbian and DSF
tags: []
keywords: 
last_updated: 21/12/2021
summary: "How to upgrade Armbian and DSF"
sidebar: mydoc_sidebar
permalink: armbian_upgrade.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Upgrading Armbian

To upgrade the underlying OS, use the following command over SSH or over a console connection.   
```
sudo apt update && sudo apt upgrade -y
```

## Upgrading DSF

There is an upgrade script built into the TeamGloomy release of Armbian.  
When you invoke it, you must also pass through a version number for the version of DSF you wish to install.
To use it, as an example, send the following command over SSH or over a console connection.   

```
rrf_upgrade 3.4-b7
```  
The script can also be used to downgrade the version of DSF.  
An example of installing a stable release is given below.  
```
rrf_upgrade 3.3.0
```  

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