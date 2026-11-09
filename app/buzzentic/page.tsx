import Script from "next/script";
import { BuzzenticHero } from "@/components/buzzentic-hero";

export const metadata = { title: "Buzzentic Agency Hero" };

export default function BuzzenticPage() {
  return (
    <>
      <BuzzenticHero />
      {/* 모든 템플릿 페이지가 함께 쓰는 홈 버튼 */}
      <Script src="/home-button.js" strategy="afterInteractive" />
    </>
  );
}
