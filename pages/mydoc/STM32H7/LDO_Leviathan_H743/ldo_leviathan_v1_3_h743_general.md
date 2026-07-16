---
title: LDO Leviathan v1.3 H743 General Information
tags: []
keywords: 
last_updated: 28/06/2026
summary: "General information regarding the LDO Leviathan v1.3 H743"
permalink: ldo_leviathan_v1_3_h743_general.html
folder: mydoc
comments: false
toc: false
datatable: true
boardname: LDO Leviathan v1.3 H743
---

{% include warning.html content="Documentation for the LDO Leviathan v1.3 H743 is currently incomplete. The board is supported by RRF 3.5.0 and later but dedicated wiki pages have not yet been written." %}

## Overview

{% include note.html content="These instructions apply to RRF 3.5.0 and later, including RRF 3.6.x. Use the [TeamGloomy Config Tool](https://teamgloomy.github.io/configtool/) to generate a starter configuration for this board." %}

This page will cover general information for the {{page.boardname}} board. Documentation is being written and will be added here once complete.

SBC-only board. Thermistor inputs use a 2.2k pull-up (not 4.7k); this is pre-configured in RRF 3.5.0+. Connects via SBC only.

### Initial Installation

The board that you will receive doesn't have any firmware installed so when plugged into a computer, the board will show as an unidentified device.
Follow the [SBC instructions]({{ 'ldo_leviathan_v1_3_h743_connected_sbc.html' | relative_url }}) once they are available.
