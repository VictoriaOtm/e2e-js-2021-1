import DefaultPage from './default';
import { strict as assert } from 'assert';

class AccountPage extends DefaultPage {
    constructor() {
        super('account', 'div[class="page"]')
    }

    get incorrectQueryText() {
        return 'По вашему запросу ничего не найдено.'
    }

    get locators() {
        return {
            queryInput: 'input[class="header__search-input"]',
            searchPageText: 'div[class="search-page-placeholder__title"]'
        }
    }

    fillSearchInput(query) {
        this.page.waitForVisible(this.locators.queryInput);
        this.page.setValue(this.locators.queryInput, query);
    }

    checkQueryIncorrect() {
        this.page.waitForText(this.locators.searchPageText);
        this.page.waitUntil(() => this.page.getText(this.locators.searchPageText) === this.incorrectQueryText,
            {
                timeout: 3000,
                timeoutMsg: 'Текст не меняется спустя 3 секунд.'
            })
        let messageText = this.page.getText(this.locators.searchPageText);
        assert.strictEqual(
            messageText,
            this.incorrectQueryText,
            `Сообщение "${messageText}" не соответствует ожидаемому "${this.incorrectQueryText}"`,
        )
    }
}

export default new AccountPage();
