"use client";

import { useEffect, useRef, useState } from "react";

// 카카오 애드핏 광고 자리 6곳. 자리마다 PC용(728x90)과 모바일용(320x100) 광고단위가 하나씩 있어요.
// 화면 너비에 따라 둘 중 하나만 나와요. ID를 비워 두면 그 자리는 나타나지 않아요.
export const ADFIT_SLOTS = [
  { pc: "DAN-PdYw4ZF1Fh9q65k3", mobile: "DAN-LoQpYFOqKeP2aScJ" },
  { pc: "DAN-kAuaqVo47tMFUASL", mobile: "DAN-VykDu6XZp1e7HOHy" },
  { pc: "DAN-6oJsX3lXXIG3IDCp", mobile: "DAN-GNV2TP3vRrh6wEbF" },
  { pc: "DAN-6Jznd45tSL9G7I9F", mobile: "DAN-3MEXRDTD3abZvMkX" },
  { pc: "DAN-p8yJ4LVNxv86EE7Y", mobile: "DAN-aOm3ywcxfBPaunnT" },
  { pc: "DAN-9CQbPBQJg0OtlLS7", mobile: "DAN-lsWeJiEl5EkTYkWG" },
];

const SIZES = {
  pc: { width: 728, height: 90 },
  mobile: { width: 320, height: 100 },
};

const ADFIT_SCRIPT = "https://t1.kakaocdn.net/kas/static/ba.min.js";

// 템플릿 목록 아래에 광고 6개를 모아서 보여줍니다.
export function KakaoAdfitList() {
  const listRef = useRef<HTMLDivElement>(null);
  const [device, setDevice] = useState<"pc" | "mobile" | null>(null);

  // 화면 너비를 보고 PC용 / 모바일용 광고를 고릅니다.
  useEffect(() => {
    setDevice(window.matchMedia("(max-width: 767px)").matches ? "mobile" : "pc");
  }, []);

  // 광고 칸(ins)을 모두 만든 뒤 애드핏 스크립트를 한 번 붙여서 광고를 불러옵니다.
  useEffect(() => {
    const list = listRef.current;
    if (!list || !device) return;

    const size = SIZES[device];
    const ids = ADFIT_SLOTS.map(slot => slot[device]).filter(Boolean);
    const boxes = Array.from(list.querySelectorAll<HTMLDivElement>("[data-ad-box]"));

    ids.forEach((id, i) => {
      const ins = document.createElement("ins");
      ins.className = "kakao_ad_area";
      ins.style.display = "none";
      ins.setAttribute("data-ad-unit", id);
      ins.setAttribute("data-ad-width", String(size.width));
      ins.setAttribute("data-ad-height", String(size.height));
      boxes[i]?.appendChild(ins);
    });

    const script = document.createElement("script");
    script.async = true;
    script.src = ADFIT_SCRIPT;
    list.appendChild(script);

    return () => {
      const adfit = (window as unknown as { adfit?: { destroy?: (id: string) => void } }).adfit;
      ids.forEach(id => adfit?.destroy?.(id));
      boxes.forEach(box => { box.innerHTML = ""; });
      script.remove();
    };
  }, [device]);

  if (!device) return null;

  const size = SIZES[device];
  const count = ADFIT_SLOTS.filter(slot => slot[device]).length;
  if (count === 0) return null;

  return (
    <div className="ms-ad-list" ref={listRef} aria-label="광고">
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className="ms-ad-slot">
          <div data-ad-box style={{ width: size.width, minHeight: size.height, maxWidth: "100%" }} />
        </div>
      ))}
    </div>
  );
}
