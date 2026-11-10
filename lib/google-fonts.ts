// 사이트 안에 넣어 둔 글꼴 파일로 Google 글꼴을 대신해요.
// 빌드할 때 Google 서버에서 글꼴을 받다가 실패하는 일을 막기 위해서예요.
// 컴포넌트는 next/font/google 과 똑같이 Inter({ variable: "--bp-sans" }) 처럼 써요.
// 템플릿 코드를 복사할 때는 scripts/copy-code.mjs 가 import 를 next/font/google 로 되돌려요.
//
// 글꼴 파일은 @fontsource 패키지(latin)에서 가져왔고, 모두 SIL Open Font License 1.1 이에요.
import localFont from "next/font/local";

const inter = localFont({
  src: [
    { path: "./fonts/inter-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/inter-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/inter-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});

const anton = localFont({
  src: "./fonts/anton-latin-400-normal.woff2",
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const dmSerifDisplay = localFont({
  src: "./fonts/dm-serif-display-latin-400-normal.woff2",
  weight: "400",
  variable: "--font-dm-serif-display",
  display: "swap",
});

const instrumentSerif = localFont({
  src: [
    { path: "./fonts/instrument-serif-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/instrument-serif-latin-400-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-instrument-serif",
  display: "swap",
});

const barlow = localFont({
  src: [
    { path: "./fonts/barlow-latin-300-normal.woff2", weight: "300", style: "normal" },
    { path: "./fonts/barlow-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/barlow-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-barlow",
  display: "swap",
});

const geist = localFont({
  src: "./fonts/geist-latin-wght-normal.woff2",
  weight: "100 900",
  variable: "--font-geist",
  display: "swap",
});

type FontOptions = { variable?: string; [key: string]: unknown };
type Font = { className: string; variable: string; style: { fontFamily: string } };

// variable 로 받은 이름(예: --bp-sans)은 app/globals.css 의 .fv--bp-sans 규칙이
// 실제 글꼴 변수(예: --font-inter)와 연결해 줘요.
function use(font: Font) {
  return (options: FontOptions = {}): Font => ({
    className: font.className,
    style: font.style,
    variable: options.variable ? `${font.variable} fv${options.variable}` : font.variable,
  });
}

export const Inter = use(inter);
export const Anton = use(anton);
export const DM_Serif_Display = use(dmSerifDisplay);
export const Instrument_Serif = use(instrumentSerif);
export const Barlow = use(barlow);
export const Geist = use(geist);
