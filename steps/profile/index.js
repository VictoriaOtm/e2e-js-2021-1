import DefaultSteps from '../default';
import page from '../../pages/profile';

class ProfileSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	openProfile() {
		this.page.clickMenu();
		this.page.clickProfile();
	}

	getUsername() {
		return this.page.getUsername();
	}

	editSkills(testSkill) {
		this.page.clickEditSkills();
		this.page.fillSkillsField(testSkill);
		this.page.clickUpdateSkills();
		this.page.waitForUpdateConfirmation();
	}

	getSkills() {
		return this.page.getSkillsField()
	}

	wipeSkills() {
		this.page.clickEditSkills();
		this.page.fillSkillsField("");
		this.page.clickUpdateSkills();
		this.page.waitForUpdateConfirmation();
	}
}

export default new ProfileSteps();
