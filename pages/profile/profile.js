import DefaultPage from '../default';
import {strict as assert} from "assert";

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

    checkEmail(email) {
        this.page.waitForVisible(this.locators.userEmailHeader);
        const profileEmail = this.page.getText(this.locators.userEmailHeader);

        assert.strictEqual(
            profileEmail,
            email,
            `Email авторизованного юзера ${profileEmail} не соответствует ожидаемому ${email}`,
        )
    }
}

export default new ProfilePage();