"use client";

import { Inter } from "@/lib/google-fonts";
import { motion } from "framer-motion";
import "./framelix-landing.css";

const inter = Inter({ weight: ["400", "500", "600"], subsets: ["latin"], variable: "--fx-sans" });

const V = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/";
const HERO_VIDEO = V + "hf_20260223_060517_9feec9ab-18e4-477a-b034-de5903a67e91.mp4";
const SHIP_VIDEO = V + "hf_20260223_063954_03a5f7ec-5f10-4acb-ba8d-dce4815217db.mp4";

const NAV_COLUMNS = [
  ["Reels", "Services"],
  ["Projects", "Pipeline"],
  ["Careers", "Get In Touch"],
];
const MARQUEE = Array.from({ length: 6 }, () => "New! 3D^OS V1.2.1 out now!");

/** Logo mark drawn in black, then turned white with brightness(0) invert(1) like an image logo would be. */
function Logo() {
  return (
    <a href="#" className="fx-logo" aria-label="Framelix 3D">
      <svg viewBox="0 0 132 36" height="36" aria-hidden="true">
        <g fill="#111">
          <path d="M4 4h20v6H11v5h11v6H11v11H4z" />
          <path d="M27 18 37 4l10 14-10 14z" opacity=".55" />
          <path d="M32 18l5-7 5 7-5 7z" />
        </g>
        <text x="54" y="25" fill="#111" fontFamily="var(--fx-sans), Inter, sans-serif" fontSize="19" fontWeight="600" letterSpacing="-0.5">Framelix</text>
      </svg>
    </a>
  );
}

/** Ticket / coupon shaped cart with scalloped edges and a centred count. */
function TicketCart({ count = 0 }: { count?: number }) {
  return (
    <a href="#" className="fx-cart" aria-label={`Cart, ${count} items`}>
      <svg viewBox="0 0 27 30" width="27" height="30" aria-hidden="true">
        <path
          d="M3 1h21a2 2 0 0 1 2 2v5.2a2.6 2.6 0 0 0 0 5.2v3.2a2.6 2.6 0 0 0 0 5.2V27a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-5.2a2.6 2.6 0 0 0 0-5.2v-3.2a2.6 2.6 0 0 0 0-5.2V3a2 2 0 0 1 2-2Z"
          fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"
        />
      </svg>
      <span className="fx-cart-count">{count}</span>
    </a>
  );
}

function Brand({ size }: { size: number }) {
  return (
    <p className="fx-brand" style={{ fontSize: size }}>
      Framelix<sup>3D</sup>
    </p>
  );
}

export function FramelixLanding() {
  return (
    <div className={`fx-root ${inter.variable}`}>
      {/* Navbar */}
      <header className="fx-nav">
        <Logo />
        <nav className="fx-cols">
          {NAV_COLUMNS.map((col, i) => (
            <div key={i} className="fx-col">
              {col.map(l => <a key={l} href="#">{l}</a>)}
            </div>
          ))}
        </nav>
        <TicketCart />
      </header>

      {/* Hero */}
      <section className="fx-hero">
        <video className="fx-hero-video" src={HERO_VIDEO} autoPlay loop muted playsInline aria-hidden="true" />
        <motion.div
          className="fx-hero-top"
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Brand size={26} />
          <h1 className="fx-hero-title">Cinematic Motion Studios</h1>
        </motion.div>
        <motion.div
          className="fx-hero-cta"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <a href="#" className="fx-btn-light">Explore Reel</a>
          <p className="fx-muted">Ready in 24-48 hours</p>
        </motion.div>
      </section>

      {/* Marquee */}
      <div className="fx-marquee" aria-label="New! 3D^OS V1.2.1 out now!">
        <div className="fx-marquee-track" aria-hidden="true">
          {[...MARQUEE, ...MARQUEE].map((t, i) => <span key={i}>{t}</span>)}
        </div>
      </div>

      {/* Shipping */}
      <div className="fx-ship-wrap">
        <section className="fx-ship">
          <div className="fx-ship-head">
            <Brand size={20} />
            <h2 className="fx-ship-title">Shipping Now</h2>
          </div>
          <video className="fx-ship-video" src={SHIP_VIDEO} autoPlay loop muted playsInline aria-hidden="true" />
          <div className="fx-ship-foot">
            <a href="#" className="fx-btn-dark">Buy Now</a>
            <p className="fx-explore">Explore now</p>
          </div>
        </section>
      </div>
    </div>
  );
}
