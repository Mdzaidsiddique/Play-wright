import {test, expect} from '@playwright/test';
import { LogInPage } from '../pages/LogInPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

test("POM", async ({page})=>{
    // LogIn
    const logInObject = new LogInPage(page);

    await logInObject.goToLogInPage();
    // await page.waitForTimeout(3000);

    await logInObject.logIn("mdzaid", 'test@123');

    // Home Page
    const HomePageObject = new HomePage(page);
    await HomePageObject.addProductToCart("Nexus 6");
    // await page.waitForTimeout(3000);
    await HomePageObject.goToCart();
    
    // Cart page
    const CartPageObject = new CartPage(page);
    // await page.waitForTimeout(3000)
    const status = await CartPageObject.checkProductInCart("Nexus 6");
    expect(await status).toBe(true)

})