// Assertions :

//Hard Assetion: if nay assesrtion fails, rest of the test won't execute (except().toHave())
//soft assertion: rest of the test execute even if any assertion fails (expect().soft().tohave())

const {test, expect} = require('@playwright/test')

test('assertions', async ({page})=>{
    //open app url
    await page.goto("https://demo.nopcommerce.com/register")

    // 1) expect(page).toHaveURL('URL')
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register') // verify same url or not

    // 2) expect(page).toHaveTitle('Title)

    await expect(page).toHaveTitle('nopCommerce demo store. Register') //verify page tile

    // // 3) expect(locator).tobeVisible()
    const logoElement =  await page.locator('.header-logo') //return element
    await expect(logoElement).toBeVisible() //verifying visible or not
    // or
    await expect(page.locator('.header-logo')).toBeVisible()

    // 4.1) expect(locator).toBeEnabled() :: control is enabled
    // 4.2) expect(locator).toBeDisabled() :: control is disables
    const searchStoreBox = await page.locator("#small-searchterms")
    await expect(searchStoreBox).toBeEnabled()
    // or
    await expect(page.locator('#small-searchterms')).toBeEnabled()

    // 5) expect(locator).toBeChecked() :: radio/checkBox is checked
    const maleRadioButton = await page.locator('#gender-male')
    await maleRadioButton.click() // select radio button
    await expect(maleRadioButton).toBeChecked();

    // check Box
    const newsLetterCheckBox = await page.locator('#Newsletter');
    await expect(newsLetterCheckBox).toBeChecked()

    // 6) expect(locator).toHaveAttribute() :: Element has attribute or not
    const registerButton = await page.locator('#register-button')
    await expect(registerButton).toHaveAttribute('type', 'submit')

    // 7) expect(locator).toHaveText() :: Exact Match

    await expect(page.locator('.page-title h1')).toHaveText('Register') // have to provide complete text

    // 8) expect(locator).toContainText() :: Partial Match

    await expect(page.locator('.page-title h1')).toContainText('Reg') // can provide partial text

    // 9) expect(locator).toHaveValue() ::input has a value or not

    const emailInput = await page.locator('#Email')
    await emailInput.fill('test@gmail.com');

    await expect(emailInput).toHaveValue('test@gmail.com');

    // 10) expect(locator).toHaveCount() :: list of elemnts has given length

    await expect(page.locator("select[name='DateOfBirthDay'] option")).toHaveCount(32)

    // Nigative assertion [.not()] :: expect(locator).not.toHave....()


})

test('Hard and Soft Assertion', async ({page})=>{
    await page.goto("https://www.demoblaze.com/index.html")
    // hard assertions :: if any of one assertions would be fails then rest of the code won't execute (programme is terminate)
    
    // await expect(page).toHaveTitle('STORE-intentionaly wrong')
    // await expect(page).toHaveURL("https://www.demoblaze.com/index.html")
    // await expect(page.locator('.navbar-brand')).toBeVisible()

    // soft assertions :: it will not terminate the test even tough any assertion got failed
    await expect.soft(page).toHaveTitle('STORE')
    await expect.soft(page).toHaveTitle('STORE-intentionaly wrong')
    await expect.soft(page).toHaveURL("https://www.demoblaze.com/index.html")
    await expect.soft(page.locator('.navbar-brand')).toBeVisible()

    page.close()
})