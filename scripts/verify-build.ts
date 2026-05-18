#!/usr/bin/env bun
// Smoke test: ensure dist/index.html exists and contains essential markers.
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const DIST = "dist";
const INDEX = join(DIST, "index.html");

function fail(msg: string): never {
  console.error(`❌ ${msg}`);
  process.exit(1);
}

if (!existsSync(INDEX)) fail(`Missing ${INDEX}`);

const html = readFileSync(INDEX, "utf8");
const checks: Array<[string, RegExp]> = [
  ["<title> Studio Zahaa", /<title>[^<]*Studio Zahaa/i],
  ["meta description", /<meta\s+name=["']description["']/i],
  ["canonical link", /<link\s+rel=["']canonical["']/i],
  ["og:image", /<meta\s+property=["']og:image["']/i],
  ["JSON-LD BeautySalon", /"@type"\s*:\s*"BeautySalon"/],
  ["root div", /<div\s+id=["']root["']/i],
  ["bundled script", /<script[^>]+type=["']module["'][^>]+src=/i],
];

let failed = 0;
for (const [name, re] of checks) {
  if (!re.test(html)) {
    console.error(`❌ ${name} missing in ${INDEX}`);
    failed++;
  } else {
    console.log(`✅ ${name}`);
  }
}

// Verify assets directory has JS + CSS
const assetsDir = join(DIST, "assets");
if (!existsSync(assetsDir)) fail("Missing dist/assets directory");
const assets = readdirSync(assetsDir);
if (!assets.some((f) => f.endsWith(".js"))) fail("No JS bundle in dist/assets");
if (!assets.some((f) => f.endsWith(".css"))) fail("No CSS bundle in dist/assets");
console.log("✅ JS + CSS bundles present");

if (failed > 0) fail(`${failed} check(s) failed`);
console.log("\n🎉 Build verification passed");
