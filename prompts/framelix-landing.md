# Prompt: Framelix 3D Studios (agency, landing page)

Live page: `/framelix` (implemented in `components/framelix-landing.tsx` + `components/framelix-landing.css`).

Original spec asked for React + Tailwind + tailwindcss-animate; this site has no Tailwind, so it is scoped plain CSS
under `.fx-root` (the theme HSL variables live on `.fx-root`), with framer-motion for the hero entrances.

- Dark only: black background, white text, Inter, `--radius: 9999px`.
- Navbar: 36px side / 32px top / 20px bottom padding; logo (inline SVG, `brightness(0) invert(1)`, 36px high);
  three 2-link columns (Reels/Services, Projects/Pipeline, Careers/Get In Touch) 64px apart, hidden on mobile;
  ticket-shaped 27×30 scalloped cart icon with a centred "0".
- Hero: full-width autoplay/loop/muted video (`w-full h-auto`), "Framelix³ᴰ" (26px) + "Cinematic Motion Studios"
  (clamp 2rem–68px) at top 50px fading/sliding down; "Explore Reel" white pill (22px, px-14 py-4) + "Ready in 24-48
  hours" at bottom 12% fading/sliding up with 0.3s delay.
- Marquee: `#A6A4FF`, black 16px medium text, "New! 3D^OS V1.2.1 out now!" ×6 duplicated, translateX 0 → -50% over
  20s linear infinite, 14px vertical padding, 60px gaps.
- Shipping: `#EAEAEA` with 40px bottom radius, "Framelix³ᴰ" (20px) + "Shipping Now" (clamp 2rem–52px), 800×800
  object-contain video with -96px vertical margin, black "Buy Now" pill (18px, px-46 py-3), "Explore now" (20px, 450),
  128px bottom padding on the wrapper.
