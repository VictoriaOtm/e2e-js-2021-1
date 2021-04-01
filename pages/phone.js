import DefaultPage from './default';
import { strict as assert } from 'assert';

class PhonePage extends DefaultPage {
    constructor() {
        super('phone', '[data-test-id=mailId-contacts-wrapper]');
    }

    get locators() {
        return {
            login: 'input[name="username"]',
            password: 'input[name="password"]',
            nextButton: '[data-test-id="next-button"]',
            addPhoneButton: '[data-test-id="recovery-addPhone-button"]',
            submitButton: '[data-test-id="submit-button"]',
            userEmailHeader: '#PH_user-email',
            changeCountry: '[data-test-id="country-select"]',
            kazah: '[data-test-id="select-value:kz"]',
            cancel: '[data-test-id="recovery-addPhone-cancel"]',
        }
    }

    next() {
        this.page.waitForVisible(this.locators.addPhoneButton);
        this.page.click(this.locators.addPhoneButton);
    }

    changeCountry() {
        this.page.waitForVisible(this.locators.changeCountry);
        this.page.click(this.locators.changeCountry);
        this.page.click(this.locators.kazah);
    }

    cancel() {
        this.page.waitForVisible(this.locators.cancel);
        this.page.click(this.locators.cancel);
    }

}

export default new PhonePage();