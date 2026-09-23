# Need OQ — Comprehensive Website Analysis & Landing Page Architecture Report

**Target Domain Analyzed**: [https://needoq.com/](https://needoq.com/)  
**Target Project**: `NeedQO`  
**Tech Stack Rebuilt**: SvelteKit 2 + Svelte 5 (Runes) + Tailwind CSS v4 + TypeScript + Vite 8  
**Parent Organization**: Safe Hands Safety  
**Date**: September 2026  

---

## 1. Executive Summary & Brand Identity

**Need OQ** is a specialized Operator Qualification (OQ) evaluation and safety training provider with over 25 years of operational history (*"Performing Operator Qualification throughout the Nation since 1999"*). Born in the oil patch, the company services both **natural gas** and **hazardous liquid pipeline** operators and contractors across the Permian Basin, Eagle Ford, Gulf Coast, and nationwide.

The current website runs on a legacy **GoDaddy Website Builder (v8.0)** setup. While it contains valuable regulatory information, credentials, and task lists, its presentation suffers from outdated layouts, lack of interactive filtering, poor mobile usability, and weak conversion funnels. 

Our rebuild modernizes the platform into a high-performance, accessible, and conversion-focused SvelteKit landing page sharing the battle-tested architectural foundation of **RockyMtnSafety** and **SafeHandsSafety**.

---

## 2. In-Depth Analysis of Current Website (needoq.com)

Through automated scraping and content inspection of all subpages (`/need-oq`, `/what-we-do-1`, `/the-oq-rule`, `/common-covered-tasks`, `/safe-hands-safety`, `/photo-gallery`, `/blogs`), we extracted the complete operational footprint:

### A. Key Operational Capabilities & Accreditations
1. **Regulatory Foundation**:
   - **PHMSA 49 CFR Part 192** (Transportation of Natural and Other Gas by Pipeline)
   - **PHMSA 49 CFR Part 195** (Transportation of Hazardous Liquids by Pipeline)
2. **Evaluation & Training Delivery Modes**:
   - **Mobile Testing Labs**: Evaluators deployed directly to client job sites, right-of-ways, and field facilities.
   - **ATAC (Authorized Training and Assessment Centers)**: Fixed regional facilities in Midland, TX and Corpus Christi, TX.
   - **Remote Proctoring & CBT**: Computer-Based Training for written qualification testing before hands-on demonstration.
3. **Approved OQ Databases & Partners**:
   - **Veriforce** (Authorized Provider)
   - **Energy WorldNet / EWN** (Certified Provider)
   - **NCCER Pipeline Program** (Master Trainer, Authorized Training Sponsor [ATS], Authorized Training Unit [ATU])
   - **MEA Energy Association** (3rd Party Evaluator — 3-step Training, Testing & Performance Evaluation)
   - **ITS** (Industrial Training Services)
   - **OQSG** (Operator Qualification Solutions Group)
4. **Safety Accreditations & Programs**:
   - **Basin United** (Authorized Provider)
   - **SafeLandUSA / SafeGulf**
   - **Gold Shovel Standard** (Excavation & Damage Prevention)
   - **PEC H2S Clear**
   - **Authorized Manlift & Forklift Training Center**
   - **Damage Prevention (811 Call Before You Dig)**
5. **Physical Locations & Coverage**:
   - **Midland Training Center (Main ATAC)**: 5301 Cholla Rd, Midland, TX 79706
   - **Corpus Christi Training Center**: 400 SPID, Suite 103B, Corpus Christi, TX 78405
   - **Service Hubs**: Midland/Odessa, Corpus Christi, Houston, Sherman, New Orleans, McAllen.
   - **Direct Contact**: Phone: `(432) 231-2207` | Email: `JulioMartinez@SafeHandsSafety.com`

---

## 3. Deficiencies of the Legacy Website

| Dimension | Legacy Website (`needoq.com`) | Modern Rebuild (`NeedQO`) |
|---|---|---|
| **Platform** | GoDaddy Website Builder 8.0 | SvelteKit 2 + Svelte 5 + Tailwind v4 |
| **CCT & Task Finding** | Static unstructured wall of text | Interactive real-time search & category filter |
| **Visual Hierarchy** | Serif fonts (`Playfair Display`) unsuited for industrial safety | Industrial typography (`Outfit` + `Plus Jakarta Sans` + `JetBrains Mono`) |
| **Responsive UX** | Desktop-centric builder layout; unoptimized touch targets | Mobile-first thumb zone navigation & fluid scaling |
| **Conversion Funnel** | Basic generic contact form with external redirect | Zero-friction industrial quote request with honeypot spam protection |
| **Performance & SEO** | Bloated builder scripts & external tracking | SSR / static prerendering, structured JSON-LD Schema |
| **Code Modularity** | Monolithic closed CMS | Clean atomic components with typed content models |

---

## 4. Rebuilt Landing Page Architecture

The new codebase in `NeedQO` follows the exact architectural standards of `RockyMtnSafety` and `SafeHandsSafety`:

### File Structure:
```
NeedQO/
├── .agents/skills/impeccable/    # AI Design & Quality Co-Pilot Skill
├── AI_UX_RULES.md               # Human-Centered UX/A11y/Color specifications
├── src/
│   ├── app.html                 # Semantic HTML shell, SEO metas, Outfit & Jakarta Sans fonts
│   ├── app.d.ts                 # SvelteKit types
│   ├── lib/
│   │   ├── components/
│   │   │   ├── Navbar.svelte               # Dark industrial sticky navigation with direct phone CTA
│   │   │   ├── Hero.svelte                 # High-impact oil & gas hero with key metrics
│   │   │   ├── ValueProps.svelte           # 4 core pillars (PHMSA, 3 Delivery Modes, NCCER, Platforms)
│   │   │   ├── PlatformsSection.svelte     # Veriforce, EWN, NCCER, MEA, ITS, OQSG cards
│   │   │   ├── CoveredTasksSection.svelte  # Searchable & filterable CCT matrix
│   │   │   ├── AccreditationsMarquee.svelte# Basin United, SafeLand, Gold Shovel, H2S Clear
│   │   │   ├── LocationsSection.svelte     # Midland ATAC, Corpus Christi, and regional hubs
│   │   │   ├── FaqSection.svelte           # Accessible accordion addressing OQ regulations
│   │   │   ├── QuoteSection.svelte         # Zero-friction quote request form + honeypot
│   │   │   └── Footer.svelte               # Complete footer with legal & Safe Hands affiliation
│   │   └── data/
│   │       └── content.ts                  # Centralized, strongly typed content repository
│   └── routes/
│       ├── +layout.svelte       # Root layout with LocalBusiness JSON-LD & view transitions
│       ├── layout.css           # Tailwind v4 theme definitions & industrial styles
│       └── +page.svelte         # Landing page assembly
├── package.json                 # Svelte 5, Tailwind v4, Vite 8, SvelteKit 2
├── tsconfig.json                # Strict TypeScript configuration
├── vite.config.ts               # Runes enforcement & Tailwind Vite plugin
└── .gitignore                   # Standard SvelteKit ignores
```

---

## 5. AI Skills & Design Standards Transferred

1. **`.agents/skills/impeccable`**: Installed and configured. Empowers future AI iterations to maintain high design craft, token consistency, and anti-pattern detection.
2. **`AI_UX_RULES.md`**: Embedded in root. Implements Fitts's Law (minimum 48x48px tap targets), Hick's Law, APCA contrast rules (Lc 60–75), and Scott Hurff's 5 UI States.

---

## 6. Current Status & Next Steps

- [x] Workspace inspected and verified.
- [x] Reference architectures from `RockyMtnSafety` and `SafeHandsSafety` reviewed and matched.
- [x] AI Skills (`impeccable`) and UX rules (`AI_UX_RULES.md`) copied and configured.
- [x] Live site `https://needoq.com/` scraped and analyzed across all subpages.
- [x] New SvelteKit + Tailwind v4 project initialized with complete components, content, and routes.
- [ ] Connect Git repository (awaiting user URL).
- [ ] Incorporate additional customer briefs/specifications provided by user.
