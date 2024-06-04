import {test, expect} from '@playwright/test';

// config file reporter: 'line','html',etc

test('Reporters', async ({page})=>{
    await page.goto("https://mdzaidsiddique.github.io/");
    await expect(page).toHaveTitle("Md Zaid Siddique | Portfolio");
})


test('Reporters2', async ({page})=>{
    await page.goto("https://mdzaidsiddique.github.io/");
    await expect(page).toHaveTitle("Md Zaid Siddique | Portfolio");
})


test('Reporters3', async ({page})=>{
    await page.goto("https://mdzaidsiddique.github.io/");
    await expect(page).toHaveTitle("Md Zaid Siddique | Portfolio");
})

// npx playwright test reporters.spec.js --project chromium --reporter=dot
// npx playwright test reporters.spec.js --project chromium --reporter=line
// npx playwright test reporters.spec.js --project chromium --reporter=html
// npx playwright test reporters.spec.js --project chromium --reporter=list
// npx playwright test reporters.spec.js --project chromium --reporter=json
// npx playwright test reporters.spec.js --project chromium --reporter=junit
// npx playwright test reporters.spec.js --project chromium --reporter=blob