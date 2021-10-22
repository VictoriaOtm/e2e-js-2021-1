import DefaultPage from './default';

class AccountPage extends DefaultPage {
	constructor() {
		super('account', '[data-test-id=login-app-read]')
	}

	get locators() {
		return {
			login: 'input[id="auth-tel"]',
			password: 'input[id="auth-password"]',
			submitButton: '.auth-content-form__button',
			title: '.auth-content-inner__title'
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

	popUpExist() {
		this.page.waitForVisible(this.locators.title);
		return this.page.getText(this.locators.title);
	}

	submit() {
		this.page.click(this.locators.submitButton)
	}
}

export default new AccountPage();
