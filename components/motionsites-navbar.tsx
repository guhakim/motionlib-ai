import { MotionsitesLogo } from "./motionsites-logo";

export function MotionsitesNavBar() {
  return (
    <nav style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 16px", height: "52px",
      borderBottom: "1px solid rgba(255,255,255,0.07)",
      position: "sticky", top: 0,
      background: "rgba(10,10,10,0.97)", zIndex: 50,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <MotionsitesLogo />
        <span style={{ fontSize: "18px", fontWeight: 600, letterSpacing: "-0.02em", color: "#fff" }}>
          motionlib
        </span>
      </div>

      <div className="ms-nav-links" style={{ display: "flex", alignItems: "center", gap: "2px" }}>
        {(["MCP", "Backgrounds", "Academy", "Restyle", "3D", "Affiliate"] as const).map(label => (
          <a key={label} href="#" style={{
            display: "flex", alignItems: "center", gap: "4px",
            padding: "6px 9px", borderRadius: "6px",
            fontSize: "15px", color: "rgba(255,255,255,0.65)", textDecoration: "none",
          }}>
            {label}
            {label === "Backgrounds" && (
              <span style={{
                fontSize: "9px", fontWeight: 700, padding: "1px 4px", borderRadius: "3px",
                background: "linear-gradient(135deg,#a855f7,#ec4899)", color: "#fff", letterSpacing: "0.04em",
              }}>TOP</span>
            )}
          </a>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
        <button aria-label="Search" style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.5)", display: "flex", padding: "6px" }}>
          <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
        </button>
        <button style={{
          padding: "5px 14px", borderRadius: "8px",
          border: "1px solid rgba(255,255,255,0.14)",
          background: "#111", color: "#fff",
          fontSize: "15px", fontWeight: 500, cursor: "pointer", letterSpacing: "-0.01em",
        }}>Go Unlimited</button>
        <div style={{
          width: "28px", height: "28px", borderRadius: "50%",
          background: "linear-gradient(135deg,#a855f7,#ec4899)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "12px", fontWeight: 700, color: "#fff", cursor: "pointer", userSelect: "none",
        }}>KG</div>
      </div>
    </nav>
  );
}
