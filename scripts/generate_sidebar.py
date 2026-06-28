#!/usr/bin/env python3
"""
generate_sidebar.py — regenerate the STM32H7 section of mydoc_sidebar.yml from page frontmatter.

Usage:
    python scripts/generate_sidebar.py [--dry-run]

The script scans pages/mydoc/STM32H7/<Board>/<version>/<slug>.md, reads YAML frontmatter,
and rebuilds the STM32H7 board entries in _data/sidebars/mydoc_sidebar.yml.

Sections outside the STM32H7 boards block are left untouched.

Board entry ordering:
  - Boards are grouped by manufacturer prefix (BTT, Fly, Fysetc, LDO, etc.)
  - Within each group, ordered alphabetically by board title
  - Pages within each board ordered by the PAGE_ORDER list below

Run with --dry-run to preview changes without writing.
"""

import argparse
import os
import re
import sys
from pathlib import Path

import yaml

WIKI_ROOT = Path(__file__).parent.parent
SIDEBAR_PATH = WIKI_ROOT / "_data" / "sidebars" / "mydoc_sidebar.yml"
STM32H7_DIR = WIKI_ROOT / "pages" / "mydoc" / "STM32H7"

# Order pages appear within a board section. Unrecognised titles go at the end.
PAGE_ORDER = [
    "General Information",
    "Bootloader",
    "rrfboot.txt",
    "Connecting via WiFi",
    "Connecting via an ESP32 WiFi Adapter",
    "Connecting via SBC",
    "Connecting to a CAN-FD",
    "Connecting to a CAN-FD mainboard",
    "Connecting to a CAN-FD expansion board",
    "Configuring Sensorless Homing",
    "Connecting a Serial Screen",
    "Connecting a Screen",
    "Connecting a 12864 Screen",
    "Connecting a BLTouch",
    "Connecting an Accelerometer",
    "Connecting a PT100",
    "Input Voltage Monitoring",
    "Configuring the Onboard Temperature Sensor",
    "Pin Names",
]

MANUFACTURER_ORDER = ["AFC", "BTT", "Fly", "LDO", "Fysetc", "SKR"]


def page_order_key(title: str) -> int:
    for i, prefix in enumerate(PAGE_ORDER):
        if title.startswith(prefix):
            return i
    return len(PAGE_ORDER)


def read_frontmatter(path: Path) -> dict:
    text = path.read_text(encoding="utf-8")
    m = re.match(r"^---\s*\n(.*?)\n---", text, re.DOTALL)
    if not m:
        return {}
    try:
        return yaml.safe_load(m.group(1)) or {}
    except yaml.YAMLError:
        return {}


def collect_boards() -> dict:
    """Return {board_dir_name: {version: [page_entries]}} structure."""
    boards = {}
    for board_dir in sorted(STM32H7_DIR.iterdir()):
        if not board_dir.is_dir():
            continue
        board_name = board_dir.name
        version_pages: dict[str, list] = {}
        for version_dir in sorted(board_dir.iterdir()):
            if not version_dir.is_dir():
                continue
            version = version_dir.name  # e.g. "3.5"
            pages = []
            for md_file in sorted(version_dir.glob("*.md")):
                fm = read_frontmatter(md_file)
                title = fm.get("title", "")
                url = fm.get("permalink", "")
                if title and url:
                    # Shorten title for sidebar: strip board name prefix if present
                    short_title = title
                    pages.append({"title": short_title, "url": url})
            if pages:
                # Sort by page order
                pages.sort(key=lambda p: page_order_key(p["title"]))
                version_pages[version] = pages
        if version_pages:
            boards[board_name] = version_pages
    return boards


def sidebar_title_for_board(board_dir: str) -> str:
    """Convert directory name to a human-readable board title."""
    mapping = {
        "AFC_lite_v1": "AFC-Lite V1.0 H723",
        "BTT_Kraken": "BTT Kraken H723",
        "BTT_Octopus_Pro_v1.1": "BTT Octopus Pro v1.1 H723",
        "BTT_Scylla_v1": "BTT Scylla v1.0 H723",
        "Fly_C5": "Fly-C5 H723",
        "Fly_C8Pro": "Fly-C8 Pro H723",
        "Fly_E3_Ultra": "Fly-E3-Ultra H723",
        "Fysetc_Spider_H7": "Fysetc Spider King H723",
        "LDO_Leviathan_H723": "LDO Leviathan v1.3 H723",
        "LDO_Leviathan_H743": "LDO Leviathan v1.3 H743",
        "MMU": "Fly-MMU V1.0 H723",
        "ProX10": "Fly-ProX10 H723",
        "SKR_3_EZ_H723": "SKR3 EZ H723",
        "SKR_3_EZ_H743": "SKR3 EZ H743",
        "SKR_3_H723": "SKR3 H723",
        "SKR_3_H743": "SKR3 H743",
        "SKR_SE_BX2_H743": "BTT SKR SE BX2 H743",
        "Super5Pro_H723": "Fly-Super5Pro H723",
        "Super8Pro_H723": "Fly-Super8Pro H723",
        "Super8Pro_H743": "Fly-Super8Pro H743",
    }
    return mapping.get(board_dir, board_dir.replace("_", " "))


def manufacturer_key(board_dir: str) -> tuple:
    title = sidebar_title_for_board(board_dir)
    for i, prefix in enumerate(MANUFACTURER_ORDER):
        if title.startswith(prefix):
            return (i, title)
    return (len(MANUFACTURER_ORDER), title)


def build_stm32h7_yaml(boards: dict) -> str:
    lines = []
    sorted_boards = sorted(boards.keys(), key=manufacturer_key)
    for board_dir in sorted_boards:
        version_pages = boards[board_dir]
        title = sidebar_title_for_board(board_dir)
        lines.append(f"  - title: {title}")
        lines.append(f"    output: web")
        lines.append(f"    children:")
        lines.append(f"")
        for version in sorted(version_pages.keys()):
            pages = version_pages[version]
            if len(version_pages) > 1:
                # Wrap under version sub-header when multiple versions exist
                lines.append(f"    - title: RRF {version}.0 and above")
                lines.append(f"      output: web")
                lines.append(f"      children:")
                lines.append(f"")
                for page in pages:
                    lines.append(f"      - title: {page['title']}")
                    lines.append(f"        url: {page['url']}")
                    lines.append(f"        output: web")
                    lines.append(f"")
            else:
                for page in pages:
                    lines.append(f"    - title: {page['title']}")
                    lines.append(f"      url: {page['url']}")
                    lines.append(f"      output: web")
                    lines.append(f"")
        lines.append(f"")
    return "\n".join(lines)


# Markers that delimit the auto-generated STM32H7 section in the sidebar.
BEGIN_MARKER = "# BEGIN-AUTOGEN: STM32H7"
END_MARKER = "# END-AUTOGEN: STM32H7"


def update_sidebar(new_block: str, dry_run: bool = False) -> None:
    content = SIDEBAR_PATH.read_text(encoding="utf-8")
    if BEGIN_MARKER in content and END_MARKER in content:
        pattern = re.compile(
            rf"{re.escape(BEGIN_MARKER)}.*?{re.escape(END_MARKER)}",
            re.DOTALL,
        )
        replacement = f"{BEGIN_MARKER}\n{new_block}\n{END_MARKER}"
        updated = pattern.sub(replacement, content)
    else:
        print("WARNING: Auto-gen markers not found in sidebar. Append manually.", file=sys.stderr)
        print(f"\n--- Generated STM32H7 block ---\n{new_block}\n---", file=sys.stderr)
        return

    if dry_run:
        print(updated)
    else:
        SIDEBAR_PATH.write_text(updated, encoding="utf-8")
        print(f"Updated {SIDEBAR_PATH}")


def main() -> None:
    parser = argparse.ArgumentParser(description="Regenerate STM32H7 sidebar entries")
    parser.add_argument("--dry-run", action="store_true", help="Print result instead of writing")
    args = parser.parse_args()

    boards = collect_boards()
    block = build_stm32h7_yaml(boards)
    update_sidebar(block, dry_run=args.dry_run)


if __name__ == "__main__":
    main()
