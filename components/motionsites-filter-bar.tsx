"use client";

import { MAIN_TABS, SUB_TABS, CATEGORIES } from "@/lib/template-data";

interface FilterBarProps {
  mainTab: string;
  setMainTab: (t: string) => void;
  subTab: string;
  setSubTab: (t: string) => void;
  activeCategory: string | null;
  setActiveCategory: (c: string | null) => void;
}

function TabBtn({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} style={{
      padding: "4px 11px", borderRadius: "6px", border: "none",
      background: active ? "rgba(255,255,255,0.1)" : "transparent",
      color: active ? "#fff" : "rgba(255,255,255,0.48)",
      fontSize: "13px", fontWeight: active ? 500 : 400, cursor: "pointer", flexShrink: 0,
    }}>{label}</button>
  );
}

export function MotionsitesFilterBar({
  mainTab, setMainTab, subTab, setSubTab, activeCategory, setActiveCategory,
}: FilterBarProps) {
  return (
    <div style={{
      borderBottom: "1px solid rgba(255,255,255,0.07)",
      position: "sticky", top: "52px",
      background: "rgba(10,10,10,0.97)",
      zIndex: 40, display: "flex", alignItems: "center",
      padding: "0 16px", gap: "6px", height: "44px", overflowX: "auto",
    }}>
      <div style={{ display: "flex", gap: "2px", paddingRight: "10px", borderRight: "1px solid rgba(255,255,255,0.07)", marginRight: "4px", flexShrink: 0 }}>
        {MAIN_TABS.map(t => <TabBtn key={t} label={t} active={mainTab === t} onClick={() => setMainTab(t)} />)}
      </div>
      <div style={{ display: "flex", gap: "2px", paddingRight: "10px", borderRight: "1px solid rgba(255,255,255,0.07)", marginRight: "4px", flexShrink: 0 }}>
        {SUB_TABS.map(t => <TabBtn key={t} label={t} active={subTab === t} onClick={() => setSubTab(t)} />)}
      </div>
      {CATEGORIES.map(cat => (
        <button key={cat} onClick={() => setActiveCategory(activeCategory === cat ? null : cat)} style={{
          padding: "3px 11px", borderRadius: "20px", border: "1px solid",
          borderColor: activeCategory === cat ? "rgba(168,85,247,0.5)" : "rgba(255,255,255,0.08)",
          background: activeCategory === cat ? "rgba(168,85,247,0.1)" : "transparent",
          color: activeCategory === cat ? "#c084fc" : "rgba(255,255,255,0.45)",
          fontSize: "12px", cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0,
        }}>{cat}</button>
      ))}
    </div>
  );
}
