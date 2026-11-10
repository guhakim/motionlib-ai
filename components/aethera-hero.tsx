"use client";

import { useEffect, useRef } from "react";
import { Instrument_Serif, Inter } from "@/lib/google-fonts";
import "./aethera-hero.css";

const serif = Instrument_Serif({ weight: "400", style: ["normal", "italic"], subsets: ["latin"], variable: "--ae-serif" });
const inter = Inter({ weight: ["400", "500"], subsets: ["latin"], variable: "--ae-sans" });

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4";

const FADE = 0.5; // seconds
const NAV = ["Home", "Studio", "About", "Journal", "Reach Us"];

/** Looping background video with a 0.5s fade-in at the start and fade-out before the end. */
function FadingVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    let raf = 0;
    let restart: ReturnType<typeof setTimeout> | undefined;

    const tick = () => {
      const { currentTime: t, duration: d } = v;
      if (d && !Number.isNaN(d)) {
        let o = 1;
        if (t < FADE) o = t / FADE;
        else if (t > d - FADE) o = Math.max(0, (d - t) / FADE);
        v.style.opacity = String(o);
      }
      raf = requestAnimationFrame(tick);
    };

    const onEnded = () => {
      v.style.opacity = "0";
      restart = setTimeout(() => {
        v.currentTime = 0;
        v.play().catch(() => {});
      }, 100);
    };

    v.addEventListener("ended", onEnded);
    v.play().catch(() => {});
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(restart);
      v.removeEventListener("ended", onEnded);
    };
  }, []);

  return (
    <div className="ae-video-layer" aria-hidden="true">
      <video ref={ref} className="ae-video" src={VIDEO_SRC} muted playsInline autoPlay preload="auto" style={{ opacity: 0 }} />
      <div className="ae-video-fade" />
    </div>
  );
}

export function AetheraHero() {
  return (
    <div className={`ae-root ${serif.variable} ${inter.variable}`}>
      <FadingVideo />

      <nav className="ae-nav">
        <a href="#" className="ae-logo">Aethera<sup>®</sup></a>
        <ul className="ae-menu">
          {NAV.map((n, i) => (
            <li key={n}><a href="#" className={i === 0 ? "is-active" : undefined}>{n}</a></li>
          ))}
        </ul>
        <button className="ae-btn ae-btn-sm">Begin Journey</button>
      </nav>

      <section className="ae-hero">
        <h1 className="ae-title animate-fade-rise">
          Beyond <em>silence,</em> we build <em>the eternal.</em>
        </h1>
        <p className="ae-desc animate-fade-rise-delay">
          Building platforms for brilliant minds, fearless makers, and thoughtful souls. Through the noise, we craft
          digital havens for deep work and pure flows.
        </p>
        <button className="ae-btn ae-btn-lg animate-fade-rise-delay-2">Begin Journey</button>
      </section>
    </div>
  );
}
