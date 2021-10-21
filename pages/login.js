import DefaultPage from './default';
import { strict as assert } from 'assert';

class LoginPage extends DefaultPage {
	constructor() {
		super('account', '[class="auth-page login-page"]')
	}

	get locators() {
		return {
			login: 'input[name="username"]',
			password: 'input[name="password"]',
			submitButton: 'input[value="Login"]',
			username: 'span[class="profile-info__username"]'
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
		this.page.waitForVisible(this.locators.username);
		const actualUsername = this.page.getText(this.locators.username);
		assert.strictEqual(
			username,
			actualUsername,
			`Username авторизованного юзера ${actualUsername} не соответствует ожидаемому ${username}`,
		)
	}
}

export default new LoginPage();
