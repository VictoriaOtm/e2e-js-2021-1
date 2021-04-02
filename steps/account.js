import DefaultSteps from './default';
import page from '../pages/account';
import {strict as assert} from "assert";

class AccountSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    auth() {
        this.open('https://pinteo.ru/login');
        this.waitForAccount();
        this.login();
    }

    login() {
        this.page.fillLoginForm(process.env.LOGIN);
        this.page.fillPasswordForm(process.env.PASSWORD);
        this.page.submit();
    }

    logout() {
        this.page.logout();
    }

    get authorizedLogin() {
        return this.page.authorizedLogin;
    }

    waitForAccount() {
        this.page.waitForContainer();
    }
}

export default new AccountSteps();
