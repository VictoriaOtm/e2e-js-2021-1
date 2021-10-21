import DefaultPage from './default';

class AccountPage extends DefaultPage {
	constructor() {
		super('account', '#login__window')
	}

	get locators() {
		return {
			email: 'input[name="email"]',
			password: 'input[name="password"]',
			submitButton: '.custom-form__submit',
			userLoginHeader: '.nickname__text',
			exitButton: '.exit-buttion__text',
			error404: '.page404__title',
			cookieAuth: 'sessionID',
		}
	}

	fillEmailForm (email) {
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

	checkAuthorizedLogin() {
		this.page.waitForVisible(this.locators.userLoginHeader);
		return this.page.getText(this.locators.userLoginHeader);
	}

	clickOnExit() {
		this.page.waitForVisible(this.locators.exitButton);
		this.page.click(this.locators.exitButton);
	}

	checkLogout() {
		return this.page.getCookie(this.locators.cookieAuth);
	}
}

export default new AccountPage();
