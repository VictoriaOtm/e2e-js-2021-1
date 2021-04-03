import DefaultPage from '../default';
import {strict as assert} from "assert";

class ProfilePage extends DefaultPage {
	constructor() {
		super('profile', 'div[id="main"]')
	}

	get locators () {
		return {
			hrefToProfile: '.js-profile',
			userEmailHeader: 'div[id="email"]',
		}
	}

	clickProfile () {
		this.page.waitForVisible(this.locators.hrefToProfile);
		this.page.click(this.locators.hrefToProfile);
	}

	checkData (email) {
		this.page.waitForVisible(this.locators.userEmailHeader);
		const headerEmail = this.page.getText(this.locators.userEmailHeader);
		assert.strictEqual(
			headerEmail,
			email,
			`Email авторизованного юзера ${headerEmail} не соответствует ожидаемому ${email}`,
		)
	}
}

export default new ProfilePage();
