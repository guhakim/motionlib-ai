"use client";
import type { Template } from "@/lib/template-data";

export function MotionsitesTemplateCard({ tpl }: { tpl: Template }) {
  const Wrapper = tpl.href ? "a" : "div";
  return (
    <Wrapper
      {...(tpl.href ? { href: tpl.href } : {})}
      style={{
        display: "block",
        borderRadius: "10px", overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.07)",
        background: "#111", cursor: "pointer",
        textDecoration: "none",
      }}
    >
      <div style={{ aspectRatio: "16/9", background: tpl.g, position: "relative", overflow: "hidden" }}>

        {tpl.href ? (
          /* Live iframe preview — scaled down version of the actual page */
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            <iframe
              src={tpl.href}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "500%",
                height: "500%",
                transform: "scale(0.2)",
                transformOrigin: "top left",
                border: "none",
              }}
              tabIndex={-1}
              aria-hidden="true"
            />
          </div>
        ) : (
          /* Mock UI placeholder for non-linked cards */
          <>
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)",
              backgroundSize: "20px 20px",
            }} />
            <div style={{ position: "absolute", top: "22%", left: "14%", right: "14%", height: "2px", background: "rgba(255,255,255,0.14)", borderRadius: "1px" }} />
            <div style={{ position: "absolute", top: "34%", left: "14%", width: "45%", height: "1px", background: "rgba(255,255,255,0.07)" }} />
            <div style={{ position: "absolute", top: "46%", left: "14%", width: "32%", height: "1px", background: "rgba(255,255,255,0.05)" }} />
            <div style={{ position: "absolute", bottom: "22%", left: "14%", width: "26%", height: "7px", background: "rgba(255,255,255,0.1)", borderRadius: "4px" }} />
            <div style={{ position: "absolute", bottom: "22%", left: "44%", width: "18%", height: "7px", background: "rgba(255,255,255,0.05)", borderRadius: "4px" }} />
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "40px", height: "40px", borderRadius: "50%", background: "radial-gradient(circle,rgba(168,85,247,0.15),transparent 70%)" }} />
          </>
        )}

      </div>

      <div style={{ padding: "10px 12px" }}>
        <div style={{ fontSize: "16px", fontWeight: 700, color: "#fff", marginBottom: "2px" }}>{tpl.name}</div>
        <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.38)" }}>{tpl.category}</div>
      </div>
    </Wrapper>
  );
}
