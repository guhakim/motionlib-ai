// 카드의 "코드 복사" 버튼이 내려받을 원본 코드를 public/code 에 복사해요.
// npm run dev / npm run build 전에 자동으로 실행돼요 (package.json 의 predev, prebuild).
import { mkdirSync, copyFileSync } from "node:fs";

const FILES = [
  ["components/ai-automation-hero.tsx", "public/code/ai-automation-hero.tsx.txt"],
];

mkdirSync("public/code", { recursive: true });
for (const [from, to] of FILES) {
  copyFileSync(from, to);
  console.log(`copied ${from} -> ${to}`);
}
