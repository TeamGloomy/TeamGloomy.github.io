---
title: Exec on MCode Guide
tags: []
keywords: 
last_updated: 18/01/2022
summary: "Exec on MCode installation Guide"
permalink: execonmcode_stm32f4.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Guide

The shutdown example is available on the [github page](https://github.com/wilriker/execonmcode)  

In order to make it run as a service on Raspbian:  

1. Download the latest version  

```text
wget [url to latest version]
```  

2. Rename to be just execonmcode  

```text
mv [latest version] execonmcode
```  

3. Make it executable  

```text
chmod +x execonmcode
```  

4. Move to the system bin folder  

```text
mv execonmcode /usr/local/bin
```  

5. Download the shutdown script from the GitHub page  

```text
wget https://raw.githubusercontent.com/wilriker/execonmcode/ad42d63d7392fecd7a21a69921b1dc70293d44ac/shutdownsbc.service
```  

6. Make it executable and set the permissions  

```text
chmod +x shutdownsbc.service
chmod 777 shutdownsbc.service
chown root:root shutdownsbc.service
```  

7. Move to the system service folder  

```text
sudo mv shutdownsbc.service /etc/systemd/system
```  

8. Make it start up with the OS  

```text
systemctl enable shutdownsbc.service
```

9. You can check the status of the new shutdown service and start it up  

```text
systemctl status shutdownsbc.service
systemctl start shutdownsbc.service
```
