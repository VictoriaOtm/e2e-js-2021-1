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

    get description() {
        this.page.waitForVisible(this.locators.description);
        this.page.waitForText(this.locators.description);
        return this.page.getValue(this.locators.description);
    }
}

export default new ProfilePage();
