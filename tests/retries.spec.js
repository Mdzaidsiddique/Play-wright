/* Retries and test falkiness
1. passed - No retry
2. Failed - Retry --> Failed
3. Failed - Retry --> Passed : Faleky tests

Give failing tests 3 retry attempts:
npx playwright test --retries=3

in configure retries:1, in config file : if test will fail then it will run one more time, if retries:3 then it will run 3 times
*/
import {test, expect} from '@playwright/test';

test("Retries", async ({page})=>{

    await page.goto("https://www.demoblaze.com/cart.html");

    await expect(page).toHaveTitle("STORE");
})