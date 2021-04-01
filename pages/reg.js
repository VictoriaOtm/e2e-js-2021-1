import DefaultPage from './default';
import {strict as assert} from "assert";

class RegPage extends DefaultPage {
    constructor() {
        super('reg', 'div[class="page"]')
    }

    get locators() {
        return {
            email: 'input[name=email]',
            username: 'input[name="username"]',
            password1: 'input[name="password1"]',
            password2: 'input[name="password2"]',
            submitButton: 'input[class="form-signup__submit button-primary"]',
            settingsLink: 'a[href="/settings/"]',
            emailField: 'input[name="email"]'
        }
    }

    fillEmailForm(email) {
        this.page.waitForVisible(this.locators.email);
        this.page.click(this.locators.email);
        this.page.setValue(this.locators.email, email);
    }

    fillUsernameForm(username) {
        this.page.waitForVisible(this.locators.username);
        this.page.click(this.locators.username);
        this.page.setValue(this.locators.username, username);
    }

    fillPassword1Form(password) {
        this.page.waitForVisible(this.locators.password1);
        this.page.click(this.locators.password1);
        this.page.setValue(this.locators.password1, password);
    }

    fillPassword2Form(password) {
        this.page.waitForVisible(this.locators.password2);
        this.page.click(this.locators.password2);
        this.page.setValue(this.locators.password2, password);
    }

    submitForm() {
        this.page.waitForVisible(this.locators.submitButton);
        this.page.click(this.locators.submitButton)
    }

    checkReg(email) {
        this.page.waitForValue(this.locators.emailField);
        let settingsEmail = this.page.getValue(this.locators.emailField);
        assert.strictEqual(
            settingsEmail,
            email,
            `Email авторизованного юзера ${settingsEmail} не соответствует ожидаемому ${email}`)
    }
}

export default new RegPage();
