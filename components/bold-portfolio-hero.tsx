import { Anton, Inter } from "next/font/google";
import { ArrowUpRight } from "lucide-react";
import "./bold-portfolio-hero.css";

const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--bp-display" });
const inter = Inter({ weight: ["400", "500", "600"], subsets: ["latin"], variable: "--bp-sans" });

const PORTRAIT = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&q=80&fit=crop";
const NAV = ["Projects", "Blog", "About", "Resume"];
// Placeholder client wordmarks (fictional names, styled as logos)
const BRANDS = ["Maison Lune", "NORDA", "Vellum", "KORU", "Atelier 9"];

export function BoldPortfolioHero() {
  return (
    <div className={`bp-root ${anton.variable} ${inter.variable}`}>
      {/* Ambient background */}
      <svg className="bp-ghost" viewBox="0 0 1000 260" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central">OLIVIA</text>
      </svg>
      <div className="bp-blob bp-blob-left" aria-hidden="true" />
      <div className="bp-blob bp-blob-right" aria-hidden="true" />

      {/* Nav */}
      <header className="bp-nav">
        <a href="#" className="bp-logo">✱ VIKTORODDY</a>
        <nav className="bp-links">
          {NAV.map(n => <a key={n} href="#">{n}</a>)}
        </nav>
        <a href="#" className="bp-hire">
          <span className="bp-hire-text">// Hire me</span>
          <span className="bp-hire-circle"><ArrowUpRight size={18} strokeWidth={2} /></span>
        </a>
      </header>

      {/* Hero */}
      <main className="bp-hero">
        <div className="bp-stage">
          <h1 className="bp-title">
            <span>New</span> <span>Design</span> <span>Era</span>
          </h1>
          <img className="bp-portrait" src={PORTRAIT} alt="Portrait of Olivia" />
        </div>

        <p className="bp-intro">
          <span className="bp-slash">//</span> I&apos;m Olivia — a freelance UI/UX designer
          <span className="bp-intro-sub">crafting bold interfaces and brand systems for teams who want to stand out.</span>
        </p>
        <p className="bp-tagline">
          <span className="bp-slash">//</span> Design that<br />speaks your brand
        </p>
      </main>

      {/* Brand strip */}
      <footer className="bp-brands">
        {BRANDS.map((b, i) => <span key={b} className={`bp-brand bp-brand-${i}`}>{b}</span>)}
      </footer>
    </div>
  );
}
