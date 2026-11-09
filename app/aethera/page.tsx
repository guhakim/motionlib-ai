import Script from "next/script";
import { AetheraHero } from "@/components/aethera-hero";

export const metadata = { title: "Aethera Cinematic Hero" };

export default function AetheraPage() {
  return (
    <>
      <AetheraHero />
      {/* 모든 템플릿 페이지가 함께 쓰는 홈 버튼 */}
      <Script src="/home-button.js" strategy="afterInteractive" />
    </>
  );
}
