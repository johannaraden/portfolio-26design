// Fails if any content is still marked as a placeholder. Runs before every build.
import { readdirSync, readFileSync } from "node:fs";

const dir = new URL("../src/content/", import.meta.url);
const hits = readdirSync(dir).flatMap((file) =>
  readFileSync(new URL(file, dir), "utf8")
    .split("\n")
    .map((line, i) => ({ file, line: i + 1, text: line.trim() }))
    .filter((l) => /placeholder:\s*true/.test(l.text)),
);

if (hits.length) {
  console.error(`\n✗ ${hits.length} placeholder(s) left in src/content:`);
  for (const h of hits) console.error(`  ${h.file}:${h.line}`);
  console.error("\nReplace them with real content (or set SKIP_CONTENT_CHECK=1 for a preview build).\n");
  if (!process.env.SKIP_CONTENT_CHECK) process.exit(1);
} else {
  console.log("✓ No placeholders left.");
}
