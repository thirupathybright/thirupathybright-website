---
version: alpha
name: TBI-design-system
description: Thirupathy Bright Industries' design language — a precision steel manufacturer's surface built on a clean steel-grey/white canvas (`#ffffff` canvas, `#f4f5f6` soft steel), deep engineering black (`#12130f`) and a single saturated signature red accent (`#c8102e`); typography pairs a confident industrial sans for headlines with a workhorse grotesk for body copy, giving the brand a precise, technical, no-nonsense manufacturing voice.

colors:
  primary: "#c8102e"
  primary-dark: "#a10d24"
  on-primary: "#ffffff"
  ink: "#12130f"
  ink-soft: "#1f211c"
  ink-mid: "#3a3c37"
  body: "#54564f"
  body-mid: "#84867e"
  mute: "#c3c4bd"
  canvas: "#ffffff"
  canvas-soft: "#f4f5f6"
  steel-line: "#dcdedb"

typography:
  display-xl:
    fontFamily: Inter, "Segoe UI", system-ui, -apple-system, sans-serif
    fontSize: 56px
    fontWeight: 700
    lineHeight: 58px
    letterSpacing: -1px
  display-lg:
    fontFamily: Inter, "Segoe UI", system-ui, sans-serif
    fontSize: 44px
    fontWeight: 700
    lineHeight: 46px
    letterSpacing: -0.5px
  display-md:
    fontFamily: Inter, "Segoe UI", system-ui, sans-serif
    fontSize: 30px
    fontWeight: 700
    lineHeight: 36px
    letterSpacing: -0.3px
  display-sub-lg:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 40px
    fontWeight: 600
    lineHeight: 46px
  display-sub-md:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 28px
    fontWeight: 600
    lineHeight: 36px
  display-sub-sm:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 22px
    fontWeight: 600
    lineHeight: 28px
    letterSpacing: -0.2px
  display-xs:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 18px
    fontWeight: 700
    lineHeight: 24px
  body-lg:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 19px
    fontWeight: 400
    lineHeight: 29px
  body-md:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 17px
    fontWeight: 400
    lineHeight: 26px
  body-md-strong:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 17px
    fontWeight: 600
    lineHeight: 26px
  body-sm:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 15px
    fontWeight: 400
    lineHeight: 23px
  body-sm-strong:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 15px
    fontWeight: 600
    lineHeight: 23px
  caption:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 13px
    fontWeight: 400
    lineHeight: 19px
  eyebrow-uppercase:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 13px
    fontWeight: 700
    lineHeight: 13px
    letterSpacing: 1.5px
  mono-technical:
    fontFamily: "JetBrains Mono", "SFMono-Regular", Menlo, monospace
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  button-md:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 16px
    fontWeight: 600
    lineHeight: 24px
  button-sm:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 13.5px
    fontWeight: 700
    lineHeight: 13.5px
    letterSpacing: 0.2px

rounded:
  none: 0px
  sm: 4px
  md: 8px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 32px
  3xl: 48px
  4xl: 64px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: "{spacing.md} {spacing.xl}"
    borderColor: "{colors.steel-line}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-strong}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.xl}"
  button-secondary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.xl}"
  button-tertiary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.xl}"
  button-text:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.lg}"
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.steel-line}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"
  card-content:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  card-feature-cream:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  card-feature-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.xl}"
  hero-band-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.xl}"
  content-band-cream:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.4xl} {spacing.xl}"
  content-band-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.4xl} {spacing.xl}"
  eyebrow-uppercase:
    textColor: "{colors.primary}"
    typography: "{typography.eyebrow-uppercase}"
  badge-pill:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas-soft}"
    typography: "{typography.body-sm}"
    padding: "{spacing.3xl} {spacing.xl}"

  # ─── TBI-specific components ───
  stat-strip:
    description: "Credibility strip — 26+ Years | 280+ Customers | 220 Quality Checkpoints."
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    numberTypography: "{typography.display-sub-md}"
    labelTypography: "{typography.caption}"
    accentColor: "{colors.primary}"
    padding: "{spacing.2xl} {spacing.xl}"
  product-shape-card:
    description: "Large shape card — Round / Square / Hexagon / Flat Bars on homepage + Products page."
    backgroundColor: "{colors.canvas}"
    borderColor: "{colors.steel-line}"
    hoverBorderColor: "{colors.primary}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  grade-card:
    description: "Steel grade card (EN8, EN19, etc.) with classification badge."
    backgroundColor: "{colors.canvas}"
    borderColor: "{colors.steel-line}"
    hoverBorderColor: "{colors.primary}"
    gradeCodeTypography: "{typography.display-xs}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  process-step:
    description: "Numbered flow-diagram step used in manufacturing process visuals."
    numberBackground: "{colors.primary}"
    numberTextColor: "{colors.on-primary}"
    labelTypography: "{typography.body-sm-strong}"
    connectorColor: "{colors.steel-line}"
    rounded: "{rounded.full}"
  cert-badge:
    description: "Certification card — IATF 16949 / ISO 14001 / MSME ZED Silver."
    backgroundColor: "{colors.canvas}"
    borderColor: "{colors.steel-line}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  spec-table:
    description: "Chemical composition / mechanical properties data table."
    headerBackground: "{colors.ink}"
    headerTextColor: "{colors.on-primary}"
    headerTypography: "{typography.caption}"
    bodyTypography: "{typography.mono-technical}"
    rowBorder: "{colors.steel-line}"
    stripeBackground: "{colors.canvas-soft}"
    cellPadding: "{spacing.sm} {spacing.lg}"
  quote-form-field:
    description: "Request-a-Quote technical form field."
    backgroundColor: "{colors.canvas}"
    borderColor: "{colors.steel-line}"
    focusBorderColor: "{colors.primary}"
    labelTypography: "{typography.body-sm-strong}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.lg}"

---


## Overview

Thirupathy Bright Industries (TBI) is a bright & black steel bar manufacturer — precision cold-drawn, peeled and centreless-ground bars for automotive, engineering and fastener applications. The website surface reads as technically credible and no-nonsense: a clean steel-grey/white canvas `{colors.canvas}` (`#ffffff`) and `{colors.canvas-soft}` (`#f4f5f6`) paired with deep engineering black `{colors.ink}` (`#12130f`) and a single saturated signature red `{colors.primary}` (`#c8102e`) — matching TBI's red/black logo mark.

Type carries precision, not decoration. A single grotesk family (`Inter`) runs the whole system at bold weights for headlines (600–700) and regular/medium for body — no proprietary display face, no ornamental flourish. A monospace face (`mono-technical`) is reserved specifically for technical data — chemical composition and mechanical property tables — signalling "this is measured data" the moment a visitor's eye hits it.

Shapes are tighter than a consumer-SaaS brand: `{rounded.sm}` 4px is the default for buttons and form inputs, `{rounded.md}` 8px for cards. Nothing is pill-shaped except small tag/badge elements. The brand sits firmly in the technical-square camp — steel, not software.

**Key Characteristics:**
- A single primary CTA color `{colors.primary}` (`#c8102e`) — signature red, matched to the TBI logo. Reserved for every conversion action.
- Clean white canvas `{colors.canvas}` (`#ffffff`) with a cool steel-grey soft surface `{colors.canvas-soft}` (`#f4f5f6`) — no warmth, this is an engineering palette.
- Deep engineering black `{colors.ink}` (`#12130f`) — near-black, used for headlines, the footer, and dark-polarity sections (stat strip, hero-dark).
- Single-face type system: `Inter` bold for all display sizes, `Inter` regular/medium for body — plus a dedicated monospace face for technical spec tables.
- `{rounded.sm}` 4px for buttons/inputs, `{rounded.md}` 8px for cards — a tighter, more technical radius than a consumer SaaS product.
- A steel-grey neutral ladder — `{colors.canvas-soft}` (`#f4f5f6`), `{colors.steel-line}` (`#dcdedb`), `{colors.mute}` (`#c3c4bd`), `{colors.body-mid}` (`#84867e`), `{colors.body}` (`#54564f`) — every neutral is cool grey, none carry warmth.

## Colors

### Brand & Accent
- **TBI Red** (`{colors.primary}` — `#c8102e`): The single brand accent, matched to the TBI logo. Every primary CTA, every conversion target, eyebrow labels, hover-highlight borders.
- **TBI Red Dark** (`{colors.primary-dark}` — `#a10d24`): Hover/active state for red elements.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): Clean white page background.
- **Canvas Soft** (`{colors.canvas-soft}` — `#f4f5f6`): Cool steel-grey soft surface for cards / inset regions / alternating section bands.
- **Steel Line** (`{colors.steel-line}` — `#dcdedb`): Default hairline border for cards, tables, dividers.

### Text
- **Ink** (`{colors.ink}` — `#12130f`): Near-black, matched to the logo's black — every heading and primary text.
- **Ink Soft** (`{colors.ink-soft}` — `#1f211c`): Secondary near-black, dark-surface backgrounds.
- **Ink Mid** (`{colors.ink-mid}` — `#3a3c37`): Mid-emphasis text.
- **Body** (`{colors.body}` — `#54564f`): Default body text color.
- **Body Mid** (`{colors.body-mid}` — `#84867e`): Secondary body / metadata / captions.
- **Mute** (`{colors.mute}` — `#c3c4bd`): Lowest-priority text — fine print, placeholder text.

### Semantic
The brand doesn't surface a separate semantic palette on its marketing pages. Status / validation cues borrow from the ink + red hierarchy; a form error state may use `{colors.primary}` for the message text and border.

## Typography

### Font Family
A disciplined single-face system with one technical exception:
1. **Inter** — carries everything: hero headlines at weight 700, sub-displays at 600, body at 400, buttons at 600. One face, weight does the differentiating work.
2. **JetBrains Mono** (`mono-technical`) — reserved exclusively for chemical composition / mechanical property data tables. Signals measured, verified data.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 56px | 700 | 58px | -1px | Hero headline. |
| `{typography.display-lg}` | 44px | 700 | 46px | -0.5px | Section headlines. |
| `{typography.display-md}` | 30px | 700 | 36px | -0.3px | Sub-section headlines. |
| `{typography.display-sub-lg}` | 40px | 600 | 46px | 0 | Large stat / number display. |
| `{typography.display-sub-md}` | 28px | 600 | 36px | 0 | Stat-strip numbers. |
| `{typography.display-sub-sm}` | 22px | 600 | 28px | -0.2px | Card titles. |
| `{typography.display-xs}` | 18px | 700 | 24px | 0 | Grade codes, inline micro-headings. |
| `{typography.body-lg}` | 19px | 400 | 29px | 0 | Lead paragraphs. |
| `{typography.body-md}` | 17px | 400 | 26px | 0 | Default body. |
| `{typography.body-md-strong}` | 17px | 600 | 26px | 0 | Bolded inline body. |
| `{typography.body-sm}` | 15px | 400 | 23px | 0 | Secondary body. |
| `{typography.body-sm-strong}` | 15px | 600 | 23px | 0 | Bold caption, nav links. |
| `{typography.caption}` | 13px | 400 | 19px | 0 | Fine print. |
| `{typography.eyebrow-uppercase}` | 13px | 700 | 13px | 1.5px | UPPERCASE red eyebrow above section headlines. |
| `{typography.mono-technical}` | 14px | 500 | 20px | 0 | Spec-table data cells. |
| `{typography.button-md}` | 16px | 600 | 24px | 0 | Primary button label. |
| `{typography.button-sm}` | 13.5px | 700 | 13.5px | 0.2px | Small button label. |

### Principles
- **Weight does the work, not a second face.** Inter 700 for display, 600 for sub-display/buttons, 400 for body.
- **Red uppercase eyebrows** — `1.5px` tracking at 13px bold is the brand's signature label style, always in `{colors.primary}`.
- **Sentence-case headlines**, never uppercase, except eyebrows and grade-code badges.
- **Monospace is earned, not decorative** — only chemical/mechanical data tables use `mono-technical`; nothing else does.

## Layout

### Spacing System
- **Base unit**: 4px.
- **Tokens**: `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 24px · `{spacing.2xl}` 32px · `{spacing.3xl}` 48px · `{spacing.4xl}` 64px.
- **Section padding**: bands use `{spacing.4xl}` 64px top/bottom.
- **Card interior**: cards at `{spacing.xl}` 24px, compact cards (grade-card) at `{spacing.lg}` 16px.

### Grid & Container
- Marketing container ~1280px wide, centred with gutters.
- Hero: split at desktop (headline + CTA left, factory visual right); stacked at mobile.
- Product/grade/industry grids: 4-up desktop, 2-up tablet, 1-up mobile.

### Responsive Strategy

#### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hero stacks; grids 1-up; hamburger nav. |
| Tablet | 768–1023px | 2-up grids. |
| Desktop | ≥ 1024px | Full grids; hero split; nav dropdowns. |

#### Touch Targets
Buttons render ~48px tall (12px vertical padding + 24px line). Meets WCAG AAA.

#### Image Behavior
Factory photography and process diagrams inside `{rounded.md}` framed cards or full-bleed section backgrounds. Certificates rendered as clean redesigned cards, not scanned images.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No shadow, no border. | Default for hero, dark bands. |
| Level 1 — Hairline | 1px solid `{colors.steel-line}` border. | Default card chrome, tables, dividers. |
| Level 2 — Soft Card | `{colors.canvas-soft}` fill against `{colors.canvas}` page. | Alternating content bands. |
| Level 3 — Hover Lift | Border shifts to `{colors.primary}`, subtle `translateY(-2px)` + soft shadow. | Interactive cards on hover. |

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed bands, tables. |
| `{rounded.sm}` | 4px | Buttons, form inputs — the brand's default. |
| `{rounded.md}` | 8px | Cards, panels. |
| `{rounded.pill}` | 9999px | Status pills, grade-classification badges. |
| `{rounded.full}` | 9999px | Circular process-step numbers, icon containers. |

## Components

### Buttons

**`button-primary`** — the red CTA.
- Background `{colors.primary}`, text `{colors.on-primary}`, label `{typography.button-md}`, padding `{spacing.md} {spacing.xl}`, shape `{rounded.sm}` 4px. Hover → `{colors.primary-dark}`.

**`button-secondary`** — the black CTA.
- Background `{colors.ink}`, text `{colors.on-primary}`, same typography / padding / shape.

**`button-tertiary`** — the outline CTA.
- Background `{colors.canvas}`, text `{colors.ink}`, 1px solid `{colors.ink}` border, same typography / padding / shape. Hover → border + text shift to `{colors.primary}`.

**`button-text`** — text-only CTA used inside cards / nav.
- Background `{colors.canvas}`, text `{colors.primary}`, body in `{typography.button-sm}`, padding `{spacing.sm} {spacing.lg}`.

### Cards & Containers

**`card-content`** — the default steel-grey content card.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.xl}`, shape `{rounded.md}`.

**`product-shape-card`** — homepage/Products shape card.
- Background `{colors.canvas}`, 1px `{colors.steel-line}` border, hover border `{colors.primary}` + lift, padding `{spacing.xl}`, shape `{rounded.md}`.

**`grade-card`** — compact steel-grade card.
- Background `{colors.canvas}`, 1px `{colors.steel-line}` border, grade code in `{typography.display-xs}`, hover border `{colors.primary}`, padding `{spacing.lg}`, shape `{rounded.md}`.

**`cert-badge`** — certification card.
- Background `{colors.canvas}`, 1px `{colors.steel-line}` border, padding `{spacing.xl}`, shape `{rounded.md}`.

**`card-feature-dark`** — polarity-flipped dark card.
- Background `{colors.ink}`, text `{colors.on-primary}`, padding `{spacing.xl}`, shape `{rounded.md}`.

### Data Display

**`spec-table`** — chemical/mechanical property table.
- Header background `{colors.ink}`, header text `{colors.on-primary}` in `{typography.caption}`; body cells in `{typography.mono-technical}`; row border `{colors.steel-line}`; alternating rows `{colors.canvas-soft}`; cell padding `{spacing.sm} {spacing.lg}`.

**`stat-strip`** — the "26+ Years | 280+ Customers | 220 Quality Checkpoints" credibility band.
- Background `{colors.ink}`, text `{colors.on-primary}`, numbers in `{typography.display-sub-md}` with `{colors.primary}` accent, labels in `{typography.caption}`.

**`process-step`** — numbered manufacturing-flow step.
- Number in a `{rounded.full}` circle, background `{colors.primary}`, text `{colors.on-primary}`; label in `{typography.body-sm-strong}`; connecting line `{colors.steel-line}`.

### Inputs & Forms

**`text-input`** / **`quote-form-field`** — the canonical technical form field.
- Background `{colors.canvas}`, text `{colors.ink}`, 1px `{colors.steel-line}` border, focus border `{colors.primary}`, label in `{typography.body-sm-strong}`, body in `{typography.body-md}`, padding `{spacing.md} {spacing.lg}`, shape `{rounded.sm}`.

### Navigation

**`nav-bar`** — the sticky top nav.
- Background `{colors.canvas}`, text `{colors.ink}`, bottom border `{colors.steel-line}`, padding `{spacing.md} {spacing.xl}`. Gains shadow on scroll.

**`nav-link`** — link items inside nav.
- Text `{colors.ink}`, set in `{typography.body-sm-strong}`. Hover/active → `{colors.primary}`.

**`footer`** — the black footer.
- Background `{colors.ink}`, text `{colors.canvas-soft}`, padding `{spacing.3xl} {spacing.xl}`. Body in `{typography.body-sm}`.

### Signature Components

**`hero-band`** — the white hero band.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.4xl} {spacing.xl}`. Headline in `{typography.display-xl}` (700).

**`hero-band-dark`** — polarity-flipped dark hero (used for stat-strip-led sections).
- Background `{colors.ink}`, text `{colors.on-primary}`, same scale.

**`content-band-cream`** *(retained token name; renders steel-grey, not cream)* — the soft content band that alternates with white sections.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, padding `{spacing.4xl} {spacing.xl}`. Section headline in `{typography.display-lg}`.

**`eyebrow-uppercase`** — the small UPPERCASE red eyebrow above section headlines.
- Text `{colors.primary}`, set in `{typography.eyebrow-uppercase}` (13px / 700 / `1.5px` tracking).

**`badge-pill`** — the inline pill for metadata / classification tags (IS / EN / DIN / AISI / JIS).
- Background `{colors.canvas-soft}`, text `{colors.ink}`, body in `{typography.body-sm}`, padding `{spacing.xs} {spacing.md}`, shape `{rounded.pill}`.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` TBI red for every primary CTA and eyebrow label. Matched exactly to the logo — it IS the brand.
- Keep the canvas cool and clean — `{colors.canvas}` `#ffffff` white / `{colors.canvas-soft}` `#f4f5f6` steel-grey. No warmth anywhere in the neutral ladder.
- Set hero headlines in `{typography.display-xl}` Inter weight 700. Sentence-case, no uppercase.
- Reserve `mono-technical` strictly for chemical/mechanical spec-table data — nowhere else.
- Use `{rounded.sm}` 4px for buttons/inputs and `{rounded.md}` 8px for cards. Tighter radius than a consumer SaaS product — this is engineering, not software.
- Pair red CTA with ink-black text on white/steel-grey backgrounds — the three-token rhythm is the entire conversion story.
- Use hairline `{colors.steel-line}` borders as the default card/table elevation cue, reserving shadow for hover states only.

### Don't
- Don't introduce a warm cream or off-white canvas. This is a cool, clean, technical palette.
- Don't use a second chromatic accent. Red + white/steel-grey + black is the entire palette.
- Don't render primary CTAs as pills. The brand's button is a 4px-rounded rectangle.
- Don't use the monospace face for anything but verified technical data tables.
- Don't stack more than one shadow level at rest — elevation comes from hairline borders and soft-surface contrast, not drop shadows, except on hover.
