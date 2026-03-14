import { existsSync, readFileSync, writeFileSync } from "node:fs";

const filePath = "dist/main.d.ts";

if (!existsSync(filePath)) {
  throw new Error(`Missing file: ${filePath}`);
}

let content = readFileSync(filePath, "utf8");
const hasFooter = /\bexport\s*\{\s*\};?\s*$/.test(content);

if (!hasFooter) {
  if (!content.endsWith("\n")) content += "\n";
  content += "export {};\n";
  writeFileSync(filePath, content);
  console.log("Appended export {} to dist/main.d.ts");
} else {
  console.log("dist/main.d.ts already ends with export {}");
}
