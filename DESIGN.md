# Design System — Need OQ

## 1. Brand Identity & Vision
- **Brand Name**: Need OQ by Safe Hands Safety
- **Core Motto**: *"Born and bred in the oil patch. Either oil or gas, we speak your language!"*
- **Aesthetic**: **Industrial High-Contrast Precision**
- **Quality Standard**: Fully compliant with `impeccable.style` rules. Zero AI slop, no generic gradients, no arbitrary side tabs (`border-l-4`), clean structural grid lines, and crisp typography.

---

## 2. Visual Palette & Tokens
- **Canvas Light**: `#F8F9FA` (Clean industrial canvas)
- **Canvas Dark**: `#0A0A0A` (Deep slate oil patch black)
- **Surface Cards**: `#FFFFFF` (Crisp high-contrast cards with subtle `#E2E8F0` border)
- **Surface Dark**: `#141414` (Dark mode surface with `#262626` border)
- **Primary Accent**: `#D22F25` (Safety Red for CTAs, badges, and focal elements)
- **Primary Hover**: `#EB392F`
- **Headings Color**: `#0F172A` (Deep Slate in light mode) / `#FFFFFF` (in dark mode)
- **Body Text**: `#334155` (Slate Gray) / `#A1A1AA` (in dark mode)
- **Borders**: `#E2E8F0` / `#262626`

---

## 3. Typography
- **Primary Typeface**: `Albert Sans` (clean geometric sans-serif with delicate light, regular, and semibold weights for a sleek, contemporary, and professional industrial finish).
- **Headings (`h1`, `h2`, `h3`)**: `Albert Sans`, uppercase, medium to bold weight (`font-semibold` or `font-bold`), tracking tight (`tracking-tight`). Solid colors only.
- **Body Text**: `Albert Sans`, weights 300 (Light) to 400 (Regular), leading relaxed (`leading-relaxed`).
- **Technical Badges & Metadata**: `JetBrains Mono`, uppercase, tracking widest (`tracking-widest`).

---

## 4. Anti-Pattern Prevention (`impeccable.style`)
- **No `border-l-4` side tabs**: Use full 1px technical borders (`border border-slate-200`) with monospace category badges or subtle top/corner markers instead.
- **No `bg-clip-text` / text gradients**: Headings must be solid white or dark slate with solid red focal words.
- **Accessible Tap Targets**: 48x48px minimum on mobile devices.
- **Focus Indicators**: Clear 2px outline for keyboard accessibility.
