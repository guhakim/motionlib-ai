import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MotionSites AI — Premium AI Website Prompts",
  description: "Browse hundreds of premium AI-generated website templates and prompts. Build sites that convert, impress, and amaze.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
