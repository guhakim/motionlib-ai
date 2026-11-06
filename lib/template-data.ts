export const MAIN_TABS = ["Featured", "Popular", "Recent"] as const;
export const SUB_TABS = ["All", "Apps", "Sections"] as const;
export const CATEGORIES = [
  "Hero", "Landing Page", "SaaS", "3d", "Agency", "Creative", "Portfolio",
  "Ai", "Travel", "Fintech", "Technology", "Wellness", "3d Website",
  "Ecommerce", "Interactive", "Pricing",
] as const;

export interface Template {
  id: string;
  name: string;
  category: string;
  premium: boolean;
  copyable: boolean;
  g: string;
  href?: string;
}

export const TEMPLATES: Template[] = [
  { id: "ai-automation-hero", name: "AI Automation Hero", category: "Hero Section", premium: false, copyable: true, href: "/hero", g: "linear-gradient(135deg,#070612,#0d0a24,#1a1040)" },
  { id: "ember-dsgn", name: "EMBER.dsgn", category: "Hero Section", premium: true, copyable: false, g: "linear-gradient(135deg,#1a1a2e,#16213e,#0f3460)" },
  { id: "aetheris-voyage", name: "Aetheris Voyage", category: "Hero Section", premium: false, copyable: false, g: "linear-gradient(135deg,#0d1117,#1c2526,#1f3d30)" },
  { id: "what-package", name: "What Package Fits You", category: "Pricing", premium: true, copyable: true, g: "linear-gradient(135deg,#0a0a0a,#1a0a2e,#2d1b69)" },
  { id: "digital-epoch", name: "Digital Epoch", category: "Hero Section", premium: false, copyable: false, g: "linear-gradient(135deg,#111,#1a1a1a,#222)" },
  { id: "digital-reality", name: "Digital Reality", category: "Social Media", premium: true, copyable: true, g: "linear-gradient(135deg,#0d0d0d,#1a1018,#2d1435)" },
  { id: "rivr", name: "RIVR", category: "Hero Section", premium: true, copyable: true, g: "linear-gradient(135deg,#080c10,#0d1520,#162030)" },
  { id: "particle-self", name: "Particle Self", category: "Scroll-Driven 3D", premium: true, copyable: false, g: "linear-gradient(135deg,#050505,#0a0f1a,#101828)" },
  { id: "velaris", name: "Velaris", category: "Cybersecurity", premium: false, copyable: false, g: "linear-gradient(135deg,#0a0a0a,#0f0f1a,#15153a)" },
  { id: "loops-store", name: "Loops Virtual Store", category: "3D Store", premium: true, copyable: false, g: "linear-gradient(135deg,#0d0d0d,#1a1205,#2d2008)" },
  { id: "3d-portfolio", name: "3D Portfolio", category: "Portfolio", premium: false, copyable: true, g: "linear-gradient(135deg,#080808,#120c1a,#1e1228)" },
  { id: "orvante", name: "Orvante Agency", category: "Agency", premium: false, copyable: true, g: "linear-gradient(135deg,#0a0a0a,#0f1510,#182018)" },
  { id: "reelmark", name: "Reelmark", category: "Creator Platform", premium: false, copyable: true, g: "linear-gradient(135deg,#0a0a0a,#1a0f0f,#2d1515)" },
  { id: "lena-varga", name: "Lena Varga Hero", category: "3D Portfolio", premium: false, copyable: false, g: "linear-gradient(135deg,#080808,#0f0f15,#1a1a25)" },
  { id: "anchor-ai", name: "Anchor AI", category: "Portfolio", premium: false, copyable: true, g: "linear-gradient(135deg,#0a0a0a,#0a1a1a,#0f2a2a)" },
  { id: "nomi-ai", name: "Nomi AI Agent", category: "AI", premium: false, copyable: false, g: "linear-gradient(135deg,#080808,#100f18,#1a1a28)" },
  { id: "space-voyage", name: "Space Voyage", category: "Creative", premium: false, copyable: false, g: "linear-gradient(135deg,#040408,#080c18,#0c1228)" },
];

export interface BgTile { name: string; cat: string; g: string; }
export const BG_TILES: BgTile[] = [
  { name: "Honey Bee", cat: "Creative", g: "linear-gradient(135deg,#1a0d00,#2d1a00)" },
  { name: "Zenith Realty", cat: "Landing Page", g: "linear-gradient(135deg,#001a1a,#002d2d)" },
  { name: "Orvante Agency", cat: "Agency", g: "linear-gradient(135deg,#0a0a0a,#1a1a1a)" },
  { name: "Reelmark", cat: "Creator Platform", g: "linear-gradient(135deg,#0a0005,#1a0015)" },
  { name: "Ink Reveal", cat: "Hover", g: "linear-gradient(135deg,#0a0505,#1a0505)" },
  { name: "AXON", cat: "Portfolio", g: "linear-gradient(135deg,#050a0a,#0f2020)" },
];
