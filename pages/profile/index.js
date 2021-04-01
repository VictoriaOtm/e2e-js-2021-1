import DefaultPage from '../default';
import {strict as assert} from "assert";

class ProfilePage extends DefaultPage {
	constructor() {
		super('profile', '.dataset-profile')
	}

	get locators () {
		return {
			menuButton: 'div.header-mobile__logo-wrapper',
			profileLink: '#profileLink',
			profileName: 'h2.profile__name',
			skills: 'span.profile__skills',
			editSkillsButton: 'img.profile__skills-editicon',
			inputField: 'textarea.block',
			updateButton: 'img[src="assets/check-mark.svg"]',
			updateConfirm: 'p.mtoasts__text',
			closeButton: 'span.close',
		}
	}

	clickMenu() {
		this.page.waitForVisible(this.locators.menuButton);
		this.page.click(this.locators.menuButton);
	}

	clickProfile() {
		this.page.waitForVisible(this.locators.profileLink);
		this.page.click(this.locators.profileLink);
	}

	clickEditSkills() {
		this.page.waitForVisible(this.locators.editSkillsButton);
		this.page.click(this.locators.editSkillsButton);
	}

	fillSkillsField(text) {
		this.page.waitForVisible(this.locators.inputField);
		this.page.click(this.locators.inputField);
		this.page.setValue(this.locators.inputField, text);
	}

	clickUpdateSkills() {
		this.page.waitForVisible(this.locators.updateButton);
		this.page.click(this.locators.updateButton);
	}

	waitForUpdateConfirmation() {
		this.page.waitForVisible(this.locators.updateConfirm);
		this.page.click(this.locators.closeButton);
	}

	checkSkillsField(text) {
		this.page.waitForVisible(this.locators.skills);
		const skillsText = this.page.getText(this.locators.skills);
		assert.strictEqual(
			skillsText,
			text,
			`Текст поля "Навыки" ${skillsText} не соответствует ожидаемому ${text}`,
		)
	}

	checkProfileName(username) {
		this.page.waitForVisible(this.locators.profileName);
		const profileName = this.page.getText(this.locators.profileName).toLowerCase();
		assert.strictEqual(
			profileName,
			username,
			`Имя авторизованного юзера ${profileName} не соответствует ожидаемому ${username}`,
		)
	}
}

export default new ProfilePage();
