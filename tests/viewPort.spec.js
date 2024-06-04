import {test, expect} from '@playwright/test';

// can config in playwright.config.js.. project..use viewport:{width:xyz, heigth:abc}
// or
test.use({viewport:{width:500, height:300}})

test('Window / viewPort Size', async ({page})=>{
    await page.goto("https://mdzaidsiddique.github.io/");
    await expect(page).toHaveTitle("Md Zaid Siddique | Portfolio");
})