import DefaultPage from './default';
import { strict as assert } from 'assert';

class ProfilePage extends DefaultPage {
	constructor() {
		super('account', '[class="profile-header-wrapper"]')
	}

	get locators() {
		return {
			username:             'span[class="profile-info__username"]',
            realName:             'span[class="profile-info__user-real-name"]',
            avatar:               'img[class="profile-info__avatar"]',
			settingsButton:       'a[class="profile-info__settings"]',
			settingsPage:         'div[class="settings"]',
			navbarActionsButton:  'button[class="navbar__action"]',
			logoutButton:         'button[class="navbar__dropdown-action"][name="logout"]',
			mainFeedPage:         'div[class="virtualizedlist-wrapper"]'  // only way to do this currently afaik
		}
	}

	logout() {
		this.page.waitForVisible(this.locators.navbarActionsButton);
		this.page.click(this.locators.navbarActionsButton);
		this.page.waitForVisible(this.locators.logoutButton);
		this.page.click(this.locators.logoutButton);
	}

	checkUsernameLoaded(username) {
		this.page.waitForVisible(this.locators.username);
		const actualUsername = this.page.getText(this.locators.username);
		assert.strictEqual(
			username,
			actualUsername,
			`Username юзера ${actualUsername} не соответствует ожидаемому ${username}`,
		)
	}

	goToSettings() {
		this.page.waitForVisible(this.locators.settingsButton);
		this.page.click(this.locators.settingsButton);
	}

	checkSettingsLoaded() {
		this.page.waitForVisible(this.locators.settingsPage);
	}

	checkMainFeedLoaded() {
		this.page.waitForVisible(this.locators.mainFeedPage);
	}
}

export default new ProfilePage();
