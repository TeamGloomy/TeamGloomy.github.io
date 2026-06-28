#!/usr/bin/env python3
"""
lint_frontmatter.py — validate YAML frontmatter across all wiki MD pages.

Usage:
    python scripts/lint_frontmatter.py [--path pages/mydoc] [--fix-dates]

Checks:
  1. Frontmatter parses as valid YAML
  2. Required fields present: title, summary, sidebar, permalink, folder
  3. Permalink ends with .html
  4. last_updated is in DD/MM/YYYY format
  5. No duplicate permalinks across pages
  6. accelerometer pages: spiChannel, CS, int, boardname, location all present

Pass --fix-dates to auto-convert US-format dates (MM/DD/YYYY) to UK format.

Exit code 0 = clean, 1 = issues found.
"""

import argparse
import re
import sys
from pathlib import Path

import yaml

WIKI_ROOT = Path(__file__).parent.parent

REQUIRED_FIELDS = ["title", "summary", "sidebar", "permalink", "folder"]
DATE_RE_UK = re.compile(r"^\d{2}/\d{2}/\d{4}$")
DATE_RE_US = re.compile(r"^(\d{1,2})/(\d{1,2})/(\d{4})$")
ACCEL_FIELDS = ["boardname", "SCL", "SDA", "SDO", "CS", "int", "spiChannel", "location"]


def read_frontmatter_raw(path: Path) -> tuple[dict | None, str]:
    text = path.read_text(encoding="utf-8")
    m = re.match(r"^---\s*\n(.*?)\n---", text, re.DOTALL)
    if not m:
        return None, text
    try:
        fm = yaml.safe_load(m.group(1)) or {}
        return fm, text
    except yaml.YAMLError as e:
        return {"_parse_error": str(e)}, text


def check_date(date_val: str | None) -> str | None:
    if date_val is None:
        return "missing last_updated"
    s = str(date_val)
    if not DATE_RE_UK.match(s):
        return f"last_updated '{s}' not in DD/MM/YYYY format"
    return None


def fix_date(text: str, old_date: str) -> str:
    m = DATE_RE_US.match(old_date)
    if m:
        new_date = f"{int(m.group(2)):02d}/{int(m.group(1)):02d}/{m.group(3)}"
        return text.replace(f"last_updated: {old_date}", f"last_updated: {new_date}", 1)
    return text


def lint_file(path: Path, fix_dates: bool) -> list[str]:
    fm, text = read_frontmatter_raw(path)
    rel = str(path.relative_to(WIKI_ROOT))
    issues = []

    if fm is None:
        issues.append(f"{rel}: no frontmatter block found")
        return issues
    if "_parse_error" in fm:
        issues.append(f"{rel}: YAML parse error: {fm['_parse_error']}")
        return issues

    for field in REQUIRED_FIELDS:
        if not fm.get(field):
            issues.append(f"{rel}: missing required field '{field}'")

    permalink = fm.get("permalink", "")
    if permalink and not permalink.endswith(".html"):
        issues.append(f"{rel}: permalink '{permalink}' does not end with .html")

    date_val = fm.get("last_updated")
    date_issue = check_date(str(date_val) if date_val else None)
    if date_issue:
        if fix_dates and date_val:
            new_text = fix_date(text, str(date_val))
            if new_text != text:
                path.write_text(new_text, encoding="utf-8")
                issues.append(f"{rel}: fixed date {date_val}")
            else:
                issues.append(f"{rel}: {date_issue} (could not auto-fix)")
        else:
            issues.append(f"{rel}: {date_issue}")

    if "accelerometer" in path.name:
        for field in ACCEL_FIELDS:
            if field not in fm:
                issues.append(f"{rel}: accelerometer page missing field '{field}'")

    return issues


def main() -> None:
    parser = argparse.ArgumentParser(description="Lint wiki page frontmatter")
    parser.add_argument("--path", default="pages/mydoc", help="Subdirectory to scan")
    parser.add_argument("--fix-dates", action="store_true", help="Auto-fix US-format dates")
    args = parser.parse_args()

    scan_root = WIKI_ROOT / args.path
    if not scan_root.exists():
        print(f"ERROR: {scan_root} not found", file=sys.stderr)
        sys.exit(2)

    all_issues: list[str] = []
    seen_permalinks: dict[str, str] = {}

    for md_file in sorted(scan_root.rglob("*.md")):
        issues = lint_file(md_file, fix_dates=args.fix_dates)
        all_issues.extend(issues)

        fm, _ = read_frontmatter_raw(md_file)
        if fm and isinstance(fm, dict):
            permalink = fm.get("permalink", "")
            if permalink:
                rel = str(md_file.relative_to(WIKI_ROOT))
                if permalink in seen_permalinks:
                    all_issues.append(
                        f"{rel}: duplicate permalink '{permalink}' (also in {seen_permalinks[permalink]})"
                    )
                else:
                    seen_permalinks[permalink] = rel

    if all_issues:
        print(f"Found {len(all_issues)} issue(s):\n")
        for issue in all_issues:
            print(f"  {issue}")
        sys.exit(1)
    else:
        scanned = sum(1 for _ in scan_root.rglob("*.md"))
        print(f"OK — {scanned} pages checked, no issues found.")
        sys.exit(0)


if __name__ == "__main__":
    main()
