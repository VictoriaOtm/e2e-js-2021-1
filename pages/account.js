import DefaultPage from './default';
import {strict as assert} from 'assert';

class AccountPage extends DefaultPage {
    constructor() {
        super('account', '[data-test-id=login-app-read]')
    }

    get locators() {
        return {
            userEmail: 'div[id="email"]',
            createVacancyLink: 'a.menu-list-block__item_button',
            profileLink: 'a.menu-list-block__item_icon-profile',
            email: 'input[name="email"]',
            passwd: 'input[name="password"]',
            submitBtn: 'button[id="entBtnAuth"]'
        }
    }

    fillEmailForm(email) {
        const emailSelector = this.locators.email;

        this.page.waitForVisible(emailSelector);
        this.page.click(emailSelector);
        this.page.setValue(emailSelector, email);
    }

    fillPasswdForm(password) {
        const passwdSelector = this.locators.passwd;

        this.page.waitForVisible(passwdSelector);
        this.page.click(passwdSelector);
        this.page.setValue(passwdSelector, password);
    }

    submit() {
        const submitBtnSelector = this.locators.submitBtn;

        this.page.waitForVisible(submitBtnSelector);
        this.page.click(submitBtnSelector);
    }

    checkAuthorizedUser(email) {
        const profileLinkSelector = this.locators.profileLink;
        const userEmailSelector = this.locators.userEmail

        this.page.waitForVisible(profileLinkSelector); // Дожидаемся появления иконки перехода в личный кабинет
        this.page.click(profileLinkSelector);
        this.page.waitForVisible(userEmailSelector); // Дожидаемся появления информации об email пользователя
        const userEmail = this.page.getText(userEmailSelector);
        assert.strictEqual(
            userEmail,
            email,
            `Email авторизованного пользователя ${userEmail} не соответствует ожидаемому ${email}`,
        )
    }
}

export default new AccountPage();
