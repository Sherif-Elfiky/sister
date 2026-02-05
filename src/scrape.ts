import { chromium } from "playwright";

const URL = "https://www.tiktok.com/@cliptasia";

const orDefault = (value: string | undefined): string => value ?? "?";

export async function scrapeLikes(): Promise<string> {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(URL, { waitUntil: "networkidle" });

  const followers = orDefault(
    await page
      .locator('strong[data-e2e="followers-count"]')
      .innerText()
      .catch(() => undefined),
  );
  const likes = orDefault(
    await page
      .locator('strong[data-e2e="likes-count"]')
      .innerText()
      .catch(() => undefined),
  );

  await browser.close();
  return `Sherif you have ${followers} followers and ${likes} likes`;
}
