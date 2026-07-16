---
title: Adding a Camera
tags: []
keywords: 
last_updated: 28/01/2023
summary: "Adding a Camera to DWC"
permalink: camera_stm32f4.html
folder: mydoc
comments: false
toc: false
---

## Using mjpg streamer - USB Camera only

Follow [these instructions](https://snapcraft.io/install/mjpg-streamer/raspbian){:target="_blank"} to get mjpg streamer installed on a Raspberry Pi. If using RRF in SBC mode, then that SBC can be used. If setting up with RRF in WiFi mode, a Pi Zero is powerful enough.  

Once mjpg streamer is installed, make the following changes to the  mjpg streamer config.  

```text
PORT="-p 8080"
DAEMON="true"
```

Now you can access the webcam on the same IP address as DWC by browsing to `http://<your-printer-ip-address>:8080/?action=stream`.  
You can also add this URL in the General Settings tab of DWC, so the webcam feed shows under "Current Job".  

## DSF Plugin - Pi Cam or USB

There is a DSF plugin for using a pi camera or USB camera.  
Information and instructions can be found [here](https://plugins.duet3d.com/plugins/MotionWebcamServerPlugin.html){:target="_blank"}

## RPi-Cam-Web-Interface - Pi Cam Only

Follow the installation instructions found [here](https://elinux.org/RPi-Cam-Web-Interface#Installation_Instructions){:target="_blank"}

Set the webcam URL as `http://IPAddress/html/cam_pic_new.php`

## Videostream - Both USB Cameras and Pi Cameras - Recommended

Follow the instructions [here](https://github.com/stuartofmt/videostream){:target="_blank"}

## Security Camera

Buy a security camera that supports an mjpeg stream.
