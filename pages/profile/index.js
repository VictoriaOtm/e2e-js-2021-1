import DefaultPage from '../default';
import {strict as assert} from "assert";

class ProfilePage extends DefaultPage {
    constructor() {
        super('letters', '.profile_page')
    }

    get locators () {
        return {
            container: this.container,
            profileButton: 'a[href="/profile"]',
            userEmailHeader: 'div[id="email"]',
        }
    }

    goToProfile() {
        this.page.waitForVisible(this.locators.profileButton);
        this.page.click(this.locators.profileButton);
    }

    // waitForList() {
    //     this.page.waitForContainer();
    // }

    checkAuthorizedEmail(email) {
        this.page.waitForVisible(this.locators.userEmailHeader);
        const headerEmail = this.page.getText(this.locators.userEmailHeader);

        assert.strictEqual(
            headerEmail,
            email,
            `Email авторизованного юзера ${headerEmail} не соответствует ожидаемому ${email}`,
        )
    }
}

export default new ProfilePage();
