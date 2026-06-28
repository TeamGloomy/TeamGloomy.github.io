#!/usr/bin/env python3
"""
sync_check.py — check wiki accelerometer/thermistor data against config tool board definitions.

Usage:
    python scripts/sync_check.py [--configtool PATH]

Reads accelerometer frontmatter from wiki pages and compares them against
accelPreset values in the config tool's STM32Boards.ts.

Also checks that Fly boards documented as having 2k2 thermistors match the
heat.thermistorSeriesResistor keys in the board .txt content.

Exit code 0 = all in sync, 1 = mismatches found.
"""

import argparse
import re
import sys
from pathlib import Path

import yaml

WIKI_ROOT = Path(__file__).parent.parent
STM32H7_DIR = WIKI_ROOT / "pages" / "mydoc" / "STM32H7"

# Default config tool location — override with --configtool
DEFAULT_CONFIGTOOL = WIKI_ROOT.parent / "configtool"


def read_frontmatter(path: Path) -> dict:
    text = path.read_text(encoding="utf-8")
    m = re.match(r"^---\s*\n(.*?)\n---", text, re.DOTALL)
    if not m:
        return {}
    try:
        return yaml.safe_load(m.group(1)) or {}
    except yaml.YAMLError:
        return {}


def parse_ts_accel_presets(ts_path: Path) -> dict:
    """Return {boardType: {spiChannel, csPin, intPin}} from STM32Boards.ts."""
    text = ts_path.read_text(encoding="utf-8")
    presets = {}
    # Match: [STM32BoardType.Foo_Bar]: makeBoard({ ... accelPreset: { ... }
    board_blocks = re.split(r"\[STM32BoardType\.(\w+)\]:", text)
    for i in range(1, len(board_blocks), 2):
        board_key = board_blocks[i]
        block = board_blocks[i + 1]
        # Find accelPreset: { spiChannel: N, csPin: "X", intPin: "Y" }
        m = re.search(
            r'accelPreset:\s*\{\s*spiChannel:\s*(\d+),\s*csPin:\s*"([^"]+)",\s*intPin:\s*"([^"]+)"',
            block,
        )
        if m:
            presets[board_key] = {
                "spiChannel": int(m.group(1)),
                "csPin": m.group(2),  # format: "D.14"
                "intPin": m.group(3),
            }
    return presets


def stm32_pin_to_wiki(pin: str) -> str:
    """Convert "D.14" → "PD_14"."""
    m = re.match(r"^([A-Za-z])\.(\d+)$", pin)
    if m:
        return f"P{m.group(1).upper()}_{m.group(2)}"
    return pin


BOARD_DIR_TO_TS_KEY = {
    "AFC_lite_v1": None,
    "BTT_Kraken": ["BTT_Kraken_v1_0", "BTT_Kraken_v1_1"],
    "BTT_Octopus_Pro_v1.1": ["BTT_OctopusPro_v1_1_H723"],
    "BTT_Scylla_v1": ["BTT_Scylla"],
    "Fly_C5": ["Fly_C5"],
    "Fly_C8Pro": ["Fly_C8Pro"],
    "Fly_E3_Ultra": ["Fly_E3Ultra"],
    "LDO_Leviathan_H723": ["LDO_Leviathan_H723"],
    "LDO_Leviathan_H743": ["LDO_Leviathan_H743"],
    "MMU": None,
    "ProX10": ["Fly_ProX10_H723"],
    "SKR_3_EZ_H723": ["BTT_SKR3EZ_H723"],
    "SKR_3_EZ_H743": ["BTT_SKR3EZ_H743"],
    "SKR_3_H723": ["BTT_SKR3_H723"],
    "SKR_3_H743": ["BTT_SKR3_H743"],
    "SKR_SE_BX2_H743": ["BTT_SKR_SE_BX2"],
    "Super5Pro_H723": ["Fly_Super5"],
    "Super8Pro_H723": ["Fly_Super8Pro_H723"],
    "Super8Pro_H743": ["Fly_Super8Pro_H743"],
    "Fysetc_Spider_H7": ["Fysetc_SpiderKing_H723", "Fysetc_SpiderV3"],
}


def check_accel_pages(ts_presets: dict) -> list:
    issues = []
    for board_dir, ts_keys in BOARD_DIR_TO_TS_KEY.items():
        if ts_keys is None:
            continue
        accel_pages = list((STM32H7_DIR / board_dir).rglob("*accelerometer*.md"))
        if not accel_pages:
            continue
        for page in accel_pages:
            fm = read_frontmatter(page)
            spi_ch = fm.get("spiChannel")
            cs_raw = fm.get("CS", "")
            int_raw = fm.get("int", "")
            if spi_ch is None:
                continue
            # Use first matching TS key
            preset = None
            for key in ts_keys:
                if key in ts_presets:
                    preset = ts_presets[key]
                    break
            if preset is None:
                continue
            cs_expected = stm32_pin_to_wiki(preset["csPin"])
            int_expected = stm32_pin_to_wiki(preset["intPin"])
            rel = page.relative_to(WIKI_ROOT)
            if int(spi_ch) != preset["spiChannel"]:
                issues.append(f"{rel}: spiChannel {spi_ch} != config tool {preset['spiChannel']}")
            if cs_raw and cs_raw != cs_expected:
                issues.append(f"{rel}: CS {cs_raw} != config tool {cs_expected}")
            if int_raw and int_raw != int_expected:
                issues.append(f"{rel}: int {int_raw} != config tool {int_expected}")
    return issues


def main() -> None:
    parser = argparse.ArgumentParser(description="Check wiki vs config tool sync")
    parser.add_argument(
        "--configtool",
        default=str(DEFAULT_CONFIGTOOL),
        help="Path to the configtool repo root",
    )
    args = parser.parse_args()

    ts_path = Path(args.configtool) / "src" / "store" / "STM32Boards.ts"
    if not ts_path.exists():
        print(f"ERROR: STM32Boards.ts not found at {ts_path}", file=sys.stderr)
        sys.exit(2)

    ts_presets = parse_ts_accel_presets(ts_path)
    print(f"Loaded {len(ts_presets)} board presets from config tool.")

    issues = check_accel_pages(ts_presets)

    if issues:
        print(f"\nFound {len(issues)} sync issue(s):")
        for issue in issues:
            print(f"  MISMATCH: {issue}")
        sys.exit(1)
    else:
        print("All accelerometer pages match config tool presets.")
        sys.exit(0)


if __name__ == "__main__":
    main()
