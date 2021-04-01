import DefaultPage from './default';
import { strict as assert } from 'assert';

class AccountPage extends DefaultPage {
	constructor() {
		super('account', '[class=modal]')
	}

	get locators() {
		return {
			login: 'input[name="email"]',
			password: 'input[name="password"]',
			submitButton: 'input[type="submit"]',
			signInButton: '[class=signin-link]',
			userEmailHeader: '#PH_user-email',
		}
	}

	fillLoginForm (username) {
		this.page.waitForVisible(this.locators.login);
		this.page.click(this.locators.login);
		this.page.setValue(this.locators.login, username);
	}

	fillPasswordForm (password) {
		this.page.waitForVisible(this.locators.password);
		this.page.click(this.locators.password);
		this.page.setValue(this.locators.password, password);
	}

	goToLogin() {
		this.page.click(this.locators.signInButton);
	}

	submit() {
		this.page.waitForVisible(this.locators.submitButton);
		this.page.click(this.locators.submitButton)
	}
}

export default new AccountPage();
