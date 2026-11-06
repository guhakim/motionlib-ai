"use client";
import { useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import type { Template } from "@/lib/template-data";

// 한 번 받아 온 코드는 다시 받지 않도록 저장해 둬요.
const codeCache = new Map<string, Promise<string>>();
function loadCode(url: string) {
  let p = codeCache.get(url);
  if (!p) {
    p = fetch(url).then(r => {
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return r.text();
    });
    p.catch(() => codeCache.delete(url));
    codeCache.set(url, p);
  }
  return p;
}

function fallbackCopy(text: string) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly", "");
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  const ok = document.execCommand("copy");
  ta.remove();
  if (!ok) throw new Error("copy failed");
}

async function copyCode(url: string) {
  // Safari는 클릭 순간에 클립보드 쓰기를 시작해야 해서, 내용을 Promise로 넘겨요.
  if (typeof ClipboardItem !== "undefined" && navigator.clipboard?.write) {
    try {
      await navigator.clipboard.write([
        new ClipboardItem({ "text/plain": loadCode(url).then(t => new Blob([t], { type: "text/plain" })) }),
      ]);
      return;
    } catch {
      /* 아래 방법으로 다시 시도 */
    }
  }
  const text = await loadCode(url);
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    fallbackCopy(text);
  }
}

function CopyButton({ url, name }: { url: string; name: string }) {
  const [state, setState] = useState<"idle" | "done" | "error">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const onClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await copyCode(url);
      setState("done");
    } catch {
      setState("error");
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setState("idle"), 1600);
  };

  const label = state === "done" ? "복사됨" : state === "error" ? "복사 실패" : `${name} 코드 복사`;

  return (
    <button
      type="button"
      onClick={onClick}
      onPointerEnter={() => { loadCode(url).catch(() => {}); }}
      aria-label={label}
      title={label}
      style={{
        position: "absolute", left: "12px", bottom: "11px",
        width: "34px", height: "34px", borderRadius: "8px",
        display: "flex", alignItems: "center", justifyContent: "center",
        background: state === "done" ? "rgba(74,222,128,0.12)" : "rgba(255,255,255,0.06)",
        border: `1px solid ${state === "error" ? "rgba(248,113,113,0.5)" : "rgba(255,255,255,0.12)"}`,
        color: state === "done" ? "#4ade80" : state === "error" ? "#f87171" : "rgba(255,255,255,0.8)",
        cursor: "pointer", transition: "background-color .2s, color .2s, border-color .2s",
        zIndex: 2,
      }}
    >
      {state === "done" ? <Check size={16} strokeWidth={2} /> : <Copy size={16} strokeWidth={1.75} />}
    </button>
  );
}

export function MotionsitesTemplateCard({ tpl }: { tpl: Template }) {
  const Wrapper = tpl.href ? "a" : "div";
  return (
    <div
      style={{
        position: "relative",
        borderRadius: "10px", overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.07)",
        background: "#111",
      }}
    >
      <Wrapper
        {...(tpl.href ? { href: tpl.href } : {})}
        style={{ display: "block", cursor: "pointer", textDecoration: "none" }}
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

        <div style={{ padding: tpl.code ? "10px 12px 10px 56px" : "10px 12px" }}>
          <div style={{ fontSize: "16px", fontWeight: 700, color: "#fff", marginBottom: "2px" }}>{tpl.name}</div>
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.38)" }}>{tpl.category}</div>
        </div>
      </Wrapper>

      {tpl.code && <CopyButton url={tpl.code} name={tpl.name} />}
    </div>
  );
}
