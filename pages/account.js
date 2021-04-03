import DefaultPage from './default';

class AccountPage extends DefaultPage {
	constructor() {
		super('account', '#app')
	}

	get locators() {
		return {
			login: '#username',
			password: '#password',
			submitButton: '#submit',

			profileLink: '#menu > :nth-child(2) > .menu-link',
			menu: '#menu',
			logoutLink: '#logout',
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

	logout() {
		this.page.waitForVisible(this.locators.logoutLink);
		this.page.click(this.locators.logoutLink);
	}

	getAuthorized(rootURL) {
		this.page.waitForVisible(this.locators.menu);
		this.page.waitForVisible(this.locators.logoutLink);
		return this.page.getAttribute(this.locators.profileLink, 'href').replace(rootURL, '').replace('/@', '');
	}
}

export default new AccountPage();
