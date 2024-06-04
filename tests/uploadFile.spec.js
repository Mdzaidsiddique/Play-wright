import {test, expect} from '@playwright/test';

// Ref:: https://playwright.dev/docs/input#upload-files

test('Upload Single File', async ({page})=>{

    // have to complewte this function
    await page.goto("https://www.foundit.in/")

    await page.waitForSelector(".mqfihd-upload");

    await page.locator("#fileInput").setInputFiles("tests/filesForUpload/SecondFile.pdf")

})

test.only('Uploading Multiple Files', async ({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

    await page.locator("#filesToUpload")
        .setInputFiles(["tests/filesForUpload/firstFile.pdf", "tests/filesForUpload/SecondFile.pdf"])

    expect(await page.locator("#fileList li:nth-child(1)")).toHaveText("firstFile.pdf");
    expect(await page.locator("#fileList li:nth-child(2)")).toHaveText("SecondFile.pdf");


    //Removing Files
    await page.locator("#filesToUpload").setInputFiles([]);

    expect(await page.locator("#fileList li:nth-child(1)")).toHaveText("No Files Selected");
    
    await page.close();
})