import DefaultPage from './default';
import { strict as assert } from 'assert';

class LoginPage extends DefaultPage {
	constructor() {
		super('account', '[data-test-id=login-app-read]')
	}

	get locators() {
		return {
			login: 'input[name="username"]',
			password: 'input[name="password"]',
			submitButton: 'input[value="Login"]',
			usernameField: 'span[class="profile-info__username"]'
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

	submit() {
		this.page.waitForVisible(this.locators.submitButton);
		this.page.click(this.locators.submitButton)
	}

	checkProfileLoaded(username) {
		this.page.waitForVisible(this.locators.usernameField);
		const actualUsername = this.page.getText(this.locators.usernameField);
		assert.strictEqual(
			username,
			actualUsername,
			`Username авторизованного юзера ${actualUsername} не соответствует ожидаемому ${username}`,
		)
	}
}

export default new LoginPage();
