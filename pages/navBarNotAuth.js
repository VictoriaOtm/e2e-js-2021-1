import DefaultPage from './default';


class NavBarNotAuth extends DefaultPage {
    constructor() {
        super('navBarNotAuth', '.header-inner')
    }

    get locators() {
        return {
            login: '.header-right__account'
        }
    }
    clickLogin() {
        this.page.click(this.locators.login)
    }
}

export default new NavBarNotAuth();
