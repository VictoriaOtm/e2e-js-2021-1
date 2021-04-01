import DefaultPage from './default';
import { strict as assert } from 'assert';

class DeskCreatePage extends DefaultPage {
    constructor() {
        super('desk creating', '#app')
    }

    get locators() {
        return {
            deskTitle: '#title',
            deskDescription: '#description',
            submitButton: '#submit',
            error: '#title ~ .error',
            form: '#Board-creating',
        }
    }

    fillTitleForm (title) {
        this.page.waitForVisible(this.locators.deskTitle);
        this.page.click(this.locators.deskTitle);
        this.page.setValue(this.locators.deskTitle, title);
    }

    fillDescriptionForm (description) {
        this.page.waitForVisible(this.locators.deskDescription);
        this.page.click(this.locators.deskDescription);
        this.page.setValue(this.locators.deskDescription, description);
    }

    submit() {
        this.page.waitForVisible(this.locators.submitButton);
        this.page.click(this.locators.submitButton)
    }

    checkEmptyTitleError() {
        this.page.waitForVisible(this.locators.form);
        this.page.waitForVisible(this.locators.error);
        const isError = $(this.locators.error).getAttribute('class').split(' ').includes('error_show');

        assert.strictEqual(
            isError,
            true,
            `Ожидалась ошибка (error_show=${true}), получено: ${isError}`,
        )
    }

}

export default new DeskCreatePage();
