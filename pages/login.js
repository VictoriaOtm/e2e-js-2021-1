import DefaultPage from './default';

class LoginPage extends DefaultPage {
	constructor() {
		super('account', 'div[class="auth-page login-page"]')
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

	getUsername() {
		this.page.waitForVisible(this.locators.username);
		return this.page.getText(this.locators.username);
	}
}

export default new LoginPage();
