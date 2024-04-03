---
title: Adding CAN-FD to an SKR Pro v1.2 in RRF 3.5.0 Onwards
tags: []
keywords: 
last_updated: 03/04/2024
summary: "How to add CAN-FD to an SKR Pro v1.2 and connect a CAN-FD Toolboard"
sidebar: mydoc_sidebar
permalink: skr_pro_1.2_spi2canfd_3_5.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: SKR Pro v1.2
spiModule: driver
moduleURL: https://s.click.aliexpress.com/e/_De3n8p7
moduleType: driver
spiJumpers: skr_pro_spi_jumpers.png
driverSPICSPin: PG_12
driverSPIChannel: 2
expSPICSPin: PA_4
expSPIChannel: 0
dfdType: "Left"
---

{% include important.html content="Adding CAN-FD will only work when you are using an ESP32 based WiFi module" %}

{% include custom/3.5/spitocanfd_overview.html %}

{% include custom/3.5/spitocanfd_dfd.html %}
