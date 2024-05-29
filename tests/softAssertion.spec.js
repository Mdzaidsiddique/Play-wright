import {test, expect} from '@playwright/test'

test('Soft Assertion', async ({page})=>{
    await page.goto("https://www.demoblaze.com/index.html")
    // await expect.(page).toHaveTitle('STORE')
    // hard assertions :: if any of one assertions would be fails then rest of the code won't execute (programme is terminate)
    // await expect(page).toHaveTitle('STORE-intentionaly wrong')
    // await expect(page).toHaveURL("https://www.demoblaze.com/index.html")
    // await expect(page.locator('.navbar-brand')).toBeVisible()

    // soft assertions :: it will not terminate the code even tough any test got failed
    await expect.soft(page).toHaveTitle('STORE')
    await expect.soft(page).toHaveTitle('STORE-intentionaly wrong')
    await expect.soft(page).toHaveURL("https://www.demoblaze.com/index.html")
    await expect.soft(page.locator('.navbar-brand')).toBeVisible()

    page.close()
})