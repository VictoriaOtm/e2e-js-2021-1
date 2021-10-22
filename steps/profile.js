import { strict as assert } from 'assert';
import DefaultSteps from './default';
import page from '../pages/profile';

class ProfileSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	logout() {
		this.open('https://pinterbest.ru/profile');
		this.waitForProfilePage();
		this.page.logout();
		this.page.checkMainFeedLoaded();
	}

	checkUsername() {
		const actualUsername = this.page.getUsername();
		assert.strictEqual(
			process.env.LOGIN,
			actualUsername,
			`Username юзера ${actualUsername} не соответствует ожидаемому ${process.env.LOGIN}`,
		)
	}

	checkSettingsButton() {
		this.page.goToSettings();
		this.page.checkSettingsLoaded();
	}

	waitForProfilePage() {
		this.page.waitForContainer();
	}
}

export default new ProfileSteps();
