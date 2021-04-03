import DefaultPage from './default';

class GNHAccountPage extends DefaultPage {
	constructor() {
		super('account', '[data-test-id=login-app-read]')
	}

	get locators() {
		return {
            login: 'input[placeholder="Логин:"]',
            password: 'input[placeholder="Пароль:"]',
            submitButton: '[class="proceed-button margin-button js-submit-login"]',
            profilePageHeader: '[class="profile-page__title"]',
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

	checkProfilePageOpened() {
		this.page.waitForText(this.locators.profilePageHeader);
		return this.page.getText(this.locators.profilePageHeader);
	}
}

export default new GNHAccountPage();