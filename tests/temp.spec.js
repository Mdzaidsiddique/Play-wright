// import {test, expect} from '@playwright/test';
const {test, expect, chromium} = require('@playwright/test');

// grouping test

test.describe("grouped test", async()=>{

    test("P1@fun", async ({page})=>{
        console.log("inside test 1....");
    })
    
    test("P2@fun", async ({page})=>{
        console.log("inside test 2....");
    })
    
    test("P3", async ({page})=>{
        console.log("inside test 3....");
    })

})


test(async ({page})=>{
    // await page.pasue()
    await page.setINput
})