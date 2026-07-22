---
name: Luminescent Precision
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393b'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1c1b1d'
  surface-container: '#201f22'
  surface-container-high: '#2a2a2c'
  surface-container-highest: '#353437'
  on-surface: '#e5e1e4'
  on-surface-variant: '#bbcac0'
  inverse-surface: '#e5e1e4'
  inverse-on-surface: '#313032'
  outline: '#85948b'
  outline-variant: '#3c4a42'
  surface-tint: '#45dfa4'
  primary: '#5af0b3'
  on-primary: '#003825'
  primary-container: '#34d399'
  on-primary-container: '#00563b'
  inverse-primary: '#006c4b'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#ffccad'
  on-tertiary: '#502400'
  tertiary-container: '#ffa668'
  on-tertiary-container: '#783901'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#68fcbf'
  primary-fixed-dim: '#45dfa4'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#005137'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffdcc7'
  tertiary-fixed-dim: '#ffb787'
  on-tertiary-fixed: '#311300'
  on-tertiary-fixed-variant: '#723600'
  background: '#131315'
  on-background: '#e5e1e4'
  surface-variant: '#353437'
  surface-card: '#18181b'
  border-muted: '#27272a'
  text-primary: '#ffffff'
  text-secondary: '#e4e4e7'
  text-muted: '#a1a1aa'
  text-dim: '#52525b'
typography:
  display-hero:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.05em
  display-hero-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.05em
  headline-section:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-subsection:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '500'
    lineHeight: '1.4'
  body-intro:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
  body-standard:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.625'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
  label-ui:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1024px
  gutter: 1.5rem
  section-v-space: 5rem
  card-gap: 1.5rem
  element-tight: 0.5rem
  element-standard: 1rem
---

## Brand & Style

This design system is engineered for the high-precision world of semiconductor physics. It balances the rigor of academic research with the modern clarity of technical software interfaces. The aesthetic is rooted in **Minimalism** with a **Corporate/Modern** backbone, utilizing a deep-space monochromatic palette to allow technical data and emerald accents to "fluoresce" like signals in a lab environment.

The target audience—fellow researchers, industry partners, and academic institutions—expects a UI that prioritizes information density and structural clarity. The emotional response is one of calm authority, intellectual focus, and technological sophistication. Layouts are strictly organized, emphasizing a logical flow from broad expertise to granular publications and timeline-based achievements.

## Colors

The palette is anchored by `zinc-950` as the primary dark surface, providing a void-like backdrop that minimizes eye strain during deep reading. `emerald-400` serves as the primary accent, used purposefully for interactive states, high-priority labels, and signifying "active" research status.

`emerald-500` is reserved for critical emphasis or iconography where higher saturation is required for legibility. Secondary surfaces (cards, sidebars) utilize `zinc-900` to create subtle depth without breaking the dark-mode immersion. Hierarchy is primarily driven by text color stepping: white for headings, light gray for body text, and medium grays for metadata.

## Typography

Typography is the primary engine of this design system. **Hanken Grotesk** is used for headlines to provide a sharp, contemporary edge. **Inter** handles the heavy lifting of body content, chosen for its exceptional legibility in technical prose. **JetBrains Mono** is introduced for labels and technical metadata, nodding to the computational nature of modern physics and providing a clear visual distinction for "data" vs "description."

Scale is managed tightly to ensure research papers and technical lists remain scannable. Use `display-hero` only for the primary identity. Academic section titles use `headline-section`. For technical tags and small metrics, `label-mono` should be used to evoke a precision instrument readout.

## Layout & Spacing

The layout follows a **Fixed Grid** model with a maximum width of 1024px to maintain optimal line lengths for academic reading. Vertical rhythm is generous between sections (80px) to provide mental "breathing room" between different research topics.

Internal component spacing relies on a strict 8px base unit. Technical expertise grids should utilize a `card-gap` of 24px. For lists of publications, a tighter vertical rhythm is preferred to show density of work, while timeline components use vertical connectors to guide the eye through chronological data. Use fluid horizontal padding (min 24px) to ensure the container never touches the screen edges on mobile devices.

## Elevation & Depth

Depth is communicated through **Tonal Layers** and **Glassmorphism**. Shadows are used sparingly; only the largest container cards receive a deep, diffuse shadow (`shadow-2xl`) to separate them from the `zinc-950` background.

The primary navigation uses a backdrop blur effect (90% opacity) to provide a sense of place during long scrolls through research archives. Borders serve as the primary structural element—fine 1px lines in `zinc-800` define the grid and separate content without adding visual bulk. Hover states on interactive elements are signaled by a subtle glow—transitioning border colors from muted zinc to a low-opacity emerald.

## Shapes

The shape language is **Rounded**, striking a balance between the organic nature of academic discourse and the precise geometry of semiconductor architecture. 

- **Cards and major sections:** Use `rounded-2xl` (16px) for a soft, modern enclosure.
- **Interactive UI components (Buttons/Tags):** Use `rounded-full` (Pill) to clearly distinguish them from static content.
- **Media/Profile elements:** Use `rounded-3xl` (24px) to create a distinct focal point for imagery.
- **Technical Lines:** All timeline connectors and separators should have rounded caps to match the UI radius.

## Components

### Technical Expertise Cards
Cards use a `zinc-900` background with a 1px `zinc-800` border. Icons should be `emerald-400`. On hover, the border transitions to a subtle emerald tint and the icon scales slightly (105%).

### Academic Timeline
The timeline is a vertical `zinc-800` line. Major milestones are marked with solid `emerald-400` circles, while secondary events use hollow or `zinc-600` dots. Dates should use `label-mono` for a technical feel.

### Publication Lists
Publications are styled as clean, borderless list items with a `zinc-800` bottom separator. The title is `text-primary` and Semi-bold. Metadata (Journal, Date, DOI) uses `text-muted` and `label-mono`. Hovering over a publication highlights the entire row with a very faint `zinc-900` background.

### Tags & Chips
Tags (e.g., Research Interests) use a pill shape with a background of `emerald-400` at 10% opacity and text in solid `emerald-400`. This ensures high contrast without overwhelming the visual field.

### Input Fields & Buttons
Inputs are `zinc-950` with a `zinc-800` border. The active/focus state must use an `emerald-400` border and a subtle emerald outer glow. Primary buttons are solid `emerald-400` with `zinc-950` text for maximum impact.