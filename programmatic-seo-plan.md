# Nivio — Programmatic SEO Plan (task #22)

**Status: planned, not yet executed.** Programmatic SEO scales content to capture long-tail search. It only pays off AFTER (a) the domain is live and crawlable, and (b) the core 7 pages are indexed and starting to rank. Executing it before that wastes effort and can look thin to Google. This is the v2 content engine — the plan is ready to fire when the prerequisites are met.

## The opportunity

Nivio's data + product structure creates several natural "page-per-X" patterns where each page targets a narrow, low-competition long-tail keyword. The biggest: **Dispatch × commodity vertical.**

## Pattern 1 — Dispatch per commodity (highest priority)

Nivio Dispatch serves 15 commodity verticals. Each is a distinct search:

`dispatch.niviolab.com/[commodity]` → "Bulk [commodity] dispatch software"

| URL | Target keyword |
|-----|----------------|
| /dispatch/sand | bulk sand hauling dispatch software |
| /dispatch/crude | crude oil hauling dispatch software |
| /dispatch/water | oilfield water hauling dispatch software |
| /dispatch/fuel | bulk fuel delivery dispatch software |
| /dispatch/chemicals | chemical tanker dispatch software |
| /dispatch/grain | grain hauling dispatch software |
| ... | (15 total: diesel, chemicals, sand, aggregate, food grade, lube oil, fertilizer, crude, dairy, grain, NGL, water, coal, vacuum, sulfur) |

**Why it works:** each commodity has its own operators searching for *their* specific problem. "Sand hauler dispatch" converts far better than generic "dispatch software," and competition is near zero. The 75-truck sand and 120-truck fuel case studies map directly onto the sand and fuel pages as proof.

## Pattern 2 — Dispatch per state/region (secondary)

`/dispatch/texas`, `/dispatch/permian`, etc. Geographic long-tail. Lower priority — start with the Permian/Texas pages since the existing case studies are Texas-anchored.

## Pattern 3 — Vet/Bind per use case

- Vet: `/vet/nuclear-verdict-protection`, `/vet/carrier-onboarding`
- Bind: `/bind/captive-managers`, `/bind/mga-binding`

## Page template (per-commodity Dispatch)

Each programmatic page reuses the D4 system + a fixed template, with commodity-specific variables filled in:

```
- Hero: "Dispatch your [commodity] fleet in one click."
- Sub: the commodity-specific pain (e.g., washout rules for chemicals, water-cut for oilfield water)
- The commodity's specific constraints Dispatch handles
- The matching case study if available (sand→$599K, fuel→$1.48M)
- Standard bento / pipeline / KPI / founder band / CTA (shared)
- Per-page SEO: title "Bulk [Commodity] Dispatch Software — Nivio Dispatch", unique meta description, SoftwareApplication + FAQ schema
```

**Build approach:** one template + a data file (15 commodity rows: name, pain, constraints, case study). Generate all 15 pages from the template. Keeps them consistent and on-brand, avoids thin/duplicate-content penalties by giving each genuinely commodity-specific copy.

## Quality guardrails (avoid Google's scaled-content penalty)
- Each page must have genuinely unique, useful commodity-specific content — not just a find-and-replace of the commodity name. Real constraints, real language, real proof.
- Don't publish all 15 at once — roll out 3–5, confirm they index and don't trigger quality flags, then continue.
- Internal-link each commodity page to the main Dispatch page and 2–3 sibling commodity pages.

## Execution trigger
Run this AFTER: domain live (#23) + core pages indexed in GSC + at least one core page showing impressions. Estimated: 4–6 weeks post-launch. Until then, this plan stays on the shelf.
