---
title: Installing a BLTouch to a Fly-E3 on an Ender 3
tags: []
keywords: 
last_updated: 04/02/2021
summary: "Installing a BLTouch to a Fly-E3 on an Ender 3"
sidebar: mydoc_sidebar
permalink: ender_3_bltouch.html
folder: mydoc
comments: false
toc: false
---

## Overview

This guide will walk you through installing a BLTouch to an Ender 3 that has already been converted to a Fly-E3 STM32 board.  

{% include note.html content="Although written around the original Ender 3, this guide is also applicable for the Ender 3 Pro and the Ender 3 V2"%} 

### Hardware Requirements

1 x [BLTouch](https://www.antclabs.com/) - An official BLTouch is recommended over a clone as clones generally have poor repeatability.
2 x M3 Screws
2 x M3 Nuts
1m minimum of 5 wire ribbon cable , such as [this](https://www.amazon.co.uk/Aussel-10Wire-20Feet-Rainbow-Connectors/dp/B077XFH9Z3/ref=sr_1_8?crid=3C40IX0Q135JT&dchild=1&keywords=5+core+ribbon+cable&qid=1612702004&refinements=p_76%3A419158031&rnid=419157031&rps=1&sprefix=5+core+ribbon%2Caps%2C161&sr=8-8). It is also possible to buy the BLTouch with an extension kit.
1 x [Dupont Connector Kit](https://www.amazon.co.uk/QLOUNI-620PCS-2-54mm-Dupont-Conector-Jst-Sm-1-2-3-4-5-6-Pin/dp/B0774HCRY1/ref=sr_1_3?dchild=1&keywords=dupont+connectors&pd_rd_r=2ea400e9-b5d0-4ed9-91fd-aac83e4662c6&pd_rd_w=1EPGw&pd_rd_wg=any3t&pf_rd_p=cd9132d2-f159-4363-880a-030b3e94826d&pf_rd_r=G5X4PJG1WHK9P1PNZAB3&qid=1612702420&sr=8-3) or if you don't have a [suitable crimper](https://www.amazon.co.uk/JZK-Crimper-Crimping-connectors-Assorted/dp/B07PCQ5VMV/ref=sr_1_36?crid=3P0CIA1W7OBBN&dchild=1&keywords=dupont+connectors+kit&qid=1612702545&sprefix=ribbon+cable%2Caps%2C186&sr=8-36). This is required if making your own cable. 

### Mounting the BLTouch

Before you undertake the actual installation of the BLTouch, you will need to print a mount.  
The mount used within this instruction is [this one](https://www.thingiverse.com/thing:3733792).  

Remove the two screws securing the fan cage to the X carriage.  
Attach the BLTouch mount to the X carriage, as shown below.  

{% include image.html file="ender_3_bltouch.jpg" alt="Ender 3 BLTouch" caption="Ender 3 BLTouch Mount" %}

Then secure the BLTouch to the mount as shown below.

{% include image.html file="ender_3_bltouch1.jpg" alt="Ender 3 BLTouch" caption="Ender 3 BLTouch Mounting" %}

### Wiring

#### The cable

The BLTouch has 5 cables to control it. 3 for the servo and 2 for the endstop.  
The cable needs to be extended to fit this printer. If you have purchased the extension cable, you can skip this bit.  
If making your own cable, it is suggested to use female dupont connectors on one end and male dupont connectors on the other. Don't put the male end on until you have measured the cable length.  

#### Connecting the cable to the BLTouch

To make it easier when connecting the cable to the board, the black cable on the probe connector should be next to the yellow connector of the servo cable. To confirm, the colour order of the BLTouch cables should be white, black, yellow, red and brown.  

#### Cable organisation

You can either feed the cable through the existing cable management mesh or cable tie the cable to the outside. Then feed the cable through the back of the case with the others.  

#### Connecting the cable to the Fly-E3

The cable should be connected to the Fly-E3 as shown below.  

{% include image.html file="fly_e3_bltouch.png" alt="Fly-E3 BLTouch" caption="Fly-E3 BLTouch Wiring" %}

#### Other changes

The Z axis endstop can be removed as it is no longer required for the printer to function.  

### Config Changes

If this is the first time you have set up the Ender 3 with the Fly-E3 board, a pre-configured config is available [here](https://github.com/TeamGloomy/ender-3-fly-E3/tree/bltouch).  

Otherwise follow the information on the [Fly-E3 BLTouch Page](fly_e3_bltouch.html) for the items to change in your config.  

### Wrap up

Your Z Probe trigger height will have to be measured.  

There is a macro [here](https://github.com/TeamGloomy/ender-3-fly-E3/blob/bltouch/macros/calibrate_bltouch.g), that can be used. If using this one, make sure your hotend and bed are up to temperature and levelled before measuring the trigger height. Once you've worked out your average, change the Z value in G31, remembering that RRF uses a positive value.

If not using the macro, use the instructions found [here](https://docs.duet3d.com/en/User_manual/Connecting_hardware/Z_probe_testing#calibrate-the-z-probe-trigger-height)