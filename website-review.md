---
title: Nivio Website Review — Marketing, Design & Conversion
date: 2026-05-20
reviewer: GTM review (brand-voice + CRO + copywriting + copy-editing + marketing-psychology + design/accessibility)
scope: 7 pages — index, dispatch, marketer, underwrite, carrier-shield, broker, board-room
launch: July 1 (lead product: Nivio Dispatch)
standard: config/brand-voice.md · config/brand-soul-review.md · brand/visual-identity.md · products/*.md
---

# Nivio Website Review

## Executive Summary

The site is **visually excellent and structurally world-class** — the D4 design system (Geist, cobalt/violet gradient, glass nav, the floating product-card hero, bento, pipeline, KPI cards, dark CTA) is genuinely Linear/Vercel-grade. Nobody would mistake the *visual craft* for AI slop. The skeleton, rhythm, and component polish are launch-ready.

The **copy and positioning are not**. There are two categories of problem, and the first is severe enough to block launch:

1. **Fabricated proof everywhere.** Every page invents named customers, GWP figures, tenure ("16 months," "14 months," "$340M GWP," "$180M GWP," "$12M GP"), production counts ("128 customers," "14 fleets in production," "9 MGAs"), and blended performance deltas presented as real customer results. The products' own context files say status is **"Taking first customers (2026 cohort)"** — i.e. pre-revenue or near it. The brand standard (`brand-voice.md`, principle 2 + "Receipts") is built on *verified* numbers with sources. Shipping invented testimonials and customer counts is a credibility bomb (a prospect who knows the industry will smell it), a legal-liability risk (the copywriting skill explicitly flags fabricated testimonials), and a direct violation of the Content Standard. **This must be fixed before July 1.**

2. **Three of six product pages are positioned as the wrong product.** Carrier Shield, Vet, and Board Room were each built around a different job than their product context defines (details below). These aren't copy tweaks — they're rebuilds of the page's central argument.

The good news: Dispatch and Bind are close, Marketer needs a vocabulary fix, and the fabrication problem is fixable by swapping invented receipts for the **real** ones we own (the 75-truck sand fleet, the 120-truck fuel fleet, the 60-truck water fleet, 31M rows, 800K pre-scored carriers) plus honest "early access / first cohort" framing.

### Top 5 highest-impact improvements (whole site)

1. **Strip every fabricated customer, testimonial, and "in production" count site-wide.** Replace with (a) the real Dispatch case-study numbers we actually have, and (b) honest founder-cohort framing ("First 25 fleets. We're taking the first cohort now."). Pratfall + Authority + real receipts beats invented social proof. **(High)**
2. **Re-found Board Room, Vet, and Carrier Shield on their actual jobs.** Board Room = an on-demand AI advisory cabinet for SMB decisions (NOT a company KPI dashboard). Vet = 5-second carrier vet that saves you from a $100M nuclear verdict (NOT a margin/pricing workbench). Carrier Shield = a *fleet owner* defending their own renewal premium with their own data (NOT a broker vetting tool — that's Vet's job). **(High)**
3. **Rewrite every hero to pass the opening-line test.** Most heros currently lead with the *feature/output* ("Every physical deal. One surface.") instead of the buyer's lived 5:30am reality. Open by naming the pain in their language, then offer relief. **(High)**
4. **Fix two hard brand-voice violations:** Dispatch's title/meta says "Route Optimization" (forbidden — "route optimizer" is explicitly banned), and Marketer calls the buyer a "trader/trading" throughout (forbidden — Marketer is physical movement, NOT trading). **(High)**
5. **Make founder credibility the spine of the site.** Kosta — "built by a fleet operator who ran 100 trucks for a decade" — is the single strongest asset and appears almost nowhere. Add a founder band to every page and a real "Talk to Kosta" CTA. This is the Authority + Liking lever the brand soul review names as the unfair advantage. **(High)**

**Overall quality assessment:** Design 9/10. Copy/positioning 4/10 as written, ~8/10 achievable with the rewrites below. The site looks like a world-class designer built it; it does not yet read like a world-class copywriter who *gets the buyer's life* wrote it — and it currently fails the brand's own honesty standard.

---

## Sitewide Findings

### S1 — Fabricated proof (High, blocks launch)
Named, invented customers and metrics across all pages:
- index: "Sarah Kim · COO · Coastal Carriers · $340M GWP · Customer 16 months"; "128 active customers / +18 this quarter"; "6 of 6 live"; "14 fleets / 9 MGAs / 24 desks live."
- dispatch: "Derek Karras · VP Ops · Meridian Lines · 240 power units · Customer 9 months"; "14 fleets in production."
- marketer: "Desk Head · Independent Refiner · Customer since Q2 '25"; "Live for 10 desks."
- underwrite: "Maria Chen · Chief Underwriter · Lonepine MGA · $180M GWP · 14 months"; "9 MGAs in production"; "1,480 subs/mo," "−412 bps."
- carrier-shield: "James Morales · VP Ops · Coastal 3PL · 4,200 loads/mo · 11 months"; "128 carriers vetted / 24 customers."
- broker: "Ricardo Torres · Owner · TX Freight Solutions · $12M GP · 7 months"; "24 broker desks live."

**Fix:** Remove all of it. Then rebuild proof from what's real:
- **Dispatch** has genuine, citable receipts — use them: *"75-truck sand fleet, Permian: loaded-mile 43.25% → 47.84%, ~$599K annual impact. 120-truck fuel fleet: ~$1.48M. 60-truck water fleet: zero HOS violations, 18% more loads per shift."* These are vivid, specific, and ours.
- For products without live customers yet, **say so and make it a feature** (Pratfall + Scarcity): *"We're onboarding the first cohort now — first 25 fleets / first 10 desks / first 20 brokerages."* The product files literally give these cohort numbers.
- Replace fake testimonials with a **founder quote** (Kosta, attributable and true) until real customer quotes exist: *"I ran 100 trucks for a decade. I lost the same three hours every morning you do. So I built the tool I wished I'd had." — Kosta Kefalos, founder."*

### S2 — Founder story is nearly absent (High)
Kosta — the #1 differentiator per both `brand-voice.md` and `brand-soul-review.md` — appears only as a "Talk to Kosta" link on Marketer. The narrative arc (Recognition → Acknowledgment: "nobody built the tool, until an operator did" → Resolution) is never told. **Fix:** Add a short founder band to every page (photo or monogram + one operator line + "Talk to Kosta" CTA). On index, add an "About / Built by an operator" section. Never call him CEO — "founder" / "former fleet operator" only.

### S3 — CTAs are honest-but-weak and all route to one email (High for conversion)
Every primary CTA is `mailto:admin@nivio-optimize.com`. Problems: (a) the domain is `nivio-optimize.com` on a site branded `niviolab.com` — instant trust crack; (b) mailto has high friction and zero capture; (c) "See pricing" also opens a blank email. **Fix:** Use a real booking link (Calendly/HubSpot) or an inline form. Keep one clear primary action per page. If email must stay short-term, brand it (`hello@niviolab.com`) and pre-fill subject + body. Add a lightweight lead form to the dark CTA card (name, company, fleet/desk size) — that also feeds qualification.

### S4 — Nav inconsistency + dead links (Medium)
- index nav lists "Home / Dispatch / Marketer / Bind / Shield / Vet / Board Room"; the product pages drop "Home" and instead insert it mid-list, and label the tab "Carrier Shield" vs "Shield" inconsistently. dispatch.html nav has **no Home link at all** (brand logo links home, but there's no nav item). **Fix:** One canonical nav, identical order, on all 7 pages, with Home first and consistent "Carrier Shield" label.
- All footer product links and most footer links are `href="#"` (dead). Wire them to the real pages before launch.

### S5 — "Six surfaces, one record" master story doesn't match reality (Medium)
index sells a six-product unified platform ("one data layer," "6 of 6 live," cross-product roll-up). But the GTM plan launches **Dispatch alone on July 1**; the other five are early-access. The homepage overpromises a mature suite. **Fix:** Keep the platform vision, but lead with Dispatch as the live flagship and frame the rest as "rolling out through 2026 — first cohorts opening now." This is more honest and creates scarcity.

### S6 — Logo bar repeats the same six fake names on 4 of 7 pages (Medium)
"REFINER CO / Gulfport Trading / TERMINAL.OPS / Meridian Fuels / The Grain House / NGLX CORP" appear identically on index, marketer, carrier-shield, and broker — and they're invented commodity names that don't even fit a *broker* or *carrier-vetting* page. **Fix:** Until real logos exist, replace the "Trusted by" bar with a **capability/credibility bar** that's true: "31M+ rows of carrier data · 800K carriers pre-scored · Built by a 100-truck fleet operator · ELD-native (Motive, Samsara, Geotab, Omnitracs)." Truthful, specific, and stronger than fake logos.

### S7 — Forbidden / off-brand language audit (High where flagged)
- **"Route Optimization"** — dispatch.html `<title>`, meta description, and OG (`Bulk Fleet Dispatch & Route Optimization`). "Route optimizer" is explicitly forbidden for Dispatch (too generic, implies last-mile). **Fix:** "Bulk Fleet Dispatch & Load Planning" or "Bulk Fleet Dispatch Software."
- **"trade / traders / trading"** — marketer.html uses it repeatedly ("every bulk commodity trade," "your traders stopped asking," "desks trading physical bulk"). Forbidden for Marketer (it's physical movement, not trading). **Fix:** "every physical commodity move," "your marketers," "desks moving physical bulk."
- **"34M combinations"** — dispatch + marketer + index hero/steps say 34M (or 34.2M). The corrected Dispatch figure is **5,000,000+** (product file, user correction 2026-05-19). The 34M number is unsourced and contradicts our own spec. **Fix:** Use "5M+ valid combinations" for Dispatch; for Marketer use a figure we can defend or drop the count.
- No instances of "revolutionary/disruptive/world-class/synergy/transform" found in body copy — good. "Solutions" and "leverage (verb)" also clean.
- "Deterministic. Not AI." (marketer hero) is on-brand for product pages per visual-identity reconciliation — keep.

### S8 — Accessibility (Medium)
- **Contrast:** `--ink4 #8994B0` on white is ~2.9:1 — **below WCAG AA (4.5:1)** for the small text it's used on (KPI labels, meta rows, foot-bottom, logo marks). The mono meta rows and `--ink3` on `--bg2` are borderline. **Fix:** darken small-text greys to at least `--ink3 #4A5675` (≈7:1) for anything under 18px; reserve `--ink4` for large/decorative only.
- **One-H1:** each page correctly has a single `<h1>` — good. But section kickers ("The modules," "The numbers") are `<div>`, and the bento card titles are `<div class="bx-h">` not headings — screen-reader users get no document outline below H2. **Fix:** make bento/KPI titles `<h3>`.
- **Links vs buttons:** "Sign in," "Get started," "Release," "Confirm" are `<a href="#">` styled as buttons — fine, but the in-product demo buttons (Release/Approve/Send) are non-functional anchors; mark decorative product-card UI `aria-hidden="true"` so AT doesn't announce fake controls.
- **Animation:** the ticker and gradient orbs have no `prefers-reduced-motion` guard. **Fix:** add `@media (prefers-reduced-motion: reduce){ .tape-run{animation:none} }`.
- **Icon-only/decorative SVGs** (sparklines, brand mark) have `aria-label="Nivio"` on the logo (good) but the data viz SVGs are unlabeled — mark `aria-hidden="true"`.
- **Color as sole signal:** ticker up/down uses only green/red. Add the ↑/↓ glyph (mostly present) consistently.

### S9 — "Est. 2025" vs "© 2026" vs founding "2026" (Low)
Footer says "Est. 2025," schema says `foundingDate 2026`, copyright 2026. Pick one founding year and make it consistent across footer + JSON-LD on all pages.

---

## Per-Page Findings

### index.html (Master homepage)

**Copy**
- *Hero (High):* "Modernizing the work that moves the world." is the tagline verbatim — fine as a brand line, but as a *homepage H1* it's a mission statement, not a value proposition; a cold visitor doesn't learn what they get. The sub is good but generic. **Fix:** Keep the tagline as an eyebrow/kicker and make the H1 do work: *"Software for the work that moves the world — built by an operator who did it."* Sub: *"Dispatch boards, marketing desks, underwriting queues, carrier vetting — the outdated tools the freight, fuel, and insurance world runs on, rebuilt for this century. Dispatch is live now."*
- *(Medium):* "Six surfaces, one record" is insider jargon for a cold homepage visitor; "surface" is used 12+ times and never defined. Lead with plain language ("six products"), introduce "one record" as the payoff.

**Conversion**
- *(High):* Hero CTAs "Book a walkthrough / Explore the platform" are reasonable, but the page asks the visitor to "Pick a surface" (choose among 6) — Paradox of Choice on first impression, exactly what the brand soul review warns against. **Fix:** Make Dispatch the obvious primary path ("Start with Dispatch — it's live"), with the other five as "explore."
- *(Medium):* No founder section, no real proof, no objection handling, no pricing signal. Add a founder band + the Dispatch receipts as the homepage's proof block.

**Brand voice**
- *(High):* The fabricated "128 customers / Sarah Kim" content (see S1).
- *(Low):* "<2 weeks time to live / SOC2 in flight" signal row is fine and on-brand (specific).

**Psychology**
- *Missing:* Authority (founder), real Availability (the $599K/$1.48M stories), Loss Aversion (what the buyer loses today). *Over-using:* fake Social Proof. **Highest-leverage add:** founder authority + one vivid real case study in the hero signal row.

**Design**
- *(Low):* Strong. The platform product-card is the weakest of the seven heros because "Active customers 128 / 6 of 6 live" is abstract; once de-fabricated, consider showing a *cross-product* glimpse (a dispatch row + an underwrite verdict) to make "one record" tangible.

**Accessibility:** see S8. Also the hero badge "Now live · Six surfaces" overstates (S5).

---

### dispatch.html (LEAD PRODUCT — highest bar)

**Copy**
- *Title/meta (High):* "Route Optimization" is forbidden language (S7). Fix the `<title>`, meta description, OG, and twitter tags to "Bulk Fleet Dispatch & Load Planning."
- *Hero (High):* "Plan & optimize every load, every driver." is feature-led and fails the opening-line test — it describes what the software does, not the dispatcher's life. **Fix (lead with the 5:30am reality, per persona Sam + Content Standard req. 4):**
  - H1: *"Get your mornings back."* (or *"Stop rebuilding the board in spreadsheets every morning."*)
  - Sub: *"Your dispatcher loses 3–4 hours every morning rebuilding the plan by hand. Nivio Dispatch hands them the margin-optimal board in minutes — every load matched to the right driver and truck, HOS-legal, pushed to your TMS. Built by a fleet operator who ran 100 trucks."*
  - This nails Recognition → Authority → Resolution and uses their vocabulary ("the board," "the plan," "HOS").
- *(Medium):* Sub line "No more seven tabs, three phones, and a whiteboard" is excellent — practitioner voice. Keep/elevate it.

**Conversion**
- *(High):* Secondary CTA "Talk to a dispatcher who runs it" is a *great* peer-proof CTA — but it implies live customers we may not have. Until then: "Talk to Kosta — he ran the board for a decade."
- *(Medium):* The 30-day-pilot side card is strong (low friction, clear steps). Add a risk-reversal line: "No rip-and-replace. Layers on top of your TMS. Cancel anytime in the pilot." (Status-quo bias reduction — explicitly named as a Dispatch objection.)
- *(Medium):* Price is in schema ($2/driver/day) but never shown on-page. Mental-accounting win: surface "$2 per driver per day" — it reframes cost as trivial vs. the $599K upside.

**Brand voice**
- *(High):* Fabricated "Derek Karras / Meridian Lines / 9 months" quote and "14 fleets in production" (S1). Replace with the real sand/fuel/water receipts and a founder quote.
- *(High):* "34M combinations" → "5M+ combinations" (S7).

**Psychology**
- Strong loss-aversion framing already ("show you what you left on the road") — keep. **Missing:** the real case studies (Availability) and founder (Authority). Add the $599K sand-fleet story as the proof block instead of the fake quote.

**Design**
- *(Low):* The dispatch-board product card is the best hero on the site — driver rows, HOS clocks, the amber "late" flag, the "Release 38 tenders?" CTA. This is exactly what the visual system wants. No change.
- *(Low):* KPI "Utilization 94.1% (+8.4 pts)" — once de-fabricated, anchor these to the real fleet numbers (47.84% loaded-mile etc.) so the claims are defensible.

**Accessibility:** bento titles → `<h3>`; mark product-card demo controls `aria-hidden`.

---

### marketer.html

**Copy**
- *Hero (High):* "Every physical deal. One surface." is feature-led and abstract. Persona Diana's pain is "11 Excel files and a Bloomberg terminal; when I leave my book is unreadable." **Fix:**
  - H1: *"Your whole book — out of 11 spreadsheets, onto one record."*
  - Sub: *"Plan, price, route, and settle every physical commodity move on one surface — bid package to settled P&L, with an audit trail behind every decision. Built by operators. Deterministic, not a black box."*
- *(High):* "trade/traders/trading" throughout — forbidden (S7). Marketer is physical movement, not trading. Replace with "move / marketers / desks moving physical bulk."

**Conversion**
- *(Medium):* "First 10 desks · Batch 01 · Limited" badge is good scarcity. The "Talk to Kosta" CTA is the only one on the site — keep and replicate elsewhere.
- *(Medium):* "Request walkthrough" on actual positions ("Not a demo. Your deals, solved against today.") is a strong, low-risk offer — elevate that line into the hero sub.

**Brand voice**
- *(High):* Fabricated "Desk Head / Independent Refiner / Customer since Q2 '25" (S1).
- *(Medium):* "34.2M combinations" + "4.2B ticks/day" + "412 spec rules" + "28 venues" — these precise-looking numbers are unsourced and read as invented precision. Keep only what we can defend; vague-but-true beats precise-but-fake.

**Psychology**
- Good use of "the book," "counterparty" vocabulary in module copy. **Missing:** the "tribal knowledge walks out the door when the senior marketer leaves" pain (Diana's #2 fear, Loss Aversion) — add it to a module or the hero.

**Design**
- *(Low):* Bid-table product card is clean. The vis-plan bars and intel curve are nice. No change beyond de-fabricating the counterparty names if desired (Phillips 66 / Valero etc. are real public companies shown as our customers' counterparties — fine as illustrative, but pair with a "illustrative" microcopy to avoid implying endorsement).

**Accessibility:** product-card URL says `/marketing/plan/` — should be `/marketer/`. Bento titles → `<h3>`.

---

### bind.html

**Copy**
- *Hero (Medium-High):* "Price risk in the time it takes to read the email." is the **best hero on the site** — specific, benefit-led, in the underwriter's reality. Keep it. Sub is strong too.
- *(Medium):* The product context defines a 3-part lifecycle — **Prospect → Onboard → Manage (continuous monitoring)** — but the page only covers onboard/bind. The "continuous monitoring of the bound book / signal change alerts between renewals" capability (a top desired outcome for Uma: "continuous monitoring so I'm not surprised at renewal") is missing. **Fix:** add a "Monitor" module and a lifecycle step for post-bind monitoring; mention prospecting.

**Conversion**
- *(Medium):* 60-day pilot "backtest against your worst claims" is a fantastic, low-risk, high-credibility offer (it's in the product file) — but the page says "run your real book" generically. **Fix:** Make the hero/CTA explicit: *"Send us last quarter's submissions. We'll backtest Nivio against your worst claims and show you the loss-ratio delta — with receipts."* (This is Loss Aversion + Prove It at its best.)
- *(Medium):* "Talk to an underwriter on it" — same live-customer implication issue as Dispatch.

**Brand voice**
- *(High):* Fabricated "Maria Chen / Lonepine MGA / $180M GWP / 14 months" + "9 MGAs in production" + "1,480 subs/mo" + "−412 bps" deltas (S1). Replace with the real data advantage we own: **31M+ rows, 4M carrier census, 800K pre-scored, 3,350 nuclear-verdict flagged (1,362 CRITICAL).** These are our genuine, defensible receipts and they're more impressive than the fakes.
- *(Low):* "explainable / receipts / deterministic" language is correctly used — exactly right for the reinsurer-trust angle. Never says "black box" except to negate — good.

**Psychology**
- Authority + explainability well handled. **Highest-leverage add:** the nuclear-verdict / chameleon-detection capability is the underwriter's deepest fear ("a nuclear verdict on a carrier I bound — career-defining bad day," Loss Aversion) and it's underplayed. Surface chameleon detection + nuclear-verdict flagging in the signal stack prominently.

**Design**
- *(Low):* Signal-weight table with gauges is excellent and on-brand ("receipts on every dollar"). No change.

**Accessibility:** the signal `.dot g/a/r` color classes encode status by color only — add a label or icon. Bento titles → `<h3>`.

---

### carrier-shield.html  — WRONG AUDIENCE (High)

**Positioning (High — rebuild):** Carrier Shield's product context is unambiguous: it is a **carrier-side / fleet-owner** product. The buyer is **Frank, the fleet owner** ("I'm safer than the industry average but I pay like the industry average"). The job is *defend your own renewal premium with your own ELD/CSA/claims data, find better insurers, auto-generate a renewal narrative.* Headline stat: **18% average premium savings.** This page instead built a **broker-side carrier-vetting tool** ("Carrier risk, vetted on every load," "Bind for tender?," fraud/authority checks on capacity) — which is **Vet's job**, not Shield's. The two pages are nearly interchangeable as written, and Shield's actual buyer/value is entirely absent.

**Fix (re-found the page on Frank):**
- H1: *"Stop paying like the industry average when you're safer than it."*
- Sub: *"You invested in cameras, coaching, a real safety culture. Your insurance bill doesn't know it. Carrier Shield turns your ELD, CSA, and claims data into a renewal narrative your underwriter can't ignore — and helps you find insurers who price you for who you actually are."*
- Modules: continuous Shield score, peer benchmarks (same commodity/size/geography), loss-run intelligence, the auto-generated quarterly **renewal narrative**, insurer matching, signal alerts.
- KPI / proof: **18% average premium savings or held-flat renewals** (the real headline stat), 24/7 monitoring vs. point-in-time PDF.
- CTA / offer (it's in the product file): *"15 minutes + your ELD login + last loss run → we'll show you your Shield score and next quarter's renewal narrative."*
- Voice rule: do NOT call it a "telematics dashboard" — sell the **renewal narrative**, not the data.

Everything else (copy quality, fabricated "James Morales," nav, a11y) is moot until the audience is fixed — but note the fabricated quote (S1) and the broker-oriented logo bar must go.

---

### vet.html — WRONG JOB (High)

**Positioning (High — rebuild):** Vet's product context is unambiguous: it is **5-second carrier vetting that saves the brokerage from a $100M nuclear verdict.** Persona Bri's deepest fear: *"If a plaintiff's attorney pulls my vetting file, I'm cooked."* The job is *book this load to a carrier who'll deliver it without getting me sued* — authority + insurance + CSA + nuclear flags + chameleon detection + litigation, returned inline in the TMS in 5 seconds, with an automatic audit trail. This page instead built a **"margin workbench"** (spreads, capacity, lane pricing, detention recovery, settlement) — that's a TMS/brokerage-ops tool, overlaps the TMS we explicitly **don't replace**, and completely buries the liability/vetting story that *is* the product. The single sample-vet output table in the product file (DO NOT BOOK, 4.2s, nuclear flag CRITICAL) is the whole pitch — and it's nowhere on the page.

**Fix (re-found the page on the vet + the verdict):**
- H1: *"Vet every carrier in 5 seconds. Before the load — not after the lawsuit."*
- Sub: *"Nuclear verdicts against brokers have crossed $100M. Manual vetting takes 20–40 minutes you don't have. Nivio Vet returns the full vetting package — authority, insurance, CSA, nuclear-verdict flags, chameleon detection, litigation history — inline in your TMS in under 5 seconds, with an automatic, immutable audit trail."*
- Hero product card: show the **sample vet** from the product file — the F-tier "DO NOT BOOK" verdict with CRITICAL nuclear flag and chameleon match, "Vet time 4.2s." That single screen sells the product.
- Modules: the 5-second package, chameleon detection, automatic audit trail, continuous post-book monitoring, TMS-inline.
- Psychology: **Loss Aversion is the entire engine here** ("save your brokerage from a $100M verdict / what did you know and when") — lead with it, hard.
- Offer (from product file): *"Send us your last 100 carrier vets — we'll replay them and show you which nuclear-verdict carriers slipped through."* (Devastatingly good, true, and specific.)
- Voice rule: not a "carrier database" — we're the **verdict**, not the database.

Fabricated "Ricardo Torres / $12M GP" quote (S1) and the commodity-themed logo bar (wrong industry entirely) must go.

---

### board-room.html — WRONG PRODUCT (High, most severe)

**Positioning (High — full rebuild):** This is the largest miss on the site. Board Room's product context: **"The board you always wanted — on demand."** It convenes a **personal cabinet of expert/leader AI personas** to run **structured boardroom conversations on consequential decisions**, with persistent memory and a searchable archive. Buyer: **SMB founders/execs making hard calls.** The page instead built a **company KPI / "board pulse" dashboard** (Q2 revenue, EBITDA margin, loss ratio rolled up across the other 5 surfaces). That is a completely different product — it's a BI dashboard, not an AI advisory cabinet — and it also re-publishes the fabricated cross-product metrics from every other page.

**Fix (rebuild on the real product):**
- H1: *"The board you always wanted — on demand."* (it's literally the product tagline; use it)
- Sub: *"Convene a personal cabinet of the operators, strategists, and leaders you'd kill to have in the room. Put your hardest decision on the table and run a real boardroom conversation — with memory that persists and a searchable record of every call."*
- This is the **one page where AI is explicitly on-brand** (per visual-identity reconciliation: "Board Room genuinely uses AI personas") — so name the AI advisors directly here. Distinct from the product pages' "Proprietary Algorithm" precision.
- Hero product card: a *boardroom conversation* — advisor personas weighing in on a decision — not a metrics dashboard.
- Audience: SMB decision-makers, not "CEOs/COOs/boards of freight-fuel-insurance" (that framing was invented to match the dashboard mistake).
- Offer: "First 100 Board Room founders" (from product file) — real scarcity.

The current dashboard concept could be salvaged as a *future* internal Nivio feature, but it is not this product and must not ship as Board Room.

---

## Prioritized Enhancement Plan (ordered punch list)

### Phase 1 — Blockers (do before July 1; mostly Dispatch + sitewide honesty)
1. **De-fabricate the entire site.** Remove every named customer, GWP/GP figure, tenure, "in production" count, and blended performance delta that isn't a real, citable result. (S1) — *Sitewide.*
2. **Dispatch: fix forbidden "Route Optimization"** in title/meta/OG → "Bulk Fleet Dispatch & Load Planning." (S7) — *dispatch.html.*
3. **Dispatch: rewrite the hero** to lead with the 5:30am pain ("Get your mornings back" / "3–4 hours in spreadsheets every morning"), founder line, and the real $599K / $1.48M / water-fleet receipts as the proof block. (Dispatch Copy/Psych) — *dispatch.html.*
4. **Dispatch: correct "34M" → "5M+" combinations.** (S7) — *dispatch.html.*
5. **Replace fake testimonials with a true founder quote** (Kosta) site-wide until real customer quotes exist. (S1/S2) — *Sitewide.*
6. **Fix CTAs:** real booking link or inline form; brand the email to `@niviolab.com`; wire dead footer/nav links. (S3/S4) — *Sitewide.*
7. **Marketer: remove "trade/traders/trading"** → physical-movement language. (S7) — *marketer.html.*

### Phase 2 — High-impact copy rewrites (do for full launch / as each product opens)
8. **Board Room: full rebuild** on the AI-advisory-cabinet product (it's currently the wrong product entirely). (board-room.html)
9. **Vet: full rebuild** on 5-second vetting + $100M nuclear-verdict avoidance + the sample "DO NOT BOOK" vet card + the "send us your last 100 vets" offer. (vet.html)
10. **Carrier Shield: full rebuild** on the fleet-owner / 18%-premium-savings / renewal-narrative story (not broker vetting). (carrier-shield.html)
11. **Bind: add the Monitor lifecycle + lead the CTA with "backtest against your worst claims"; surface nuclear-verdict + chameleon prominently; swap fake metrics for the real 31M-row / 800K-pre-scored / 3,350-nuclear-flagged data.** (bind.html)
12. **Marketer: rewrite hero** on Diana's "11 spreadsheets / unreadable book" pain; add the tribal-knowledge-walks-out angle. (marketer.html)
13. **index: rewrite H1** to a real value prop (tagline → kicker); make Dispatch the obvious primary path; add founder section + Dispatch receipts; reframe "six surfaces live" → "Dispatch live now, rest rolling out 2026." (index.html)

### Phase 3 — Conversion & design enhancements
14. **Add a founder band** (operator line + "Talk to Kosta") to all 7 pages. (S2)
15. **Replace fake logo bar** with a true capability/credibility bar (31M rows · 800K carriers · built by a 100-truck operator · ELD-native). (S6)
16. **Surface pricing** where it helps (Dispatch "$2/driver/day"; Bind/Marketer "early access").
17. **Add risk-reversal microcopy** near CTAs (layers on your TMS, no rip-and-replace, cancel anytime in pilot) — status-quo-bias reduction. (Dispatch/Marketer/Bind)
18. **De-duplicate Vet vs Shield** product-card visuals once repositioned, so each tells its own story.

### Phase 4 — Polish & accessibility
19. **Contrast:** darken `--ink4` usage on small text to meet AA (≥4.5:1). (S8)
20. **Semantics:** bento + KPI titles → `<h3>`; mark decorative product-card UI and data-viz SVGs `aria-hidden="true"`. (S8)
21. **Reduced motion:** add `prefers-reduced-motion` guard to ticker + orbs. (S8)
22. **Canonical nav:** identical order/labels (Home first, "Carrier Shield") on all 7 pages; fix marketer product-card URL `/marketing/` → `/marketer/`. (S4)
23. **Consistency:** one founding year across footer + JSON-LD; consistent OG images. (S9)

---

*Bottom line: the design is ready to ship; the words are not. Fix the honesty problem and the three mis-positioned pages, lead every hero with the buyer's real day, and put Kosta's operator story at the center — and this goes from a beautiful template to a site that makes the buyer think "this person gets my life."*
