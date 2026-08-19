# Certific Design System

A reusable design system for **Certific** — a B2B SaaS platform for patient–doctor communication in primary care. EU-based (Estonia), GDPR + ISO 27001-aligned, serving clinic decision-makers across Estonia (Perearst24), Hungary (Eorvosirendelo), Poland (Mojakonsultacja), and Latvia. Brand personality: trustworthy, pioneering, empowering — not generic SaaS.

## Products represented

| Surface | What it is | Audience |
|---|---|---|
| **Clinician PRM web app** | The core product: a patient-relationship management app for primary-care staff — patient lists, consultations, messaging, e-contact flows, medical summary. | Clinic decision-makers, GPs, nurses |
| **Patient flows** | Patient-facing intake / e-consultation / file upload screens reachable from clinician-sent links. | Patients |
| **ER variant** | Same codebase, Emergency Room copy overrides via `src/i18n/emergencyDepartmentLocales/`. | ER staff |
| **Marketing site (`certific.co`)** | Umbrella Certific brand site. | Decision-makers, partners |
| **Local brand variants** | White-label skins per market: Perearst24 (EE), Eorvosirendelo (HU), Mojakonsultacja (PL), Latvia. Logo swap + copy overrides, same pattern as ER. | Local markets |
| **Slide decks** | Board and investor decks, internal all-hands, partner and sales presentations. Own stylesheet (`deck.css`), own type scale, and mandatory data-honesty rules for financial slides. | Board, investors, partners, staff |

## Sources

- **Codebase** — Vue 3 + TS monorepo. Mounted read-only at `code/` in this project. Full access was **limited** to `code/src/assets/scss/` (design tokens) and `code/src/common/components/` (shared primitives). Feature modules, views, and per-product screens were **not accessible**. Reconstructions in `ui_kits/` are built from the shared primitives + CLAUDE.md guidance.
- **Design tokens** — `code/src/assets/scss/utilities/_variables.scss`
- **Engineering guidelines** — `code/CLAUDE.md`
- **Logos** — real SVGs, supplied and in `assets/`: `certific-symbol-black.svg` / `-white.svg` (symbol only) and `certific-logo-black-wordmark.svg` / `-white.svg` (full logo). Two colourways only. See § *Logo usage*.
- **Fonts** — **Inter** (display, Google Fonts) + **Public Sans** (body, self-hosted `fonts/`) + **Instrument Serif** italic (editorial accent, Google Fonts). GT Planar is **legacy** — the platform replaced it with Inter; the woff2 stays in `fonts/` for archived work only.
- **Website layer** — `website_layer.md`, the certific.co design language being introduced into the platform incrementally. Source of truth for the fluid type scale, colour ramps, black→blue CTA, radial-glow atmosphere, motion tokens and the coexistence rules.

## Index

```
styles.css              Single entry point — @imports the two layers below
colors_and_type.css     Design tokens — platform layer + website layer
deck.css                Slide-deck layer — proportional stage tokens + slide components
website_layer.md        certific.co design language + coexistence rules (source doc)
deck_layer.md           Slide-deck design language (source doc)
fonts/                  Public Sans (body) + GT Planar (legacy)
assets/                 Logo SVGs (symbol + wordmark, black/white), brand motif SVGs
icons/                  Production icon set — 204 SVGs (attached folder)
preview/                Design-system cards rendered in the Design System tab
ui_kits/
  prm_app/              Clinician PRM web-app UI kit (Dashboard, query detail, admin, analytics)
  patient_app/          Patient mobile UI kit (7 screens: reason → summary → sent → track)
  marketing/            certific.co marketing UI kit
SKILL.md                Claude Code–compatible skill manifest
```

---

## CONTENT FUNDAMENTALS

**Voice.** Professional, solution-oriented, ROI-aware. Quietly confident. The user is a clinic decision-maker deciding whether software belongs between their doctors and their patients — so the tone is that of a peer, not a vendor. No exclamation marks. No startup jargon ("disrupt", "leverage", "synergy", "revolutionize"). No fear-based health messaging.

**Address.** "You" directly, as the decision-maker. "Your clinic", "your patients". First-person plural ("we") for Certific is fine in marketing ("we handle the data protection"); avoid in-product, where copy should be task-framed.

**Casing.** Sentence case everywhere — UI labels, buttons, headings, nav. Not Title Case. Exceptions: brand names (Certific, Perearst24), proper medical terms.

**Punctuation.** Periods on full sentences, even short ones. Em-dashes (—) for asides, like a print publication. Oxford comma. No emoji — the brand is healthcare, not consumer.

**Locale specifics.** Estonian copy uses **"arstikeskus"**, never "kliinik". Medical vocabulary follows each country's primary-care norms (Perearst24 = "family doctor 24"). All user-facing strings go through i18n (`src/i18n/locales/*.json`) — no hard-coded literals.

**Vibe.** Calm, competent, a little pioneering. The feeling of hospital signage done right: legible, unhurried, built to be read under pressure.

### Examples

| Do | Don't |
|---|---|
| "Send a secure message to your patient." | "Revolutionize patient comms!" |
| "Required" field mark: `*` in brand blue | "This field is required!! ⚠️" |
| "Upload a photo of your skin condition." | "Snap a pic 📸" |
| "Your consultation has been received." (success) | "Woohoo! You're all set 🎉" |
| Button: **Start consultation** | Button: **GET STARTED NOW** |
| Empty state: "No unread messages." | Empty state: "Nothing here yet 🙂" |

---

## VISUAL FOUNDATIONS

**Color vibe.** Cool, clinical, quiet. The app background is `#F4F6F7` (Crackling Lake 20) — a near-white with a greenish-grey undertone that reads as clean without the blue sterility of hospital UIs. Surfaces are pure white. Primary action is **Interdimensional Blue `#3D15E0`** — a saturated, almost-electric blue that does the heavy lifting for CTAs, links, and the required-field asterisk. Violet (`#AB5CFA`) and the pastel purples appear sparingly, mostly as scrollbar thumbs, tag colors, and the **striped moiré overlay** on hero / CTA / footer. Success is a pastel turquoise (`#91E6D5`); danger is a clear red (`#DC3545` / `#FF3849` for buttons). Yellow (`#FAFF01`) is used as highlight fill on warning-variant buttons only — **never as text on light**, contrast ratio 1.1:1 fails WCAG.

**Type.** Two families, plus one accent. **Inter** (variable 300–700) is the display face — used at **Light 300** with negative tracking for headlines and section leads. **Public Sans** (400 regular, 600 bold) handles everything else — body, UI, in-app headings. **Instrument Serif italic** is an editorial accent for emphasised words *inside* a headline, in brand blue — a signature detail, used sparingly and never for whole lines. The platform ships the same Inter + Public Sans pair, so typography is shared foundation rather than a conflict; what a refreshed screen adopts is the *treatment* (Light weight, negative tracking, fluid clamp scale). Six discrete UI sizes (`xs 12 / sm 14 / md 16 / lg 18 / xl 24 / xxl 32`) plus a fluid headline scale (`headline-xl/lg/md/sm`). **All text is left-aligned** — the marketing hero is the one centred exception. When varying size, go clearly bigger or clearly smaller; no subtle one-step differences.

> **GT Planar is legacy.** The platform replaced it with Inter. It stays in `fonts/` and as `--font-legacy-display` so archived work still renders — do not use it in new design.

**Spacing.** A single 7-step scale: `xxs 2 / xs 4 / sm 8 / md 16 / lg 24 / xl 32 / xxl 40` px. Marketing pages layer a larger rhythm on top for section-level breathing room: 6rem between sections / 3rem between blocks / 1.5rem between elements. Raw `<div>` spacing wrappers are **forbidden in-code** — `Row` / `Column` components carry padding and gap via props.

**Radii.** `sm 4 / md 8 / lg 16 / xl 24 / xxl 32` px. Platform buttons are pills (`3rem`). Cards are `md` (8px). Modals are `xl` (24px). Chips and badges are `lg` (16px).

> **Website layer:** buttons and inputs use `--r-ctl` **12px** (`0.75rem`); cards use `--r-card-web` **16px** (`1rem`); icon chips are fully circular. The rectangular 12px control is what distinguishes a website-layer CTA from a platform pill at a glance.

**Backgrounds.** Section rhythm on marketing pages alternates **White → `#F3F6F7` (Crackling Lake 20) → White → `#F4F4F4` (Concrete Gray 20)**. In the platform, use the tinted surfaces for panel / sidebar / summary areas rather than strict alternation. No gradients as backgrounds. Atmosphere comes from **brand-tinted radial glows** — 2–3 stacked radial ellipses at 3–15% opacity in brand blue, violet and lavender, positioned off-centre; an **aurora wash** (soft pastel radials drifting on 18–24s loops) is reserved for hero-level moments only — in the platform that means login, onboarding and empty states, never a working screen. All of it is decorative and `aria-hidden`, and never sits behind dense data. No hand-drawn illustrations. No stock photography of clinicians.

> **The moiré stripe motif is deprecated.** Older brand guidance made it a signature; the current website replaced it with the radial glows above. `assets/brand-moire.svg` and `StripedBackground.vue` remain for reference — don't introduce moiré in new design unless explicitly asked.

**Animation.** Healthcare = restraint. CSS-only, no JS animation libraries. Durations `fast 150ms / normal 250ms / slow 400ms`; easings `cubic-bezier(0.16,1,0.3,1)` for reveals and `cubic-bezier(0.33,1,0.68,1)` for hovers. Entry reveal is `fadeInUp` — fade + `translateY(1.5rem)` over 0.6s, staggered siblings at ~0.08–0.1s. Mark only **2–3 key blocks per page** with `data-animate="reveal"`, not everything. Hover moves colour and shadow only — **no scale transforms** (small existing `translateY(-1px)` lifts in the platform are fine). Nothing bounces, nothing parallaxes.

**Reduced motion is scoped, not blanket.** `prefers-reduced-motion` support is non-negotiable, but a global `* { animation: none }` also kills functional motion — loading spinners, progress rings, indeterminate bars — removing feedback the user still needs. The rule disables **entrance choreography** (`[data-animate="reveal"]`), **decorative drift** (`.aurora`, `.glow`, `.halo`) and anything tagged `[data-motion="decorative"]`, and leaves state transitions and status indicators running. Tag decorative motion explicitly so it can be caught.

**Hover states.** Primary buttons darken from `#3D15E0` to `#3312BD`. Secondary buttons shift fill from `#F4F6F7` to `#ECEFF0`. Transparent buttons darken text color only. Cards do **not** hover-lift by default — the shadow is already present; lifting them reads as busy.

> **Website-layer buttons** invert this: the primary CTA rests **black `#222222`** and reveals **Interdimensional Blue** on hover with a blue-tinted shadow. It is the site's most distinctive interaction. Scope it to new and refreshed non-clinical surfaces — existing clinical flows keep their blue-filled 56px pills, and the two shapes never appear on the same screen.

**Press / active states.** Same as hover. No scale-down. No color inversion.

**Borders.** 1px solid on inputs, using `#CED9DE` (grey) default, `#3D15E0` (blue) on focus, `#DC3545` (red) invalid. Cards have no border — the shadow separates them. Section dividers, when needed, are 1px `#E6ECEF` (medium grey).

**Shadows.** Three tiers only:
- `--shadow-light` — `0 4px 5px rgba(0,0,0,.05)` — for flat surfaces needing only a lift
- `--shadow-box` — `0 4px 20px rgba(0,0,0,.10)` — banners, dropdowns
- `--shadow-card` — `0 4px 15px rgba(0,0,0,.15)` — the Card primitive
- `--shadow-dark` — `0 4px 20px rgba(0,0,0,.15)` — modal lift (though modals also use backdrop blur)

No inner shadows. No colored shadows on existing platform surfaces.

> **Website layer adds blue-tinted elevation:** `--shadow-card-web` `0 1px 3px rgba(0,0,0,.06)` at rest, `--shadow-card-hover-web` `0 8px 24px rgba(61,21,224,.08)` on hover, `--shadow-elevated-web` `0 12px 40px rgba(61,21,224,.12)` for modals. The blue tint is the signature. Neutral black stays the default on shipped platform cards and modals; blue-tint is an opt-in hover accent on refreshed surfaces, and never behind dense clinical data.

**Transparency / blur.** Used once, intentionally: the modal backdrop — `rgba(74, 114, 135, 0.1)` + `backdrop-filter: blur(15px)`. That's the whole budget for glassmorphism. Do not use elsewhere.

**Layout.** Content max-width `72rem`. Readable text column max-width `42rem`. Sidebar for authenticated app (z: 1000). Marketing uses asymmetric 60/40 hero splits and alternating left-right feature rows — not 3-column feature grids. Mobile nav collapses to hamburger at `md` (768px).

**Cards.** White background, `8px` radius, `--shadow-card` (`0 4px 15px rgba(0,0,0,.15)`), `padding: 8px 0` on the container, flex-column. Cards **stand on the background**; they don't have borders.

**"Less is more."** The most common edit to a Certific design is removing things. If a section feels empty, tighten the layout — don't fill it.

---

## LOGO USAGE

The logo ships in **two colourways and no others**: black `#222222` and white `#FFFFFF`. Never recolour, tint, gradient, outline, shadow, or stretch it. Place it only on approved brand backgrounds — white, Crackling Lake `#F3F6F7`, Concrete Gray `#F4F4F4`, or the brand blue/violet darks. Black on light, white on dark.

**Minimum clear space is 50% of the symbol height on every side.** Nothing crosses it — not type, not an image edge, not a panel border.

**Four files, two jobs:**

| File | Use |
|---|---|
| `assets/certific-symbol-black.svg` / `-white.svg` | The symbol alone — pairs with a typed name in the slide brandmark |
| `assets/certific-logo-black-wordmark.svg` / `-white.svg` | The full logo standing alone — document title pages, exports |

**On slides**, the header brandmark is the **symbol plus the word “Certific” typed** in Inter Medium (500) at slight negative tracking — *not* the wordmark file. The symbol runs ≈ 2.5% of slide width in headers and ≈ 3.8% on cover and closing slides; black on light slides, white on dark. `deck.css` ships this as `.slide__brandmark`, sized proportionally so it holds at any stage width.

**Use the wordmark files only when the logo stands alone.** Never the wordmark file and a typed name together — that reads as the name twice.

**Never place the logo inside a coloured pill or badge.** The section tag pill is a separate component and never contains the logo.

---

## ICONOGRAPHY

Certific's app uses an **SVG icon system** loaded via `vue-inline-svg` from `src/assets/icons/<name>.svg`, rendered through `Icon.vue` with a fixed-size scale: `xs 14 / sm 21 / md 28 (default) / lg 48 / xl 56 / xxl 84` px. Icons inherit `currentColor` via the `color` prop. No icon font, no sprite — individual SVG files. Icon-only buttons **must** have `aria-label`.

**The real icon set is now attached** as a local `icons/` folder — 204 SVGs, the production set. It is far richer than a generic library and much of it is domain-specific: a symptom vocabulary (`headache`, `back-pain`, `joint-pain`, `anxiety`, `low-mood`, `skin`, `vertigo`, `intestines`, `urinary-disorder`, `gastrointestinal`, `diabetes`, `breastfeeding`, `contraception`, `pregnancy-start`), a document/workflow vocabulary (`fit-note-start`, `fit-note-end`, `health-certificate`, `referral`, `questionnaires`, `vaccine`, `syringe`, `blood-test`, `urine-test`, `cryotherapy`, `endoprosthesis`), a full prescription-route family (`prescription_peroral`, `_nasal`, `_ocular`, `_inhalation`, `_intramuscular`, `_sublingual`, `_vaginal`, `_auricular`, `_dental`, `_gingival`, `_intrapulmonary`, `_other`), file-type icons (`file-pdf`, `file-doc`, `file-xls`, `file-zip`, `file-audio`, `file-video`, `file-infected`, `file-scanning`), feedback faces (`feedback-1`…`feedback-5`), and per-market brand lockups (`brand-perearst24`, `brand-perearst24-est/-rus`, `brand-certific-hu/-lv/-pl`, `brand-emo24`, `brand-emo24-est/-rus`, `brand-hellodoc`).

Use these files directly — do not substitute a public library and do not redraw them. Sizes follow `Icon.vue`: `xs 14 / sm 21 / md 28 (default) / lg 48 / xl 56 / xxl 84`. Stroke icons inherit `currentColor`; in-product they are **brand purple on patient surfaces** (reason cards, hint rows, upload) and **grey/near-black on clinician chrome** (nav, table headers), turning purple only on the active nav item.

The UI kits in this repo still render a small hand-rolled Lucide-style subset inline, because they predate the icon folder. When building anything new, reach for `icons/<name>.svg` first.

Emoji are **not used anywhere** — brand rule for a healthcare product. No unicode symbols as icons. No PNG icons. The only unicode-ish glyph in the system is the required-field asterisk (`*`) rendered in `--color-blue`.

---

## PRODUCT PATTERNS

Read off the live product. These are the shapes that make a Certific screen recognisable — reuse them rather than inventing equivalents.

### Reason of contact — the colour column

Every e-contact carries one reason tag. On the clinician Dashboard the tag is **fixed-width and centre-aligned**, filling its table column, so the reasons form a continuous band of colour down the page. Clinicians triage by hue before they read a word — this is load-bearing layout, not decoration. Elsewhere (detail header, patient card) the same colour renders as an ordinary hug-content pill.

Fills are **mid-pastel** — clearly saturated, not 5% tints. Text is always `#17172B`. Hue families map loosely to body systems: purples for respiratory, periwinkles for musculoskeletal, greens/aquas for gastro-urinary and labs, yellows for medication and abdomen, peaches for ENT and skin, pinks for mental health. **Neutral greys are reserved for administrative reasons** — Follow-up, Appointment, Other. See the "Reason-of-contact tags" card for the sampled set.

### Patient mobile header

Three slots, always in this order: a **Back pill** (44px lavender disc + purple "Back"), a **centre slot**, and a **Menu block**. The centre slot carries whatever the step needs — a circular progress ring during a pathway, the clinic name with a building icon when choosing a reason, an `EN ⌄` language switcher on standing pages, nothing on terminal screens.

The Menu block is the one element allowed to touch the viewport edge: a solid brand-purple rectangle wedged into the top-right corner, square on its outer corners, rounded only on the inner one. It never becomes a pill and never gains a margin.

Behind it, the **moiré motif** bleeds down from the top-right — vertical purple stripes fading out over ~150px. It appears on every patient screen and nowhere on clinician chrome.

### Patient screen anatomy

Centred GT Planar title (~30px light) → optional centred lede → content cards (white, 16px radius, near-flat `0 1px 3px` shadow) → full-width primary CTA (56px, pill). Body copy inside cards is **left-aligned even though the title is centred** — the centring is a title-only affordance on mobile.

Distinct controls: the **dashed upload** (1.5px purple dash, 12px radius, label + cloud icon), the **reason card** (white row, purple stroke icon, 16px label), the **context chip** (small white pill above a question, naming the pathway — "Fit note", "Shortness of breath"), and the **character counter** (muted, right-aligned, sits outside the field).

### Status semantics

A coloured dot plus plain-language text — never a coloured badge, never the word "status" alone.

- **Lilac `#B9A4F0`** — waiting for the clinic. Patient-side: "Status: waiting for reply".
- **Mint `#8FE3C4`** — waiting for the patient. Patient-side: "The clinic is waiting for your reply".
- Direction avatars reuse the same two: a mint circle with an up-arrow for patient→clinic, lilac with a down-arrow for clinic→patient.

Clinician-side the same states read as "Awaiting clinic reply" / "Awaiting patient reply" and drive the Dashboard tabs.

### Clinician detail view

Patient identity runs as one line: name, `(age, sex)`, a divider, then panel code and GP. Under it, **copy chips** — bordered rounded rects holding ID code, e-mail and phone, each with its own copy button. Contact details are copied constantly; make them one click.

Actions sit in a right-aligned row above the thread: ghost "Copy all", outlined "Generate query summary", and **outlined red** "Archive this e-contact" — destructive actions are outlined red, never filled.

Messages are plain blocks, not chat bubbles: avatar + name + timestamp, then body, with a per-message copy button bottom-right. Machine translation appears as a **pale-yellow callout** headed by a warning glyph and the words "Automatic translation" — always labelled, never silently swapped in. A green line under the thread reports when the patient was last active.

The composer leads with **outlined dropdown pills** ("Template replies", "Send questionnaire"), then the field, then mic + paperclip on the left and "Check grammar" + filled "Send message" on the right.

### Navigation drawer

Overlay drawer, not a persistent rail. Large avatar circle → name → "✎ Update profile" → uppercase nav items with grey stroke icons (active item purple) → a footer holding the **role switch** ("Patient's view" / "Clinic's view") and "Log out". Nav items are uppercase; the footer is sentence case — that contrast marks "navigation" from "account actions".

### Settings pages

Grouped stacks of full-width rows: a section heading with a one-line explanation of who can change what ("Visible to everyone; only administrators can make changes"), then white rows carrying a grey outline icon, an uppercase label and a chevron. Permission scope is stated in the group description, not hidden in a tooltip.

---

**From any HTML artifact:**
```html
<link rel="stylesheet" href="colors_and_type.css">
```
Then use CSS custom properties (`var(--color-blue)`, `var(--space-lg)`, `var(--r-pill)`, `var(--shadow-card)`) throughout. Never hardcode.

**From a new marketing page:** copy `ui_kits/marketing/index.html` as a starting point — it has the nav, section rhythm, moiré usage, and footer already wired up.

**From a new in-app screen:** open `ui_kits/prm_app/` and reuse the React components in `components.jsx` (Button, Pill, Avatar, Field, Banner, Modal, Sidebar, Topbar). Screens in `screens.jsx` show how they compose.

**For Claude Code / Skills:** `SKILL.md` makes this whole folder invocable as a packaged skill.

**Reach for the real icons:** `icons/<name>.svg` — 204 production SVGs including the symptom, prescription-route and file-type families. Don't substitute a public library.

---

## SLIDE DECKS / PRESENTATIONS

A third medium, alongside the platform and the website. Same brand foundation — Interdimensional Blue, Certific Black, the Crackling Lake / Concrete Gray surfaces, Inter display, Public Sans body, Instrument Serif italic accents. Everything below is additive; nothing here changes the other two layers. Stylesheet: **`deck.css`**, every rule scoped under `.deck` / `.slide` / `.deck-*` so it cannot leak into app UI — pulled in by `styles.css`, or linked on its own for deck-only pages. Source brief: `deck_layer.md`.

**Canvas.** A slide is a 16:9 stage on a near-black `#0E0B1A` backdrop — white, rounded 18px, soft shadow. **All sizing is proportional to stage width**: the stage is a CSS container and every value is expressed in `cqw`, where 1 unit = 1% of slide width. This is the one place in the system where the fixed spacing scale does not apply, because a deck must render identically at any projection size. Content padding is ~7% left/right, 3% top/bottom.

**A slide must never overflow its stage.** Cut content before shrinking type below readable. The body region flexes between a fixed header and footer so overflow shows up as a layout problem, not a silent clip.

**Chrome.** Every slide carries a header (Certific brandmark left, pill section tag top-right in Turquoise Pearl `#91E6D5` on dark green `#0E5A49`) and a footer (deck name left, page number right, both `#A7A7A7`). Page numbers are **generated by a CSS counter**, zero-padded (01, 02, …) — never typed into content, so they can't drift when slides are reordered.

**Type.** Every title gets a **kick line** above it: small uppercase bold, letter-spacing `0.16em`, brand blue, preceded by a short 2px blue dash. Titles are Inter Light 300 at `-0.03em`, ~4.4% of slide width (3.4–3.7% when dense). **One serif-italic accent phrase per title** in Instrument Serif Italic — this is the signature move, and it goes on the emphasised 1–3 words only, never a whole title. Body is Public Sans; bullets get round check badges (blue-tint circle, blue check), 3–5 per slide maximum.

**Section rhythm.** Stage washes alternate White → Crackling Lake gradient → White → Concrete Gray gradient. Cover and closing slides use the dark stage `#2A1170` with violet radial glows, white text, and turquoise serif accents.

**Components.** Gradient-top cards (4px blue→violet→turquoise rule, icon badge) for 3–4 parallel points · lavender `#F2EEFB` feature panel with soft pink/blue glows · status lanes for confidence-tiered takeaways, green `#22967F` done, violet `#AB5CFA` in progress, lemon `#FAFF01` watch (lemon always gets an outline — at 1.1:1 it can't carry meaning alone) · stat rows with huge Inter Light numbers and thin dividers · quote cards and italic blue pull-quotes · tinted callout boxes.

### Data slides — the honesty rules

These are not stylistic. They exist so a forecast can never be mistaken for an actual, and they are **mandatory on any slide showing numbers**.

- **Actual vs plan.** History columns recede in muted gray; the current/emphasis column is tinted `blue-10`. ACTUAL and PLAN are separated by a dashed vertical divider, every plan column carries a light tint, and both bands get small uppercase group labels. Plan and forecast bars take a 45° white hatch overlay. **Never style a forecast identically to an actual.**
- **Change chips.** Hue is the direction of *good*, not the sign of the number — green good, red bad, and **inverted for costs and burn** where lower is better. Tint depth encodes magnitude in three discrete tiers (<10%, 10–25%, >25%). Text stays near-black, never green-on-green. Every chip pairs with ▲/▼ so colour is never the only signal, and a shrinking negative reads "▼ 64%" in green, never "+64%".
- **Sparklines.** Zero-based scale **per row** — so a flat large base looks flat and a 0→X ramp looks like a ramp. Never min-max normalise; it makes those two look identical. Solid line for actual, dashed lighter for plan, small dot on the last real point, faint zero baseline. Skip the sparkline entirely on a flat row.
- **Illustrative rows.** Upside scenarios and anything not in plan get violet dashed borders, a light violet hatch, italic text, and the label "Illustrative scenario · excluded from plan". **Never summed into plan totals**, never green, never the same weight as a real subtotal.
- **Cash row.** Sits after net result, separated by a border and gray-tinted, so it reads as a balance line rather than P&L math.

### Content and tone on slides

One message per slide, and the title states it plainly. **Understate rather than oversell** — no "operating leverage" style bragging labels when the numbers are modest; prefer neutral factual titles like "Revenue vs expenses". Highlight boxes cap at three per slide: one synthesis/conclusion (green) plus one or two honest watch-items (lemon). State what must be true, with checkable numbers or none at all — vague optimism is worse than silence.

Anchor claims with dates and as-of markers. Round consistently: never round the favourable number up and the unfavourable one down. **Avoid em dashes in slide copy** — use commas or `·` separators. Presenter notes accompany every slide in a hidden layer, carrying the verbal story, definitions, and prepared answers for the questions the numbers will provoke ("where does this come from").

Decks must export cleanly to PDF: one full-bleed 16:9 slide per page, colours preserved, no interactive chrome. `deck.css` ships the print rules; mark anything screen-only as `.deck-nochrome`.

---

## COEXISTENCE — platform vs website layer

The design system now carries **two layers**. The platform layer is what ships today; the website layer (`website_layer.md`) is the certific.co language being introduced **incrementally**. This is an evolution layer, not a replacement — do not restyle the platform wholesale.

They already share most of their palette: brand blue `#3D15E0`, black `#222222`, surfaces `#F3F6F7` / `#F4F4F4`, the grey ramp, success `#22967F`, Turquoise Pearl `#91E6D5`, violet `#AB5CFA`, and the blue tints. **Where a value already exists in the platform, prefer the existing platform token name** rather than adding a duplicate.

### What wins when

**Platform primitives win by default** — don't change unless the screen is explicitly being refreshed:
- Blue-filled pill buttons (full-width, 56px, `999px`) in existing flows
- Danger / warning / success semantic ramps, app canvas backgrounds, text inks
- Platform spacing scale (2–40px), z-index scale, breakpoints, mobile ergonomics
- Neutral shadows on existing cards and modals

**The website layer wins for:**
- New surfaces: login, onboarding, empty states, settings / overview, long-form content, "brand moment" notifications
- Atmosphere: tinted panels, subtle radial glows, reveal motion
- Any screen the team decides to refresh — then migrate it **fully**, so it reads coherent rather than half-and-half

### Known conflicts

| Conflict | Rule |
|---|---|
| Display font | **Resolved** — the platform replaced GT Planar with Inter. Both share Inter + Public Sans. Adopt the *treatment* (Light 300, negative tracking, fluid scale) per refreshed screen |
| Primary button: blue pill vs black→blue rounded-rect | Pills stay in clinical flows; the website CTA is for new / refreshed non-clinical moments. Never both on one screen |
| Focus ring: Bootstrap blue `rgba(0,123,255,.25)` vs brand blue | Bootstrap blue is off-brand — a migration target, not a keeper. Keep it until a component is touched, then move to `2px #3D15E0` |
| Hover blue `#2F10B3` vs `#3312BD` | Legacy keeps `#2F10B3`; new uses `#3312BD`. Unify on `#3312BD` over time |
| Cool bg `#F4F6F7` vs `#F3F6F7` | Near-identical. New surfaces use `#F3F6F7`; existing canvases untouched |
| Muted text `#6C6C83` / `#666666` vs `#7A7A7A` | Keep platform values in shipped UI; `black-60` on new surfaces |
| Shadows: neutral vs blue-tinted | Neutral default; blue-tint is opt-in on refreshed surfaces |
| Hover motion | Small `translateY(-1px)` lifts are fine. Still no scale transforms on buttons |

### Density rule

The `6rem` / `3rem` / `1.5rem` section rhythm is **marketing scale**. Never apply it to functional or clinical screens — data-dense views keep the compact platform steps. Reserve marketing whitespace for login, onboarding, empty states and settings.

### The one-sentence rule

**Updating something that exists:** keep its structure, geometry and semantics — improve colour states, focus, shadows and type spacing toward the website layer, one component at a time. **Designing something new:** build it natively in the website layer while respecting the platform primitives it must sit beside.

If a website pattern collides with a hard platform constraint — data density, clinical workflow, an existing component API — **the platform wins, and the conflict gets flagged** rather than forced.

---

## ⚠️ CAVEATS — things to verify / replace

1. **No kit uses the production icons yet — including the patient kit.** The `icons/` folder was reachable when I read its listing but detached before I could copy the files in, so every glyph in `ui_kits/` is still a hand-drawn approximation. This contradicts the rule stated above and is the top thing to fix. **Please re-attach `icons/`** and I'll copy the real SVGs into `assets/icons/` and swap every kit over — it's a mechanical pass. Known mappings: `fit-note-start`, `medical-condition`, `appointment`, `pill`, `health-certificate`, `vaccine`, `questionnaires`, `other`, `cloud-upload`, `microphone`, `hamburger-menu`, `chevron-*`, `person`, `clinic`, `calendar`, `camera`, `ai-sparks`, `pencil`, `file-text`, `info`, `check`, `close`, `arrow-right`, `cough`, `feedback-1`…`feedback-5`.

2. **The kits still render the old placeholder brandmark.** The real logo SVGs are now in `assets/` and documented, but `ui_kits/` markup hasn't been swapped over to them yet — same mechanical pass as the icons.

3. **Screens are reconstructions from screenshots, not pixel copies.** Feature modules (`src/modules/*`) were never in scope, so layout, spacing and copy are read off the screenshots. Colours, tag palette, header anatomy and control shapes are sampled directly and should be accurate; exact paddings may drift a few px.

4. **Market-specific variants not built.** Perearst24 / Eorvosirendelo / Mojakonsultacja / Latvia each get a logo swap + copy overrides. Only the umbrella Certific brand is templated here. Once logos land, adding a `ui_kits/prm_app/variants/` folder with one logo + locale-overrides file per market is the natural next step.

5. **No slide template.** None was attached, so `slides/` doesn't exist. Ask if you want one.

6. **Moiré is simplified.** `assets/brand-moire.svg` is a vertical-stripe SVG used as `background-image`. The production `StripedBackground.vue` animates stripe opacity in a JS loop; we deliberately kept the static version — healthcare restraint — but can port the animated one if you want.

7. **CTA copy is invented.** Headlines, feature bullets, and metric numbers on `ui_kits/marketing/` are plausible but not sourced from certific.co. Please review against real marketing copy before using anywhere real.

---

## HOW YOU CAN HELP ME ITERATE

I need your help to make this **perfect**. In rough priority order:

1. **Re-attach the `icons/` folder** so I can swap every kit off hand-drawn glyphs onto the real 204-SVG set, and point the kits' brandmark at the real logo SVGs. Mechanical pass, biggest single quality jump.
3. **Give me `src/modules/*` or a few real screen captures** of the PRM app so I can tighten the reconstruction to match production.
4. **Paste real marketing copy** (or a link to certific.co's current hero) so I can replace the invented headlines with real ones.
5. **Tell me which market to build first** — Perearst24, Eorvosirendelo, Mojakonsultacja, or Latvia — and drop its logo + locale JSON, and I'll template the whole white-label swap.
6. **Point out anything that feels off-brand.** "Less is more" is the hardest rule to self-check; an outside eye catches it faster.
