import DefaultSteps from './default';
import page from '../pages/profile';
import { strict as assert } from 'assert';

class ProfileSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    waitForProfile() {
        this.page.waitForContainer();
    }

    checkAuthorizedEmail(email) {
        this.waitForProfile();
        this.page.waitForEmailInput();
        const profileEmail = this.page.getEmailFromProfileSettings();
        assert.strictEqual(
            profileEmail,
            email,
            `Email авторизованного юзера ${profileEmail} не соответствует ожидаемому ${email}`,
        );
    }
}

export default new ProfileSteps();
