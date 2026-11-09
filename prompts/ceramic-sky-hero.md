# Prompt: Velmora, floating ceramic bowls hero

Build a single-screen **hero section** for a fictional handmade ceramics studio, **Velmora**. Use plain HTML, CSS and vanilla JavaScript in one file, with no framework, no build step and no libraries.

The page is a clean white sheet. Six round windows float across it. Each one shows a hand-painted ceramic bowl drifting in a pale blue sky. A short serif headline sits dead centre. Small editorial labels pin the four corners: logo top left, menu top right, a numbered collection tag bottom left, and a pitch with a "Buy collection" button bottom right.

- **Mood:** calm, airy, gallery-like. Lots of white space, black type, one soft sky blue.
- **Motion:** the bubbles bob gently on their own, drift a little with the mouse, and grow slightly when hovered. All text arrives by sliding up out of a mask on load. There are no opacity fades.

## Media

### Bubble images

Six square images, one per bubble, at 600 × 600px. Each image is a single hand-painted ceramic bowl floating in the middle of a soft blue sky with light clouds, softly lit and seen from slightly above. Every bowl has a different glaze, all with a scattering of tiny painted flowers:

| # | Glaze | Suggested file |
|---|---|---|
| 1 | Butter yellow | `bowl-yellow.jpg` |
| 2 | Lilac | `bowl-lilac.jpg` |
| 3 | Pearl white | `bowl-white.jpg` |
| 4 | Blush pink | `bowl-pink.jpg` |
| 5 | Pale aqua | `bowl-aqua.jpg` |
| 6 | Clear glass with flower decals | `bowl-glass.jpg` |

**Generation prompt for each image**, swapping in the glaze:

> A single hand-thrown ceramic bowl with a [GLAZE] glaze and tiny hand-painted multicolour flowers, floating weightlessly in a soft pastel blue sky with thin white clouds, three-quarter view from slightly above, soft daylight, gentle shadow inside the bowl, product photography, centred, square, no text, no logo.

**Fallback when no images are given:** draw each bubble as a radial gradient from `#dCEBFA` at the centre to `#9fc3ea` at the edge, with a soft white cloud made of three blurred white circles. The page must still look finished without any photos.

## Fonts

Load both from Google Fonts.

| Family | Weights | Use |
|---|---|---|
| Instrument Serif | 400 regular and 400 italic | Logo, headline, the large numbers "2K26" and "0651" |
| Inter | 400 and 500 | The word under the headline, every small uppercase label, the paragraph and the button |

## Palette

| Token | Value | Use |
|---|---|---|
| `--bg` | `#FFFFFF` | Page |
| `--ink` | `#0E0E0E` | All text, menu pill, button |
| `--sky` | `#A9CBEE` | Bubble rim shadow and fallback sky |
| `--soft` | `rgba(14,14,14,.55)` | Secondary labels |
| `--ease` | `cubic-bezier(.22,1,.36,1)` | Every transition |

## Layout (desktop, 1440 × 900 reference)

Every element is `position: absolute` inside a full-viewport `<section class="hero">` (`height: 100svh`, `overflow: hidden`). Positions are percentages of the hero, so the composition scales with the window.

### 1. Logo, top left

- "Velmora" in Instrument Serif, 34px, letter-spacing −.01em, with a small superscript "®" at 11px.
- Position: `left: 3.5%`, `top: 4.5%`.

### 2. Menu pill, top right

- A black pill, 62 × 40px, rotated −8°, at `right: 3%`, `top: 4%`.
- Inside, two white horizontal lines 22px wide and 1.5px thick, 6px apart.
- On hover the pill straightens to 0° and the lines spread to 8px apart (`.4s var(--ease)`).

### 3. Season tag, top right

- Position: `left: 60%`, `top: 19%`.
- Line 1: "2K26" in Instrument Serif, 40px.
- Line 2: "A CIRCLE OF SLOW MAKERS" in Inter 500, 11px, uppercase, letter-spacing .12em, max-width 150px, so it wraps onto two lines.

### 4. Headline, centre

- Centred horizontally and vertically.
- Line 1: "*Shape* the Weather" in Instrument Serif, `clamp(40px, 4.6vw, 68px)`, letter-spacing −.02em. Only the first word is italic.
- Line 2: "unfold" in Inter 400, `clamp(22px, 2vw, 30px)`, 6px below.

### 5. Collection tag, bottom left

- Position: `left: 6%`, `bottom: 7%`.
- "0478" in Instrument Serif, 40px, then "COLLECTION" in Inter 500, 11px, letter-spacing .14em.

### 6. Pitch and button, bottom right

- Position: `left: 58.5%`, `bottom: 7%`, `max-width: 230px`.
- A paragraph in Inter 500, 11px, uppercase, line height 1.6, letter-spacing .08em: "Each bowl is thrown, painted and fired by hand in small runs. Once a glaze is gone, it is gone."
- 22px below it, the button group:
  - A black pill "BUY COLLECTION", 44px tall, 0 26px padding, white Inter 500 11px text, letter-spacing .12em.
  - Directly attached on its right, overlapping by 6px, a 44px black circle with a white right-arrow.
  - On hover, the circle slides 6px to the right and the arrow rotates −45°.

### 7. The six bubbles

Each bubble is a perfect circle with `overflow: hidden`, a 1px inner ring `inset 0 0 0 1px rgba(255,255,255,.6)` and a soft outer shadow `0 18px 40px -18px rgba(70,110,160,.45)`. The image fills it with `object-fit: cover`.

| # | Image | Diameter (vw) | Centre x | Centre y |
|---|---|---|---|---|
| 1 | yellow | 6.6 | 31% | 34% |
| 2 | lilac | 6.6 | 54% | 25% |
| 3 | white | 6.6 | 73% | 41% |
| 4 | pink | 6.6 | 13% | 53% |
| 5 | aqua | 8.0 | 31% | 75% |
| 6 | glass | 6.6 | 52% | 70% |

Bubble 2 sits half behind the season tag, so the tag must be on a higher `z-index` than the bubbles.

## Motion

Everything runs in one `requestAnimationFrame` loop plus the Web Animations API for the intro.

### Idle bobbing

- **Movement:** each bubble moves on its own slow loop: `y = sin(t·0.6 + φ)·10px` and `x = cos(t·0.4 + φ)·6px`, where `φ` is a different phase per bubble (0, 1.1, 2.3, 3.0, 4.2, 5.1).
- **Rotation:** each bubble also rotates `sin(t·0.5 + φ)·4°`, so the bowls seem to turn in the air.

### Mouse parallax

- **Depth:** give the bubbles depths 0.6, 1.0, 0.8, 0.5, 1.2 and 0.9.
- **Offset:** a bubble is shifted by `(mouse − centre) × depth × 0.03`.
- **Smoothing:** ease the pointer with `1 − e^(−6·dt)`, so the bubbles glide rather than jump.
- **Rest:** with no mouse, or on touch screens, the offset rests at 0.

### Hover

- **Growth:** a hovered bubble scales to 1.08 over `.5s var(--ease)`.
- **Image zoom:** its image scales inside it to 1.12.

### Intro, on load

1. **Bubbles pop in:** each bubble scales from 0 to 1 over 900ms with `cubic-bezier(.34,1.56,.64,1)`, a small overshoot. They are staggered by 90ms in the order 4, 1, 2, 6, 3, 5, so they pop in from left to right.
2. **Text rises:** every text line sits inside an `overflow: hidden` mask and slides from `translateY(110%)` to 0 over 800ms with `var(--ease)`. Delays:
   - Logo and menu: 200ms.
   - Headline line 1: 450ms.
   - Headline line 2: 550ms.
   - Corner tags, paragraph and button: 700ms onward, 60ms apart.

### Reduced motion

With `prefers-reduced-motion: reduce`, skip the intro (everything appears in place) and turn off bobbing and parallax. Hover growth stays.

## Responsive (≤ 767px)

- **Layout:** the hero becomes a 100svh column. The logo and menu stay in the top corners.
- **Headline:** moves to `top: 38%`. Line 1 is 38px and line 2 is 20px.
- **Bubbles:** shrink to 18vw (the aqua one to 22vw) and re-pin to (15%, 20%), (70%, 16%), (84%, 52%), (10%, 60%), (28%, 82%) and (62%, 76%).
- **Season tag:** hidden.
- **Collection tag:** goes bottom left; the paragraph is hidden. The button group moves to bottom right at `right: 5%`.

## Accessibility

- Use one `<h1>` for the headline, with both lines inside it.
- Every bubble image has `alt` text such as "Lilac glazed bowl with painted flowers".
- The menu pill is a `<button aria-label="Open menu">`.
- "Buy collection" is a real `<a>` link, and the arrow circle is part of the same link.

## Acceptance checklist

- On load, six sky-blue bubbles pop in from left to right and the text rises line by line. There is no fade anywhere.
- At rest, the bowls keep bobbing and turning slowly, each on its own rhythm.
- Moving the mouse makes nearer bubbles drift more than farther ones.
- Hovering a bubble grows it slightly and zooms the bowl inside.
- The page looks complete even with no images, using the gradient sky fallback.
