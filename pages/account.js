import DefaultPage from './default';

class AccountPage extends DefaultPage {
	constructor() {
		super('account', '[class=modal]')
	}

	get locators() {
		return {
			login: 'input[name="email"]',
			password: 'input[name="password"]',
			password1: 'input[name="password1"]',
			password2: 'input[name="password2"]',
			submitButton: 'input[type="submit"]',
			signInButton: '[class=signin-link]',
			userEmailHeader: '#PH_user-email',
			passwordError: 'p[class="field__error"]',
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

	fillFirstPasswordForm (password) {
		this.page.waitForVisible(this.locators.password1);
		this.page.click(this.locators.password1);
		this.page.setValue(this.locators.password1, password);
	}

	fillSecondPasswordForm (password) {
		this.page.waitForVisible(this.locators.password2);
		this.page.click(this.locators.password2);
		this.page.setValue(this.locators.password2, password);
	}

	goToLogin() {
		this.page.click(this.locators.signInButton);
	}

	submit() {
		this.page.waitForVisible(this.locators.submitButton);
		this.page.click(this.locators.submitButton)
	}

	getPasswordErrorMessage() {
		return this.page.getText(this.locators.passwordError);
	}
}

export default new AccountPage();
