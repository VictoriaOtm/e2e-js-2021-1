import DefaultPage from './default';

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
		this.page.waitForText(this.locators.food);
		return this.page.getText(this.locators.food)[0];	//	Get text of the first product
	}
}

export default new StorePage();
