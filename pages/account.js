import DefaultPage from './default';

class AccountPage extends DefaultPage {
	constructor() {
		super('account', '#app');
	}

	get locators() {
		return {
			email: 'input[id="emailAuth"]',
			password: 'input[id="passAuth"]',
			submitButton: 'button[id="entBtnAuth"]',
		}
	}

	fillLoginForm (username) {
		this.page.waitForVisible(this.locators.email);
		this.page.click(this.locators.email);
		this.page.setValue(this.locators.email, username);
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
}

export default new AccountPage();
