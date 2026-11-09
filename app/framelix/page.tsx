import Script from "next/script";
import { FramelixLanding } from "@/components/framelix-landing";

export const metadata = { title: "Framelix 3D Studios" };

export default function FramelixPage() {
  return (
    <>
      <FramelixLanding />
      {/* 모든 템플릿 페이지가 함께 쓰는 홈 버튼 */}
      <Script src="/home-button.js" strategy="afterInteractive" />
    </>
  );
}
