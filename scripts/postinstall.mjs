import { execSync } from "node:child_process";

if (process.env.VERCEL === "1") {
  console.log(
    "Skipping Puppeteer Chrome download on Vercel (CV build uses @sparticuz/chromium).",
  );
  process.exit(0);
}

execSync("npx puppeteer browsers install chrome", { stdio: "inherit" });
