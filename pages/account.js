import DefaultPage from './default';
import { strict as assert } from 'assert';

class AccountPage extends DefaultPage {
	constructor() {
		super('account', '#app')
	}

	get locators() {
		return {
			email: 'input[name="email"]',
			password: 'input[name="password"]',
			submitButton: 'button[id="entBtnAuth"]',
		}
	}

	fillLoginForm (email) {
		this.page.waitForVisible(this.locators.email);
		this.page.click(this.locators.email);
		this.page.setValue(this.locators.email, email);
	}

	fillPasswordForm (password) {
		this.page.waitForVisible(this.locators.password);
		this.page.click(this.locators.password);
		this.page.setValue(this.locators.password, password);
	}


	submit() {
		this.page.waitForVisible(this.locators.submitButton);
		this.page.click(this.locators.submitButton)
	}

	


}

export default new AccountPage();
