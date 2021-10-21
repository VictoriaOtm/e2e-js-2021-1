import DefaultPage from './default';

class AuthPage extends DefaultPage {
	constructor() {
		super('auth', 'div[class="auth"]')
	}

	get locators() {
		return {
			login: 'input[name="username"]',
			password: 'input[name="password"]',
			submitButton: 'input[type="submit"]',
			signUpButton: 'linkbutton[href="/signup"]',
			loginError: 'span[id="usernameErrorText"]',
			passwordError: 'span[id="passwordErrorText"]'
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
		this.page.click(this.locators.submitButton)
	}

	clickSignUp() {
		this.page.waitForVisible(this.locators.signUpButton);
		this.page.click(this.locators.signUpButton);
	}

	getLoginError() {
		this.page.waitForVisible(this.locators.loginError);
		return this.page.getHTML(this.locators.loginError, false);
	}

	getPasswordError() {
		this.page.waitForVisible(this.locators.passwordError);
		return this.page.getHTML(this.locators.passwordError, false);
	}
}

export default new AuthPage();
