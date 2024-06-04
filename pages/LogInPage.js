exports.LogInPage = 

class LogInPage{

    constructor(page){
        this.page = page;
        this.logInLink = "#login2";
        this.userNameInput =  "#loginusername";
        this.passwordInput = "#loginpassword";
        this.logInButton = '//button[normalize-space()="Log in"]';
    }

    async goToLogInPage(){
        await this.page.goto("https://www.demoblaze.com/index.html");
    }

    async logIn(username, password){
        await this.page.click(this.logInLink);
        await this.page.locator(this.userNameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.logInButton).click();
    }

}