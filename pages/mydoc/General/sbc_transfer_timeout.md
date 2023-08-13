---
title: SBC Transfer Ready Timeouts
tags: []
keywords: 
last_updated: 25/06/2021
summary: "Information about Transfer Ready Timeouts"
sidebar: mydoc_sidebar
permalink: sbc_transfer_timeout.html
folder: mydoc
comments: false
toc: false
---

Unfortunately some setups seem to suffer problems others do not. Things that may help to overcome the issue...

1. Make sure you are running at least version 3.2.2 on both ends (especially on the rPi), this version has a fix that helps a lot woth noise on the transfer ready line.
2. Keep the cable between the boards as short as possible and use a ribbon cable (or possibly twisted pairs), shielding of the cable may help. The shorter the better. dc42 recommends less than 15cm
3. Keep the cable routing away from other cables especially power supply and switched heater wiring
4. Ensure that there is a very good common ground connection between the rPi and main board (the connectors in the ribbon cable may not be enough).
5. Ensure that the rPi has a very good 5V power supply.
6. There are a number of threads on the Duet forum that may help:  
<https://forum.duet3d.com/topic/21834/restart-duetcontrolserver-sbc/5>
<https://forum.duet3d.com/topic/21357/duet2-wifi-duex5-and-sbc?_=1614522809264>

Gloomyandy runs two SBC based printers (one STM32 one LPC) and has no issues with the connection between the boards. In both cases he has the rPi mounted "back to back" with the main board and run a very short ribbon cable that does not run over the main board and that forms a "U" shape between the two boards.  

Another potential solution is to install a 0.47uf Y1 capacitor across the negative terminal of the power supply to the earth terminal of the power supply that connects to the mains ground. Also remove the negative supply from the raspberry pi power supply and attached the negative supply of the printer power supply to the Pi power supply at the terminals on the power supply. This got rid the high resistance ground connection that connected the Pi to the Skr pro experienced by @jimmaymaddness.

Another potential solution is to shield the bed temperature cable, with the shield grounded to the chassis of the printer. Thanks @jimmaymaddness.  
