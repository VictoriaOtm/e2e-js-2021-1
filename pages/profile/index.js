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

	checkData () {
		this.page.waitForVisible(this.locators.userEmailHeader);
		return this.page.getText(this.locators.userEmailHeader);
	}
}

export default new ProfilePage();
