import DefaultPage from './default';

class ProfilePage extends DefaultPage {
    constructor() {
        super('profile', '.profile')
    }

    get locators() {
        return {
            email: 'input[type="email"]',
        }
    }

    waitForEmailInput() {
        this.page.waitForVisible(this.locators.email);
    }

    getEmailFromProfileSettings() {
        return this.page.getValue(this.locators.email);
    }

}
export default new ProfilePage();
