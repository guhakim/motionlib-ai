"use client";

import { memo, useEffect, useRef, useState } from "react";
import { Geist } from "next/font/google";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import type Hls from "hls.js";
import "./clearinvoice-hero.css";

const geist = Geist({ subsets: ["latin"], variable: "--ci-body" });

const STREAM = "https://stream.mux.com/hUT6X11m1Vkw1QMxPOLgI761x2cfpi9bHFbi5cNg4014.m3u8";
const NAV = ["Features", "Pricing", "Reviews"];
const AVATARS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop&crop=faces",
];

/** HLS background video. hls.js where MSE is available, native HLS on Safari. */
const BackgroundVideo = memo(function BackgroundVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    let hls: Hls | null = null;
    let cancelled = false;

    // play() rejects with AbortError when the source is torn down mid-load; that is expected.
    const play = () => video.play().catch(() => {});

    // Prefer hls.js (MSE). Some Chromium builds report native HLS as "maybe" but can't play it,
    // so native playback is only the fallback for Safari / iOS where MSE isn't available.
    import("hls.js").then(({ default: HlsCtor }) => {
      if (cancelled) return;
      if (HlsCtor.isSupported()) {
        hls = new HlsCtor({ capLevelToPlayerSize: true, maxBufferLength: 20 });
        hls.loadSource(STREAM);
        hls.attachMedia(video);
        hls.on(HlsCtor.Events.MANIFEST_PARSED, play);
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = STREAM;
        video.addEventListener("loadedmetadata", play, { once: true });
      }
    });

    return () => {
      cancelled = true;
      video.removeEventListener("loadedmetadata", play);
      video.pause();
      if (hls) hls.destroy();
      video.removeAttribute("src");
      video.load();
    };
  }, []);

  return <video ref={ref} className="ci-video" autoPlay loop muted playsInline aria-hidden="true" />;
});

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.15 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function Logo() {
  return (
    <a href="#" className="ci-logo">
      <span className="ci-logo-mark" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 3h9l4 4v14H6z" /><path d="M14 3v5h5" /><path d="M9 13h6M9 17h4" />
        </svg>
      </span>
      ClearInvoice
    </a>
  );
}

export function ClearInvoiceHero() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`ci-root ${geist.variable}`}>
      <BackgroundVideo />
      <div className="ci-topbar" aria-hidden="true" />

      <header className="ci-header">
        <nav className="ci-nav">
          <Logo />
          <ul className="ci-links">
            {NAV.map(n => <li key={n}><a href="#">{n}</a></li>)}
          </ul>
          <div className="ci-auth">
            <a href="#" className="ci-signin">Sign In</a>
            <a href="#" className="ci-signup">Sign Up</a>
          </div>
          <button className="ci-burger" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(o => !o)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
        {open && (
          <motion.div className="ci-dropdown" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
            {NAV.map(n => <a key={n} href="#" onClick={() => setOpen(false)}>{n}</a>)}
            <div className="ci-dropdown-auth">
              <a href="#" className="ci-signin">Sign In</a>
              <a href="#" className="ci-signup">Sign Up</a>
            </div>
          </motion.div>
        )}
      </header>

      <motion.main className="ci-hero" variants={container} initial="hidden" animate="show">
        <motion.h1 className="ci-title" variants={item}>
          Manage your online store while save 3x operating cost
        </motion.h1>
        <motion.p className="ci-sub" variants={item}>
          ClearInvoice takes the hassle out of billing with easy-to-use tools.
        </motion.p>

        <motion.div className="ci-ctas" variants={item}>
          <motion.a href="#" className="ci-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <span className="ci-primary-glow" aria-hidden="true" />
            <span className="ci-primary-body">
              <span className="ci-primary-arrow" aria-hidden="true"><ArrowRight size={18} /></span>
              <span className="ci-primary-label">Start free trial</span>
              <span className="ci-stroke" aria-hidden="true" />
            </span>
          </motion.a>
          <motion.a href="#" className="ci-secondary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            Book a demo
            <span className="ci-stroke ci-stroke-dark" aria-hidden="true" />
          </motion.a>
        </motion.div>

        <motion.div className="ci-proof" variants={item}>
          <div className="ci-avatars">
            {AVATARS.map((src, i) => <img key={i} src={src} alt="" />)}
          </div>
          <p>Trusted by <strong>210k+</strong> stores worldwide</p>
        </motion.div>
      </motion.main>
    </div>
  );
}
