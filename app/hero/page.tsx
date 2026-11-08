import Script from "next/script";
import { AIAutomationHero } from "@/components/ai-automation-hero";

export const metadata = { title: "AI Automation Hero" };

export default function HeroPage() {
  return (
    <>
      <AIAutomationHero />
      {/* 모든 템플릿 페이지가 함께 쓰는 홈 버튼 */}
      <Script src="/home-button.js" strategy="afterInteractive" />
    </>
  );
}
