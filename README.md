# MY ELEGANT KID — Atelier Theme

A production-grade Salla Twilight theme for MY ELEGANT KID (`mykids-shop.com`), a luxury newborn and kids couture brand in Hail, Saudi Arabia.

## Theme Overview

- **Theme ID:** `myelegantkid-atelier`
- **Engine:** Salla Twilight
- **Stack:** Twig · Tailwind CSS 3 · Alpine.js · Vanilla JS · Salla Web Components
- **Direction:** RTL-first (Arabic default), full LTR support

## Features

### Homepage Sections (15 sections)
- Announcement bar with free-shipping threshold
- Editorial split-nav header — logo centered, categories split left/right, sticky on scroll
- Full-bleed hero with dual CTAs
- "أناقة خالدة" editorial two-column intro
- Featured category cards (6 cards, overlay text)
- Bestsellers product grid using `<salla-product-card>`
- CSS-only brand marquee ticker
- Numbered collections list (01–10)
- Editorial full-bleed banner
- Curated picks (4 products)
- Brand story timeline (5 stages, polaroid fan animation)
- Customer testimonials via Salla reviews API
- Community / Instagram grid
- Newsletter signup via `<salla-newsletter>`
- Three-column footer with social links

### All Required Pages
- Home · Product (PDP) · Products/Category (PLP) · Cart · Checkout
- Customer: Login · Register · Profile · Orders · Addresses · Wishlist
- Categories · Brands · Blog Index · Blog Single · CMS Page
- Search · 404 · Maintenance
- Email templates: Order Confirmation · Shipping Update · Password Reset

### Technical Highlights
- **RTL-first** — Tailwind logical properties throughout (`ps-*`, `pe-*`, `ms-*`, `me-*`)
- **Mobile-first** — all breakpoints designed from 375px up
- **Async font loading** — Google Fonts loaded non-blocking via `preload` + `onload` pattern
- **SEO** — meta description, OG tags, Twitter card, skip-to-content, semantic HTML
- **Accessibility** — skip navigation link, ARIA roles, focus-visible states
- **Performance** — lazy images, eager hero, Webpack bundle optimization, PurgeCSS
- **All Salla Web Components preserved** — no custom cart/checkout logic

### Theme Customization (twilight.json)
Every section is merchant-editable through Salla's visual editor:
- Hero: image, heading, subheading, two CTA buttons
- Featured categories: images, labels, URLs (up to 6)
- Bestsellers: product IDs, section heading
- Editorial banner: image, heading, body text, CTA
- Announcement bar: message text, toggle
- Header: sticky behavior, dark/light mode
- Footer: dark/light mode

## Brand System

| Token | Value | Usage |
|---|---|---|
| Ink | `#2a201a` | Headings, body text, header/footer bg |
| Bone | `#faf5ec` | Page background |
| Cream | `#f6f1e8` | Section backgrounds, inputs |
| Sand | `#e8dfca` | Cards, dividers |
| Mist | `#b8a98f` | Secondary text, labels |
| Gold | `#b89464` | Accent, CTAs, sale price |

**Fonts:**
- Display: Cormorant Garamond (editorial headlines)
- Logo: Marcellus (brand mark)
- Arabic: Marhey (all Arabic text)
- Body: Inter (UI text, prices)

## Development

```bash
# Install
pnpm install

# Development server (hot reload against demo store)
salla theme preview

# Production build
pnpm run production
```

## Theme Reviewer Notes

1. This theme is built from scratch on the Twilight engine. It is **not** a cosmetic reskin of Raed — the homepage section order, component architecture, visual language, and color system are entirely different.
2. All product data, categories, and copy are pulled from Salla bindings — no hardcoded content.
3. All user-facing strings are in `src/locales/ar.json` and `src/locales/en.json`.
4. The theme has been tested with RTL (Arabic) and LTR (English) — toggle correctly flips layout.
5. All 15 required page types exist under `src/views/pages/`.
6. Salla Web Components (`<salla-add-product-button>`, `<salla-product-card>`, `<salla-search>`, etc.) are used throughout — no custom cart/checkout implementations.

## Test Store

- **Demo store URL:** (provide after linking in Partners Portal)
- **Test credentials:** (provide in review submission notes)

## Support

For review questions or issues: abdelrhmanwahdan129@gmail.com
