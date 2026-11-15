"use client";

import { useEffect, useRef } from "react";

// 카카오 애드핏 300x250 광고단위 15개. 페이지 맨 아래에 가운데 정렬로 나란히 놓여요.
// 화면이 좁으면 줄 수가 늘어나고, 휴대폰에서는 세로로 쌓여요. ID를 비워 두면 그 칸은 나타나지 않아요.
// 애드핏 이름: "motionlib-ai bottom 01~15 300x250"
export const ADFIT_UNITS: string[] = [
  "DAN-rsJEvTwlw4be3lvT", "DAN-qmJFVvEPA7vV75t2", "DAN-INIyTYQA2WB8YtII", "DAN-WGuR2VL1YYB2z6qt", "DAN-XvwS8PyzFnXsAjEe",
  "DAN-8PPM8XfA4CZFru7Y", "DAN-jXUNHIR32rb0aFt3", "DAN-XScL0ABNWNvsHCoe", "DAN-upyKQfVVCnvNb21h", "DAN-fqI2qDAFWh46D0vV",
  "DAN-Cc156QJt5iUVsZzI", "DAN-UF8FcGgaMUYbmMWo", "DAN-Va7vFSGKadV9DxuU", "DAN-bXUaQwzPybl8jvoh", "DAN-cR93JuhFJm1Zzz6K",
];

const SIZE = { width: 300, height: 250 };
const ADFIT_SCRIPT = "https://t1.kakaocdn.net/kas/static/ba.min.js";

export function KakaoAdfitList() {
  const listRef = useRef<HTMLDivElement>(null);
  const ids = ADFIT_UNITS.filter(Boolean);

  // 광고 칸(ins)을 모두 만든 뒤 애드핏 스크립트를 한 번 붙여서 광고를 불러옵니다.
  useEffect(() => {
    const list = listRef.current;
    if (!list || ids.length === 0) return;

    const boxes = Array.from(list.querySelectorAll<HTMLDivElement>("[data-ad-box]"));
    ids.forEach((id, i) => {
      const ins = document.createElement("ins");
      ins.className = "kakao_ad_area";
      ins.style.display = "none";
      ins.setAttribute("data-ad-unit", id);
      ins.setAttribute("data-ad-width", String(SIZE.width));
      ins.setAttribute("data-ad-height", String(SIZE.height));
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
    // ids는 위 상수에서 오므로 처음 한 번만 실행하면 돼요
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (ids.length === 0) return null;

  return (
    <div className="ms-ad-list" ref={listRef} aria-label="광고">
      {ids.map(id => (
        <div key={id} className="ms-ad-slot">
          <div data-ad-box style={{ width: SIZE.width, minHeight: SIZE.height }} />
        </div>
      ))}
    </div>
  );
}
