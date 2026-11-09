// 카드의 "코드 복사" 버튼이 내려받을 원본 코드를 public/code 에 복사해요.
// npm run dev / npm run build 전에 자동으로 실행돼요 (package.json 의 predev, prebuild).
import { mkdirSync, copyFileSync, readFileSync, writeFileSync } from "node:fs";

const FILES = [
  ["components/ai-automation-hero.tsx", "public/code/ai-automation-hero.tsx.txt"],
];

// 사이트 전용 홈 버튼 줄은 빼고 복사해요. 복사한 코드에는 템플릿만 들어가요.
const HTML_FILES = [
  ["public/opaque/index.html", "public/code/opaque.html"],
  ["public/vasari/index.html", "public/code/vasari.html"],
];

// 컴포넌트와 CSS 를 한 파일로 합쳐서 복사해요. 복사한 코드 하나로 바로 쓸 수 있어요.
const COMBINED_FILES = [
  [["components/cozypaws-hero.tsx", "components/cozypaws-hero.css"], "public/code/cozypaws-hero.tsx.txt"],
  [["components/aethera-hero.tsx", "components/aethera-hero.css"], "public/code/aethera-hero.tsx.txt"],
  [["components/bold-portfolio-hero.tsx", "components/bold-portfolio-hero.css"], "public/code/bold-portfolio-hero.tsx.txt"],
];

mkdirSync("public/code", { recursive: true });
for (const [from, to] of FILES) {
  copyFileSync(from, to);
  console.log(`copied ${from} -> ${to}`);
}
for (const [from, to] of HTML_FILES) {
  const html = readFileSync(from, "utf8").replace(/^.*<!-- ms-home-btn -->\r?\n/m, "");
  writeFileSync(to, html);
  console.log(`copied ${from} -> ${to} (home button removed)`);
}
for (const [froms, to] of COMBINED_FILES) {
  const parts = froms.map(f => `/* ===== ${f} ===== */\n` + readFileSync(f, "utf8"));
  writeFileSync(to, parts.join("\n"));
  console.log(`combined ${froms.join(" + ")} -> ${to}`);
}
