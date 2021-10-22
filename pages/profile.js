import DefaultPage from './default';

class ProfilePage extends DefaultPage {
	constructor() {
		super('account', 'div[class="profile-header-wrapper"]')
	}

	get locators() {
		return {
			username:             'span[class="profile-info__username"]',
			realName:             'span[class="profile-info__user-real-name"]',
			avatar:               'img[class="profile-info__avatar"]',
			settingsButton:       'a[class="profile-info__settings"]',
			settingsPage:         'div[class="settings"]',
			navbarActionsButton:  'button[class="navbar__action"][name="dropdown-toggle"]',
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

	getUsername() {
		this.page.waitForVisible(this.locators.username);
		return this.page.getText(this.locators.username);
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
