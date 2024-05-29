import {test, expect} from '@playwright/test'

test('codegen', async ({page})=>{
    await page.goto("https://www.demoblaze.com/"); 

    await page.close()
})

// running command: npx playwright codegen https://www.demoblaze.com/