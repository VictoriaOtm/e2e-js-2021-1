import DefaultPage from './default';

class AccountPage extends DefaultPage {
    constructor() {
        super('account', '#app')
    }

    get locators() {
        return {
            login: '#username',
            password: '#password',
            submitButton: '#submit',
            profileLink: '#menu > :nth-child(2) > .menu-link', // Вот такой вот кривой селектор для получения ссылки на профиль, откуда можно получить статус авторизации нужного пользователя
            menu: '#menu',
            logout: '#logout'
        }
    }

    fillLoginForm(username) {
        this.page.waitForVisible(this.locators.login);
        this.page.click(this.locators.login);
        this.page.setValue(this.locators.login, username);
    }

    fillPasswordForm(password) {
        this.page.waitForVisible(this.locators.password);
        this.page.click(this.locators.password);
        this.page.setValue(this.locators.password, password);
    }

    submit() {
        this.page.waitForVisible(this.locators.submitButton);
        this.page.click(this.locators.submitButton);
    }

    get authorizedLogin() {
        this.page.waitForVisible(this.locators.menu);
        this.page.waitForVisible(this.locators.profileLink);
        return this.page.getAttribute(this.locators.profileLink, 'href');
    }

    logout() {
        this.page.waitForVisible(this.locators.logout);
        this.page.click(this.locators.logout);
    }
}

export default new AccountPage();
