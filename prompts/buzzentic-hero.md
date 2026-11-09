# Prompt: Buzzentic Agency (agency, hero)

Live page: `/buzzentic` (implemented in `components/buzzentic-hero.tsx` + `components/buzzentic-hero.css`).

Original spec asked for React + Tailwind v4; this site has no Tailwind, so it is scoped plain CSS under `.bz-root`.

- Background: fullscreen `object-cover` video (autoplay, loop, muted, playsInline), no overlay or filter.
- Fonts: Barlow (UI/body), Instrument Serif italic (accent line).
- Nav: transparent, no border, white logo and links; links get a white/10 background on hover.
- Badge: "Featured in Fortune" liquid-glass pill: outer ring white/10 + blur 4px, inner pill white/90 + blur 12px.
- Headline: "Agency that makes your" (Barlow light, 64px) / "videos & reels viral" (Instrument Serif italic, 64px);
  scales to 52px / 40px on smaller screens.
- Sub-headline in white/75, max-width paragraph.
- Buttons: 2px radius, `#f8f8f8` background, `#171717` medium text, hover to pure white with transition-colors.
- Four 7×7px white squares on the corners of the central content box; content block has 250px bottom padding
  (120px on phones so it fits the viewport).
