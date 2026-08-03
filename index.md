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

{% assign h7Stable = site.latestStableZipSTM32H7 | split: "/" | last | remove_first: "v" %}
{% assign h7Beta = site.latestBetaZipSTM32H7 | split: "/" | last | remove_first: "v" %}
{% assign f4Stable = site.latestStableZipSTM32F4 | split: "/" | last | remove_first: "v" %}
{% assign f4Beta = site.latestBetaZipSTM32F4 | split: "/" | last | remove_first: "v" %}

<div class="firmware-versions">
  <span class="firmware-versions-label">Latest Firmware</span>
  <span class="firmware-versions-item"><strong>STM32H7</strong> {% if h7Stable == h7Beta %}<a href="{{ site.latestStableZipSTM32H7 }}" target="_blank">v{{ h7Stable }}</a>{% else %}Stable <a href="{{ site.latestStableZipSTM32H7 }}" target="_blank">v{{ h7Stable }}</a> &middot; Beta <a href="{{ site.latestBetaZipSTM32H7 }}" target="_blank">v{{ h7Beta }}</a>{% endif %}</span>
  <span class="firmware-versions-item"><strong>STM32F4</strong> {% if f4Stable == f4Beta %}<a href="{{ site.latestStableZipSTM32F4 }}" target="_blank">v{{ f4Stable }}</a>{% else %}Stable <a href="{{ site.latestStableZipSTM32F4 }}" target="_blank">v{{ f4Stable }}</a> &middot; Beta <a href="{{ site.latestBetaZipSTM32F4 }}" target="_blank">v{{ f4Beta }}</a>{% endif %}</span>
</div>

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
      <div class="mcu-board-list">
        <p class="mcu-board-list-label">Supported boards</p>
        <ul class="mcu-board-list-items">
          <li><a href="afc_lite_v1_0_h723_general.html">AFC-Lite V1.0</a></li>
          <li><a href="fly_e3_ultra_general.html">Fly-E3-Ultra H723</a></li>
          <li><a href="fly_c5_h723_general.html">Fly-C5 H723 (Only with RRF 3.7)</a></li>
          <li><a href="fly_c8_pro_h723_general.html">Fly-C8-Pro H723 (Only with RRF 3.7)</a></li>
          <li><a href="fly_mmu_v1_0_h723_general.html">Fly-MMU V1.0 H723</a></li>
          <li><a href="fly_prox10_h723_general.html">Fly-ProX10 H723</a></li>
          <li><a href="fly_super5pro_h723_general.html">Fly-Super5Pro H723</a></li>
          <li><a href="fly_super8pro_h723_general.html">Fly-Super8Pro H723</a></li>
          <li><a href="fly_super8pro_h743_general.html">Fly-Super8Pro H743</a></li>
          <li><a href="fysetc_spider_h723_general.html">Fysetc Spider H723</a></li>
          <li><a href="ldo_leviathan_v1_3_h743_general.html">LDO Leviathan v1.3</a></li>
          <li><a href="skr_3_h723_general.html">SKR3 H723</a></li>
          <li><a href="skr_3_h743_general.html">SKR3 H743</a></li>
          <li><a href="skr_3_ez_h723_general.html">SKR3 EZ H723</a></li>
          <li><a href="skr_3_ez_h743_general.html">SKR3 EZ H743</a></li>
          <li><a href="btt_kraken_h723_general.html">BTT Kraken H723</a></li>
          <li><a href="btt_scylla_v1_h723_general.html">BTT Scylla v1.0 H723</a></li>
        </ul>
        <a class="mcu-board-list-more" href="supported_boards.html">Full board and driver details &raquo;</a>
      </div>
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
      <div class="mcu-board-list">
        <p class="mcu-board-list-label">Supported boards</p>
        <ul class="mcu-board-list-items">
          <li><a href="fly_407zg_general.html">Fly-407ZG</a></li>
          <li><a href="fly_cdyv2_general.html">Fly-CDYv2</a></li>
          <li><a href="fly_cdyv3_general.html">Fly-CDYv3</a></li>
          <li><a href="fly_e3_general.html">Fly-E3</a></li>
          <li><a href="fly_e3_v2_general.html">Fly-E3-v2</a></li>
          <li><a href="fly_e3_pro_general.html">Fly-E3-Pro</a></li>
          <li><a href="fly_e3_pro_v3_general.html">Fly-E3-Pro-v3</a></li>
          <li><a href="fly_gemini_general.html">Fly-Gemini-V1</a></li>
          <li><a href="fly_gemini_v1.1_general.html">Fly-Gemini-V1.1</a></li>
          <li><a href="fly_gemini_v2_general.html">Fly-Gemini-V2.0</a></li>
          <li>Fly-Gemini-V3.0</li>
          <li><a href="fly_super8_general.html">Fly-Super8-V1</a></li>
          <li><a href="fly_super8_hardware_revisions.html">Fly-Super8-V1.1</a></li>
          <li><a href="fly_super8_hardware_revisions.html">Fly-Super8-V1.2</a></li>
          <li><a href="fly_super8_hardware_revisions.html">Fly-Super8-V1.3</a></li>
          <li><a href="skr_2.0_general.html">SKR v2</a></li>
          <li><a href="skr_rrf_e3_general.html">SKR-RRF-E3 + Expansion Board</a></li>
          <li><a href="skr_pro_1.1_pins.html">SKR Pro v1.1</a></li>
          <li><a href="skr_pro_1.2_pins.html">SKR Pro v1.2</a></li>
          <li><a href="gtr_pins.html">BTT GTR v1.0 + M5 Expansion Board</a></li>
          <li><a href="btt_octopus_1.1_f429_general.html">BTT Octopus v1.1 F429 Version</a></li>
          <li><a href="btt_octopus_pro_1.0_f429_general.html">BTT Octopus Pro v1.0 F429 Version</a></li>
          <li>BTT Octopus X7</li>
        </ul>
        <a class="mcu-board-list-more" href="supported_boards_stm32f4.html">Full board and driver details &raquo;</a>
      </div>
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
      <div class="mcu-board-list">
        <p class="mcu-board-list-label">Supported boards</p>
        <ul class="mcu-board-list-items">
          <li>Azsmz Mini</li>
          <li>Azteeg X5 Mini v1.1</li>
          <li>Azteeg X5 Mini v2</li>
          <li>Azteeg X5 Mini v3</li>
          <li><a href="fly_cdy_general.html">Fly-CDY</a></li>
          <li><a href="mks_sbase_pins.html">MKS Sbase v1.3</a></li>
          <li><a href="mks_sgen_l_1_pins.html">MKS SGen L v1.0</a></li>
          <li><a href="mks_sgen_l_2_pins.html">MKS SGen L v2.0</a></li>
          <li><a href="re_arm_pins.html">ReArm</a></li>
          <li><a href="skr_1.1_pins.html">SKR v1.1</a></li>
          <li><a href="skr_1.3_pins.html">SKR v1.3</a></li>
          <li><a href="skr_1.4_pins.html">SKR v1.4 (standard and turbo)</a></li>
          <li><a href="skr_E3T_pins.html">SKR E3 Turbo</a></li>
          <li>Smoothieboard</li>
        </ul>
        <a class="mcu-board-list-more" href="supported_boards_lpc.html">Full board and driver details &raquo;</a>
      </div>
    </div>
    <a class="mcu-btn mcu-btn-lpc" href="getting_started_lpc.html">Get Started with LPC &raquo;</a>
  </div>

  <div class="mcu-card mcu-card-canfd">
    <div class="mcu-card-header">
      <h3>CAN-FD Toolboards</h3>
      <span class="mcu-badge mcu-badge-active">Works with STM32H7 Mainboards</span>
    </div>
    <div class="mcu-card-body">
      <ul>
        <li>Fly and Fysetc expansion/toolboards</li>
        <li>Connects via 2-wire CAN-FD</li>
        <li>Also compatible with Duet 3 mainboards</li>
      </ul>
      <div class="mcu-toolboard-list">
        <p class="mcu-board-list-label">Toolboards</p>
        <ul class="mcu-toolboard-list-items">
          <li><a href="fly_rrf_36_general.html">Fly-RRF-36</a></li>
          <li><a href="fly_sb2040_max_v3_general.html">Fly-SB2040 Max V3</a></li>
          <li><a href="fly_sb2040_pro_max_v3_general.html">Fly-SB2040 Pro Max V3</a></li>
          <li><a href="fly_sht36_max_v3_general.html">Fly-SHT36 Max V3</a></li>
          <li><a href="fly_openpnp_general.html">Fly-OpenPNP</a></li>
          <li><a href="stridemax_v2_general.html">Fysetc StrideMax Dual V2.0</a></li>
          <li><a href="pitb_v2_general.html">Fysetc PITB V2.0</a></li>
          <li><a href="afc_lite_v1_0_h723_general.html">AFC-Lite V1.0</a></li>
          <li><a href="fly_mmu_v1_0_h723_general.html">Fly-MMU V1.0</a></li>
        </ul>
      </div>
    </div>
    <a class="mcu-btn mcu-btn-canfd" href="supported_boards.html#can-fd-expansion-boards">See All CAN-FD Boards &raquo;</a>
  </div>

</div>

## Partnership

TeamGloomy are working in close partnership with Flymaker/Mellow to ensure that 100% compatibility is obtained with their boards and to cover all of your 3D printer electronics requirements.

## Aliexpress

All links used on the site are affiliate links where possible. If you purchase via a link it will give a tiny percent of commission to the teamgloomy. This will not hurt your wallet and at the same time help us to maintain this project.
