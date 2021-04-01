class AccountPage {
    constructor() {
        this.page = browser;
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
}

export default new AccountPage();
