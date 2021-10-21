import DefaultPage from './default';


class NavBarAuth extends DefaultPage {
    constructor() {
        super('NavBarAuth', '.header-inner')
    }

    get locators() {
        return {
            login: '.header-right-avatar__img',
            user: '.header-dropdown-content__user'
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
}

export default new NavBarAuth();
