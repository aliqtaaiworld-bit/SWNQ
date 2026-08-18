---
name: SWNQ High-Trust Workforce
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daef'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e9edff'
  surface-container-high: '#e1e8fd'
  surface-container-highest: '#dce2f7'
  on-surface: '#141b2b'
  on-surface-variant: '#3c4a42'
  inverse-surface: '#293040'
  inverse-on-surface: '#edf0ff'
  outline: '#6c7a71'
  outline-variant: '#bbcabf'
  surface-tint: '#006c49'
  primary: '#006c49'
  on-primary: '#ffffff'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#4edea3'
  secondary: '#0051d5'
  on-secondary: '#ffffff'
  secondary-container: '#316bf3'
  on-secondary-container: '#fefcff'
  tertiary: '#855300'
  on-tertiary: '#ffffff'
  tertiary-container: '#e29100'
  on-tertiary-container: '#523200'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f9f9ff'
  on-background: '#141b2b'
  surface-variant: '#dce2f7'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  status-badge:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 12px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  container-max: 1280px
---

## Brand & Style

The design system is engineered for **SWNQ (SmartWork Now Qatar)**, a platform where reliability meets real-time utility. The visual direction follows a **Corporate / Modern** aesthetic with a focus on high information density and extreme legibility. It is designed to instill immediate confidence in corporate recruiters while remaining accessible and functional for industrial workers on-site.

The brand personality is **Fast, Reliable, and Decisive**. The UI avoids unnecessary decorative elements, opting instead for a systematic approach that emphasizes "Right Now" availability.

- **Minimalist Foundations:** Heavy use of whitespace and structured grids to reduce cognitive load during rapid hiring decisions.
- **Modern Professionalism:** A blend of soft industrial roundedness and high-contrast accessibility.
- **Bi-directional Ready:** The system is built to support English and Arabic (RTL) seamlessly, ensuring the "Right Now" promise transcends language barriers.

## Colors

The palette is functional and status-driven. The **Primary Success Green** is the dominant brand signal, representing the core value proposition: active availability. 

- **Primary (#10B981):** Used for "Available" indicators, primary CTAs, and successful state completions.
- **Secondary (#2563EB):** Used for recruiter-facing tools, dashboard navigation, and "Available From" scheduling.
- **Neutral (#111827):** High-contrast text to ensure readability under bright sun or harsh industrial lighting.
- **Status Semantic Palette:** Distinct hues are assigned to worker states to allow for instant color-coding in list views. Every status color must maintain a 4.5:1 contrast ratio against the light background.

## Typography

**Inter** is the sole typeface for this design system, chosen for its exceptional legibility and neutral, systematic tone. It provides the clarity needed for complex data tables and worker profiles.

- **Headlines:** Use Bold weights (700) for page titles and worker names to create immediate hierarchy.
- **Information Density:** For worker "Stats" (Experience, Skills), use `label-md` and `label-sm` to maintain a compact layout without sacrificing readability.
- **Multilingual:** When implementing Arabic, ensure line-height is increased by 15% to accommodate tall script characters.

## Layout & Spacing

The layout uses a **12-column fluid grid** for desktop and a **4-column grid** for mobile. The system prioritizes "Card-based scanning," allowing recruiters to view multiple worker profiles in a single row.

- **Rhythm:** A 4px baseline grid ensures consistent vertical rhythm.
- **Density:** High density is encouraged for data-rich environments. Use `8px` or `12px` (inner-card) and `24px` (outer-card) padding.
- **Mobile First:** Mobile views (primarily for workers) utilize full-width buttons and prominent bottom-sheet patterns for availability updates.

## Elevation & Depth

To maintain a "Professional and High-Trust" feel, depth is used sparingly and systematically.

- **Low-Contrast Outlines:** All cards and interactive containers must use a 1px border (#E5E7EB) as the primary separator.
- **Soft Ambient Shadows:** Only elevated elements (like active worker cards or modals) use a highly diffused shadow: `0px 4px 6px -1px rgba(0, 0, 0, 0.05)`.
- **Tonal Layering:** The primary background is white (#FFFFFF), with secondary information sections using a soft gray (#F9FAFB) to define content boundaries without adding visual weight.

## Shapes

The design system adopts a **12px (0.75rem)** standard corner radius for primary containers and cards. This balance feels modern and approachable while remaining structured enough for industrial applications.

- **Small Components:** Checkboxes and small input fields use a reduced 6px radius.
- **Badges:** Status badges use a "Pill" (full-round) shape to distinguish them from interactive buttons.
- **Buttons:** Large buttons (minimum 48px height for touch safety) use the standard 12px radius.

## Components

### Buttons
- **Primary:** Solid #10B981 with white text. High-contrast, 48px minimum height for mobile accessibility.
- **Secondary:** Solid #2563EB or Outline. Reserved for recruiter dashboard actions.
- **Tertiary:** Transparent background with bold text for secondary navigation.

### Worker Profile Cards
The core of the application. 
- **Header:** Worker Name (Headline-MD) + Status Badge (Top-Right).
- **Body:** 2-column grid showing "Exp" and "Current Location".
- **Footer:** Skill tags (gray chips) and a Primary "View Profile" or "Contact" action.

### Status Badges
Consistent color coding:
- **Available:** Green background, Dark Green text.
- **Unavailable/Working:** Red background, Dark Red text.
- **Available Soon:** Orange background, Dark Orange text.
Labels are always uppercase and bold for quick visual parsing.

### Input Fields
- **State:** 1px #D1D5DB border, changing to 2px #2563EB on focus.
- **Label:** Always visible above the input, never floating, to ensure clarity for users with varying digital literacy.

### Chips (Skills/Category)
- Light gray (#F3F4F6) with #374151 text. 8px roundedness. Used to categorize worker skills (e.g., "HSE Certified", "Scaffolder").