import DefaultPage from './default';
import { strict as assert } from 'assert';

class AccountPage extends DefaultPage {
	constructor() {
		super('account', '[data-test-id=login-app-read]')
	}

	get locators() {
		return {
			profileButton: 'div.header-mobile__logo-wrapper',
			login: 'input[name="login"]',
			password: 'input[name="password"]',
			submitButton: 'button.stdBtn.activable',
			profileLink: '#profileLink',
			authModal : '#authModal',
			profileName: 'h2.profile__name',
		}
	}

	fillLoginAndPasswordForm (username, password) {
		this.page.waitForVisible(this.locators.profileButton);
		this.page.click(this.locators.profileButton);
		this.page.waitForVisible(this.locators.login);
		this.page.click(this.locators.login);
		this.page.setValue(this.locators.login, username);
		this.page.waitForVisible(this.locators.password);
		this.page.click(this.locators.password);
		this.page.setValue(this.locators.password, password);
	}

	checkAuthorizedProfile(username) {
		this.page.waitForVisible(this.locators.profileButton);
		this.page.click(this.locators.profileButton);
		this.page.waitForVisible(this.locators.profileLink);
		this.page.click(this.locators.profileLink);
		this.page.waitForVisible(this.locators.profileName);
		const profileName = this.page.getText(this.locators.profileName).toLowerCase();
		assert.strictEqual(
			profileName,
			username,
			`Имя авторизованного юзера ${profileName} не соответствует ожидаемому ${username}`,
		)
	}

	submit() {
		this.page.waitForVisible(this.locators.submitButton);
		this.page.click(this.locators.submitButton);
		this.page.waitForVisible(this.locators.authModal, 10000, true);
	}

}

export default new AccountPage();
