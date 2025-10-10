import {test, expect} from '@playwright/test';

test('Web Tables', async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const table = await page.locator('#productTable');

    // 1) total #rows and columns
    const columns = await table.locator('thead tr th');
    console.log("Number of columns:", await columns.count());
    expect(await columns.count()).toBe(4);

    const rows = await table.locator("tbody tr");
    console.log("Number of rows:", await rows.count());
    expect(await rows.count()).toBe(5);

    // 2) select perticular product from table (based on name of the product)
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Product 4'
    });
    await matchedRow.locator('input').check()

    // 3) select multiple checkbox using reusable function (define async function outside test function)
    await selectChechox(rows, page, 'Product 1')
    await selectChechox(rows, page, 'Product 2')
    await selectChechox(rows, page, 'Product 5')

    // 4) print all product details using loop
    for(let i=0; i<await rows.count(); i++){
        const row = rows.nth(i)
        const tableData = row.locator('td')
        for(let j=0; j<await columns.count()-1; j++){
           console.log(await tableData.nth(j).textContent());
        }
    }

    // read data from all the pages in the table (pagination)
    const paginationCount = await page.locator('.pagination li a');  // count #pages
    console.log("Number for pages:", await paginationCount.count());

    for(let p=0; p<await paginationCount.count(); p++){
        if(p>0) await paginationCount.nth(p).click();
        for(let i=0; i<await rows.count(); i++){
            const row = rows.nth(i)
            const tableData = row.locator('td')
            for(let j=0; j<await columns.count()-1; j++){
               console.log(await tableData.nth(j).textContent());
            }
        }
    }

})

async function selectChechox(rows, page, name){
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    await matchedRow.locator('input').check();
}