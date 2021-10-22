import DefaultSteps from './default';
import page from '../pages/account';

class AccountSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    auth() {
        this.open('https://redioteka.com/login');
        this.waitForAccount();
        this.login();
    }

    waitForAccount() {
        this.page.waitForContainer();
    }

    login() {
        this.page.fillEmailInput(process.env.EMAIL);
        this.page.fillPasswordInput(process.env.PASSWORD);
        this.page.submit();
        return process.env.EMAIL;
    }
}

export default new AccountSteps();
