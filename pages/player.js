import DefaultPage from './default';
import {strict as assert} from 'assert';

class AccountPage extends DefaultPage {
    constructor() {
        super('account', 'a[href="/browse"]')
    }

    get locators() {
        return {
            playBtn: 'div[class="preview__play"]',
            backBtn: 'button[class="watch__back-btn"]',
            browseHref: 'a[href="/browse"]',
        }
    }

    openPlayer() {
        this.page.waitForVisible(this.locators.playBtn);
        this.page.click(this.locators.playBtn);
    }

    closePlayer() {
        this.page.waitForVisible(this.locators.backBtn);
        this.page.click(this.locators.backBtn);
    }

    findHeader() {
        this.page.waitForVisible(this.locators.browseHref);
        const label = this.page.getText(this.locators.browseHref)[1];

        const labels = this.page.getText(this.locators.browseHref);
        const result = Array.from(labels).indexOf("Главная") > -1;

        console.log('', result);
        assert.strictEqual(
            result,
            true,
            `Player not close`,
        );
    }
}

export default new AccountPage();
