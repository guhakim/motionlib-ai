import Script from "next/script";
import { CozyPawsHero } from "@/components/cozypaws-hero";

export const metadata = { title: "CozyPaws Pet Store Hero" };

export default function CozyPawsPage() {
  return (
    <>
      <CozyPawsHero />
      {/* 모든 템플릿 페이지가 함께 쓰는 홈 버튼 */}
      <Script src="/home-button.js" strategy="afterInteractive" />
    </>
  );
}
