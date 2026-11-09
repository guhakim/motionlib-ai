# Prompt: ClearInvoice SaaS Hero (saas, hero)

Live page: `/clearinvoice` (implemented in `components/clearinvoice-hero.tsx` + `components/clearinvoice-hero.css`).

Original spec asked for React (Vite) + Tailwind + motion/react; this site is Next.js without Tailwind, so it is
scoped plain CSS under `.ci-root` and uses `framer-motion` (the package `motion/react` comes from).

- Background: memoized `BackgroundVideo` playing the Mux `.m3u8` stream with hls.js (native HLS only as the
  Safari/iOS fallback), autoplay/loop/muted/playsInline, full opacity, z-index -10; cleanup destroys hls.js,
  pauses and clears the source, and swallows the expected play() AbortError.
- Fonts: Switzer 500 (Fontshare) for headings with tight tracking, Geist (next/font) for body.
- 5px top bar: gradient `#ccf` → `#e7d04c` → `#31fb78`.
- Navbar: logo left, Features / Pricing / Reviews centred, Sign In / Sign Up right; hamburger + full-width
  dropdown under 900px.
- Headline "Manage your online store while save 3x operating cost" (60px desktop), subhead in white/90.
- Staggered fade-up entrance for text, buttons and social proof.
- Primary button: `#FF3300` → `#EE7926` gradient, orange-600 blur glow at .2 (→ .6 on hover), 1.5px white/20
  inner stroke, scale 1.05 and an arrow sliding in from the left on hover.
- Secondary button: white/90 + backdrop blur, 1.5px black/5 inner stroke, scale 1.05 and solid white on hover.
- Social proof: three overlapping avatars (Unsplash) + "Trusted by 210k+ stores worldwide".
