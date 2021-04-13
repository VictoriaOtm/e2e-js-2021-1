import DefaultPage from '../default';

class ProfilePage extends DefaultPage {
    constructor() {
        super('profile', '#app')
    }

    get locators () {
        return {
            profileButton: 'a[href="/profile"]',
            userEmailHeader: 'div[id="email"]',
        }
    }

    goToProfile() {
        this.page.waitForVisible(this.locators.profileButton);
        this.page.click(this.locators.profileButton);
    }

    getProfileEmail() {
        this.page.waitForVisible(this.locators.userEmailHeader);
        return this.page.getText(this.locators.userEmailHeader);
    }
}

export default new ProfilePage();