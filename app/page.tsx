"use client";

import { Fragment, useState } from "react";
import { KakaoAdfit } from "@/components/kakao-adfit";
import { MotionsitesNavBar } from "@/components/motionsites-navbar";
import { MotionsitesFilterBar } from "@/components/motionsites-filter-bar";
import { MotionsitesTemplateCard } from "@/components/motionsites-template-card";
import { MotionsitesBackgroundsSection, MotionsitesAcademySection } from "@/components/motionsites-sections";
import { TEMPLATES } from "@/lib/template-data";

export default function Home() {
  const [mainTab, setMainTab] = useState("Recent");
  const [subTab, setSubTab] = useState("All");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const visible = TEMPLATES.filter(t =>
    !activeCategory || t.category.toLowerCase().includes(activeCategory.toLowerCase())
  );

  return (
    <div className="ms-page">
      <MotionsitesNavBar />
      <MotionsitesFilterBar
        mainTab={mainTab} setMainTab={setMainTab}
        subTab={subTab} setSubTab={setSubTab}
        activeCategory={activeCategory} setActiveCategory={setActiveCategory}
      />
      <div className="ms-grid-container">
        {visible.length === 0 ? (
          <p className="ms-empty">No templates in this category yet.</p>
        ) : (
          <div className="ms-grid">
            {visible.map((tpl, i) => (
              <Fragment key={tpl.id}>
                <MotionsitesTemplateCard tpl={tpl} />
                {/* 카드 6개 다음에 광고 한 줄 */}
                {i === 5 && <KakaoAdfit />}
              </Fragment>
            ))}
          </div>
        )}
      </div>
      <MotionsitesBackgroundsSection />
      <MotionsitesAcademySection />
    </div>
  );
}
