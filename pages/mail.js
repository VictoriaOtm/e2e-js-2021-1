import DefaultPage from "./default";
import {strict as assert} from "assert";

const testEmail = 'sheb70017@gmail.com';

class MailPage extends DefaultPage {
    constructor() {
        super('phone', '[data-test-id=mailId-contacts-wrapper]');
    }

    get locators() {
        return {
            login: 'input[name="username"]',
            password: 'input[name="password"]',
            nextButton: '[data-test-id="next-button"]',
            addPhoneButton: '[data-test-id="recovery-addPhone-button"]',
            addEmailButton: '[data-test-id="recovery-addEmail-button"]',
            inputEmail: '[data-test-id="recovery-addEmail-emailField-input"]',
            submitButton: '[data-test-id="submit-button"]',
            userEmailHeader: '#PH_user-email',
            cancel: '[data-test-id="recovery-addPhone-cancel"]',
            successAdd: '[data-test-id="recovery-success-addscc-header"]',
            submitEmail: '[data-test-id="recovery-addEmail-submit"]',
            checkEmail: '[data-test-id="recovery-email-wrapper"]',
            deleteButton: '[data-test-id="recovery-delete-email-button"]',
            submitDeleteButton: '[data-test-id="recovery-deleteEmail-submit"]',
            closeDeleteButton: '[data-test-id="recovery-success-close"]',
        }
    }

    next() {
        this.page.waitForVisible(this.locators.addEmailButton);
        this.page.click(this.locators.addEmailButton);
    }

    inputEmail() {
        this.page.waitForVisible(this.locators.inputEmail);
        this.page.click(this.locators.inputEmail);
        this.page.setValue(this.locators.inputEmail, testEmail);
    }

    submit() {
        this.page.waitForVisible(this.locators.submitEmail);
        this.page.click(this.locators.submitEmail);
    }

    checkNewEmail() {
        this.page.waitForVisible(this.locators.checkEmail);
        return this.page.getText(this.locators.checkEmail);
    }

    deleteEmail() {
        this.page.waitForVisible(this.locators.deleteButton);
        this.page.click(this.locators.deleteButton);
    }

    submitDeleting() {
        this.page.waitForVisible(this.locators.submitDeleteButton);
        this.page.click(this.locators.submitDeleteButton);
    }

    closeAdding() {
        this.page.waitForVisible(this.locators.closeDeleteButton);
        this.page.click(this.locators.closeDeleteButton);
    }

    closeDeleting() {
        this.page.waitForVisible(this.locators.closeDeleteButton);
        this.page.click(this.locators.closeDeleteButton);
    }

    checkDeletedEmail() {
        this.page.waitForVisible(this.locators.checkEmail);
        return this.page.getText(this.locators.checkEmail);
    }
}

export default new MailPage();