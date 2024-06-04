import {test, expect} from '@playwright/test'

// npx playwright codegen
// it will launch a new page along with playwright inspector, once you launch your website it will automatically write script

test('codegen', async ({page})=>{
    await page.goto("https://www.demoblaze.com/"); 

    await page.close()
})

// running command: npx playwright codegen https://www.demoblaze.com/

// npx playwright codegen --help ;; this will populate lot of option including creating outputFile containg record etc

// npx playwright codegen -o tests/outputFileName.spec.js | record will save in outputFileName.spec.js inside test folder


