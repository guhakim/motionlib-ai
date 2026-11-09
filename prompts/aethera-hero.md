# Prompt: Aethera, cinematic hero with looping video background

Live page: `/aethera` (implemented in `components/aethera-hero.tsx` + `components/aethera-hero.css`).

Original spec was React + Vite + Tailwind; this site is Next.js without Tailwind, so the Tailwind classes are
translated to scoped plain CSS under `.ae-root`.

- Fonts: Instrument Serif (logo, headline), Inter (nav, body) via `next/font/google`.
- Video: fullscreen layer at `top: 300px; inset: auto 0 0 0`, white gradient overlay top → transparent → bottom.
  Manual loop: requestAnimationFrame fades opacity in over 0.5s at the start and out over 0.5s before the end;
  on `ended` → opacity 0, wait 100ms, `currentTime = 0`, `play()`.
- Nav: "Aethera®" logo, Home (black) / Studio / About / Journal / Reach Us (#6F6F6F), black pill "Begin Journey".
- Hero: "Beyond *silence,* we build *the eternal.*" (48 / 72 / 96px, line-height .95, letter-spacing -2.46px,
  italics in #6F6F6F), description in #6F6F6F, large black pill CTA.
- Animations: fade-rise (opacity 0→1, translateY 20px→0, .8s ease-out) with 0 / .2s / .4s delays.
