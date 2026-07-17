---
title: "RepRapFirmware for LPC and STM32 Boards"
last_updated: 12/07/2026
permalink: index.html
summary: Choose your board's MCU family to get started with RepRapFirmware documentation
toc: false
comments: false
hide_sidebar: true
---

Welcome to the TeamGloomy port of [RepRapFirmware](http://www.duet3d.com){:target="_blank"} for LPC and STM32 based 3D printer boards.
This firmware brings all the power of Duet's open-source firmware to a wide range of third-party hardware.

**Choose your board type below to get started:**

<div class="mcu-selector">

  <div class="mcu-card mcu-card-h7">
    <div class="mcu-card-header">
      <h3>STM32H7 Based Boards</h3>
      <span class="mcu-badge mcu-badge-active">Stable &mdash; Actively Developed</span>
    </div>
    <div class="mcu-card-body">
      <ul>
        <li>Fly, BTT, LDO, Fysetc &amp; more</li>
        <li>WiFi (ESP32) and SBC connectivity</li>
        <li>CAN-FD toolboards supported</li>
      </ul>
    </div>
    <a class="mcu-btn mcu-btn-h7" href="getting_started.html">Get Started with STM32H7 &raquo;</a>
  </div>

  <div class="mcu-card mcu-card-f4">
    <div class="mcu-card-header">
      <h3>STM32F4 Based Boards</h3>
      <span class="mcu-badge mcu-badge-active">Stable &mdash; Bug Fixes Only</span>
    </div>
    <div class="mcu-card-body">
      <ul>
        <li>Fly, BTT Octopus/SKR, Gemini &amp; more</li>
        <li>WiFi (ESP8266/ESP32) and SBC connectivity</li>
        <li>CAN-FD toolboards via SPI2CAN adapter</li>
        <li>Firmware updates ended at RRF 3.6.3</li>
      </ul>
    </div>
    <a class="mcu-btn mcu-btn-f4" href="getting_started_stm32f4.html">Get Started with STM32F4 &raquo;</a>
  </div>

  <div class="mcu-card mcu-card-lpc">
    <div class="mcu-card-header">
      <h3>LPC Based Boards</h3>
      <span class="mcu-badge mcu-badge-legacy">Legacy &mdash; No Further Updates</span>
    </div>
    <div class="mcu-card-body">
      <ul>
        <li>SKR, MKS Sbase, Azteeg, ReArm &amp; more</li>
        <li>WiFi (ESP8266) and SBC connectivity</li>
        <li>Firmware updates ended at RRF 3.3.0_16</li>
      </ul>
    </div>
    <a class="mcu-btn mcu-btn-lpc" href="getting_started_lpc.html">Get Started with LPC &raquo;</a>
  </div>

</div>

## Supported Boards

<div class="board-list-grid">

  <div class="board-list-column board-list-h7">
    <h4>STM32H7</h4>
    <ul>
      <li>AFC-Lite V1.0</li>
      <li>Fly-E3-Ultra H723</li>
      <li>Fly-C5 H723 (Only with RRF 3.7)</li>
      <li>Fly-C8-Pro H723 (Only with RRF 3.7)</li>
      <li>Fly-MMU V1.0 H723</li>
      <li>Fly-ProX10 H723</li>
      <li>Fly-Super5Pro H723</li>
      <li>Fly-Super8Pro H723</li>
      <li>Fly-Super8Pro H743</li>
      <li>Fysetc Spider King H723</li>
      <li>LDO Leviathan v1.3</li>
      <li>SKR3 H723</li>
      <li>SKR3 H743</li>
      <li>SKR3 EZ H723</li>
      <li>SKR3 EZ H743</li>
      <li>BTT Kraken H723</li>
      <li>BTT Scylla v1.0 H723</li>
    </ul>
    <a href="supported_boards.html">Full board and driver details &raquo;</a>
  </div>

  <div class="board-list-column board-list-f4">
    <h4>STM32F4</h4>
    <ul>
      <li>Fly-407ZG</li>
      <li>Fly-CDYv2</li>
      <li>Fly-CDYv3</li>
      <li>Fly-E3</li>
      <li>Fly-E3-v2</li>
      <li>Fly-E3-Pro</li>
      <li>Fly-E3-Pro-v3</li>
      <li>Fly-Gemini-V1</li>
      <li>Fly-Gemini-V1.1</li>
      <li>Fly-Gemini-V2.0</li>
      <li>Fly-Gemini-V3.0</li>
      <li>Fly-Super8-V1</li>
      <li>Fly-Super8-V1.1</li>
      <li>Fly-Super8-V1.2</li>
      <li>Fly-Super8-V1.3</li>
      <li>SKR v2</li>
      <li>SKR-RRF-E3 + Expansion Board</li>
      <li>SKR Pro v1.1</li>
      <li>SKR Pro v1.2</li>
      <li>BTT GTR v1.0 + M5 Expansion Board</li>
      <li>BTT Octopus v1.1 F429 Version</li>
      <li>BTT Octopus Pro v1.0 F429 Version</li>
      <li>BTT Octopus X7</li>
    </ul>
    <a href="supported_boards_stm32f4.html">Full board and driver details &raquo;</a>
  </div>

  <div class="board-list-column board-list-lpc">
    <h4>LPC</h4>
    <ul>
      <li>Azsmz Mini</li>
      <li>Azteeg X5 Mini v1.1</li>
      <li>Azteeg X5 Mini v2</li>
      <li>Azteeg X5 Mini v3</li>
      <li>Fly-CDY</li>
      <li>MKS Sbase v1.3</li>
      <li>MKS SGen L v1.0</li>
      <li>MKS SGen L v2.0</li>
      <li>ReArm</li>
      <li>SKR v1.1</li>
      <li>SKR v1.3</li>
      <li>SKR v1.4 (standard and turbo)</li>
      <li>SKR E3 Turbo</li>
      <li>Smoothieboard</li>
    </ul>
    <a href="supported_boards_lpc.html">Full board and driver details &raquo;</a>
  </div>

</div>

## Partnership

TeamGloomy are working in close partnership with Flymaker/Mellow to ensure that 100% compatibility is obtained with their boards and to cover all of your 3D printer electronics requirements.

## Aliexpress

All links used on the site are affiliate links where possible. If you purchase via a link it will give a tiny percent of commission to the teamgloomy. This will not hurt your wallet and at the same time help us to maintain this project.
