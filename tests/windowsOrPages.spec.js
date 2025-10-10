// in playwright page and windows are same
import { test, expect, chromium} from "@playwright/test";

test('Handle Pages/Windows', async ()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();
    const page2 = await context.newPage();

    let totalPages = await context.pages(); // array of pages
    console.log("total #of pages: ", totalPages.length);

    // two pages on same browser context
    await page1.goto("https://mdzaidsiddique.github.io/");
    await page2.goto("https://www.demoblaze.com/index.html")

    await page1.waitForTimeout(4000);
    //can perform assertion on both pages
})

test("Mulitple pages/ windows", async ()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();

    await page1.goto("https://mdzaidsiddique.github.io/");
    await expect(page1).toHaveTitle("Md Zaid Siddique | Portfolio");

    const pagePromise = context.waitForEvent("page")
    await page1.locator('//a/i[@class="uil uil-linkedin-alt"]').click();
    const newPage = await pagePromise;

    await expect(newPage).toHaveTitle("Sign Up | LinkedIn")
    await page1.waitForTimeout(4000);
    await browser.close()
})

