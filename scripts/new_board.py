#!/usr/bin/env python3
"""
new_board.py — scaffold a new STM32H7 board's wiki pages.

Usage:
    python scripts/new_board.py --board "BTT Kraken H723" --dir BTT_Kraken --version 3.5

Creates pages/mydoc/STM32H7/<dir>/<version>/ with stub MD files for:
  - general
  - pins
  - accelerometer
  - sensorless
  - bltouch
  - connected_wifi
  - connected_sbc  (optional, pass --no-sbc to skip)
  - rrfboot

Each file uses the correct frontmatter template and includes the right Liquid tag.
"""

import argparse
import re
import sys
from pathlib import Path

WIKI_ROOT = Path(__file__).parent.parent
STM32H7_DIR = WIKI_ROOT / "pages" / "mydoc" / "STM32H7"

FRONTMATTER = """\
---
title: {title}
tags: []
keywords:
last_updated: {date}
summary: "{summary}"
sidebar: mydoc_sidebar
permalink: {permalink}
folder: mydoc
comments: false
toc: false
datatable: true
---
"""

PAGE_TEMPLATES = {
    "general": {
        "title": "{board} General Information in RRF {ver}.0 Onwards",
        "summary": "General information regarding the {board}",
        "permalink": "{slug}_general_{ver_slug}.html",
        "body": (
            '{{% include note.html content="These instructions apply to RRF {ver}.0 and later,'
            " including RRF 3.6.x. Use the"
            " [TeamGloomy Config Tool](https://teamgloomy.github.io/configtool/)"
            ' to generate a starter configuration for this board." %}}\n\n'
            "## Overview\n\n"
            "This page covers any general information for the {board} board.\n\n"
            "### Initial Installation\n\n"
            "The board that you will receive doesn't have any firmware installed"
            " so when plugged into a computer, the board will show as an unidentified device.\n"
            "Follow the [WiFi instructions]({slug}_connected_wifi_{ver_slug}.html)"
            " or [SBC instructions]({slug}_connected_sbc_{ver_slug}.html).\n"
        ),
    },
    "pins": {
        "title": "{board} Pin Names in Firmware in RRF {ver}.0 Onwards",
        "summary": "The pin names of the {board} in the firmware",
        "permalink": "{slug}_pins_{ver_slug}.html",
        "body": (
            "## {board} Pinout Diagram\n\n"
            "{{% include image.html file=\"{slug}_pins.png\""
            " url=\"https://teamgloomy.github.io/images/{slug}_pins.png\""
            ' alt="{board}" caption="{board} Pinout" %}}\n\n'
            "## {board} Driver Pins in Firmware\n\n"
            "Driver pin numbers. They are separated into driver number.\n"
        ),
    },
    "accelerometer": {
        "title": "Connecting an accelerometer to a {board} in RRF {ver}.0 Onwards",
        "summary": "How to connect an accelerometer to a {board}",
        "permalink": "{slug}_accelerometer_{ver_slug}.html",
        "extra_frontmatter": (
            "boardname: {board}\n"
            "SCL: \nSDA: \nSDO: \nCS: \nint: \nspiChannel: \nlocation: \n"
        ),
        "body": "{{% include custom/{ver}.0/accelerometer.html %}}\n",
    },
    "sensorless": {
        "title": "Configuring Sensorless Homing on a {board} in RRF {ver}.0 Onwards",
        "summary": "How to configure sensorless homing on a {board}",
        "permalink": "{slug}_sensorless_{ver_slug}.html",
        "body": "{{% include custom/{ver}.0/sensorless.html %}}\n",
    },
    "bltouch": {
        "title": "Connecting a BLTouch or BTT MicroProbe to a {board} in RRF {ver}.0 Onwards",
        "summary": "How to connect a BLTouch or BTT MicroProbe to a {board}",
        "permalink": "{slug}_bltouch_{ver_slug}.html",
        "extra_frontmatter": "boardname: {board}\n",
        "body": "{{% include custom/{ver}.0/bltouch.html %}}\n",
    },
    "connected_wifi": {
        "title": "Connecting a {board} to a WiFi Network in RRF {ver}.0 Onwards",
        "summary": "How to connect a {board} to a WiFi network",
        "permalink": "{slug}_connected_wifi_{ver_slug}.html",
        "body": "{{% include custom/{ver}.0/connected_wifi.html %}}\n",
    },
    "connected_sbc": {
        "title": "Connecting a {board} to an SBC in RRF {ver}.0 Onwards",
        "summary": "How to connect a {board} to an SBC",
        "permalink": "{slug}_connected_sbc_{ver_slug}.html",
        "body": "{{% include custom/{ver}.0/connected_sbc.html %}}\n",
    },
    "rrfboot": {
        "title": "{board} rrfboot.txt in RRF {ver}.0 Onwards",
        "summary": "The rrfboot.txt for the {board}",
        "permalink": "{slug}_rrfboot_{ver_slug}.html",
        "body": (
            "## Overview\n\n"
            "Below is the default rrfboot.txt for the {board}.\n\n"
            "```text\n"
            "; Paste rrfboot.txt content here\n"
            "```\n"
        ),
    },
}


def slugify(name: str) -> str:
    return re.sub(r"[^a-z0-9]+", "_", name.lower()).strip("_")


def ver_slug(ver: str) -> str:
    return ver.replace(".", "_")


def today() -> str:
    from datetime import date
    d = date.today()
    return d.strftime("%d/%m/%Y")


def create_page(dest: Path, template: dict, ctx: dict) -> None:
    extra = template.get("extra_frontmatter", "").format(**ctx)
    fm_fields = {
        "title": template["title"].format(**ctx),
        "summary": template["summary"].format(**ctx),
        "permalink": template["permalink"].format(**ctx),
        "date": ctx["date"],
    }
    fm = FRONTMATTER.format(**fm_fields)
    if extra:
        fm = fm.rstrip("\n") + "\n" + extra + "---\n"
    else:
        fm = fm.rstrip("\n-") + "---\n"
    body = template["body"].format(**ctx)
    dest.write_text(fm + "\n" + body, encoding="utf-8")
    print(f"  Created {dest.relative_to(WIKI_ROOT)}")


def main() -> None:
    parser = argparse.ArgumentParser(description="Scaffold a new board's wiki pages")
    parser.add_argument("--board", required=True, help='Board name, e.g. "BTT Kraken H723"')
    parser.add_argument("--dir", required=True, help="Board directory name, e.g. BTT_Kraken")
    parser.add_argument("--version", default="3.5", help="RRF version prefix (default: 3.5)")
    parser.add_argument("--no-sbc", action="store_true", help="Skip SBC page")
    args = parser.parse_args()

    slug = slugify(args.board)
    ctx = {
        "board": args.board,
        "slug": slug,
        "ver": args.version,
        "ver_slug": ver_slug(args.version),
        "date": today(),
    }

    dest_dir = STM32H7_DIR / args.dir / args.version
    dest_dir.mkdir(parents=True, exist_ok=True)
    print(f"Scaffolding {args.board} → {dest_dir.relative_to(WIKI_ROOT)}")

    pages = list(PAGE_TEMPLATES.keys())
    if args.no_sbc:
        pages.remove("connected_sbc")

    for page_type in pages:
        template = PAGE_TEMPLATES[page_type]
        filename = f"{slug}_{page_type}_{ver_slug(args.version)}.md"
        dest = dest_dir / filename
        if dest.exists():
            print(f"  Skipped (exists): {dest.relative_to(WIKI_ROOT)}")
        else:
            create_page(dest, template, ctx)

    print("\nDone. Add sidebar entries with generate_sidebar.py or update manually.")


if __name__ == "__main__":
    main()
