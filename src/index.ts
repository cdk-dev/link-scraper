import { chromium } from 'playwright';
import { scraper, screenshot } from './scraper';

void (async () => {
  const url = 'https://aws.amazon.com/about-aws/whats-new/2020/10/amazon-ecs-extensions-for-aws-cloud-development-kit-now-available-as-a-developer-preview/';
  const browser = await chromium.launch();
  const result = await scraper(browser, url);
  const files = await screenshot(browser, url);
  await browser.close();
  console.log({ result, files });
})();
