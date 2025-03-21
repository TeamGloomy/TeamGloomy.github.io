---
title:  Configuring an ESP8266 for LPC Boards
tags: 
keywords: 
last_updated: 14/07/2021
summary: "How to configure an ESP8266 for use with LPC Based Boards"
sidebar: mydoc_sidebar
permalink: lpc_esp8266.html
folder: mydoc
toc: false
comments: false
---


<ul id="profileTabs" class="nav nav-tabs">
    <li class="active"><a class="noCrossRef" href="#preparing" data-toggle="tab">Initial Configuration</a></li>
    <li><a class="noCrossRef" href="#updating" data-toggle="tab">Updating Existing</a></li>
</ul>
  <div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="preparing" markdown="1">

{% include warning.html content="An ESP-01 cannot be used with RRF." %}  

The image for to flash to the ESP8266 can be found [here](https://github.com/gloomyandy/DuetWiFiSocketServer/releases).  

{% include note.html content="Use the latest release for stable builds and the newest pre-release for unstable builds.  <br/>
Make sure you download DuetWifiServer-lpc-el.bin  " %} 

It should be flashed using [esptool.py](https://github.com/espressif/esptool). Use the code below as an example. Change the Com port to match the ESP8266 device and make sure you give the .bin file its complete file location if its not in the same folder as esptools.

`esptool.py --port COM4 write_flash 0x00000 DuetWiFiServer-esp8266-lpc.bin`

You can also follow [PCR's instructions](https://rosspeter.org/flashing-the-webserver-on-my-rff-skr-adapterboard) if you don't get on with esptool.

If flashing a board with 16MB flash size, such as the Wemos Mini Pro, the following code should be used.  
`esptool.py --port COM4 write_flash --flash_size 4MB 0x00000 DuetWiFiServer-lpc.bin`

On a side note, I have a very handy little tool installed on my main laptop thats monitoring for any serial devices as they are plugged in and you get a popup with the Com port number. If you’re interested, it can be found [here](https://helmpcb.com/software/serial-port-monitor).

### RRF based flashing

The WiFi UART interface will require changes to your board.txt file. You need to define the pins used by the UART (the builds provided have support for UART0 and UART3 defined, this takes the form:
`8266wifi.serialRxTxPins = { RXPin, TXPin }`
This information has been added to the connecting via WiFi page for each board.  

You will also need to hook up the ESP8266 UART pins (marked RX/TX on most modules).

Download the latest stable DuetWiFiServer-lpc-el.bin (or the latest unstable release if using unstable releases) from [here](https://github.com/gloomyandy/DuetWiFiSocketServer/releases), rename it to DuetWiFiServer.bin and put it in the sys folder on the SD card.

{% include important.html content="From 3.3, the DuetWiFiServer.bin file needs to be placed in a folder called firmware. This folder should be placed in the root of the SD card."%}  

Then send the following commands  
```
M552 S0
M997 S1
M552 S0
```

</div>

<div role="tabpanel" class="tab-pane" id="updating" markdown="1">

There are two methods to update the boards if a new version of the ESP8266 firmware is released

### Manual Updating

This method follows the flashing instructions for preparation. To allow the ESP8266 to be put in reset mode, its best to disconnect it from the LPC based board.

### RRF based Updating

{% include warning.html content="This cannot be used in conjunction with using a screen on the SKR v1.3" %} 

The WiFi UART interface will require changes to your board.txt file. You need to define the pins used by the UART (the builds provided have support for UART0 and UART3 defined, this takes the form:
`8266wifi.serialRxTxPins = { RXPin, TXPin }`
This information has been added to the connecting via WiFi page for each board. 

You will also need to hook up the ESP8266 UART pins (marked RX/TX on most modules).

Download the latest stable DuetWiFiServer-lpc-el.bin (or the latest unstable release if using unstable releases) from [here](https://github.com/gloomyandy/DuetWiFiSocketServer/releases) and upload it to the system folder using DWC. DWC should ask you if you want to install the update. If it doesn't, issue the command M997 S1.

</div>

</div>
