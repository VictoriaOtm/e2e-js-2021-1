import DefaultPage from './default';
import { strict as assert } from 'assert';

class StorePage extends DefaultPage {
	constructor() {
		super('account', '[data-test-id=login-app-read]')
	}

	get locators() {
		return {
            storeName: '[class=store-block]',
            food: '[class="proceed-button js-add-to-cart product-customer__button"]',
		}
	}

	openStore () {
		this.page.waitForVisible(this.locators.storeName);
		this.page.click(this.locators.storeName);
	}

	addFood () {
		this.page.waitForVisible(this.locators.food);
		this.page.click(this.locators.food);
	}

	checkProductAddedToCart() {
		this.page.waitForVisible(this.locators.food);
		const foodSign = this.page.getText(this.locators.food);
        const added = "Добавлено!";
		assert.strictEqual(
			foodSign,
			added,
			'Продукт успешно добавлен в корзину!',
		)
	}
}

export default new StorePage();
