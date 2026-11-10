# Prompt: Medusa JF-4, robot jellyfish 3D field simulator (3d, hero)

Live page: `/medusa` (single file at `public/medusa/index.html`, served by a rewrite in `next.config.ts`).
The copy-code button hands out `public/code/medusa.html`, which `scripts/copy-code.mjs` makes without the site's home button.

- Plain HTML, CSS and one vanilla ES module. Only external resources: Inter + JetBrains Mono (Google Fonts) and three.js 0.170.0 from jsDelivr.
- A procedural robotic jellyfish (glass bell of 8 hinged petals, pump core, optic, 3-stage siphon, 8 arms × 28 instanced links) floats on a pale aqua-white instrument dashboard.
- A 25 s looping tour driven by one playhead `t`: JETTING → HOLDING → OPTICS OPEN → BELL OPEN → PUMP OUT → ARM R2 APART → SIPHON OPEN → TEARDOWN → REASSEMBLY → HOLDING → DEPARTING.
- Every HUD value (jet load, pressure trace, battery, depth dial, arm rows, subsystem pills, labels) is derived from `t`, so scrubbing works both ways.
- Interaction: assembly buttons jump to a section, display toggles (labels, exploded, wake, turntable), drag to orbit, click/drag the rail to scrub, Space or the coral button to pause.
- The CSS, markup and script were taken verbatim from the original prompt.
