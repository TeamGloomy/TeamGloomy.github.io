---
title: Short to ground errors
tags: []
keywords: 
last_updated: 11/03/2021
summary: "Details about what could cause a short to ground error"
sidebar: mydoc_sidebar
permalink: short_to_ground.html
folder: mydoc
comments: false
toc: false
---

The short to ground error can be triggered by a number of things not just a simple connection to ground. In particular a bad connection to one of the coil windings can also trigger this error. It is worth searching the duet forum for "short-to-ground" to see various reports. 

Things to be looking at very closely...
1. Check your M122 output to make sure that you are not getting a large number of read/write errors or timeouts with the UART connection to the driver.
2. If you have not done so already, replace the wiring between the motor and the board.
3. Consider swapping/replacing the motor.
4. Inspect very carefully the connector that goes to the motor. Look for any stray solder, or wire strands that may be bridging the connectors. Similarly inspect the board to see if the connector has a good soldered connection.
5. Inspect the soldering of the the driver socket.
6. Inspect the driver socket to see if there is anything that could be causing a poor connection with any of the pins.