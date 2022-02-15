---
title: Fly-E3-Pro-v2 General Information
tags: []
keywords: 
last_updated: 07/01/2022
summary: "General information regarding the Fly-E3-Pro-v2"
sidebar: mydoc_sidebar
permalink: fly_e3_prov2_general.html
folder: mydoc
comments: false
toc: false
datatable: true
---

## Overview

This control board has been discontinued by Flymaker/Mellow due to a number of issues that have been identified. It is recommended to stop using this printer board and return it to seller where it was purchased from for a refund.

## Issue 1

A number of users reported heater outputs used for controlling a bed as failing (resulting in a "closed" mosfet and power being continually supplied to the bed) within 30 minutes of being used. Users were asked to return their boards and a modification was carried out to prevent the mosfets from failing. Unfortunately, that modification was unsuccessful and report of bed mosfets failing on modified boards were still being reported. Because of this issue, the board was withdrawn from sale and discontinued.

## Issue 2

A user reported that on boot up, if a fan mosfet was not declared within a config that the output would remain on. On further investigation, the fan outputs will remain on when either no sd card is present or when they are not defined in a config.g file. This is due to the lack of pulldown resistor on the output pin. This means that if there is an SD card issue (no board.txt is loaded, config.g not ran or failed sd card), they will default to being on with no control. This may also be an issue with Marlin and Klipper.
Also on the board available for testing here, when powered by 12v and with the 12v jumpers applied, the heater mosfets also remained on with no sd card installed or when they weren't defined in firmware. 
Essentially, in some circumstances the fan and heater MOSFETs can turn on without being commanded by the firmware.

## Conclusion

Therefore, this board does not appear safe for long term or unattended usage. Please contact your reseller for a refund. 

This issue will be fixed in the Fly-E3-Pro-V3 board when it is released (as we have been working with flymaker to get it corrected) by using a 74hc541 buffer for both the fan and heater mosfets and pulling the output to ground when not defined, which is the same implementation as on the super8, CDYv3 and duet boards.