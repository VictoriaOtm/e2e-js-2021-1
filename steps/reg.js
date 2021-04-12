import DefaultSteps from './default';
import page from '../pages/reg';

class RegSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    auth() {
        this.open('https://musicexpress.sarafa2n.ru/signup/');
        this.waitForReg();
        this.reg();
    }

    reg() {
        this.page.fillEmailForm(process.env.REG_EMAIL);
        this.page.fillUsernameForm(process.env.REG_USERNAME);
        this.page.fillPassword1Form(process.env.REG_PASSWORD);
        this.page.fillPassword2Form(process.env.REG_PASSWORD);
        this.page.submitForm();
        this.openWithDelay("https://musicexpress.sarafa2n.ru/settings/");
        return this.page.getRegEmail();
    }

    waitForReg() {
        this.page.waitForContainer();
    }
}

export default new RegSteps();
