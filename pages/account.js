import DefaultPage from './default';
import { strict as assert } from 'assert';

class AccountPage extends DefaultPage {
	constructor() {
		super('account', '[href="/search"]')
	}

	get locators() {
		return {
			login: 'input[name="login"]',
			password: 'input[name="password"]',
			authButton: '[class="name__button--2Ten8 name__buttons__marginForFilmCard--29k8-"]',
			icon: '[class="name__round--21Oxj"]',
			div: 'div#okno',
			profileButton: 'div#okno button',
			loginText: '[class="name__profile__default_margin--_Vkp5 name__profile_login--2W71f"]',
			button: 'button',

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
		this.page.waitForVisible(this.locators.authButton);
		this.page.click(this.locators.authButton);
	}

	checkAuthorized(login) {
		this.page.waitForVisible(this.locators.icon);
		this.page.click(this.locators.icon);
		this.page.waitForVisible(this.locators.div);
		this.page.click(this.locators.profileButton);
		this.page.waitForVisible(this.locators.loginText);
		const text = this.page.getText(this.locators.loginText);
		 assert.strictEqual(
		 	login,
		 	text,
		 	`Email авторизованного юзера ${text} не соответствует ожидаемому ${login}`,
		 )
	}

	logout() {
		this.page.waitForVisible(this.locators.button);
		this.page.click(this.locators.button);
		this.page.waitForVisible(this.locators.button);
	}
}

export default new AccountPage();
