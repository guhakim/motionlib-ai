import { Barlow, Instrument_Serif } from "@/lib/google-fonts";
import "./buzzentic-hero.css";

const barlow = Barlow({ weight: ["300", "400", "500"], subsets: ["latin"], variable: "--bz-sans" });
const serif = Instrument_Serif({ weight: "400", style: "italic", subsets: ["latin"], variable: "--bz-serif" });

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260306_074215_04640ca7-042c-45d6-bb56-58b1e8a42489.mp4";

const NAV = ["Services", "Work", "Process", "Pricing", "Contact"];

export function BuzzenticHero() {
  return (
    <div className={`bz-root ${barlow.variable} ${serif.variable}`}>
      <video className="bz-video" src={VIDEO_SRC} autoPlay loop muted playsInline aria-hidden="true" />

      <header className="bz-nav">
        <a href="#" className="bz-logo">Buzzentic</a>
        <nav className="bz-links">
          {NAV.map(n => <a key={n} href="#">{n}</a>)}
        </nav>
        <a href="#" className="bz-btn bz-btn-sm">Book a call</a>
      </header>

      <main className="bz-main">
        <div className="bz-content">
          <span className="bz-corner bz-tl" aria-hidden="true" />
          <span className="bz-corner bz-tr" aria-hidden="true" />
          <span className="bz-corner bz-bl" aria-hidden="true" />
          <span className="bz-corner bz-br" aria-hidden="true" />

          <a href="#" className="bz-badge">
            <span className="bz-badge-pill">Featured</span>
            <span className="bz-badge-text">in Fortune</span>
          </a>

          <h1 className="bz-title">
            <span className="bz-line1">Agency that makes your</span>
            <span className="bz-line2">videos &amp; reels viral</span>
          </h1>

          <p className="bz-sub">
            We script, shoot and edit short-form content engineered for the algorithm, so your brand stops the
            scroll, earns the share and turns views into customers.
          </p>

          <div className="bz-ctas">
            <a href="#" className="bz-btn">Start your project</a>
            <a href="#" className="bz-btn bz-btn-ghost">See our work</a>
          </div>
        </div>
      </main>
    </div>
  );
}
