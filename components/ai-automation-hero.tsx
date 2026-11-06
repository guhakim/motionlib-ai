"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

const HLS_SRC = "https://stream.mux.com/s8pMcOvMQXc4GD6AX4e1o01xFogFxipmuKltNfSYza0200.m3u8";
const BG = "#070612";

function BlurIn({
  children,
  delay = 0,
  duration = 0.6,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function SplitText({
  text,
  className,
  baseDelay = 0,
  wordDelay = 0.08,
  duration = 0.6,
}: {
  text: string;
  className?: string;
  baseDelay?: number;
  wordDelay?: number;
  duration?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={className} style={{ display: "inline" }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block", marginRight: "0.25em" }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration, delay: baseDelay + i * wordDelay, ease: "easeOut" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export function AIAutomationHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hlsInstance: unknown;

    import("hls.js").then((mod) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const Hls = (mod as any).default;
      if (Hls.isSupported()) {
        // Chrome, Firefox etc — use hls.js
        hlsInstance = new Hls({ enableWorker: false });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const h = hlsInstance as any;
        h.loadSource(HLS_SRC);
        h.attachMedia(video);
        h.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play().catch(() => {});
        });
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        // Safari — native HLS
        video.src = HLS_SRC;
        video.play().catch(() => {});
      }
    });

    return () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (hlsInstance) (hlsInstance as any).destroy();
    };
  }, []);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background: BG,
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "calc(100% - 200px)",
          objectFit: "cover",
          marginLeft: "200px",
          transform: "scale(1.2)",
          transformOrigin: "left center",
          zIndex: 0,
        }}
      />

      {/* Bottom fade gradient */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "160px",
          background: `linear-gradient(to top, ${BG}, transparent)`,
          zIndex: 10,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 20,
          width: "100%",
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "0 clamp(24px, 5vw, 48px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "48px",
        }}
      >
        {/* Badge + Heading + Subtitle group */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Badge */}
          <BlurIn delay={0} duration={0.6}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 14px",
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.2)",
                backdropFilter: "blur(8px)",
                background: "rgba(255,255,255,0.05)",
              }}
            >
              <Sparkles style={{ width: "12px", height: "12px", color: "rgba(255,255,255,0.8)" }} />
              <span style={{ fontSize: "14px", fontWeight: 500, color: "rgba(255,255,255,0.8)" }}>
                New AI Automation Ally
              </span>
            </div>
          </BlurIn>

          {/* Heading */}
          <h1
            style={{
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              fontWeight: 500,
              lineHeight: 1.2,
              color: "#fff",
              margin: 0,
            }}
          >
            <span style={{ display: "block" }}>
              <SplitText text="Unlock the Power of AI" baseDelay={0.1} />
            </span>
            <span style={{ display: "inline" }}>
              <SplitText text="for Your" baseDelay={0.3} />
            </span>{" "}
            <span style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic", display: "inline" }}>
              <SplitText text="Business." baseDelay={0.5} />
            </span>
          </h1>

          {/* Subtitle */}
          <BlurIn delay={0.4} duration={0.6}>
            <p
              style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: 1.65,
                maxWidth: "36rem",
                margin: "0 auto",
              }}
            >
              Our cutting-edge AI platform automates, analyzes, and accelerates your workflows so you can focus on what really matters.
            </p>
          </BlurIn>
        </div>

        {/* CTA Buttons */}
        <BlurIn delay={0.6} duration={0.6}>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a
              href="/book-call"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 20px",
                borderRadius: "9999px",
                background: "#fff",
                color: BG,
                fontSize: "15px",
                fontWeight: 500,
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Book A Free Call
              <ArrowRight style={{ width: "16px", height: "16px" }} />
            </a>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "12px 32px",
                borderRadius: "9999px",
                background: "rgba(255,255,255,0.2)",
                backdropFilter: "blur(8px)",
                color: "#fff",
                fontSize: "15px",
                fontWeight: 500,
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Learn now
            </a>
          </div>
        </BlurIn>
      </div>
    </section>
  );
}
