---
title: Adding CAN-FD to an SKR Pro v1.1 and v1.2
tags: []
keywords: 
last_updated: 29/08/2023
summary: "How to add CAN-FD to an SKR Pro v1.1 and v1.2 and connect a CAN-FD Toolboard"
sidebar: mydoc_sidebar
permalink: skr_pro_spi2canfd.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: SKR Pro v1.1 and v1.2
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

{% include custom/spitocanfd_overview.html %}

{% include custom/spitocanfd_dfd.html %}
