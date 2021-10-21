import DefaultPage from './default';

class AccountRediotekaPage extends DefaultPage {
    constructor() {
        super('account', '.login-signup')
    }

    get locators() {
        return {
            email: 'input[type="email"]',
            password: 'input[type="password"]',
            submitButton: '.form-content__button',
        }
    }

    fillEmailInput(email) {
        this.page.waitForVisible(this.locators.email);
        this.page.click(this.locators.email);
        this.page.setValue(this.locators.email, email);
    }

    fillPasswordInput(password) {
        this.page.waitForVisible(this.locators.password);
        this.page.click(this.locators.password);
        this.page.setValue(this.locators.password, password);
    }

    submit() {
        this.page.waitForVisible(this.locators.submitButton);
        this.page.click(this.locators.submitButton)
    }

}
export default new AccountRediotekaPage();
