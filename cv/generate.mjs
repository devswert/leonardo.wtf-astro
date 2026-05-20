import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "js-yaml";
import Handlebars from "handlebars";
import puppeteer from "puppeteer-core";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const dataDir = path.join(__dirname, "data");
const templatePath = path.join(__dirname, "template.html");
const publicDir = path.join(rootDir, "public");

const isVercel = process.env.VERCEL === "1";

const launchArgs = [
  "--no-sandbox",
  "--disable-setuid-sandbox",
  "--disable-dev-shm-usage",
  "--disable-gpu",
];

const locales = [
  { lang: "en", file: "en.yaml", output: "cv_en.pdf" },
  { lang: "es", file: "es.yaml", output: "cv_es.pdf" },
];

async function loadTemplate() {
  const source = await fs.readFile(templatePath, "utf8");
  return Handlebars.compile(source);
}

async function launchBrowser() {
  if (isVercel) {
    const chromium = (await import("@sparticuz/chromium")).default;
    chromium.setGraphicsMode = false;

    return puppeteer.launch({
      args: [...chromium.args, ...launchArgs],
      executablePath: await chromium.executablePath(),
      headless: true,
    });
  }

  const { default: puppeteerFull } = await import("puppeteer");

  return puppeteer.launch({
    headless: true,
    executablePath: puppeteerFull.executablePath(),
    args: launchArgs,
  });
}

async function generatePdf(browser, html, outputPath) {
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "load", timeout: 60_000 });
  await page.pdf({
    path: outputPath,
    format: "Letter",
    printBackground: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });
  await page.close();
}

async function main() {
  await fs.mkdir(publicDir, { recursive: true });
  const compile = await loadTemplate();
  const browser = await launchBrowser();

  try {
    for (const { lang, file, output } of locales) {
      const yamlPath = path.join(dataDir, file);
      const raw = await fs.readFile(yamlPath, "utf8");
      const data = yaml.load(raw);
      const html = compile({ ...data, lang });
      const outputPath = path.join(publicDir, output);
      await generatePdf(browser, html, outputPath);
      console.log(`Generated ${output}`);
    }
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
