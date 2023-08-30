---
title: Adding CAN-FD to a Fly-E3-v2
tags: []
keywords: 
last_updated: 30/08/2023
summary: "How to add CAN-FD to a Fly-E3-v2 and connect a CAN-FD Toolboard"
sidebar: mydoc_sidebar
permalink: fly_e3_v2_spi2canfd.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: Fly-E3-v2
spiModule: driver or EXP1/EXP2
moduleURL: https://s.click.aliexpress.com/e/_De3n8p7
moduleType: both
spiJumpers: fly_e3_jumpers.png
driverSPICSPin: PD_0
driverSPIChannel: 2
expSPICSPin: PA_4
expSPIChannel: 0
dfdType: "Left"
---

{% include custom/spitocanfd_overview.html %}

{% include custom/spitocanfd_dfd.html %}

{% include custom/spitocanfd_efd.html %}
