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
        this.page.waitForVisible(this.locators.login);
        this.page.click(this.locators.login);
        this.page.setValue(this.locators.login, username);
    }

    fillPasswordInput(password) {
        this.page.waitForVisible(this.locators.password);
        this.page.click(this.locators.password);
        this.page.setValue(this.locators.password, password);
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
