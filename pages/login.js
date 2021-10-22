import DefaultPage from "./default";

class LoginPage extends DefaultPage {
    constructor() {
        super('login', 'form#login');
    }

    get locators() {
        return {
            login: 'input[name="username"]',
            password: 'input[name="password"]',
            submitButton: '#login-submit',
            userNameHeader: '#user-full-name'
        }
    }

    fillLoginInput(username) {
        const loginLocator = this.locators.login;
        this.page.waitForVisible(loginLocator);
        this.page.click(loginLocator);
        this.page.setValue(loginLocator, username);
    }

    fillPasswordInput(password) {
        const passwordLocator = this.locators.password;
        this.page.waitForVisible(passwordLocator);
        this.page.click(passwordLocator);
        this.page.setValue(passwordLocator, password);
    }

    submit() {
        this.page.waitForVisible(this.locators.submitButton);
        this.page.click(this.locators.submitButton);
    }

    getUserNameFromProfile() {
        this.page.waitForVisible(this.locators.userNameHeader);
        return this.page.getText(this.locators.userNameHeader);
    }
}

export default new LoginPage();
