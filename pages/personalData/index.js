import DefaultPage from '../default';
import {strict as assert} from 'assert';

class PersonalDataPage extends DefaultPage {
    constructor() {
        super('personalData', '[data-test-id=card-footer]');
    }

    get locators() {
        return {
            container: this.container,
            personalDataBody: '[data-test-id=mailid-profile-container]',
            firstName: '[data-test-id=firstname-field-input]',
            submitButton: '[data-test-id=save-button]',
            errorText: '[data-test-id=error-footer-text]',
        }
    }

    clickPersonalData() {
        this.page.click(this.locators.container);
    }

    checkPersonalDataOpened() {
        this.page.waitForVisible(this.locators.personalDataBody);
    }

    fillFirstNameForm(firstName) {
        this.page.waitForVisible(this.locators.firstName);
        this.page.click(this.locators.firstName);
        this.page.setValue(this.locators.firstName, firstName);
    }

    submit() {
        this.page.waitForVisible(this.locators.submitButton);
        this.page.click(this.locators.submitButton);
    }

    checkErrorMessage() {
        this.page.waitForVisible(this.locators.errorText);
    }
}

export default new PersonalDataPage();
