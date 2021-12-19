---
title: Upgrading Armbian and DSF
tags: []
keywords: 
last_updated: 19/12/2021
summary: "How to upgrade Armbian and DSF"
sidebar: mydoc_sidebar
permalink: armbian_upgrade.html
folder: mydoc
comments: false
toc: false
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
rrf_upgrade 3.4b7
```  
The script can also be used to downgrade the version of DSF.  
An example of installing a stable release is given below.  
```
rrf_upgrade 3.3.0
```  
An example of installing a release candidate is given below.  
```
rrf_upgrade 3.2.0-rc1
```  
For reference, the packages available and their names can be found [here](https://pkg.duet3d.com/dists/unstable/armv7/binary-armhf/)