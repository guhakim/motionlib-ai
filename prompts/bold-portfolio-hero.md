# Prompt: Bold Portfolio Hero (portfolio, hero)

Live page: `/portfolio-hero` (implemented in `components/bold-portfolio-hero.tsx` + `components/bold-portfolio-hero.css`).

Original spec asked for React + Tailwind; this site has no Tailwind, so it is scoped plain CSS under `.bp-root`.

- Background: vertical gradient `#fd2601` → `#f37e1c`; white text; selection is white bg / `#fd2601` text.
- Ambient: blurred (4px) "OLIVIA" SVG text at 0.08 opacity; two `#F4791B` blobs (300×300 bottom-right,
  600×300 bottom-left, blur 80px, mix-blend screen, opacity .6).
- Nav: "✱ VIKTORODDY", centre links (desktop) PROJECTS / BLOG / ABOUT / RESUME (hover opacity .8),
  "// HIRE ME" + white-bordered circle with diagonal arrow (fills white, icon orange on hover).
- Headline: "NEW DESIGN ERA" in Anton, one line at min(12vw, 180px) on desktop, stacked NEW / DESIGN / ERA on mobile.
- Portrait (Unsplash) centred over the headline at z-index 20 with a rough brush-stroke CSS mask
  (inline SVG data URI using feTurbulence + feDisplacementMap), pointer-events none.
- Floating copy (desktop): intro bottom-left, "// DESIGN THAT / SPEAKS YOUR BRAND" right-middle; stacked below on mobile.
- Brand strip: placeholder wordmarks (fictional names instead of real brand logos) at opacity .9,
  spread on desktop, wrapped and centred on mobile.
