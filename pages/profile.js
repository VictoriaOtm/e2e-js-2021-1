import DefaultPage from './default';
import {strict as assert} from 'assert';

class ProfilePage extends DefaultPage {
    constructor() {
        super('profileSettings', '#app')
    }

    get locators() {
        return {
            description: '#description',
            submitButton: '#submit',
            settings: '#settings'
        }
    }

    fillDescriptionForm(description) {
        this.page.waitForVisible(this.locators.description);
        this.page.click(this.locators.description);
        this.page.setValue(this.locators.description, description);
    }

    submit() {
        this.page.waitForVisible(this.locators.submitButton);
        this.page.click(this.locators.submitButton)
    }

    checkUpdatedDescription(description) {
        this.page.waitForVisible(this.locators.description);
        const currentDescription = this.page.getValue(this.locators.description);
        assert.strictEqual(
            currentDescription,
            description,
            `Текущее описание профиля ${currentDescription} не соответствует ожидаемому ${description}`,
        );
    }
}

export default new ProfilePage();
