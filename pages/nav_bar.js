import DefaultPage from './default';


class Nav_bar extends DefaultPage {
    constructor() {
        super('Nav_bar', '.header-inner')
    }

    get locators() {
        return {
            account: '.header-right-avatar__img',
            user: '.header-dropdown-content__user',
            login: '.header-right__account'
        }
    }

    clickLogin() {
        this.page.waitForVisible(this.locators.login);
        this.page.click(this.locators.login);
    }

    getUserName() {
        this.page.waitForVisible(this.locators.user);
        return this.page.getText(this.locators.user)
    }

    clickAccountImg() {
        this.page.waitForVisible(this.locators.account);
        this.page.click(this.locators.account)
    }
}

export default new Nav_bar();
