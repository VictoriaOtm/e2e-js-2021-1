import DefaultSteps from './default';
import page from '../pages/account';

class AccountSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    waitForAccount() {
        this.page.waitForContainer();
    }

    loginAndReturnEmail() {
        this.page.fillEmailInput(process.env.EMAIL);
        this.page.fillPasswordInput(process.env.PASSWORD);
        this.page.submit();
        return process.env.EMAIL;
    }
}

export default new AccountSteps();
