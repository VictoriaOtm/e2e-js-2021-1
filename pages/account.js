import DefaultPage from './default';

class AccountPage extends DefaultPage {
	constructor() {
		super('account', '[data-test-id=login-app-read]')
	}

	get locators() {
		return {
			menuButton: 'div.header-mobile__logo-wrapper',
			login: 'input[name="login"]',
			password: 'input[name="password"]',
			submitButton: 'button.stdBtn.activable',
			authModal : '#authModal',
			profileName: 'h2.profile__name',
		}
	}

	openLoginForm() {
		this.page.waitForVisible(this.locators.menuButton);
		this.page.click(this.locators.menuButton);
	}

	fillLoginForm (username, password) {
		this.page.waitForVisible(this.locators.login);
		this.page.click(this.locators.login);
		this.page.setValue(this.locators.login, username);
		this.page.waitForVisible(this.locators.password);
		this.page.click(this.locators.password);
		this.page.setValue(this.locators.password, password);
	}

	submit() {
		this.page.waitForVisible(this.locators.submitButton);
		this.page.click(this.locators.submitButton);
		this.page.waitForVisible(this.locators.authModal, null, true);
	}

}

export default new AccountPage();
