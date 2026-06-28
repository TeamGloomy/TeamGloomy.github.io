#!/usr/bin/env python3
"""
sync_rrfboot.py — sync rrfboot.txt files from gloomyandy/RRFBuild into wiki include files.

Usage:
    python scripts/sync_rrfboot.py [--dry-run] [--token GITHUB_TOKEN]

Fetches every boards/*/rrfboot.txt from gloomyandy/RRFBuild (branch v3.6-dev),
extracts the 'board=<name>' identifier from each file, and updates the matching
_includes/custom/3.5/rrfboot/rrfboot_*.html include file.

The match is done by board short-name: the script reads every existing include file,
extracts the 'board=...' line, and builds a lookup table. This means no hardcoded
path mapping is needed — new boards in RRFBuild are silently skipped until a matching
include file is created in the wiki.

Exit code 0 = success (with or without changes), 1 = error fetching from GitHub.
"""

import argparse
import json
import os
import re
import sys
import urllib.request
import urllib.error
from pathlib import Path

WIKI_ROOT = Path(__file__).parent.parent
RRFBOOT_DIR = WIKI_ROOT / "_includes" / "custom" / "3.5" / "rrfboot"

RRFBUILD_REPO = "gloomyandy/RRFBuild"
RRFBUILD_BRANCH = "v3.6-dev"
RAW_BASE = f"https://raw.githubusercontent.com/{RRFBUILD_REPO}/{RRFBUILD_BRANCH}"
API_BASE = "https://api.github.com"


def github_get(url: str, token: str | None) -> dict | list:
    req = urllib.request.Request(url)
    req.add_header("Accept", "application/vnd.github+json")
    req.add_header("X-GitHub-Api-Version", "2022-11-28")
    if token:
        req.add_header("Authorization", f"Bearer {token}")
    with urllib.request.urlopen(req) as resp:
        return json.loads(resp.read())


def raw_get(url: str, token: str | None) -> str:
    req = urllib.request.Request(url)
    if token:
        req.add_header("Authorization", f"Bearer {token}")
    with urllib.request.urlopen(req) as resp:
        return resp.read().decode("utf-8")


def extract_board_name(content: str) -> str | None:
    """Extract 'board=<name>' value from rrfboot.txt or include file content."""
    m = re.search(r"^board=(\S+)", content, re.MULTILINE)
    return m.group(1) if m else None


def build_include_lookup() -> dict[str, Path]:
    """Return {board_short_name: include_file_path} from existing include files."""
    lookup: dict[str, Path] = {}
    for html_file in RRFBOOT_DIR.glob("rrfboot_*.html"):
        content = html_file.read_text(encoding="utf-8")
        name = extract_board_name(content)
        if name:
            lookup[name] = html_file
    return lookup


def wrap_in_code_block(raw_content: str) -> str:
    """Wrap raw rrfboot.txt content in a markdown code block."""
    return f"```text\n{raw_content.rstrip()}\n```"


def get_rrfboot_paths(token: str | None) -> list[str]:
    """Return all boards/*/rrfboot.txt paths from the RRFBuild repo tree."""
    url = f"{API_BASE}/repos/{RRFBUILD_REPO}/git/trees/{RRFBUILD_BRANCH}?recursive=1"
    try:
        tree = github_get(url, token)
    except urllib.error.HTTPError as e:
        print(f"ERROR: GitHub API request failed: {e}", file=sys.stderr)
        sys.exit(1)

    paths = []
    for item in tree.get("tree", []):
        path = item.get("path", "")
        if path.startswith("boards/") and path.endswith("/rrfboot.txt"):
            paths.append(path)
    return paths


def sync(dry_run: bool, token: str | None) -> int:
    include_lookup = build_include_lookup()
    print(f"Found {len(include_lookup)} existing rrfboot include files.")

    rrfboot_paths = get_rrfboot_paths(token)
    print(f"Found {len(rrfboot_paths)} rrfboot.txt files in RRFBuild.\n")

    changed = 0
    skipped = 0

    for path in sorted(rrfboot_paths):
        raw_url = f"{RAW_BASE}/{path}"
        try:
            raw_content = raw_get(raw_url, token)
        except urllib.error.HTTPError as e:
            print(f"  WARN: Could not fetch {path}: {e}")
            continue

        board_name = extract_board_name(raw_content)
        if not board_name:
            print(f"  SKIP: {path} — no 'board=...' line found")
            skipped += 1
            continue

        include_file = include_lookup.get(board_name)
        if include_file is None:
            print(f"  SKIP: {path} (board={board_name}) — no matching include file")
            skipped += 1
            continue

        new_content = wrap_in_code_block(raw_content)
        existing = include_file.read_text(encoding="utf-8").strip()

        if new_content.strip() == existing:
            print(f"  OK  : {include_file.name} (board={board_name}) — up to date")
        else:
            print(f"  {'DRY ' if dry_run else ''}UPDATE: {include_file.name} (board={board_name})")
            if not dry_run:
                include_file.write_text(new_content + "\n", encoding="utf-8")
            changed += 1

    print(f"\nDone. {changed} file(s) updated, {skipped} skipped.")
    return changed


def main() -> None:
    parser = argparse.ArgumentParser(description="Sync rrfboot.txt from RRFBuild into wiki")
    parser.add_argument("--dry-run", action="store_true", help="Show what would change without writing")
    parser.add_argument("--token", default=os.environ.get("GITHUB_TOKEN"), help="GitHub token (or set GITHUB_TOKEN env var)")
    args = parser.parse_args()

    if not args.token:
        print("WARNING: No GitHub token set. Unauthenticated requests are rate-limited to 60/hour.", file=sys.stderr)

    sync(dry_run=args.dry_run, token=args.token)


if __name__ == "__main__":
    main()
