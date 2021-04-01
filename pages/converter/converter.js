import DefaultPage from '../default';
import { strict as assert } from 'assert';

class ConverterPage extends DefaultPage {
    constructor() {
        super('converter', '[data-test-id=login-app-read]')
    }

    get locators() {
        return {
            converter: '[class="converter_closed"]',
            converterHeader: '[class="converter__control-title"]',
        }
    }

    clickOnConverter() {
        this.page.waitForVisible(this.locators.converter);
        this.page.click(this.locators.converter);
    }

    getConverterHeader() {
        return this.page.getText(this.locators.converterHeader);
    }
}

export default new ConverterPage();