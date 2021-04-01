import DefaultPage from './default';
import { strict as assert } from 'assert';

class AccountPage extends DefaultPage {
	constructor() {
		super('account', 'div[class="page"]')
	}

	get locators() {
		return {
			login: 'input[name="login"]',
			password: 'input[name="password"]',
			submitButton: 'input[class="form-login__submit button-primary"]',
			settingsLink: 'a[href="/settings/"]',
			emailField: 'input[name="email"]'
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

	submitForm() {
		this.page.waitForVisible(this.locators.submitButton);
		this.page.click(this.locators.submitButton)
	}

	checkAuthorizedEmail(email) {
		this.page.waitForValue(this.locators.emailField);
		let settingsEmail = this.page.getValue(this.locators.emailField);
			assert.strictEqual(
			settingsEmail,
			email,
			`Email авторизованного юзера ${settingsEmail} не соответствует ожидаемому ${email}`,
		)
	}
}

export default new AccountPage();
