import Script from "next/script";
import { ClearInvoiceHero } from "@/components/clearinvoice-hero";

export const metadata = { title: "ClearInvoice SaaS Hero" };

export default function ClearInvoicePage() {
  return (
    <>
      <ClearInvoiceHero />
      {/* 모든 템플릿 페이지가 함께 쓰는 홈 버튼 */}
      <Script src="/home-button.js" strategy="afterInteractive" />
    </>
  );
}
