import Script from "next/script";
import { BoldPortfolioHero } from "@/components/bold-portfolio-hero";

export const metadata = { title: "Bold Portfolio Hero" };

export default function BoldPortfolioPage() {
  return (
    <>
      <BoldPortfolioHero />
      {/* 모든 템플릿 페이지가 함께 쓰는 홈 버튼 */}
      <Script src="/home-button.js" strategy="afterInteractive" />
    </>
  );
}
