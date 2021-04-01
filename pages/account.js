import DefaultPage from './default';
import { strict as assert } from 'assert';

class AccountPage extends DefaultPage {
	constructor() {
		super('account', '[data-test-id=login-app-read]')
	}

	get locators() {
		return {
			login: 'input[name="email"]',
			password: 'input[name="password"]',
			nextButton: 'button[name="submit"]',
			submitButton: 'button[name="submit"]',
			userEmailHeader: 'a#recivedUn',
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

	next() {
		this.page.waitForVisible(this.locators.nextButton);
		this.page.click(this.locators.nextButton)
	}

	submit() {
		this.page.waitForVisible(this.locators.submitButton);
		this.page.click(this.locators.submitButton)
	}

	checkAuthorizedEmail(email) {
		this.page.waitForVisible(this.locators.userEmailHeader);
		const checkAuth = this.page.getText(this.locators.userEmailHeader);
		assert.strictEqual(
			checkAuth,
			'Входящие',
			`Авторизация с email: ${email}@mailer.ru.com не произошла`,
		)
	}
}

export default new AccountPage();
