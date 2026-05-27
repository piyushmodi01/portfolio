# MathWorks — MATLAB Plot Viewer
## Project Intelligence & Interview Notes

**Status:** Complete — ready to write  
**Purpose:** Source of truth for crafting the final case study narrative

---

## Verified Facts
- Timeline: Sep 2023 — Jan 2024 (4 months)
- Role: Senior Product Designer / Design Lead
- Team: 1 designer (Piyush) + 1 researcher
- Piyush brought in by manager after researcher ran usability study
- Tab/Tile View was one part of a larger study — not a standalone project
- Shipped to Beta. Piyush moved to another project before production release.

---

## The Discovery — The 1 Out of 7 Moment

Researcher ran a broader usability study. One task: *"Find the feature that will arrange all your plots into a grid view."* Plots were already consolidated into a single tabbed window — users just needed to find the grid arrangement.

- 7 users, 5–6 minutes each
- Only **1 person** found it
- Some asked for hints. Still couldn't find it.
- The label "Tile All" in the 3-dot menu meant nothing to engineers. The connection between "Tile All" and "arrange my plots in a grid" simply didn't exist in their heads.

**After the researcher revealed it:** Users were amazed. Said it would save them enormous time — they'd been manually rearranging plots every single time they ran code. This reaction is what triggered the design phase.

---

## The Context Menu — Before and After

### Before (developer-implemented)
- Manual grid picker — user clicks squares to choose 3x3, 2x4, etc.
- No grouping, no headings
- Mixed global and per-figure actions with no separation
- "Tile All" (confusing label), "Sub-Tile Figures" (submenu)
- "Tab Position" — change tab location (top/left/right/bottom). Nobody wanted this for plots.
- "Alphabetize" — sorts tabs alphabetically. Nobody wanted this for plots.
- "Close Figure", "Close All Except Figure", "Close All", "Close Figures" — 4 variants, confusing

### After (Piyush's redesign)

**Views**
- ☐ Tiled View (checkbox — the MATLAB-native pattern, used across the app)
  - Check = tile view, system auto-decides best grid layout
  - Uncheck = tabbed view
  - Drag a tab out = detached floating window (browser-like behavior)

**All Figures Actions**
- Dock all to MATLAB Editor / Pop-out All / Close All
- Reopen Last Closed Tab *(proposal — under technical evaluation)*

**'Figure 8' Actions** *(per-figure, scoped clearly)*
- Dock / Pop-out / Close All except / Close

**Removed:** Alphabetize, Tab Position, manual grid picker

**Key design principle won:** System decides the optimal grid layout. Users don't pick 2x3 or 3x3. Piyush fought for this throughout — the auto-layout was designed and shown in specs but was still in development when he moved off the project.

---

## The 10+ Ideas — Full Picture

**1. Tab/Tile toggle on the taskbar**
- Rejected by business: taskbar is global across MATLAB — not appropriate for a feature used contextually by plot viewers only

**2. Toggle button / switch button in the 3-dot menu**
- Rejected: MATLAB codebase from 1980. Context menu structure can't accommodate a switch/toggle component. Not in the design system for menus.

**3. Switch component in context menu (different variant)**
- Same issue — no switch component existed in the context menu design system

**4. View switcher in top-level ribbon under "Views"**
- Piyush was "bullish" about this — more room for future view types
- Rejected: "Views" in the ribbon is shared across all MATLAB, not just plots. Not all MATLAB aspects could be converted into distinct views.

**5. New tab in top-level ribbon**
- Rejected: Changes to the top-level ribbon require approval from multiple dependent teams across MATLAB. Too much scope.

**The turning point:** Piyush asked himself — *"If dev cannot do all these nice ideas, what can we do? What is the best approach moving forward?"* He proposed: *"What if we just work on the context menu and make it usable?"* Team aligned. This was the proposal that got everyone on the same page.

---

## The Reopen Last Closed Tab Feature

A proposal Piyush made that everyone loved, but faced technical constraints:

**The pain:** Run code → 9 plots generated → accidentally close one → to get it back, you must stop the entire code and run it again. Once a plot window is closed, the memory is freed. It's gone.

**Users' expectation:** A tabbed window should behave like a browser — Cmd+Shift+T should reopen the last closed tab. This expectation was natural and immediate.

**Status:** Design proposal. Business and dev teams evaluating technical feasibility at the time of handoff.

---

## How He Responded to Technical Constraints

He didn't push back. He asked *why* something couldn't be done. "My goal was to understand why something cannot be achieved rather than saying we have to do it."

When he understood the codebase constraint, he designed around it:
- Checkbox = an existing, accepted pattern in MATLAB (used throughout the app)
- Familiar to users already
- Fits within the component rules of the design system
- Technically achievable

The result: one checkbox. Check = tiled view (system decides grid). Uncheck = tabbed. Drag = float. No new components. No codebase changes beyond what was feasible.

---

## The Moment That Mattered

When Piyush showed the redesigned context menu to the team — including developers who'd worked on this part of MATLAB for years — their eyes lit up. They understood the users and the product better than anyone. Their reaction was the real validation.

---

## Piyush on Working Within Constraints

"I'm generally detached from my design ideas."

MATLAB taught him: *"Even a small detail — just clicking a checkbox to switch view — can have massive impact on customers."*

Also: *"Kill your preconceived notions about what a good interface looks like. If people know the UI, they are the happiest people. You don't know the UI because you're not the user."*

This was the project where he stepped into a hardcore engineering tool mindset — understanding how data scientists and researchers actually work, and how much they're already adapted to MATLAB's existing patterns. Respecting that was the design decision.

---

## Quotes Worth Using
- "1 out of 7 found it. In 5 minutes."
- "When the researcher showed them — their reaction was priceless."
- "If dev can't do these nice ideas — what can we do?"
- "I don't fight for ideas. I ask why they can't be done."
- "The codebase was from 1980. You design inside that."
- "A checkbox. That's it. Because that's what MATLAB users already know."
- "If people know the UI, they are the happiest people. You don't know the UI — you're not the user."

---

## Narrative Arc (Final)

1. 1/7 found it — but their reaction when shown it proved the feature was worth saving
2. Tried everything to make it accessible — taskbar, toggle, ribbon, new tab — each failed for a real, documented reason
3. The question that unlocked it: "What CAN we do?"
4. The answer: a checkbox. MATLAB-native. No new components. System decides the grid.
5. Eyes lit up in the room. That was the validation.
