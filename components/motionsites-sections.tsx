import { BG_TILES } from "@/lib/template-data";

export function MotionsitesBackgroundsSection() {
  return (
    <section style={{ padding: "56px 16px 40px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "24px", flexWrap: "wrap", gap: "12px" }}>
          <div>
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 8px" }}>BACKGROUNDS</p>
            <h2 style={{ fontSize: "22px", fontWeight: 600, margin: 0, letterSpacing: "-0.01em", maxWidth: "420px", lineHeight: 1.3, color: "#fff" }}>
              Animated backgrounds designed to convert, impress, and amaze.
            </h2>
          </div>
          <button style={{ padding: "7px 16px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)", background: "transparent", color: "rgba(255,255,255,0.6)", fontSize: "14px", cursor: "pointer", flexShrink: 0 }}>
            Explore Videos
          </button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: "8px" }}>
          {BG_TILES.map(bg => (
            <div key={bg.name} style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.06)", cursor: "pointer" }}>
              <div style={{ aspectRatio: "4/3", background: bg.g, position: "relative" }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)", backgroundSize: "14px 14px" }} />
              </div>
              <div style={{ padding: "7px 9px" }}>
                <div style={{ fontSize: "13px", fontWeight: 500, color: "#fff" }}>{bg.name}</div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>{bg.cat}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MotionsitesAcademySection() {
  return (
    <section style={{
      padding: "80px 16px 100px",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      background: "linear-gradient(180deg,#0a0a0a 0%,#0d0a16 100%)",
      textAlign: "center",
    }}>
      <div style={{ maxWidth: "640px", margin: "0 auto" }}>
        <p style={{ fontSize: "12px", color: "rgba(168,85,247,0.75)", letterSpacing: "0.14em", textTransform: "uppercase", margin: "0 0 16px" }}>Academy</p>
        <h2 style={{ fontSize: "30px", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em", margin: "0 0 20px", color: "#fff" }}>
          Develop Your AI Design Skills That Stand Out.
        </h2>
        <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)", lineHeight: 1.65, margin: "0 auto 32px", maxWidth: "500px" }}>
          &ldquo;Give Me Just a Few Days And I&apos;ll Show You How To Create AI Design Websites That Most Agencies Charge $5,000 For&rdquo;
        </p>
        <button style={{
          padding: "11px 26px", borderRadius: "10px",
          border: "1px solid rgba(168,85,247,0.35)",
          background: "rgba(168,85,247,0.08)",
          color: "#c084fc", fontSize: "16px", fontWeight: 500,
          cursor: "pointer", letterSpacing: "-0.01em",
        }}>Explore the Full Library</button>
      </div>
    </section>
  );
}
