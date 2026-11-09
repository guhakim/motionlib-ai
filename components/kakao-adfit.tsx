"use client";

import { useEffect, useRef, useState } from "react";

// 카카오 애드핏에서 광고단위를 만든 뒤, 받은 광고단위 ID(DAN-로 시작)를 여기에 넣으세요.
// 비어 있으면 광고 자리는 화면에 나타나지 않아요.
export const ADFIT_UNITS = {
  pc: { id: "", width: 728, height: 90 },      // 화면이 넓을 때
  mobile: { id: "", width: 320, height: 100 }, // 휴대폰 화면
};

const ADFIT_SCRIPT = "https://t1.daumcdn.net/kas/static/ba.min.js";

export function KakaoAdfit() {
  const boxRef = useRef<HTMLDivElement>(null);
  const [unit, setUnit] = useState<(typeof ADFIT_UNITS)["pc"] | null>(null);

  // 화면 너비를 보고 PC용 / 모바일용 광고를 고릅니다.
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const picked = isMobile ? ADFIT_UNITS.mobile : ADFIT_UNITS.pc;
    setUnit(picked.id ? picked : null);
  }, []);

  // 광고 칸(ins)을 만든 뒤 애드핏 스크립트를 붙여서 광고를 불러옵니다.
  useEffect(() => {
    const box = boxRef.current;
    if (!box || !unit) return;

    const ins = document.createElement("ins");
    ins.className = "kakao_ad_area";
    ins.style.display = "none";
    ins.setAttribute("data-ad-unit", unit.id);
    ins.setAttribute("data-ad-width", String(unit.width));
    ins.setAttribute("data-ad-height", String(unit.height));

    const script = document.createElement("script");
    script.async = true;
    script.src = ADFIT_SCRIPT;

    box.appendChild(ins);
    box.appendChild(script);

    return () => {
      const adfit = (window as unknown as { adfit?: { destroy?: (id: string) => void } }).adfit;
      adfit?.destroy?.(unit.id);
      box.innerHTML = "";
    };
  }, [unit]);

  if (!unit) return null;

  return (
    <div className="ms-ad-slot" aria-label="광고">
      <div ref={boxRef} style={{ width: unit.width, minHeight: unit.height, maxWidth: "100%" }} />
    </div>
  );
}
