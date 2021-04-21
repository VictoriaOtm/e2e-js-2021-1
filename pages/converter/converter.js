import DefaultPage from '../default';
import { strict as assert } from 'assert';

class ConverterPage extends DefaultPage {
    constructor() {
        super('converter', '[data-test-id=login-app-read]')
    }

    get locators() {
        return {
            converter: 'img[alt="calculator"]',
            converterHeader: '[class="converter__control-title"]',
            firstConverterField: 'input[id="leftCurrency"]',
        }
    }

    clickOnConverter() {
        this.page.waitForVisible(this.locators.converter);
        this.page.click(this.locators.converter);
    }

    fillFirstField(val) {
        this.page.waitForVisible(this.locators.firstConverterField);
        this.page.click(this.locators.firstConverterField);
        this.page.setValue(this.locators.firstConverterField, val);
    }

    getFirstFieldValue() {
        this.page.waitForVisible(this.locators.firstConverterField);
        this.page.click(this.locators.firstConverterField);
        this.page.getValue(this.locators.firstConverterField);
    }

    getConverterHeader() {
        return this.page.getText(this.locators.converterHeader);
    }
}

export default new ConverterPage();