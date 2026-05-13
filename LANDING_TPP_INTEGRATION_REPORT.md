# Landing TPPRisk AIQ Integration — Final Report

**Branch:** `feature/tpprisk-module-integration` (off `f1d39a0`)
**Date:** 2026-05-13
**Status:** All commits complete. **READY FOR LOCAL REVIEW.** Push to main pending explicit Dejan approval.

---

## 1. Starting state + framework

- **Starting SHA:** `f1d39a0` (ME landing terminology fix, 2026-05-01)
- **Framework:** Pure static HTML — no build step, no `package.json`, no bundler. Vercel serves the files directly.
- **Files in scope:** `index.html` (EN), `me/index.html` (ME). All other repo paths (`api/contact.js`, `logo.jpeg`, untracked backups) untouched.
- **Phase 0 catalog:** `LANDING_TPP_PHASE_0_CATALOG.md` (14 discovery items, committed alongside Track A)

## 2. AMA audit findings + conversions

**Result: zero conversions required.** Phase 0 audit confirmed AMA → Basel III OR Capital + Quantitative RCSA rebrand (commit `e27692b`, 2026-05-01) was fully clean. Only the existing negative reference *"replacing the deprecated AMA approach (Basel III final reform 2023)"* remains in both pages — preserved verbatim.

## 3. Commit chain

| Order | SHA | Title | Files |
|------:|-----|-------|------|
| 1 | `51fbbdf` | Landing Track A — TPPRisk AIQ EN integration + operational resilience repositioning | `index.html`, `LANDING_TPP_PHASE_0_CATALOG.md` (new) |
| 2 | `10d8d92` | Track A extension — Group Roles role card + On-Premise deployment differentiator (9/9 grid symmetry) | `index.html` |
| 3 | `5f81d4e` | Landing Track B — TPPRisk AIQ ME integration + operational resilience repositioning | `me/index.html` |

## 4. Track A — EN modifications

20 sections modified in `index.html` (A.1–A.20). Highlights:

| A-section | What changed |
|-----------|--------------|
| A.1 | Hero headline → *"Quantify Cyber, Operational & Third-Party Risk on One Defensible Capital Basis"*; sub rewritten for operational resilience; badge row adds DORA Article 28 RoI |
| A.2 | 3rd module-card badge (TPPRisk AIQ 🔗) |
| A.3 | 3rd dashboard preview section — top ICT provider concentration; RoI Completeness 99.7% footer |
| A.4 | *"Three modules. One operational resilience platform."* + new sub |
| A.5 | CyberRisk AIQ description refined (FAIR-based + control effectiveness + loss components) |
| A.6 | OpRisk AIQ tag updated to `Basel III · RCSA · ICAAP`; description refined |
| A.7 | **NEW** Module 03 TPPRisk AIQ — 14-bullet feature list anchored on EBA ITS B_05.01/B_06.01, CIF wizard, DPM ZZ:x959–x962, signed-ZIP |
| A.8 | Dual-line problem title + triple Before/After (provider concentration + RoI completeness After lines) |
| A.9 | 4 pillars: Pillar 02 **NEW** *Third-Party Dependency Intelligence*; Pillars 03/04 renumbered |
| A.10 | **Dual workflow**: Flow A (5 existing CR+OR steps preserved) + Flow B (5 new TPP steps) |
| A.11 | 8 → 9 role cards — added Vendor/TPP Manager, CRO/DORA Approver, Group Roles (extension) |
| A.12 | AI Engine: 3rd input column *Third-Party Context*, 3rd output column *TPPRisk Outputs*, AI accountability caveat |
| A.13 | Differentiators: existing CR+OR card retitled, 2 new TPP cards + 1 new On-Premise/SaaS/Holding card (extension) — 9 total |
| A.14 | One Methodology Stack extended for FAIR-based TPP + EBA RoI ITS |
| A.15 | Group Risk Intelligence: narrative updated for CR+OR+TPP + 3 new subcards |
| A.16 | Compliance table restructured to 7 rows (DORA expanded, new DORA Article 28, Solvency II All Three, ZDOOFS dedicated row) |
| A.17 | Roadmap: 4th TPPRisk AIQ Live card; duplicate ZDOOFS lines removed from CR + OR cards |
| A.18 | See It: 3rd TPP scenario in **provider portfolio table shape** + Portfolio Metrics + RoI Readiness + ✦ Diversification block |
| A.19 | Footer adds TPPRisk AIQ + Article 28 RoI disclaimer |
| A.20 | `<title>` updated + new `meta description`, `og:title`, `og:description` for operational resilience positioning |

CSS adjustments forced by new content (no visual redesign — only column counts):
- `.modules-grid`: 2-col → 3-col
- `.pillars-grid`: 3-col → 2-col (2×2 for 4 pillars)
- `.roadmap-phases`: 3-col → 4-col
- `.ai-io`: 2-col → 3-col
- New `.dot-tpp`, `.dot-cyber-tpp`, `.dot-all` for compliance-table module indicators
- Mobile fallbacks: `.ai-io` collapses, `.tpp-portfolio-table` horizontal-scroll with 640px min-width

## 5. Track A extension — Group Roles + On-Premise differentiator

Two post-visual-review additions caught at the Track A STOP gate (commit `10d8d92`):

- **9th role card "Group Roles"** (🏛️) — Group CISO / Group ORM / Group CRO oversight, cross-entity concentration, AI exec summary
- **9th differentiator "On-Premise, SaaS, or Holding Deployment"** (🌐) — EU data centres / on-prem / holding mode, RSA-signed JWT offline licensing, no phone-home

Role-section heading extended: *"Role-based accountability across Cyber, OR, Third-Party Risk, and group entities."*

Grids now symmetric: 9 roles in 3×3, 9 differentiators in 3×3 — no empty cells.

## 6. Track B — ME modifications

19 sections modified in `me/index.html` (B.4–B.18). Mirrors Track A scope using banking-register Montenegrin terminology drawn from ZDOOFS, CBCG, and EU regulatory transposition vocabulary.

**Translation policy applied (B.3 reuse):** existing translations from the pre-wave ME page preserved verbatim for sections that already existed. New translations applied only to repositioned/new content using B.1 terminology table.

**Locale strictness:** ME uses `KVF` exclusively (Kritična ili značajna funkcija); `CIF` reserved for EN. New content uses `IKT` per memory rule §14; legacy `ICT` mentions in preserved sections deferred to Sprint 7.

**Decimal-comma normalization:** applied throughout new TPP content (€8,4M, 99,7%, 4,8:1). Also normalized OR dashboard preview (1,41% / 0,92% / 0,54%) for visual consistency with adjacent new TPP section; CR dashboard (1.84% etc.) preserved as-is.

## 7. Compliance self-check results

### Track A (EN) — `index.html`

| Check | Target | Actual | Result |
|-------|-------:|-------:|--------|
| `KVF` count | 0 (ME-locale, must not leak) | 0 | ✅ |
| `CIF` count | >0 (used in EN) | 17 | ✅ |
| `ZDOOFS` count | 2 (Compliance row + Roadmap card) | 2 | ✅ |
| `TPPRisk AIQ` count | >0 brand-consistent | 19 | ✅ |
| `TPP AIQ\b` residue | 0 brand-strict | 0 | ✅ |
| `DORA Article 28` mentions | 6+ | 13 | ✅ |
| AMA positive-framing | 0 | 0 | ✅ |

### Track B (ME) — `me/index.html`

| Check | Target | Actual | Result |
|-------|-------:|-------:|--------|
| `IKT` count | high (NEW content) | 45 | ✅ |
| `ICT` count (legacy) | document, don't fix | 9 | ✅ (deferred Sprint 7) |
| `ZDOOFS` count | 2 | 2 | ✅ |
| `ZDOFS` typo guard | 0 | 0 | ✅ |
| `KVF` count | >0 (used in TPP) | 17 | ✅ |
| `CIF` count | 0 (ME-strict) | 0 | ✅ |
| `TPPRisk AIQ` count | >0 | 18 | ✅ |
| `TPP AIQ\b` residue | 0 | 0 | ✅ |
| `konsalting\|izuzev\|rešava` anglicism guard | 0 | 0 | ✅ |
| `DORA član 28` mentions | high | 10 | ✅ |

### Structural parity

| Element | EN | ME |
|---------|---:|---:|
| `<section>` open/close | 13/13 | 13/13 |
| Module panels | 3 | 3 |
| Pillar fade-ups (pillars + diffs) | 13 (4+9) | 13 (4+9) |
| Role cards | 9 | 9 |
| Roadmap phase cards | 4 | 4 |
| Compliance data rows | 7 | 7 |
| Workflow steps (Flow A + Flow B) | 10 (5+5) | 10 (5+5) |
| Total file lines | 2731 | 2734 |

## 8. ZDOOFS appearance verification

Final state in both files:

| Page | Total | Compliance row | TPPRisk roadmap card |
|------|------:|---------------:|---------------------:|
| `index.html` | 2 | 1 | 1 |
| `me/index.html` | 2 | 1 | 1 |

Duplicate ZDOOFS lines previously in CR and OR roadmap cards were removed and replaced with generic *"44 European countries with local regulator framing"* / *"44 evropske zemlje sa kontekstom lokalnih regulatora"* lines.

The Jurisdiction-Aware AI pillar mentions CBCG (not ZDOOFS) — preserved as the existing Montenegrin signal in pan-EU framing.

## 9. TPPRisk AIQ brand consistency verification

- `index.html`: `TPPRisk AIQ` appears 19 times; `TPP AIQ` (without "Risk") appears 0 times.
- `me/index.html`: `TPPRisk AIQ` appears 18 times; `TPP AIQ` (without "Risk") appears 0 times.

Brand-strict — full brand name used everywhere.

## 10. Local preview verification

**This is the only safety gate per D3.** Static HTML — no build step. Open the files in a browser:

```bash
# Option A: directly
open /home/default/projects/aiq-landing/index.html
open /home/default/projects/aiq-landing/me/index.html

# Option B: serve over HTTP (recommended for accurate /me/ routing)
cd /home/default/projects/aiq-landing
python3 -m http.server 8000
# then browse:
#   http://localhost:8000/        (EN)
#   http://localhost:8000/me/     (ME)
```

**Visual smoke checklist for Dejan:**
- Hero: 3 module badges visible (CR / OR / TPP); badge row includes *"DORA Article 28 RoI"* / *"DORA član 28 RoI"*
- Dashboard preview: 3 chart sections; TPP section shows provider concentration in gold-gradient bars with €P95 values and RoI completeness footer
- Modules: 3-column grid renders Module 03 TPPRisk AIQ cleanly
- Problem: 2 cards each showing 3 stacked quotes (heat map + vendor list + RoI spreadsheet) on Before; 3 capital/concentration/RoI quotes on After
- Pillars: 2×2 grid with Pillar 02 "Third-Party Dependency Intelligence" in top-right or bottom-left
- Workflow: Flow A label visible above 5 CR+OR steps; Flow B label visible above 5 TPP steps; closing caption renders
- Roles: 3×3 grid renders 9 role cards, ending with Vendor Manager / CRO-DORA Approver / Group Roles in last positions
- AI Engine: input row shows 3 columns including Third-Party Context; output row shows 3 columns including TPPRisk Outputs; accountability caveat appears at section end
- Differentiators: 3×3 grid renders 9 cards including DORA RoI, Vendor Inventory, On-Premise
- Group Risk Intelligence: right column shows 6 stacked feature cards including 3 new TPP subcards
- Compliance table: 7 data rows including DORA Article 28 (highlighted), Solvency II → All Three Modules with conic-gradient dot, ZDOOFS row
- Roadmap: 4-column grid renders CR / OR / TPPRisk / Enterprise cards
- See It: 3 scenarios — Cyber (interactive), OR, TPPRisk (provider portfolio table + portfolio metrics + RoI block)
- Footer: brand list includes TPPRisk AIQ; new Article 28 disclaimer line visible

**Vercel preview URL:** none — the project auto-deploys main → cyberriskaiq.com (per D3). Local preview is the only pre-prod gate.

## 11. Deferred items

Per brief Section 12 (deferred to Sprint 7 / future waves):

1. **App brand rename** *"TPP module" → "TPPRisk AIQ"* in app sidebar, banker-user vodič v3.1, admin vodič v4.1, super-admin LicencePanel — landing/app naming gap documented.
2. **Legacy ICT → IKT cleanup** in unchanged ME content (9 remaining mentions in `me/index.html` lines 1557, 1724, 1776, 1855, 1961, 2144, 2152, 2295, 2371). Out of scope per brief §12 item 2.
3. **TPPRisk Flow B visual polish** — current text-based 5-step adequate; icons / arrows / visual flow → Sprint 7 marketing.
4. **OG image / Twitter card update** for social share previews — Sprint 7 marketing.
5. **Hero imagery / module-specific iconography refresh** for TPPRisk — Sprint 7 marketing.
6. **Multi-region URL strategy** (de/hr/sr language variants) — out of scope.
7. **SEO/SEM keyword campaign** around "operational resilience" repositioning — separate marketing workstream.

## 12. Branch state + push protocol

**Current branch:** `feature/tpprisk-module-integration`
**Latest SHA:** `5f81d4e80a9be9f137f3fdf3ce6a5259b29c0298`
**Commits ahead of main:** 3 (Track A → Track A extension → Track B)
**Untracked files preserved:** `index.html.old`, `index.html.old.1`, `fix_me_terms.py` — untouched per D4.

### Push protocol (D3-confirmed)

`aiq-landing` Vercel project auto-deploys `main` → `cyberriskaiq.com`. There is **no preview-branch workflow**. Local preview is the only safety gate.

**Push sequence (Dejan-controlled):**

1. Dejan opens `index.html` + `me/index.html` locally in a browser — visual smoke check per Section 10 checklist.
2. If visual review OK, Dejan grants explicit push approval in chat.
3. CC then merges `feature/tpprisk-module-integration` to `main` locally and pushes:
   ```bash
   git checkout main
   git merge feature/tpprisk-module-integration --no-ff
   git push origin main
   ```
   (Alternative: `git push origin feature/tpprisk-module-integration:main` if Dejan prefers fast-forward push without local merge commit.)
4. Vercel auto-deploys main → production (~2–3 min).
5. Verify https://www.cyberriskaiq.com/ and https://www.cyberriskaiq.com/me/ render correctly.

**Critical constraint:** push to main requires **explicit chat approval from Dejan**, not automatic CC action.

## 13. Pending

- [ ] Dejan local review of `index.html` (EN)
- [ ] Dejan local review of `me/index.html` (ME)
- [ ] Explicit push approval in chat
- [ ] Merge + push to main
- [ ] Production deploy verification

**End of report.**
