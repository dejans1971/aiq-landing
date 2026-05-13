# Phase 0 Catalog — TPPRisk AIQ Landing Integration

**Branch:** `feature/tpprisk-module-integration` (created from `main` at `f1d39a0`)
**Date:** 2026-05-13
**Status:** Phase 0 complete. Awaiting Claude-chat review before Track A.

---

## §1 — Build framework identification

**No build framework.** Pure static HTML site.

- No `package.json`
- No `README.md`
- No `node_modules/`
- No bundler config
- Vercel serves the HTML files directly

**Implication:** Section 8 DoD line *"Local preview/build successful (Phase 0 §1 framework command)"* requires only opening `index.html` and `me/index.html` in a browser (or `python3 -m http.server` for static-serve check). No build command exists.

## §2 — Page structure inventory

Repo layout:

```
.
├── api/contact.js         (Vercel function — out of scope)
├── index.html             (2318 lines — EN page)
├── me/index.html          (2295 lines — ME page)
├── logo.jpeg
├── index.html.old         (UNTRACKED — pre-existing backup; do not touch)
├── index.html.old.1       (UNTRACKED — backup created today 2026-05-13; do not touch)
└── fix_me_terms.py        (UNTRACKED — user's in-progress utility; do not touch)
```

**Track A scope:** `index.html` only.
**Track B scope:** `me/index.html` only.

## §3 — i18n mechanism

**Separate full pages, no translation-key system.**

- EN: root `index.html` with `<html lang="en">`, hreflang alternates point to `/` and `/me/`
- ME: `me/index.html` with `<html lang="cnr">` (Montenegrin), same alternates
- Each file is self-contained (full styles, full content, full scripts).
- Language switcher at lines 1153-1157 (EN) and equivalent in ME — anchor links.

**Confirms:** Track A writes to root `index.html`; Track B writes to `me/index.html`. No shared content layer.

## §4 — Module data structure

**Inline content.** No centralized data file (no `data/modules.json`, no `_data/`). Each module is hand-coded HTML inside the respective `index.html`.

EN module references:
- Module cards (hero badges): lines 1184, 1191
- Modules section: lines 1267–1319 (heading at 1269)
- Dashboard preview chart-section-labels: lines 1207, 1225
- AMA negative-reference line: 1773
- Compliance table module indicators: lines 1898, 1906, 1914, 1930
- Roadmap phase labels: lines 1951 (CR), 1990 (OR), 2022 (Enterprise)
- Footer module list: line 2222

ME equivalents at near-parallel line numbers (1183, 1190, 1206, 1224, 1770, 1888…2199).

## §5 — Roadmap data structure

**Inline HTML.** 3 cards: CyberRisk AIQ / OpRisk AIQ / Enterprise Scale — all `● Live`.

Pattern per card:
```html
<div class="phase-label">CyberRisk AIQ</div>
<span class="phase-status status-live">● Live</span>
<ul class="phase-items">
  <li class="phase-item done"><div class="phase-dot"></div><span>…</span></li>
  …
</ul>
```

Container: `<div class="roadmap-phases">` inside `<section class="roadmap" id="roadmap">`. New TPPRisk AIQ card slots in here.

## §6 — Compliance Coverage table structure

**Inline HTML.** `<div class="reg-table">` with `<div class="reg-row">` rows; first row is `.reg-row.header`. 16 `reg-row` tokens in EN = header + 3 data rows × (1 header-row + 3 data-rows would be 4 reg-row tokens, so actually 4 rows total).

Layout: 4 cells per row — Framework | Applicable Sectors | Platform Coverage | Module.

Current data rows (EN):
1. DORA (line 1898 indicator)
2. Basel III / CRR OpRisk (line 1906)
3. NIS2 (line 1914)
4. ZDOOFS Montenegro + ZIB (line 1937)

Brief A.16 expands to 7 rows. New rows insert between existing ones.

## §7 — See It scenario structure

**2 scenarios, both using capital-impact card structure.**

Pattern per scenario:
- Section header strip + scenario title
- 4-metric grid (`demo-metrics-grid`): Capital Impact % / Expected Loss / P90 Loss / Tier
- Demo IDs: `demo-capital`, `demo-loss`, `demo-p90`, `demo-tier` (cyber scenario only — interactive with `applyControls()` button); OR scenario has parallel non-interactive copy.
- Result panel below.

Brief A.18 requires 3rd TPP scenario with **DIFFERENT shape** — provider portfolio table (Provider × CIF × P95 × Substitutability × Confidence) + portfolio metrics block + RoI completeness block + "✦ With Diversification" treatment block. NOT capital-impact card.

## §8 — Hero badges + dashboard preview

**Module badges:** `<div class="module-cards">` at lines 1180–1194 contains 2 cards (CyberRisk AIQ, OpRisk AIQ). Pattern: icon + name + tag.

**Dashboard preview:** `<div class="hero-chart">` at 1205 with 2 module sections — CyberRisk AIQ ICT Scenarios (Ransomware/Data Exfil/Phishing) + OpRisk AIQ Basel Event Types (Settlement Error/Payment Fraud/System Outage). Each row: `chart-row-label` + `chart-bar` + `chart-val`.

Brief A.2 adds 3rd module-card (TPPRisk AIQ). Brief A.3 adds 3rd dashboard section — **DIFFERENT shape** (provider names + P95 + CIF count + RoI completeness footer), NOT chart bars.

## §9 — Footer module list

- EN line 2222: `<div class="footer-logo">AIQ <span>Suite</span> — CyberRisk AIQ · OpRisk AIQ</div>`
- ME line 2199: identical structure.

Add `· TPPRisk AIQ` + new disclaimer line per A.19/B.4.

## §10 — AMA terminology audit

**Result: CLEAN.**

```bash
grep -rn "AMA\|Advanced Measurement Approach" . --include="*.html" --include="*.md" \
  | grep -v node_modules | grep -v ".old"
```
**Zero positive-framing AMA hits.** Only existing negative-context appearances:
- EN line 1773: *"replacing the deprecated AMA approach (Basel III final reform 2023)"* — correct
- ME line 1770: *"zamjenjujući zastarjeli AMA pristup (Basel III final reform 2023)"* — correct

**Verdict:** AMA → Basel III OR Capital + Quantitative RCSA conversion (commit `e27692b`, 2026-05-01) is fully clean. No additional conversions required in Track A or Track B beyond preserving the existing negative references. Memory `project_rcsa_rebranding.md` accurate.

## §11 — ICT vs IKT usage in ME page

| Page | ICT | IKT |
|------|----:|----:|
| `index.html` (EN) | 32 | 0 |
| `me/index.html` (ME) | 18 | 9 |

**ME state: mixed.** Existing ICT in ME is legacy content. Per memory rule §14 and brief Track B prelude, **NEW content in Track B uses IKT exclusively**. Existing ICT cleanup remains **OUT OF SCOPE** (deferred to Sprint 7 per brief §12 item 2).

Track B self-check (B.5) will verify NEW content contains zero ICT, only IKT.

## §12 — Vercel deploy config

```bash
cat vercel.json           # NO vercel.json
cat .vercel/project.json  # NO .vercel/project.json
```

**Result:** No Vercel config in repo. Deploy behaviour is governed entirely from the Vercel dashboard.

**Action required from Dejan before push:** confirm that pushing `feature/tpprisk-module-integration` to GitHub generates **only a Vercel preview deploy**, NOT a production deploy. Default Vercel behaviour is preview-only for non-default branches, but explicit confirmation avoids surprise prod-deploy. The brief's *"Push to feature branch; NOT merged to main"* + *"Vercel preview deploy renders without errors"* assumes preview-only.

## §13 — KVF ME terminology

**Search result in landing files:**
```bash
grep -ni "KVF\|kvantitativna verif" index.html me/index.html  # zero hits
```

The acronym **KVF** does not currently appear anywhere on either landing page. The main app repo `../ai-quantified-cyber-risk-platform/` exists on this filesystem, but the brief's specific path `backend/seeds/translations/me_reference.csv` was not deep-verified during read-only Phase 0 (would require sub-repo exploration outside Track A/B scope).

**Brief's own draft B.1 entry already pre-decides this** as: *"KVF procjena (canonical ME expansion per Phase 0 §13 if surfaced)"*.

**Verdict — flagged for Claude-chat:**
- **Option A** (default if no input from Claude-chat): use exactly *"KVF procjena"* in Track B, with first-occurrence parenthetical *"(Kritična ili značajna funkcija)"* — matches the EN "Critical or Important Function" pattern and aligns with brief's terminology table entry.
- **Option B**: Claude-chat provides canonical app-repo phrase (e.g. *"kvantitativna verifikacija pružaoca"* if that's what banker-user vodič v3.1 uses) — I substitute that throughout Track B.

**Recommend Option A** unless Claude-chat surfaces a specific divergence from the app v3.1 guide.

## §14 — Meta tags audit

| Tag | EN | ME |
|-----|----|----|
| `<title>` | `AIQ Suite — AI Quantified Risk Intelligence` | `AIQ Suite — Kvantifikovana AI-potpomognuta rizik inteligencija` |
| `meta name="description"` | **missing** | **missing** |
| `og:title` | **missing** | **missing** |
| `og:description` | **missing** | **missing** |
| `og:locale` | `en_US` (with `cnr_ME` alternate) | `cnr_ME` (with `en_US` alternate) |
| `hreflang` alternates | present | present |

**Action in Track A A.20 / Track B:**
- Update `<title>` for both pages to the operational-resilience repositioning.
- **ADD** (not update) `<meta name="description">`, `<meta property="og:title">`, `<meta property="og:description">` to both pages. These tags currently do not exist — net-new insertions.

---

## Extra — ZDOOFS state (Critical constraint §2)

**Current occurrences:**

| Location | EN line | ME line |
|----------|--------:|--------:|
| Regulatory compliance row (Montenegro) | 1937 | 1927 |
| Roadmap — CyberRisk AIQ card jurisdiction-aware line | 1970 | 1956 |
| Roadmap — Enterprise Scale card jurisdiction-aware line | 2005 | 1986 |
| **Total per page** | **3** | **3** |

**Two of three appearances are duplicates inside the roadmap** (same sentence repeated in both CR-card and Enterprise-card jurisdiction lines).

**Target post-Track-A state (max 3 per Section 8 DoD):**
1. Compliance row (preserved — A.16 row 7 — *"ZDOOFS Montenegro + ZIB"*)
2. Roadmap TPPRisk AIQ card jurisdiction line (A.17 — *"Multi-jurisdiction support — pan-EU DORA + Montenegro ZDOOFS (Sl. list CG 14/26) + ZIB transpositions in production"*)
3. (Optional) Jurisdiction-Aware AI pillar — currently shows *"CBCG-framed guidance"* not literal ZDOOFS. Brief §2 critical constraint lists this slot as *"existing CBCG for Montenegrin banks mention preserved"* — so the pillar mention may remain CBCG-only (no ZDOOFS), keeping total at **2 ZDOOFS** instead of 3.

**Required Track A cleanup:**
- **REMOVE** ZDOOFS line from Roadmap CR card (EN 1970, ME 1956)
- **REMOVE** ZDOOFS line from Roadmap Enterprise card (EN 2005, ME 1986)
- **ADD** ZDOOFS line to new Roadmap TPPRisk AIQ card

This is a behaviour-changing cleanup. **Flagged for explicit Claude-chat sign-off** before Track A modifies existing roadmap cards.

---

## Cross-check matrix

| Discovery item | Source verified | Assumption avoided | Track impact |
|---|---|---|---|
| §1 framework | `ls -la`, absent `package.json`/`README.md` | Did not assume Astro/Next from "Effort estimate" wording | DoD line "Local preview/build successful" reduces to static-serve check |
| §2 file set | `find -name *.html` | Did not include backups or main app repo | Track A = `index.html`; Track B = `me/index.html` |
| §3 i18n | `<html lang>` check, hreflang inspection | Did not assume shared-content layer | Edit both files separately; no shared component refactor |
| §4 module data | `grep CyberRisk AIQ`, inline HTML observed | Did not search for `modules.json` after confirming inline | Hand-edit module HTML directly |
| §5 roadmap | `.phase-label`/`.phase-items` structure read | Did not assume JSON-driven roadmap | Insert 4th `<div class="phase-label">` block |
| §6 compliance | `.reg-row` count + indicators | Did not assume HTML `<table>` | Add `.reg-row` divs in same pattern |
| §7 see-it shape | Read scenario HTML — confirmed shared 4-metric card | Did not assume TPP must be 4-metric card | TPP scenario gets new layout (per A.18) |
| §8 hero | Read `.module-cards` + `.hero-chart` | Did not assume background image swap needed | Add 3rd card + 3rd chart-section with different shape |
| §9 footer | `grep footer-logo` | — | Append `· TPPRisk AIQ` + disclaimer line |
| §10 AMA | Zero hits | Verified with grep, did not trust memory alone | No conversions required |
| §11 ICT/IKT | Counts: EN 32/0, ME 18/9 | Did not over-extend scope to legacy ICT cleanup | NEW Track B content uses IKT; legacy untouched |
| §12 vercel | No config in repo | Did not assume git-push auto-prod-deploys | Confirm with Dejan before push |
| §13 KVF ME | Zero hits in landings | Did not deep-dive sub-repo absent explicit task | Default to "KVF procjena (Kritična ili značajna funkcija)" unless Claude-chat overrides |
| §14 meta | `<title>` only — no og/description | Did not assume tags exist to update | ADD net-new meta tags |
| ZDOOFS | 3 per page, 2 are duplicates | Did not auto-delete; surfaced for sign-off | Cleanup planned but flagged |

---

## Open items for Claude-chat sign-off before Track A

1. **KVF ME canonical expansion** — confirm Option A (*KVF procjena (Kritična ili značajna funkcija)*) or supply Option B.
2. **ZDOOFS roadmap cleanup** — confirm removal of existing duplicate ZDOOFS lines from CR-card (line 1970/1956) and Enterprise-card (line 2005/1986) when adding the new TPPRisk-card line.
3. **Vercel preview-only confirmation** — confirm pushing the feature branch will not trigger a production deploy.
4. **Untracked files** — confirm `index.html.old`, `index.html.old.1`, and `fix_me_terms.py` are intentional in-progress files and should remain untouched.

---

**Phase 0 complete. STOP for Claude-chat review.**
