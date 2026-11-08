# Prompt: CozyPaws, pet store hero section

Live page: `/cozypaws` (implemented in `components/cozypaws-hero.tsx` + `components/cozypaws-hero.css`).

Original spec: a single-page, viewport-height (no scroll) pet store hero with React, Lucide icons and three
breakpoints (mobile, tablet md, desktop lg+).

- Fonts: Inter (400/500/600) for UI, DM Serif Display for the hero heading.
- Palette: background `#EFFDF0`, dark green `#1a3d1a` (hover `#2a5a2a`), orange `#E86A10` (hover `#d45e0d`).
- Header: logo, centre nav (Home / Shop / Delivery and payment / Brands / Blog), search, favorites (badge 4), cart (badge 1), avatar.
- Desktop: "Everything / Your Pets Love" heading with staggered word-pop, product card top-left ("Cozy Cat House", $49.99),
  video card top-right ("Watch Product Reviews on TikTok and YouTube"), three bottom photos (flex 1 / 1.265 / 1)
  with overlays: 98K+ avatars, "Best Products for Your Pet" + Explore Products button, 4.6 rating.
- Tablet: same layout, 72px heading, side cards at top 80px (160px / 120px), photos max 60vh / 75vh / 60vh.
- Mobile: centred 36px title, subtitle, button, two cards side by side, stats row, bottom photos.
- Animations: fade-up, fade-in, slide-up, slide-in-left/right, text-reveal, word-pop, scale-in, photo-reveal; delays 100–1200ms.
- Stagger: header 100–300ms → heading words 200–600ms → side cards 600–700ms → photos 600–800ms (centre first) → overlays 1000–1200ms.

Assets (external, figma.site): see the `IMG` map at the top of `components/cozypaws-hero.tsx`.
