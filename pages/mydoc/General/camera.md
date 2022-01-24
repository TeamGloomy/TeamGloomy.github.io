---
title: Adding a Camera
tags: []
keywords: 
last_updated: 14/07/2021
summary: "Adding a Camera to DWC"
sidebar: mydoc_sidebar
permalink: camera.html
folder: mydoc
comments: false
toc: false
---

## Using mjpg streamer - USB Camera only

Follow [these instructions](https://snapcraft.io/install/mjpg-streamer/raspbian) to get mjpg streamer installed on a raspberry pi. If using RRF in SBC mode, then that SBC can be used. If setting up with RRF in WiFi mode, a pi zero is powerful enough.  

Once mjpg streamer is installed, make the following changes to the  mjpg streamer config.  
```
PORT="-p 8080"
DAEMON="true"
```  
Now you can access the webcam on the same IP address as DWC using http://myduetsipaddress:8080/?action=stream. 
You can also add this to the general setting tab in the DUET, and have the webcam feed page showing under "Current Job". 

## DSF Plugin - Pi Cam only

There is a DSF plugin for using a pi camera.  
Information and instructions can be found [here](https://github.com/TLAS11/DWC-PiWebcam)

## RPi-Cam-Web-Interface - Pi Cam Only

Follow the installation instructions found [here](https://elinux.org/RPi-Cam-Web-Interface#Installation_Instructions)

Set the webcam URL as http://IPAddress/html/cam_pic_new.php

## Videostream - Both USB Camera's and Pi Camera's - Recommended

Follow the instructions here [here](https://github.com/stuartofmt/videostream)

## Security Camera

Buy a security camera that supports an mjpeg stream