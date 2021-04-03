import DefaultPage from './default';
import { strict as assert } from 'assert';

class AccountPage extends DefaultPage {
	constructor() {
		super('account', '[data-test-id=login-app-read]')
	}

	get locators() {
		return {
			arrow: 'img[class="header__arrow"]',
			login_form: 'a[data-modalstatus="signin"]',
			login: 'input[name="email"]',
			password: 'input[name="password"]',
			submitButton: 'button[data-formtype="signin"]',
			logout_form: 'a[data-event="logoutUser"]',
			userEmailHeader: '#PH_user-email',
			browseHref: 'a[href="/browse"]',
			serialsHref: 'a[href="/serials"]',
			myListHref: 'a[href="/mylist"]',
			avatar: 'img[class="header__avatar"]',
			closePopup: 'img[class="btn-close__img"]',
			labelProfile: 'a[class="mini-modal__btn"]',
		}
	}

	moveToLoginForm () {
		this.page.waitForVisible(this.locators.arrow);
		this.page.click(this.locators.arrow);
		this.page.waitForVisible(this.locators.login_form);
		this.page.click(this.locators.login_form);
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

	checkAuthorized() {
		this.page.click(this.locators.closePopup);

		this.page.waitForVisible(this.locators.browseHref);
		this.page.click(this.locators.browseHref);

		this.page.waitForVisible(this.locators.arrow);
		this.page.click(this.locators.arrow);

		const labels = this.page.getText(this.locators.labelProfile);

		// browser.waitUntil(
		// 	() => labels[0] === 'Профиль',
		// 	{
		// 		timeout: 5000,
		// 		timeoutMsg: 'expected text to be different after 5s'
		// 	}
		// );

		const result = Array.from(labels).indexOf("Профиль") > -1;

		assert.strictEqual(
			result,
			true,
			`User not authorised`,
		);
	}
}

export default new AccountPage();
