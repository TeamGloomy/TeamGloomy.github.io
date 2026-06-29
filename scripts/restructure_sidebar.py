#!/usr/bin/env python3
"""
restructure_sidebar.py — reorganize sidebar into STM32F4 and STM32H7 sections.

Run from the wiki root:
    python scripts/restructure_sidebar.py [--dry-run]

Changes made:
  - Removes F4/H7-specific items from the "General" section
  - Adds new "STM32F4 Reference" section with F4-specific pages
  - Adds new "STM32H7 Reference" section with H7-specific pages
  - Splits "Fly/Mellow Mainboards" into separate F4 and H7 sections
  - Splits "BTT Mainboards" into separate F4 and H7 sections
  - Moves "STM32F4 + Integrated SBC Boards" adjacent to other F4 sections
  - New order: ... LPC Boards → F4 Reference → Fly F4 → BTT F4 → SBC →
               H7 Reference → Fly H7 → BTT H7 → LDO → Fysetc → CAN-FD ...
"""

import argparse
import re
import sys
from pathlib import Path

WIKI_ROOT = Path(__file__).parent.parent
SIDEBAR = WIKI_ROOT / "_data" / "sidebars" / "mydoc_sidebar.yml"

# Fly/Mellow boards classified as STM32F4 (everything else in that section is H7)
FLY_F4_TITLES = {
    "Fly-407ZG",
    "Fly-CDYv2",
    "Fly-CDYv3",
    "Fly-E3",
    "Fly-E3-v2",
    "Fly-E3-Pro",
    "Fly-E3-Pro-v2",
    "Fly-E3-Pro-v3",
    "Fly-Super8",
}

# BTT/SKR boards classified as STM32F4 (everything else in that section is H7)
BTT_F4_TITLES = {
    "BTT Octopus v1.1 f429 Version",
    "BTT Octopus Pro v1.0 f429 Version",
    "GTR + M5",
    "SKR Pro v1.1",
    "SKR Pro v1.2",
    "SKR v2.0",
    "SKR-RRF-E3 + IDEX",
}

# General section items to move to STM32F4 Reference (matched by url:)
F4_REF_URLS = {
    "stm32_differences.html",
    "stm32f4_pwm.html",
    "stm32_esp8266.html",
    "stm32_esp32.html",
    "stm32_sbc.html",
}

# General section items to move to STM32H7 Reference (matched by url:)
H7_REF_URLS = {
    "stm32h7_differences.html",
    "stm32h7_pwm.html",
}


def find_top_sections(lines: list[str]) -> list[tuple[str, int, int]]:
    """
    Return [(title, start_idx, end_idx)] for each top-level section.
    A top-level section starts with '- title:' at column 0 (no leading spaces).
    end_idx is exclusive.
    """
    starts = [i for i, line in enumerate(lines) if re.match(r"^- title:", line)]
    sections = []
    for j, s in enumerate(starts):
        title = lines[s][len("- title:") :].strip()
        end = starts[j + 1] if j + 1 < len(starts) else len(lines)
        sections.append((title, s, end))
    return sections


def find_board_blocks(
    lines: list[str], sec_start: int, sec_end: int
) -> list[tuple[str, int, int]]:
    """
    Within lines[sec_start:sec_end], find board-level entries:
    lines matching '^  - title:' (exactly 2 leading spaces).
    Returns [(board_title, start_idx, end_idx)].
    """
    board_starts = [
        i
        for i in range(sec_start, sec_end)
        if re.match(r"^  - title:", lines[i])
    ]
    blocks = []
    for j, s in enumerate(board_starts):
        title = lines[s][len("  - title:") :].strip()
        end = board_starts[j + 1] if j + 1 < len(board_starts) else sec_end
        blocks.append((title, s, end))
    return blocks


def get_block_url(lines: list[str], start: int, end: int) -> str | None:
    """Return the first 'url:' value found in lines[start:end]."""
    for i in range(start, end):
        m = re.match(r"\s+url:\s*(\S+)", lines[i])
        if m:
            return m.group(1)
    return None


def make_section_header(title: str) -> list[str]:
    """Build the opening lines for a new top-level section."""
    return [
        f"- title: {title}\n",
        "  output: web\n",
        "  children:\n",
        "\n",
    ]


def emit_blocks(lines: list[str], blocks: list[tuple[str, int, int]]) -> list[str]:
    """Return all raw lines for a list of board blocks."""
    result = []
    for _, start, end in blocks:
        result.extend(lines[start:end])
    return result


def restructure(dry_run: bool) -> None:
    text = SIDEBAR.read_text(encoding="utf-8")
    lines = text.splitlines(keepends=True)

    sections = find_top_sections(lines)
    sec_dict: dict[str, tuple[int, int]] = {t: (s, e) for t, s, e in sections}

    # Validate required sections exist
    required = [
        "General",
        "LPC Boards",
        "Fly/Mellow Mainboards",
        "BTT Mainboards",
        "STM32F4 + Integrated SBC Boards",
        "LDO Mainboards",
        "Fysetc Mainboards",
    ]
    missing = [r for r in required if r not in sec_dict]
    if missing:
        print(f"ERROR: Missing sections: {missing}", file=sys.stderr)
        sys.exit(1)

    # ── General section: extract F4/H7 items ───────────────────────────────
    gen_s, gen_e = sec_dict["General"]
    gen_blocks = find_board_blocks(lines, gen_s, gen_e)

    gen_keep: list[tuple[str, int, int]] = []
    f4_refs: list[tuple[str, int, int]] = []
    h7_refs: list[tuple[str, int, int]] = []
    for t, s, e in gen_blocks:
        url = get_block_url(lines, s, e)
        if url in F4_REF_URLS:
            f4_refs.append((t, s, e))
        elif url in H7_REF_URLS:
            h7_refs.append((t, s, e))
        else:
            gen_keep.append((t, s, e))

    # General preamble = lines from section start up to first board block
    gen_preamble = lines[gen_s : gen_blocks[0][1]] if gen_blocks else lines[gen_s:gen_e]

    # ── Fly/Mellow: split F4 vs H7 ────────────────────────────────────────
    fly_s, fly_e = sec_dict["Fly/Mellow Mainboards"]
    fly_blocks = find_board_blocks(lines, fly_s, fly_e)
    fly_f4 = [(t, s, e) for t, s, e in fly_blocks if t in FLY_F4_TITLES]
    fly_h7 = [(t, s, e) for t, s, e in fly_blocks if t not in FLY_F4_TITLES]

    unclassified_fly = [t for t, _, _ in fly_blocks if t not in FLY_F4_TITLES and t not in {b[0] for b in fly_h7}]
    # (everything not in FLY_F4_TITLES goes to fly_h7, so unclassified is always empty)

    # ── BTT: split F4 vs H7 ───────────────────────────────────────────────
    btt_s, btt_e = sec_dict["BTT Mainboards"]
    btt_blocks = find_board_blocks(lines, btt_s, btt_e)
    btt_f4 = [(t, s, e) for t, s, e in btt_blocks if t in BTT_F4_TITLES]
    btt_h7 = [(t, s, e) for t, s, e in btt_blocks if t not in BTT_F4_TITLES]

    # ── SBC, LDO, Fysetc ──────────────────────────────────────────────────
    sbc_s, sbc_e = sec_dict["STM32F4 + Integrated SBC Boards"]
    ldo_s, ldo_e = sec_dict["LDO Mainboards"]
    fysetc_s, fysetc_e = sec_dict["Fysetc Mainboards"]

    # Sections to skip when emitting "everything else after Fysetc"
    # (SBC will have already been emitted in its new position)
    skip_starts = {sbc_s}

    # ── Print dry-run summary ─────────────────────────────────────────────
    def summarize() -> None:
        print("Restructure plan:")
        print(f"  General: {len(gen_keep)} kept, {len(f4_refs)} -> F4 Ref, {len(h7_refs)} -> H7 Ref")
        print(f"    F4 Ref items: {[t for t,_,_ in f4_refs]}")
        print(f"    H7 Ref items: {[t for t,_,_ in h7_refs]}")
        print(f"  Fly F4 boards ({len(fly_f4)}): {[t for t,_,_ in fly_f4]}")
        print(f"  Fly H7 boards ({len(fly_h7)}): {[t for t,_,_ in fly_h7]}")
        print(f"  BTT F4 boards ({len(btt_f4)}): {[t for t,_,_ in btt_f4]}")
        print(f"  BTT H7 boards ({len(btt_h7)}): {[t for t,_,_ in btt_h7]}")

    if dry_run:
        summarize()
        return

    summarize()

    # ── Assemble the new sidebar ──────────────────────────────────────────
    out: list[str] = []

    # 1. File header (before first top-level section)
    out.extend(lines[: sections[0][1]])

    # 2. All sections before "General" (PDF frontmatter, Overview, Release Notes)
    gen_idx = next(i for i, (t, _, _) in enumerate(sections) if t == "General")
    for t, s, e in sections[:gen_idx]:
        out.extend(lines[s:e])

    # 3. General (rebuilt without F4/H7-specific items)
    out.extend(gen_preamble)
    out.extend(emit_blocks(lines, gen_keep))

    # 4. LPC Boards (unchanged)
    lpc_s, lpc_e = sec_dict["LPC Boards"]
    out.extend(lines[lpc_s:lpc_e])

    # 5. STM32F4 Reference (new)
    if f4_refs:
        out.extend(make_section_header("STM32F4 Reference"))
        out.extend(emit_blocks(lines, f4_refs))

    # 6. Fly/Mellow STM32F4 Mainboards
    out.extend(make_section_header("Fly/Mellow STM32F4 Mainboards"))
    out.extend(emit_blocks(lines, fly_f4))

    # 7. BTT STM32F4 Mainboards
    out.extend(make_section_header("BTT STM32F4 Mainboards"))
    out.extend(emit_blocks(lines, btt_f4))

    # 8. STM32F4 + Integrated SBC Boards (moved here from original position)
    out.extend(lines[sbc_s:sbc_e])

    # 9. STM32H7 Reference (new)
    if h7_refs:
        out.extend(make_section_header("STM32H7 Reference"))
        out.extend(emit_blocks(lines, h7_refs))

    # 10. Fly/Mellow STM32H7 Mainboards
    out.extend(make_section_header("Fly/Mellow STM32H7 Mainboards"))
    out.extend(emit_blocks(lines, fly_h7))

    # 11. BTT STM32H7 Mainboards
    out.extend(make_section_header("BTT STM32H7 Mainboards"))
    out.extend(emit_blocks(lines, btt_h7))

    # 12. LDO Mainboards (unchanged)
    out.extend(lines[ldo_s:ldo_e])

    # 13. Fysetc Mainboards (unchanged — DO NOT TOUCH)
    out.extend(lines[fysetc_s:fysetc_e])

    # 14. Everything after Fysetc, skipping the SBC section (already emitted above)
    i = fysetc_e
    while i < len(lines):
        # Find next top-level section boundary to detect SBC
        if i in skip_starts:
            # Skip to the end of this section
            for _, sec_s, sec_e in sections:
                if sec_s == i:
                    i = sec_e
                    break
            else:
                i += 1
        else:
            out.append(lines[i])
            i += 1

    new_text = "".join(out)
    SIDEBAR.write_text(new_text, encoding="utf-8")
    print(f"\nDone. Written {len(out)} lines to {SIDEBAR.name}")


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Restructure sidebar into STM32F4 / STM32H7 sections"
    )
    parser.add_argument(
        "--dry-run", action="store_true", help="Show plan without writing"
    )
    args = parser.parse_args()
    restructure(args.dry_run)


if __name__ == "__main__":
    main()
