import DefaultPage from './default';

class AccountPage extends DefaultPage {
	constructor() {
		super('account', '.login-block')
	}

	get locators() {
		return {
			login: '#mail',
			password: '#password',
			submitButton: '#login__form-submit',
			avatar: 'img.avatar',
		}
	}

	fillLoginForm (username, password) {
		this.page.waitForVisible(this.locators.login);
		this.page.click(this.locators.login);
		this.page.setValue(this.locators.login, username);
		this.page.click(this.locators.password);
		this.page.setValue(this.locators.password, password);
		this.page.click(this.locators.submitButton);
	}

	checkAuthorized() {
		this.page.waitForVisible(this.locators.avatar);
	}
}

export default new AccountPage();
