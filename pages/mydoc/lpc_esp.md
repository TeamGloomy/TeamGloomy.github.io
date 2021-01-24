---
title:  Configuring an ESP8266 for LPC Boards
tags: 
keywords: 
last_updated: 16/01/2021
summary: "Configuring an ESP8266 for LPC Boards"
sidebar: mydoc_sidebar
permalink: lpc_esp.html
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

The image for to flash to the ESP can be found [here](https://github.com/gloomyandy/DuetWiFiSocketServer/releases).  

{% include note.html content="Use the latest release for stable builds and the newest pre-release for unstable builds.  <br/>
Make sure you download DuetWifiServer-lpc.bin  " %} 

It should be flashed using [esptool.py](https://github.com/espressif/esptool). Use the code below as an example. Change the Com port to match the ESP device and make sure you give the .bin file its complete file location if its not in the same folder as esptools.

`esptool.py --port COM4 write_flash 0x00000 DuetWifiServer-lpc.bin`

You can also follow [PCR's instructions](https://rosspeter.org/flashing-the-webserver-on-my-rff-skr-adapterboard) if you don't get on with esptool.

On a side note, I have a very handy little tool installed on my main laptop thats monitoring for any serial devices as they are plugged in and you get a popup with the Com port number. If you’re interested, it can be found [here](https://helmpcb.com/software/serial-port-monitor).

</div>

<div role="tabpanel" class="tab-pane" id="updating" markdown="1">

There are two methods to update the boards if a new version of the ESP firmware is released

### Manual Updating

This method follows the flashing instructions for preparation. To allow the ESP to be put in reset mode, its best to disconnect it from the LPC based board.

### DWC based Updating

{% include warning.html content="This cannot be used in conjunction with using a screen on the SKR v1.3" %} 

To allow this to take place, extra cables will require adding between the board and the ESP. 
The WiFi UART interface will also require changes to your board.txt file. You need to define the pins used by the UART (the builds provided have support for UART0 and UART3 defined, this takes the form:
`8266wifi.serialRxTxPins = {RXPin, TXPin}`

so as an example, for the UART connected to the SKR WiFi header you can use
`8266wifi.serialRxTxPins = {4.29, 4.28}`

or for the UART connected to the SKR TFT/Aux header.
`8266wifi.serialRxTxPins =  {0.3, 0.2}`

You will also need to hook up the ESP8266 UART pins (marked RX/TX on most modules) and to allow the LPC to put the module in to flash mode you may need to change the resistor that goes to the GPIO0 pin from the 2200 Ohm specified to a lower value, such as 47 Ohm.  

Upload the new firmware for the ESP to the system folder using DWC. Then issue the command M997 S1.

</div>

</div>
